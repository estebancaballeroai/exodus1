# Audit EXODUS 2149 v1.5

## Resultat

- Controle syntaxique Node: OK pour `content.js`, `engine.js`, `app.js`.
- Coherence HTML/app: 55 identifiants d interface controles, 0 reference manquante.
- Integrite contenu: 16 evenements definis, 16 actifs dans cette version; 12 cartes definies, 12 actives au depart.
- Integrite des competences, attributs, DD, lieux, images et identifiants: OK.
- Tests cibles multi-versions: 38 assertions passees au total.
- Test d integration DOM simule: demarrage, creation du commandant, rendu des cartes, destinations et choix d evenement: OK.
- Test serveur HTTP v1.5: index, CSS et 3 scripts servis avec HTTP 200 et types MIME corrects.

## Simulation automatisee

Politique de simulation: agent raisonnable qui choisit souvent l approche ayant la meilleure probabilite, utilise des cartes compatibles, repare/ravitaille, gere le stress et suit les objectifs de campagne quand ils existent.

- Campagnes simulees: 600
- Exceptions moteur: 0
- Destruction de l Asterion: 0.2 %
- Jour moyen final: 18.3
- Actions moyennes: 39.4
- Credits moyens: 41.1
- Donnees moyennes: 21.8
- Reputation moyenne: 7.3
- Coque moyenne restante: 16.2
- Combats moyens: 0.51
- Stress maximum moyen de l equipage: 35.7
- Modules installes en moyenne: 1.67
- Campagnes terminees par Premier Contact: 99.2 %

La simulation guidee est volontairement plus efficace qu un joueur debutant; ce taux ne doit pas etre interprete comme un taux de victoire humain.

## Audit de rendu

Le binaire Chromium present dans l environnement de construction ne peut pas terminer un lancement headless a cause des services systeme/zygote indisponibles dans ce conteneur. Pour ne pas maquiller cette limite, la validation UI a ete remplacee par un test d integration DOM execute sur les cinq versions, plus un test de service HTTP des fichiers. Une verification visuelle finale dans Chrome/Samsung Internet reste conseillee apres publication GitHub Pages.

## Images

Les visuels distants disposent tous d un fond CSS de secours: une indisponibilite d image ne rend pas l interface blanche ou inutilisable.
