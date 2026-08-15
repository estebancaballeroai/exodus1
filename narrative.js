(function(){
'use strict';
function clone(v){return JSON.parse(JSON.stringify(v));}
class ExodusNarrative{
  constructor(engine,data){this.engine=engine;this.data=data;this.ensureState();}
  clamp(v,min,max){return Math.max(min,Math.min(max,v));}
  state(){return this.engine.snapshot();}
  ensureState(){
    const s=this.state(); if(!s)return null;
    const n=s.narrative=s.narrative||{};
    n.version=this.data.version;
    n.relations=n.relations||{};
    Object.keys(this.data.crewProfiles||{}).forEach(id=>{const p=this.data.crewProfiles[id];n.relations[id]=Object.assign({},p.relations,n.relations[id]||{});});
    n.seenScenes=n.seenScenes||[];n.activeScene=n.activeScene||null;n.arcProgress=n.arcProgress||{};n.secretLevels=n.secretLevels||{};
    Object.keys(this.data.arcs||{}).forEach(id=>{if(n.arcProgress[id]==null)n.arcProgress[id]=0;if(n.secretLevels[id]==null)n.secretLevels[id]=0;});
    n.flags=n.flags||{};n.timeline=n.timeline||[];n.team=n.team||[];n.expedition=n.expedition||null;n.socialRep=n.socialRep||{};n.npcRelations=n.npcRelations||{};n.rumors=n.rumors||[];n.news=n.news||[];n.memorial=n.memorial||[];n.legacy=n.legacy||{explorer:0,diplomat:0,scientist:0,conqueror:0,protector:0};n.tension=n.tension==null?28:n.tension;n.threads=n.threads||{};n.promises=n.promises||{};n.directorQueue=n.directorQueue||[];n.lastPulseDay=n.lastPulseDay||0;n.lastLegacyDay=n.lastLegacyDay||0;n.chronicle=n.chronicle||[];n.bonds=n.bonds||{};
    (this.data.npcs||[]).forEach(x=>{if(n.npcRelations[x.id]==null)n.npcRelations[x.id]=0;if(n.socialRep[x.faction]==null)n.socialRep[x.faction]=0;});
    if(this.data.features.director){Object.keys(this.data.arcs||{}).forEach(id=>{n.threads['arc_'+id]=n.threads['arc_'+id]||{title:this.data.arcs[id].title,status:'active',progress:n.arcProgress[id]||0,lastDay:this.state().day};n.threads['arc_'+id].progress=n.arcProgress[id]||0;});}this.syncCrewCompat(); return n;
  }
  syncCrewCompat(){const s=this.state();if(!s||!s.narrative)return;for(const m of s.crew){const r=s.narrative.relations[m.id];if(r)m.relation=Math.round((r.trust+r.friendship+r.respect-r.resentment)/3);}}
  profile(id){return this.data.crewProfiles[id]||null;}
  relation(id){this.ensureState();return this.state().narrative.relations[id]||null;}
  relationLabel(v){if(v>=75)return'fort';if(v>=55)return'solide';if(v>=35)return'fragile';return'faible';}
  applyRelation(id,delta){const r=this.relation(id);if(!r)return;Object.keys(delta||{}).forEach(k=>{if(r[k]!=null)r[k]=this.clamp(r[k]+delta[k],0,100);});this.syncCrewCompat();}
  conditionOk(scene){const s=this.state(),n=this.ensureState(),r=n.relations[scene.crew]||{};
    if(scene.minDay&&s.day<scene.minDay)return false;
    if((scene.requiresFlags||[]).some(f=>!(s.flags[f]||n.flags[f])))return false;
    if((scene.forbiddenFlags||[]).some(f=>(s.flags[f]||n.flags[f])))return false;
    for(const k of Object.keys(scene.minRelations||{}))if((r[k]||0)<scene.minRelations[k])return false;
    return true;
  }
  availableConversations(crewId){const n=this.ensureState();return (this.data.conversations||[]).filter(x=>x.crew===crewId&&!n.seenScenes.includes(x.id)&&this.conditionOk(x));}
  startConversation(sceneId){const scene=(this.data.conversations||[]).find(x=>x.id===sceneId);if(!scene||!this.conditionOk(scene))return{ok:false,message:'Cette conversation n’est pas disponible.'};this.ensureState().activeScene=sceneId;return{ok:true,scene:clone(scene)};}
  chooseConversation(sceneId,index){const scene=(this.data.conversations||[]).find(x=>x.id===sceneId);const choice=scene&&scene.choices[index];if(!scene||!choice)return{ok:false,message:'Choix invalide.'};const n=this.ensureState();this.applyRelation(scene.crew,(choice.effects||{}).relations||{});const e=choice.effects||{};
    Object.keys(e.flags||{}).forEach(k=>{n.flags[k]=e.flags[k];if(k.indexOf('promise_')===0)n.promises[k]={active:true,day:this.state().day,crew:scene.crew};});
    if(e.reveal)n.secretLevels[scene.crew]=Math.max(n.secretLevels[scene.crew]||0,e.reveal);
    if(e.arc)n.arcProgress[scene.crew]=Math.min((this.data.arcs[scene.crew]||{steps:4}).steps,(n.arcProgress[scene.crew]||0)+e.arc);
    if(e.tension)n.tension=this.clamp(n.tension+e.tension,0,100);
    if(!n.seenScenes.includes(scene.id))n.seenScenes.push(scene.id);n.activeScene=null;
    this.record('conversation',scene.title,scene.crew);this.updateLegacyFromConversation(scene,choice);return{ok:true,scene:clone(scene),choice:clone(choice),relation:clone(n.relations[scene.crew])};
  }
  updateLegacyFromConversation(scene,choice){const n=this.ensureState(),r=(choice.effects||{}).relations||{};if((r.friendship||0)>0||(r.trust||0)>0)n.legacy.protector+=1;if((r.respect||0)>0)n.legacy.diplomat+=1;if(scene.crew==='amira'&&(r.ideology||0)>0)n.legacy.scientist+=1;}
  record(type,title,detail){const n=this.ensureState();const item={day:this.state().day,type,title,detail:detail||''};n.timeline.unshift(item);n.timeline=n.timeline.slice(0,120);n.chronicle.unshift('Jour '+item.day+' — '+title+(detail?' · '+detail:''));n.chronicle=n.chronicle.slice(0,160);}
  expeditionAvailable(site){const s=this.state();if(site.minStage!=null&&s.campaign.stage<site.minStage)return false;if(site.requiresFlag&&!s.flags[site.requiresFlag])return false;return true;}
  availableExpeditions(){if(!this.data.features.expeditions)return[];return (this.data.expeditions||[]).filter(x=>this.expeditionAvailable(x));}
  startExpedition(id,team){if(!this.data.features.expeditions)return{ok:false,message:'Expéditions narratives disponibles en 2.2.'};const n=this.ensureState();if(n.expedition)return{ok:false,message:'Une expédition est déjà en cours.'};const site=(this.data.expeditions||[]).find(x=>x.id===id);if(!site||!this.expeditionAvailable(site))return{ok:false,message:'Site verrouillé.'};const clean=(team||[]).filter(x=>this.data.crewProfiles[x]).slice(0,3);if(clean.length!==3)return{ok:false,message:'Choisis exactement 3 compagnons.'};if(this.state().ship.supplies<2)return{ok:false,message:'Il faut 2 fournitures.'};this.engine.updateResource('supplies',-2);n.team=clean;n.expedition={id,step:0,threat:1,complete:false};this.record('expedition','Départ : '+site.title,clean.join(', '));return{ok:true,site:clone(site),node:clone(site.nodes[0])};}
  expeditionState(){const n=this.ensureState();if(!n.expedition)return null;const site=(this.data.expeditions||[]).find(x=>x.id===n.expedition.id);return{expedition:n.expedition,site,node:site.nodes[n.expedition.step]};}
  expeditionChoice(index){const st=this.expeditionState();if(!st)return{ok:false,message:'Aucune expédition.'};const choice=st.node.choices[index];if(!choice)return{ok:false,message:'Choix invalide.'};const check=this.engine.performCheck(choice.skill,choice.attr,choice.dc);const n=this.ensureState();const d=check.success?(choice.threatSuccess||0):(choice.threatFail||0);n.expedition.threat=this.clamp(n.expedition.threat+d,0,10);if(check.success){if(choice.rewardData)this.engine.updateResource('data',choice.rewardData);if(choice.rewardCredits)this.engine.updateResource('credits',choice.rewardCredits);n.legacy.explorer+=1;if(choice.skill==='science')n.legacy.scientist+=1;}else n.tension=this.clamp(n.tension+5,0,100);
    const resultText=check.success?choice.success:choice.fail;n.expedition.step+=1;let complete=n.expedition.step>=st.site.nodes.length||n.expedition.threat>=10;
    if(complete){const reason=n.expedition.threat>=10?'La menace atteint un niveau critique : extraction d’urgence.':'Le site est traversé jusqu’à son objectif.';this.record('expedition',st.site.title+' terminé',reason);n.expedition=null;n.team=[];return{ok:true,check,text:resultText,complete:true,reason,threat:complete?0:n.expedition?.threat};}
    return{ok:true,check,text:resultText,complete:false,threat:n.expedition.threat,node:clone(st.site.nodes[n.expedition.step])};
  }
  abortExpedition(){const n=this.ensureState();if(!n.expedition)return false;const id=n.expedition.id;n.expedition=null;n.team=[];n.tension=this.clamp(n.tension+3,0,100);this.record('expedition','Expédition abandonnée',id);return true;}
  socialPulse(force=false){if(!this.data.features.social)return null;const n=this.ensureState(),s=this.state();if(!force&&s.day-n.lastPulseDay<3)return null;n.lastPulseDay=s.day;const people=this.data.npcs||[];if(!people.length)return null;const p=people[Math.floor(this.engine.random()*people.length)];const type=this.engine.random()<0.55?'rumor':'news';if(type==='rumor'){const tpl=this.data.rumorTemplates[Math.floor(this.engine.random()*this.data.rumorTemplates.length)];const text=tpl.replace('{subject}',p.name).replace('{faction}',p.faction);const item={day:s.day,text,truth:this.engine.random()<0.55?'incertain':'manipulé'};n.rumors.unshift(item);n.rumors=n.rumors.slice(0,12);this.record('rumor','Rumeur : '+p.name,item.truth);return{type,item};}
    const src=this.data.newsTemplates[Math.floor(this.engine.random()*this.data.newsTemplates.length)];const item={day:s.day,title:src.title,text:src.text};n.news.unshift(item);n.news=n.news.slice(0,10);this.record('news',src.title,src.text);return{type,item};
  }
  npcAction(id,mode){if(!this.data.features.social)return{ok:false,message:'Réseau social disponible en 2.3.'};const n=this.ensureState(),p=(this.data.npcs||[]).find(x=>x.id===id);if(!p)return{ok:false,message:'PNJ inconnu.'};let delta=0,text='';if(mode==='meet'){delta=3;text='La rencontre ouvre un canal personnel avec '+p.name+'.';n.tension=this.clamp(n.tension-1,0,100);}else if(mode==='pressure'){delta=-2;text='La pression obtient une réponse, mais laisse une trace.';n.tension=this.clamp(n.tension+3,0,100);n.legacy.conqueror+=1;}else{delta=1;text='Un échange d’informations améliore légèrement la relation.';this.engine.updateResource('data',1);n.legacy.diplomat+=1;}n.npcRelations[id]=this.clamp((n.npcRelations[id]||0)+delta,-100,100);n.socialRep[p.faction]=this.clamp((n.socialRep[p.faction]||0)+Math.sign(delta),-100,100);this.record('npc',p.name,text);return{ok:true,text,relation:n.npcRelations[id]};}
  legacyPulse(){if(!this.data.features.legacy)return null;const n=this.ensureState(),s=this.state();let hit=null;for(const ev of this.data.legacyEvents||[]){if(s.day>=ev.day&&!n.flags['legacy_'+ev.day]){n.flags['legacy_'+ev.day]=true;hit=ev;this.record('legacy',ev.title,ev.text);}}
    for(const m of s.crew){if(m.hp<=0&&!n.memorial.some(x=>x.id===m.id)){n.memorial.push({id:m.id,name:m.name,day:s.day,cause:'Mort en service au cours de la campagne.'});this.record('memorial','Mort de '+m.name,'Jour '+s.day);}}
    return hit;
  }
  directorPulse(force=false){if(!this.data.features.director)return null;const n=this.ensureState(),s=this.state();if(!force&&s.day===n.lastDirectorDay)return null;n.lastDirectorDay=s.day;n.tension=this.clamp(n.tension+(s.combat?6:0)+(s.commander.injuries.length?2:0)-1,0,100);let pool=(this.data.directorTemplates||[]).filter(t=>{if(t.minTension!=null&&n.tension<t.minTension)return false;if(t.maxTension!=null&&n.tension>t.maxTension)return false;if(t.requiresFlag&&!s.flags[t.requiresFlag])return false;if(t.requiresPromise&&!Object.values(n.promises).some(x=>x.active))return false;return !n.seenDirector?.includes(t.id);});if(!pool.length)return null;const chance=force?1:(n.tension>=55||n.tension<=25?0.55:0.28);if(this.engine.random()>chance)return null;const ev=clone(pool[Math.floor(this.engine.random()*pool.length)]);n.directorEvent=ev;n.seenDirector=n.seenDirector||[];return ev;}
  resolveDirector(index){const n=this.ensureState(),ev=n.directorEvent;if(!ev)return{ok:false,message:'Aucune scène du directeur.'};const ch=ev.choices[index];if(!ch)return{ok:false,message:'Choix invalide.'};if(ch.effect==='calm')n.tension=this.clamp(n.tension-12,0,100);if(ch.effect==='delay')n.tension=this.clamp(n.tension+4,0,100);if(ch.effect==='bond'){n.tension=this.clamp(n.tension-8,0,100);Object.keys(n.relations).forEach(id=>this.applyRelation(id,{friendship:2}));}if(ch.effect==='focus'){this.engine.updateResource('data',1);n.legacy.scientist+=1;}if(ch.effect==='promise'){Object.values(n.promises).forEach(x=>{if(x.active)x.day=safeDay(this.state().day);});}if(ch.effect==='break'){Object.values(n.promises).forEach(x=>x.active=false);n.tension=this.clamp(n.tension+10,0,100);Object.keys(n.relations).forEach(id=>this.applyRelation(id,{trust:-2,resentment:2}));}if(ch.effect==='science'){this.engine.updateResource('data',2);n.legacy.scientist+=2;}if(ch.effect==='security'){n.tension=this.clamp(n.tension-2,0,100);n.legacy.conqueror+=1;}n.seenDirector.push(ev.id);n.directorEvent=null;this.record('director',ev.title,ch.text);return{ok:true,choice:ch};
  }
  tick(){const n=this.ensureState();if(!n)return;this.legacyPulse();this.socialPulse(false);this.directorPulse(false);this.syncCrewCompat();}
  guide(){return clone(this.data.guideSections||[]);}
}
function safeDay(v){return Number(v)||1;}
window.ExodusNarrative=ExodusNarrative;
})();
