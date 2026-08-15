(function(){
'use strict';
window.GAME_CONTENT={
 version:'1.5',
 features:{"level":5,"persistence":true,"seeded":true,"crew":true,"modules":true,"campaign":true,"maxEvents":4,"cardCount":12},
 images:{
  intro:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=85',
  station:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85',
  moon:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85',
  ruins:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
  derelict:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=85',
  anomaly:'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1800&q=85',
  battle:'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1800&q=85'
 },
 origins:{
  terre:{label:'Terre',desc:'+1 Presence, +1 Diplomatie, +1 Science',stats:{presence:1},skills:{diplomacy:1,science:1}},
  mars:{label:'Mars',desc:'+1 Physique, +1 Volonte, +2 Combat',stats:{physique:1,volonte:1},skills:{combat:2}},
  ceinture:{label:'Ceinture',desc:'+1 Reflexes, +1 Survie, +1 Pilotage',stats:{reflexes:1},skills:{survival:1,pilotage:1}},
  station:{label:'Station orbitale',desc:'+1 Technique, +2 Ingenierie',stats:{technique:1},skills:{engineering:2}},
  lune:{label:'Lune',desc:'+1 Intelligence, +2 Science',stats:{intelligence:1},skills:{science:2}}
 },
 roles:{
  explorateur:{label:'Explorateur',desc:'+1 Reflexes, +1 Survie, +1 Science',stats:{reflexes:1},skills:{survival:1,science:1}},
  ingenieur:{label:'Ingenieur',desc:'+1 Technique, +2 Ingenierie',stats:{technique:1},skills:{engineering:2}},
  scientifique:{label:'Scientifique',desc:'+1 Intelligence, +2 Science',stats:{intelligence:1},skills:{science:2}},
  militaire:{label:'Militaire',desc:'+1 Physique, +2 Combat',stats:{physique:1},skills:{combat:2}},
  diplomate:{label:'Diplomate',desc:'+1 Presence, +2 Diplomatie',stats:{presence:1},skills:{diplomacy:2}},
  pilote:{label:'Pilote',desc:'+1 Reflexes, +2 Pilotage',stats:{reflexes:1},skills:{pilotage:2}}
 },
 traits:{
  curieux:{label:'Curieux',desc:'Les reussites scientifiques produisent parfois une donnee supplementaire.',passive:'science_data'},
  idealiste:{label:'Idealiste',desc:'Les actions heroiques reussies rapportent +1 reputation.',passive:'heroic_rep'},
  pragmatique:{label:'Pragmatique',desc:'Les reparations coutent 5 credits de moins.',passive:'cheap_repairs'},
  ambitieux:{label:'Ambitieux',desc:'Les recompenses en credits sont augmentees de 10%.',passive:'more_credits'},
  paranoiaque:{label:'Paranoiaque',desc:'Le premier impact de chaque combat inflige 1 degat de moins.',passive:'first_hit_resist'}
 },
 crew:[
  {id:'amira',name:'Dr. Amira Solano',role:'Xenobiologiste',specialty:'Science',specialtySkill:'science',loyalty:68,stress:14,hp:12,maxHp:12},
  {id:'kaito',name:'Kaito Voss',role:'Chef de securite',specialty:'Combat',specialtySkill:'combat',loyalty:62,stress:18,hp:15,maxHp:15},
  {id:'mila',name:'Mila Radev',role:'Ingenieure systemes',specialty:'Ingenierie',specialtySkill:'engineering',loyalty:70,stress:12,hp:12,maxHp:12},
  {id:'elias',name:'Elias Noor',role:'Pilote secondaire',specialty:'Pilotage',specialtySkill:'pilotage',loyalty:64,stress:16,hp:13,maxHp:13}
 ],
 cards:[
  {id:'spectral',name:'Analyse spectrale',text:'+2 a un test de Science.',tags:['science'],type:'bonus',value:2},
  {id:'field',name:'Protocole de terrain',text:'+2 a un test d Ingenierie.',tags:['engineering'],type:'bonus',value:2},
  {id:'aim',name:'Tir calibre',text:'+2 a un test de Combat ou Pilotage.',tags:['combat','pilotage'],type:'bonus',value:2},
  {id:'charm',name:'Charme calibre',text:'+2 a un test de Diplomatie.',tags:['diplomacy'],type:'bonus',value:2},
  {id:'survive',name:'Instinct de survie',text:'+2 a un test de Survie.',tags:['survival'],type:'bonus',value:2},
  {id:'quantum',name:'Fenetre quantique',text:'+1 a n importe quel test.',tags:['any'],type:'bonus',value:1},
  {id:'improv',name:'Solution improvisee',text:'Relance le d20 apres un echec.',tags:['any'],type:'reroll',value:0},
  {id:'cover',name:'Couverture alliee',text:'Reduit de 2 les degats subis.',tags:['combat','any'],type:'shield',value:2},
  {id:'deep_scan',name:'Scan profond',text:'+3 Science, mais la carte est rare.',tags:['science'],type:'bonus',value:3},
  {id:'burn',name:'Combustion d urgence',text:'+3 Pilotage.',tags:['pilotage'],type:'bonus',value:3},
  {id:'breach',name:'Brise-coque',text:'+3 Combat.',tags:['combat'],type:'bonus',value:3},
  {id:'cold_read',name:'Lecture froide',text:'+3 Diplomatie.',tags:['diplomacy'],type:'bonus',value:3}
 ],
 modules:[
  {id:'lab_array',name:'Laboratoire spectral',cost:80,desc:'+1 aux tests de Science.',effect:'science_bonus'},
  {id:'shield_coils',name:'Bobines de bouclier',cost:75,desc:'+3 boucliers maximum.',effect:'shield_max'},
  {id:'reactor_mk2',name:'Reacteur Helios Mk II',cost:90,desc:'+2 carburant maximum et +2 carburant immediat.',effect:'fuel_max'},
  {id:'medbay',name:'Infirmerie adaptative',cost:70,desc:'Le repos retire 4 stress supplementaires.',effect:'rest_bonus'}
 ],
 locations:[
  {id:'orbital_ring',label:'Anneau orbital d Erebus',tag:'STATION',image:'station'},
  {id:'ash_moon',label:'Lune cendree Khepri',tag:'SURFACE',image:'moon'},
  {id:'derelict_field',label:'Champ d epaves de Nadir',tag:'EPAVES',image:'derelict'},
  {id:'echo_anomaly',label:'Anomalie Echo-7',tag:'ANOMALIE',image:'anomaly'}
 ],
 events:{
  orbital_ring:[
   {id:'dock9',tier:1,tag:'DETRESSE',title:'Appel de detresse au quai 9',image:'station',text:'Un cargo civil derive vers les docks avec une fuite d oxygene et un reacteur instable.',choices:[
    {label:'Stabiliser le reacteur',skill:'engineering',attr:'technique',dc:13,heroic:true,success:{text:'Le cargo est sauve et son capitaine paie l intervention.',credits:35,reputation:1},fail:{text:'Tu limites la casse, mais l Asterion subit une surcharge.',shield:-2}},
    {label:'Organiser l evacuation',skill:'diplomacy',attr:'presence',dc:12,heroic:true,success:{text:'L evacuation se fait sans panique.',data:1,reputation:1},fail:{text:'La panique coute du temps et du carburant.',fuel:-1}}
   ]},
   {id:'grey_market',tier:1,tag:'MARCHE',title:'Transaction grise',image:'station',text:'Un courtier propose les coordonnees d un relais militaire abandonne.',choices:[
    {label:'Negocier les coordonnees',skill:'diplomacy',attr:'presence',dc:14,success:{text:'Tu obtiens les donnees a prix avantageux.',data:2,credits:15},fail:{text:'Le courtier te fait payer une fausse piste.',credits:-20}},
    {label:'Verifier son terminal',skill:'science',attr:'intelligence',dc:13,success:{text:'La signature cryptographique est authentique.',data:2,reputation:1},fail:{text:'Le courtier detecte ton intrusion.',fuel:-1}}
   ]},
   {id:'strike',tier:2,tag:'POLITIQUE',title:'Greve des dockers',image:'station',text:'Les dockers bloquent les quais et accusent Helix Corporation de falsifier les quotas d oxygene.',choices:[
    {label:'Mediatiser les preuves',skill:'diplomacy',attr:'presence',dc:13,heroic:true,success:{text:'La pression publique force une concession.',reputation:2,data:1},fail:{text:'Helix retourne le recit contre toi.',reputation:-1}},
    {label:'Auditer les compteurs',skill:'engineering',attr:'technique',dc:14,success:{text:'Les compteurs ont bien ete manipules.',data:2,credits:15},fail:{text:'L audit se termine en impasse.',credits:-10}}
   ]},
   {id:'smuggler',tier:4,tag:'POURSUITE',title:'Le passeur de Ceres',image:'station',text:'Un passeur fuit une patrouille et te demande un corridor de sortie.',choices:[
    {label:'Masquer sa signature',skill:'engineering',attr:'technique',dc:15,success:{text:'La patrouille perd la trace du passeur.',credits:45,data:1},fail:{text:'La patrouille identifie l Asterion.',reputation:-1,shield:-1}},
    {label:'Convaincre la patrouille',skill:'diplomacy',attr:'presence',dc:15,success:{text:'Tu fabriques une explication credible.',reputation:1,credits:25},fail:{text:'La negociation tourne court.',fuel:-1}}
   ]}
  ],
  ash_moon:[
   {id:'ash_ruins',tier:1,tag:'EXPLORATION',title:'Ruines sous cendre',image:'ruins',text:'Des structures geometriques emergent d une plaine noire balayee par les particules.',choices:[
    {label:'Scanner les motifs',skill:'science',attr:'intelligence',dc:14,success:{text:'Le motif reagit au scanner.',data:2},fail:{text:'Une impulsion frappe les capteurs.',shield:-2}},
    {label:'Ouvrir un passage',skill:'survival',attr:'physique',dc:13,success:{text:'Une chambre intacte livre minerais et archives.',credits:30,data:1},fail:{text:'Le terrain s effondre sous l equipe.',hull:-2}}
   ]},
   {id:'microbes',tier:1,tag:'XENOBIOLOGIE',title:'Vie microbienne active',image:'moon',text:'Amira detecte des organismes qui conduisent l electricite a travers le regolithe.',choices:[
    {label:'Prelever un echantillon',skill:'science',attr:'intelligence',dc:12,success:{text:'La biochimie est totalement inconnue.',data:2,reputation:1},fail:{text:'Des spores attaquent le materiel.',shield:-1,hull:-1}},
    {label:'Isoler la zone',skill:'engineering',attr:'technique',dc:11,success:{text:'Le confinement est propre.',data:1},fail:{text:'Le confinement consomme trop d energie.',fuel:-1}}
   ]},
   {id:'ice_fault',tier:2,tag:'GEOLOGIE',title:'Faille cryovolcanique',image:'moon',text:'Un pan de glace profonde se fissure et revele une cavite chaude sous la croûte.',choices:[
    {label:'Descendre avec des drones',skill:'science',attr:'intelligence',dc:14,success:{text:'Les drones trouvent une chimie prebiotique complexe.',data:2},fail:{text:'Deux drones sont perdus.',credits:-15}},
    {label:'Descendre en equipe',skill:'survival',attr:'reflexes',dc:15,heroic:true,success:{text:'L equipe remonte avec un cristal rare.',credits:35,reputation:1},fail:{text:'Une chute endommage le materiel.',hull:-2}}
   ]},
   {id:'buried_gate',tier:4,tag:'ARTEFACT',title:'La porte enfouie',image:'ruins',text:'Sous la cendre, un anneau de materiau noir pulse au rythme du signal Echo-7.',choices:[
    {label:'Synchroniser les frequences',skill:'science',attr:'intelligence',dc:16,success:{text:'L anneau transmet une carte stellaire partielle.',data:3},fail:{text:'La synchronisation s effondre brutalement.',shield:-3}},
    {label:'Deriver une alimentation',skill:'engineering',attr:'technique',dc:15,success:{text:'Une chambre secondaire s ouvre.',data:2,credits:30},fail:{text:'La derivation grille un convertisseur.',hull:-2}}
   ]}
  ],
  derelict_field:[
   {id:'ghost_frigate',tier:1,tag:'EPAVE',title:'Fregate fantome',image:'derelict',text:'Une ancienne fregate militaire emet encore une balise faible.',choices:[
    {label:'Fouiller l epave',skill:'survival',attr:'reflexes',dc:13,success:{text:'Vous trouvez des modules et une caisse militaire.',credits:40,data:1},fail:{text:'Une sentinelle dormante se reactive.',combat:{enemy:'Drone sentinelle ancien',hp:16,attack:4,rewardCredits:30,rewardData:1}}},
    {label:'Pirater la balise',skill:'engineering',attr:'technique',dc:14,success:{text:'Les journaux de bord revelent une cache distante.',data:2,credits:20},fail:{text:'Une decharge frappe les circuits.',shield:-2}}
   ]},
   {id:'minefield',tier:1,tag:'RISQUE',title:'Champ mine oublie',image:'derelict',text:'Des mines a fusion sont melees aux debris.',choices:[
    {label:'Manoeuvres d evitement',skill:'pilotage',attr:'reflexes',dc:14,success:{text:'Elias guide l Asterion entre les mines.',credits:25},fail:{text:'Une mine explose pres du flanc babord.',hull:-3,shield:-2}},
    {label:'Cartographier lentement',skill:'science',attr:'intelligence',dc:12,success:{text:'Une route sure est calculee.',data:1},fail:{text:'Le detour consomme du carburant.',fuel:-1}}
   ]},
   {id:'black_box',tier:2,tag:'MYSTERE',title:'Boite noire sans vaisseau',image:'derelict',text:'Une boite noire flotte seule, sans epave correspondante dans un rayon de dix mille kilometres.',choices:[
    {label:'Decrypter la memoire',skill:'engineering',attr:'technique',dc:14,success:{text:'Le journal mentionne Echo-7 avant sa decouverte officielle.',data:3},fail:{text:'La memoire s efface.',data:0}},
    {label:'Tracer sa trajectoire',skill:'science',attr:'intelligence',dc:13,success:{text:'La trajectoire pointe vers l anomalie.',data:2},fail:{text:'Les calculs restent ambigus.',fuel:-1}}
   ]},
   {id:'raider',tier:4,tag:'COMBAT',title:'Recuperateurs hostiles',image:'battle',text:'Un remorqueur arme revendique le champ d epaves et verrouille ses canons sur l Asterion.',choices:[
    {label:'Les intimider',skill:'diplomacy',attr:'presence',dc:16,success:{text:'Ils renoncent et abandonnent une cargaison.',credits:45,reputation:1},fail:{text:'Les recuperateurs ouvrent le feu.',combat:{enemy:'Remorqueur pirate',hp:22,attack:5,rewardCredits:55,rewardData:1}}},
    {label:'Prendre l initiative',skill:'combat',attr:'reflexes',dc:15,success:{text:'Ton premier tir detruit leur telemetrie.',credits:30},fail:{text:'Ils ripostent immediatement.',combat:{enemy:'Remorqueur pirate',hp:20,attack:5,rewardCredits:50,rewardData:1}}}
   ]}
  ],
  echo_anomaly:[
   {id:'echo_signal',tier:1,tag:'ANOMALIE',title:'Signal d Echo-7',image:'anomaly',text:'Un motif radio repete une suite impossible a attribuer au hasard.',choices:[
    {label:'Decoder la structure',skill:'science',attr:'intelligence',dc:15,success:{text:'Le signal contient des coordonnees internes.',data:3,reputation:1},fail:{text:'Le signal surcharge les circuits.',shield:-2}},
    {label:'Sonder le coeur',skill:'pilotage',attr:'reflexes',dc:15,success:{text:'Tu detectes un reseau d energie enfoui.',data:2,credits:20},fail:{text:'Une presence reactive se reveille.',combat:{enemy:'Drone xeno reactif',hp:18,attack:5,rewardCredits:35,rewardData:2}}}
   ]},
   {id:'artifact',tier:1,tag:'ALIEN',title:'Artefact dormant',image:'anomaly',text:'Une masse polygonale levite dans un halo de poussiere ionisee.',choices:[
    {label:'Tenter une interface',skill:'engineering',attr:'technique',dc:15,success:{text:'L artefact s ouvre et cede un noyau de donnees.',data:3},fail:{text:'Un choc de retour traverse la coque.',hull:-2,shield:-2}},
    {label:'Documenter sans toucher',skill:'diplomacy',attr:'presence',dc:11,success:{text:'Le protocole strict renforce ta credibilite.',data:1,reputation:1},fail:{text:'L objet derive hors de portee.',fuel:-1}}
   ]},
   {id:'gravity_lens',tier:2,tag:'PHYSIQUE',title:'Lentille gravitationnelle locale',image:'anomaly',text:'Les etoiles de fond se dedoublent autour d un volume de vide presque parfait.',choices:[
    {label:'Traverser la lentille',skill:'pilotage',attr:'reflexes',dc:15,success:{text:'La manoeuvre revele une structure cachee.',data:2,credits:25},fail:{text:'La coque subit une contrainte brutale.',hull:-3}},
    {label:'Modeliser a distance',skill:'science',attr:'intelligence',dc:14,success:{text:'Le modele confirme une technologie active.',data:3},fail:{text:'Les senseurs saturent.',shield:-1}}
   ]},
   {id:'silent_probe',tier:4,tag:'CONTACT',title:'Sonde silencieuse',image:'anomaly',text:'Une petite sonde inconnue copie chaque mouvement de l Asterion sans emettre le moindre signal.',choices:[
    {label:'Imiter ses mouvements',skill:'pilotage',attr:'reflexes',dc:15,success:{text:'La sonde transmet une sequence geometrique.',data:3},fail:{text:'Elle disparait dans une impulsion.',fuel:-1}},
    {label:'Envoyer une suite mathematique',skill:'science',attr:'intelligence',dc:16,success:{text:'La sonde repond. Ce n est plus une coincidence.',data:4,reputation:1},fail:{text:'Aucune reponse exploitable.',shield:-1}}
   ]}
  ]
 },
 specialEvents:{
  firstContact:{id:'first_contact',tier:5,tag:'PREMIER CONTACT',title:'Quelqu un repond',image:'anomaly',text:'Toutes les frequences se taisent. Puis une presence structure une reponse autour des propres signaux de l Asterion.',choices:[
   {label:'Repondre par les nombres premiers',skill:'science',attr:'intelligence',dc:18,heroic:true,success:{text:'La reponse change. Une intelligence non humaine reconnait votre message.',data:5,reputation:3,campaignComplete:true},fail:{text:'Le dialogue s effondre, mais la presence reste a proximite.',data:-2,shield:-3}},
   {label:'Formuler une declaration pacifique',skill:'diplomacy',attr:'presence',dc:18,heroic:true,success:{text:'Le message est accepte. L humanite n est plus seule.',data:3,reputation:5,campaignComplete:true},fail:{text:'La structure ne comprend pas encore votre langage.',reputation:-1,fuel:-2}}
  ]}
 }
};
})();
