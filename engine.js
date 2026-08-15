(function(){
'use strict';
function clone(v){return JSON.parse(JSON.stringify(v));}
class ExodusEngine{
 constructor(content){this.content=content;this.state=null;this.uid=0;}
 hashSeed(text){var h=2166136261>>>0,s=String(text||'EREBUS');for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0||1;}
 random(){var x=this.state.rng>>>0;x=(Math.imul(1664525,x)+1013904223)>>>0;this.state.rng=x;return x/4294967296;}
 d20(){return Math.floor(this.random()*20)+1;}
 clamp(v,min,max){return Math.max(min,Math.min(max,v));}
 newGame(profile){
  var seed=(profile&&profile.seed)||('EREBUS-'+Date.now());
  var commander=this.buildCommander(profile||{});
  this.uid=0;
  this.state={version:this.content.version,seed:seed,rng:this.hashSeed(seed),day:1,commander:commander,
   ship:{hull:18,maxHull:18,shield:10,maxShield:10,fuel:8,maxFuel:8,credits:90,data:0,reputation:0,destiny:2},
   crew:clone(this.content.crew),locationId:'orbital_ring',visitedLocations:['orbital_ring'],currentEvent:null,lastEventIds:[],combat:null,
   deck:[],hand:[],discard:[],selectedCardUid:null,lastRoll:null,lastTotal:null,log:[],modules:[],lastManualDrawDay:0,
   campaign:{stage:0,complete:false},flags:{firstCombatDamageReduced:false,cardReward4:false,cardReward8:false,cardReward12:false}}
  ;
  var source=this.content.cards.slice(0,this.content.features.cardCount);
  for(var k=0;k<2;k++)for(var i=0;i<source.length;i++)this.state.deck.push(this.instantiateCard(source[i]));
  this.state.deck=this.shuffle(this.state.deck);this.draw(4);this.addLog('Expedition lancee. Seed <strong>'+this.escape(seed)+'</strong>.');this.refreshProgress();return this.snapshot();
 }
 buildCommander(profile){
  var origin=this.content.origins[profile.origin]||this.content.origins.terre;
  var role=this.content.roles[profile.role]||this.content.roles.explorateur;
  var trait=this.content.traits[profile.trait]||this.content.traits.curieux;
  var c={name:profile.name||'Nael Orsini',origin:origin,role:role,trait:trait,stats:{physique:2,reflexes:2,intelligence:2,technique:2,presence:2,volonte:2},skills:{pilotage:1,combat:1,science:1,diplomacy:1,engineering:1,survival:1}};
  this.applyBonus(c.stats,origin.stats);this.applyBonus(c.skills,origin.skills);this.applyBonus(c.stats,role.stats);this.applyBonus(c.skills,role.skills);return c;
 }
 applyBonus(target,bonus){Object.keys(bonus||{}).forEach(function(k){target[k]=(target[k]||0)+bonus[k];});}
 escape(text){return String(text).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
 instantiateCard(card){this.uid+=1;return Object.assign({},card,{uid:'card_'+this.uid});}
 shuffle(items){var arr=items.slice();for(var i=arr.length-1;i>0;i--){var j=Math.floor(this.random()*(i+1)),t=arr[i];arr[i]=arr[j];arr[j]=t;}return arr;}
 snapshot(){return this.state;}
 exportState(){return clone(this.state);}
 importState(saved){if(!saved||!saved.commander||!saved.ship)return false;this.state=clone(saved);this.uid=this.state.deck.length+this.state.hand.length+this.state.discard.length+100;return true;}
 addLog(html){this.state.log.unshift(html);this.state.log=this.state.log.slice(0,80);}
 updateResource(key,delta){var s=this.state.ship;s[key]+=delta;if(key==='hull')s.hull=this.clamp(s.hull,0,s.maxHull);if(key==='shield')s.shield=this.clamp(s.shield,0,s.maxShield);if(key==='fuel')s.fuel=this.clamp(s.fuel,0,s.maxFuel);if(['credits','data','reputation'].indexOf(key)>=0)s[key]=Math.max(0,s[key]);}
 creditReward(base){return this.state.commander.trait.passive==='more_credits'?Math.round(base*1.1):base;}
 repairCost(){return this.state.commander.trait.passive==='cheap_repairs'?15:20;}
 selectCard(uid){this.state.selectedCardUid=this.state.selectedCardUid===uid?null:uid;}
 selectedCard(){for(var i=0;i<this.state.hand.length;i++)if(this.state.hand[i].uid===this.state.selectedCardUid)return this.state.hand[i];return null;}
 consumeSelectedCard(){var uid=this.state.selectedCardUid;if(!uid)return null;for(var i=0;i<this.state.hand.length;i++){if(this.state.hand[i].uid===uid){var c=this.state.hand.splice(i,1)[0];this.state.discard.push(c);this.state.selectedCardUid=null;return c;}}return null;}
 cardApplies(card,skill){return !!card&&(card.tags.indexOf('any')>=0||card.tags.indexOf(skill)>=0);}
 draw(count){for(var i=0;i<(count||1);i++){if(this.state.hand.length>=5)break;if(!this.state.deck.length&&this.state.discard.length){this.state.deck=this.shuffle(this.state.discard);this.state.discard=[];}var c=this.state.deck.pop();if(!c)break;this.state.hand.push(c);}}
 manualDraw(){if(this.state.combat)return{ok:false,message:'Combat en cours.'};if(this.state.lastManualDrawDay===this.state.day)return{ok:false,message:'Une seule pioche libre par jour.'};if(this.state.hand.length>=5)return{ok:false,message:'La main est pleine.'};this.state.lastManualDrawDay=this.state.day;this.draw(1);return{ok:true};}
 activeEvents(locationId){var pool=this.content.events[locationId]||[],max=this.content.features.maxEvents;return pool.filter(function(e){return e.tier<=this.content.features.level;},this).slice(0,max);}
 pickEvent(locationId){
  if(this.content.features.campaign&&locationId==='echo_anomaly'&&this.state.campaign.stage>=2&&!this.state.campaign.complete&&this.state.ship.data>=12){return clone(this.content.specialEvents.firstContact);}
  var pool=this.activeEvents(locationId);if(!pool.length)return null;var recent=this.state.lastEventIds.slice(0,2);var candidates=pool.filter(function(e){return recent.indexOf(e.id)<0;});if(!candidates.length)candidates=pool;var e=clone(candidates[Math.floor(this.random()*candidates.length)]);this.state.lastEventIds.unshift(e.id);this.state.lastEventIds=this.state.lastEventIds.slice(0,4);return e;
 }
 travel(locationId){if(this.state.combat)return{ok:false,message:'Impossible pendant un combat.'};if(this.state.ship.fuel<1)return{ok:false,message:'Carburant insuffisant.'};var loc=this.content.locations.find(function(x){return x.id===locationId;});if(!loc)return{ok:false,message:'Destination inconnue.'};this.updateResource('fuel',-1);this.state.day+=1;this.state.locationId=locationId;if(this.state.visitedLocations.indexOf(locationId)<0)this.state.visitedLocations.push(locationId);this.state.currentEvent=this.pickEvent(locationId);this.addLog('Voyage vers <strong>'+loc.label+'</strong>.');this.refreshProgress();return{ok:true,event:this.state.currentEvent,location:loc};}
 exploreCurrent(){if(this.state.combat)return{ok:false,message:'Combat en cours.'};this.state.day+=1;this.state.currentEvent=this.pickEvent(this.state.locationId);var loc=this.content.locations.find(function(x){return x.id===this.state.locationId;},this);this.refreshProgress();return{ok:true,event:this.state.currentEvent,location:loc};}
 crewAssist(skill){if(!this.content.features.crew)return null;var best=null;for(var i=0;i<this.state.crew.length;i++){var m=this.state.crew[i];if(m.specialtySkill===skill&&m.hp>0&&m.stress<85){if(!best||m.loyalty>best.loyalty)best=m;}}return best;}
 moduleBonus(skill){if(!this.content.features.modules)return 0;if(skill==='science'&&this.state.modules.indexOf('lab_array')>=0)return 1;return 0;}
 resolveChoice(index){
  var e=this.state.currentEvent;if(!e||!e.choices[index]||this.state.combat)return{ok:false,message:'Choix indisponible.'};var ch=e.choices[index];var selected=this.selectedCard(),bonus=0,reroll=false,shieldCard=false,usedCard=null;
  if(this.cardApplies(selected,ch.skill)){usedCard=this.consumeSelectedCard();if(usedCard.type==='bonus')bonus=usedCard.value;if(usedCard.type==='reroll')reroll=true;if(usedCard.type==='shield')shieldCard=true;}
  var assist=this.crewAssist(ch.skill),assistBonus=assist?1:0,moduleBonus=this.moduleBonus(ch.skill);var roll=this.d20();var total=roll+this.state.commander.stats[ch.attr]+this.state.commander.skills[ch.skill]+bonus+assistBonus+moduleBonus;var success=total>=ch.dc,rerolled=false;
  if(!success&&reroll){rerolled=true;roll=this.d20();total=roll+this.state.commander.stats[ch.attr]+this.state.commander.skills[ch.skill]+bonus+assistBonus+moduleBonus;success=total>=ch.dc;}
  this.state.lastRoll=roll;this.state.lastTotal=total;var outcome=clone(success?ch.success:ch.fail);var effects=this.applyOutcome(outcome,{success:success,heroic:!!ch.heroic,shieldCard:shieldCard,skill:ch.skill});
  if(this.content.features.crew&&assist){assist.stress=this.clamp(assist.stress+(success?1:5),0,100);assist.loyalty=this.clamp(assist.loyalty+(success?1:-1),0,100);}
  this.addLog('<span class="'+(success?'good':'bad')+'">'+(success?'Reussite':'Echec')+'</span> : '+outcome.text);this.draw(1);
  if(outcome.combat)this.startCombat(outcome.combat);else this.state.currentEvent=null;this.refreshProgress();return{ok:true,success:success,roll:roll,total:total,dc:ch.dc,outcome:outcome,effects:effects,usedCard:usedCard,rerolled:rerolled,assist:assist,combatStarted:!!outcome.combat};
 }
 applyOutcome(outcome,ctx){var effects=[];
  if(outcome.credits){var credits=outcome.credits>0?this.creditReward(outcome.credits):outcome.credits;this.updateResource('credits',credits);effects.push((credits>0?'+':'')+credits+' credits');}
  if(outcome.data){var data=outcome.data;if(ctx.success&&ctx.skill==='science'&&this.state.commander.trait.passive==='science_data'&&this.random()<0.55)data+=1;this.updateResource('data',data);effects.push('+'+data+' donnees');}
  if(outcome.reputation){var rep=outcome.reputation;if(ctx.success&&ctx.heroic&&this.state.commander.trait.passive==='heroic_rep')rep+=1;this.updateResource('reputation',rep);effects.push((rep>0?'+':'')+rep+' reputation');}
  var hull=outcome.hull||0,shield=outcome.shield||0,fuel=outcome.fuel||0;if(ctx.shieldCard&&(hull<0||shield<0)){var absorb=2,v;if(shield<0){v=Math.min(absorb,Math.abs(shield));shield+=v;absorb-=v;}if(hull<0&&absorb>0){v=Math.min(absorb,Math.abs(hull));hull+=v;}}
  if(hull){this.updateResource('hull',hull);effects.push((hull>0?'+':'')+hull+' coque');}if(shield){this.updateResource('shield',shield);effects.push((shield>0?'+':'')+shield+' boucliers');}if(fuel){this.updateResource('fuel',fuel);effects.push((fuel>0?'+':'')+fuel+' carburant');}
  if(outcome.campaignComplete&&this.content.features.campaign){this.state.campaign.complete=true;this.state.campaign.stage=3;effects.push('PREMIER CONTACT CONFIRME');this.addLog('<strong class="good">Premier Contact confirme.</strong>');}
  return effects;
 }
 startCombat(data){this.state.combat={enemy:data.enemy,hp:data.hp,maxHp:data.hp,attack:data.attack,ap:3,rewardCredits:data.rewardCredits||0,rewardData:data.rewardData||0};this.state.flags.firstCombatDamageReduced=false;this.addLog('Combat contre <strong>'+data.enemy+'</strong>.');}
 combatAction(type){if(!this.state.combat)return{ok:false,message:'Aucun combat.'};if(type==='end')return this.enemyTurn(false);if(type==='defend')return this.combatDefend();var cfg={precise:{cost:1,skill:'combat',attr:'reflexes',dc:12,damage:5},overcharge:{cost:2,skill:'combat',attr:'reflexes',dc:13,damage:8},analyze:{cost:1,skill:'science',attr:'intelligence',dc:11,damage:4}}[type];if(!cfg||this.state.combat.ap<cfg.cost)return{ok:false,message:'Points d action insuffisants.'};
  var selected=this.selectedCard(),bonus=0,reroll=false,shieldCard=false,usedCard=null;if(selected&&(this.cardApplies(selected,cfg.skill)||selected.tags.indexOf('combat')>=0)){usedCard=this.consumeSelectedCard();if(usedCard.type==='bonus')bonus=usedCard.value;if(usedCard.type==='reroll')reroll=true;if(usedCard.type==='shield')shieldCard=true;}
  var assist=this.crewAssist(cfg.skill),assistBonus=assist?1:0,moduleBonus=this.moduleBonus(cfg.skill);this.state.combat.ap-=cfg.cost;var roll=this.d20();var total=roll+this.state.commander.skills[cfg.skill]+this.state.commander.stats[cfg.attr]+bonus+assistBonus+moduleBonus;var success=total>=cfg.dc,rerolled=false;if(!success&&reroll){rerolled=true;roll=this.d20();total=roll+this.state.commander.skills[cfg.skill]+this.state.commander.stats[cfg.attr]+bonus+assistBonus+moduleBonus;success=total>=cfg.dc;}this.state.lastRoll=roll;this.state.lastTotal=total;var damage=0;if(success){damage=cfg.damage+Math.floor(this.random()*3);this.state.combat.hp=Math.max(0,this.state.combat.hp-damage);}this.draw(1);if(this.state.combat.hp<=0){var victory=this.finishCombat();return{ok:true,type:'attack',success:success,damage:damage,usedCard:usedCard,rerolled:rerolled,victory:victory};}var enemy=null;if(this.state.combat.ap<=0)enemy=this.enemyTurn(shieldCard);return{ok:true,type:'attack',success:success,damage:damage,usedCard:usedCard,rerolled:rerolled,enemy:enemy};
 }
 combatDefend(){var c=this.state.combat;if(!c||c.ap<1)return{ok:false,message:'Points d action insuffisants.'};var selected=this.selectedCard(),bonus=0,shieldCard=false,usedCard=null;if(selected&&(selected.tags.indexOf('any')>=0||selected.tags.indexOf('combat')>=0)){usedCard=this.consumeSelectedCard();if(usedCard.type==='bonus')bonus=usedCard.value;if(usedCard.type==='shield')shieldCard=true;}c.ap-=1;var gain=2+bonus;this.updateResource('shield',gain);this.draw(1);var enemy=null;if(c.ap<=0)enemy=this.enemyTurn(shieldCard);return{ok:true,type:'defend',gain:gain,usedCard:usedCard,enemy:enemy};}
 enemyTurn(shieldCard){var c=this.state.combat;if(!c)return{ok:false,message:'Aucun ennemi.'};var roll=this.d20(),total=roll+c.attack,hit=total>=11,damage=0;if(hit){damage=3+Math.floor(this.random()*4);if(this.state.commander.trait.passive==='first_hit_resist'&&!this.state.flags.firstCombatDamageReduced){damage=Math.max(0,damage-1);this.state.flags.firstCombatDamageReduced=true;}if(shieldCard)damage=Math.max(0,damage-2);var remaining=damage;if(this.state.ship.shield>0){var absorbed=Math.min(this.state.ship.shield,remaining);this.updateResource('shield',-absorbed);remaining-=absorbed;}if(remaining>0)this.updateResource('hull',-remaining);if(this.content.features.crew){for(var i=0;i<this.state.crew.length;i++)this.state.crew[i].stress=this.clamp(this.state.crew[i].stress+(this.random()<0.3?2:0),0,100);}}c.ap=3;return{ok:true,type:'enemy',hit:hit,roll:roll,total:total,damage:damage};}
 finishCombat(){var c=this.state.combat,credits=this.creditReward(c.rewardCredits),data=c.rewardData;this.updateResource('credits',credits);this.updateResource('data',data);var enemy=c.enemy;this.state.combat=null;this.state.currentEvent=null;this.refreshProgress();return{enemy:enemy,credits:credits,data:data};}
 repair(){if(this.state.combat)return{ok:false,message:'Impossible pendant un combat.'};if(this.state.ship.hull>=this.state.ship.maxHull)return{ok:false,message:'Coque intacte.'};var cost=this.repairCost();if(this.state.ship.credits<cost)return{ok:false,message:'Credits insuffisants.'};this.updateResource('credits',-cost);this.updateResource('hull',4);return{ok:true,cost:cost,gain:4};}
 refuel(){if(this.state.combat)return{ok:false,message:'Impossible pendant un combat.'};if(this.state.ship.fuel>=this.state.ship.maxFuel)return{ok:false,message:'Reservoirs pleins.'};var cost=20;if(this.state.locationId!=='orbital_ring')cost=30;if(this.state.ship.credits<cost)return{ok:false,message:'Credits insuffisants.'};this.updateResource('credits',-cost);this.updateResource('fuel',3);return{ok:true,cost:cost,gain:3};}
 rest(){if(this.state.combat)return{ok:false,message:'Impossible pendant un combat.'};this.state.day+=1;this.updateResource('shield',1);if(this.content.features.crew){var extra=this.state.modules.indexOf('medbay')>=0?4:0;for(var i=0;i<this.state.crew.length;i++)this.state.crew[i].stress=this.clamp(this.state.crew[i].stress-(7+extra),0,100);}return{ok:true};}
 scan(){if(this.state.combat)return{ok:false,message:'Impossible pendant un combat.'};var roll=this.d20(),total=roll+this.state.commander.stats.intelligence+this.state.commander.skills.science+this.moduleBonus('science');this.state.lastRoll=roll;this.state.lastTotal=total;if(total>=13){this.updateResource('data',1);var credits=this.random()<0.28?10:0;if(credits)this.updateResource('credits',credits);this.refreshProgress();return{ok:true,success:true,roll:roll,total:total,credits:credits};}return{ok:true,success:false,roll:roll,total:total,credits:0};}
 installModule(id){if(!this.content.features.modules)return{ok:false,message:'Modules indisponibles dans cette version.'};if(this.state.modules.indexOf(id)>=0)return{ok:false,message:'Module deja installe.'};var m=this.content.modules.find(function(x){return x.id===id;});if(!m)return{ok:false,message:'Module inconnu.'};if(this.state.ship.credits<m.cost)return{ok:false,message:'Credits insuffisants.'};this.updateResource('credits',-m.cost);this.state.modules.push(id);if(m.effect==='shield_max'){this.state.ship.maxShield+=3;this.state.ship.shield+=3;}if(m.effect==='fuel_max'){this.state.ship.maxFuel+=2;this.state.ship.fuel+=2;}this.addLog('Module installe : <strong>'+m.name+'</strong>.');return{ok:true,module:m};}
 refreshProgress(){
  if(this.content.features.modules){var d=this.state.ship.data,thresholds=[4,8,12];for(var i=0;i<thresholds.length;i++){var t=thresholds[i],flag='cardReward'+t;if(d>=t&&!this.state.flags[flag]){this.state.flags[flag]=true;var source=this.content.cards.slice(0,this.content.features.cardCount),card=this.instantiateCard(source[Math.floor(this.random()*source.length)]);this.state.discard.push(card);this.addLog('Nouvelle carte debloquee : <strong>'+card.name+'</strong>.');}}}
  if(this.content.features.campaign&&!this.state.campaign.complete){if(this.state.campaign.stage===0&&this.state.ship.data>=5)this.state.campaign.stage=1;if(this.state.campaign.stage===1&&this.state.visitedLocations.indexOf('ash_moon')>=0&&this.state.ship.reputation>=3)this.state.campaign.stage=2;}
 }
 campaignText(){if(!this.content.features.campaign)return'';if(this.state.campaign.complete)return'Campagne terminee : Premier Contact confirme.';if(this.state.campaign.stage===0)return'Etape 1/3 : collecter 5 donnees scientifiques.';if(this.state.campaign.stage===1)return'Etape 2/3 : visiter Khepri et atteindre 3 reputation.';return'Etape 3/3 : atteindre 12 donnees puis explorer Echo-7.';}
 isDestroyed(){return this.state.ship.hull<=0;}
}
window.ExodusEngine=ExodusEngine;
})();
