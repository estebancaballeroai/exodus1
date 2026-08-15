# EXODUS 2149 — Cahier des charges narratif 2.1 à 2.5

## Vision

La branche 2.1–2.5 transforme EXODUS 2149 en RPG narratif systémique. Le moteur de cartes, de d20, d’exploration, de factions, de colonisation et de campagne interstellaire reste la fondation. La nouveauté est une couche de mémoire qui donne du sens aux décisions : relations multidimensionnelles, conversations, secrets, expéditions scénarisées, monde social, héritage et directeur narratif.

Le principe est : **le jeu ne raconte pas seulement une histoire au joueur ; il construit une histoire avec lui.**

## Exigences transversales

- Architecture plate adaptée à GitHub Pages.
- Séparation nette : `content.js`, `narrative_content.js`, `engine.js`, `narrative.js`, `app.js`, `narrative_ui.js`.
- Sauvegarde locale conservant l’état narratif.
- Migration tolérante depuis une sauvegarde 2.0.
- Interface mobile prioritaire, sans overlay impossible à fermer.
- Introduction disponible avant la création du personnage et rejouable ensuite.
- Bouton **Guide** permanent en bas à droite.
- Si la couche narrative échoue, le jeu principal doit rester visible.
- Données narratives déclaratives : les dialogues et expéditions ne doivent pas être codés en dur dans l’UI.
- Les décisions peuvent modifier plusieurs variables distinctes au lieu d’un unique score de relation.

---

# Version 2.1 — Personnages vivants

## Objectif

Faire de l’équipage un groupe de personnages et non une liste de bonus.

## Systèmes

Chaque membre majeur possède : âge, origine, rôle, portrait réaliste, traits, valeurs, ambition, peur, secrets progressifs et arc personnel.

Les relations sont divisées en :

- confiance ;
- amitié ;
- respect ;
- peur ;
- attirance ;
- ressentiment ;
- proximité idéologique.

Une décision peut donc augmenter le respect tout en diminuant la confiance. L’ancien score `relation` reste synchronisé pour compatibilité avec le moteur de jeu.

## Conversations

Les conversations privées sont conditionnelles : jour minimum, état de la campagne, drapeaux narratifs et seuils de relation. Les choix peuvent :

- modifier plusieurs dimensions relationnelles ;
- révéler un niveau de secret ;
- faire progresser un arc personnel ;
- créer une promesse ;
- augmenter ou réduire la tension narrative ;
- écrire une entrée dans la chronologie.

## Contenu initial

- 4 personnages principaux : Amira, Kaito, Mila, Elias.
- 12 conversations écrites et branchées.
- 4 secrets à plusieurs niveaux.
- 4 arcs personnels initialisés.

## Acceptation

- Une nouvelle partie initialise toutes les relations.
- Au moins une scène est disponible pour Amira dès le début.
- Les conversations jouées sont mémorisées et ne se répètent pas.
- Une sauvegarde exportée/importée conserve scènes et relations.

---

# Version 2.2 — Expéditions narratives

## Objectif

Transformer les grandes explorations en mini-aventures structurées.

## Systèmes

Le joueur choisit exactement trois compagnons avant le départ. Une expédition consomme des fournitures et enchaîne des nœuds narratifs. Chaque nœud comporte plusieurs approches avec compétence, attribut et DD.

La jauge de menace varie de 0 à 10. Les échecs augmentent souvent la menace ; certaines réussites la réduisent. À 10, l’équipe procède à une extraction d’urgence.

Les récompenses s’intègrent aux ressources du moteur principal : crédits et données.

## Contenu initial

Quatre sites :

1. Station Orphée ;
2. Nadir — Cimetière des coques ;
3. Khepri — Sous les cendres ;
4. Écho-7 — Complexe de la Porte.

Chaque site comporte 4 nœuds, soit 16 nœuds jouables et 32 approches principales.

## Acceptation

- Impossible de partir avec moins ou plus de trois membres.
- Le coût en fournitures est vérifié.
- Chaque choix utilise le moteur d20 existant.
- Une expédition se termine par réussite de parcours ou menace critique.
- Aucune boucle infinie de nœuds.

---

# Version 2.3 — Monde social

## Objectif

Faire exister le monde en dehors du vaisseau.

## Systèmes

Un réseau de PNJ persistants est ajouté. Chaque contact possède rôle, faction, liens et orientation. Les relations locales et les réputations sociales sont indépendantes de la réputation globale.

Le Réseau solaire produit deux catégories :

- actualités ;
- rumeurs.

Une rumeur peut être incertaine ou manipulée. Le jeu conserve sa date et son sujet.

Le joueur peut rencontrer des contacts, échanger des informations ou exercer une pression. Ces actions affectent relation, réputation sociale, tension et parfois ressources.

## Contenu initial

- 12 PNJ persistants.
- 5 modèles de rumeurs.
- 4 sources d’actualités.
- Relations locales par PNJ.
- Réputation sociale par faction.

## Acceptation

- Une impulsion sociale peut produire une rumeur ou une actualité.
- Les résultats sont persistants.
- Une rencontre modifie le contact ciblé sans modifier tous les PNJ.
- Le Réseau ne génère pas une nouvelle entrée à chaque rendu d’interface.

---

# Version 2.4 — Temps, héritage et chronique

## Objectif

Préparer les campagnes longues et la mémoire générationnelle.

## Systèmes

La couche narrative enregistre une chronologie synthétique des moments importants. Un profil d’héritage suit plusieurs axes : explorateur, diplomate, scientifique, conquérant et protecteur.

Des jalons temporels apparaissent aux jours 30, 60, 90, 365 et 730. L’âge affiché des personnages évolue avec les années de campagne.

Le mémorial enregistre les membres d’équipage dont les PV tombent à zéro et conserve date et circonstance générique. Cette base prépare les funérailles, familles et héritiers des versions futures.

## Acceptation

- Les jalons ne sont déclenchés qu’une fois.
- L’âge augmente après 365 jours.
- La chronique conserve les décisions narratives et expéditions.
- Le mémorial évite les doublons.

---

# Version 2.5 — Directeur narratif

## Objectif

Créer une couche capable de choisir des scènes pertinentes en fonction de l’état réel de la campagne.

## Systèmes

Le Directeur narratif observe :

- tension dramatique ;
- blessures ;
- promesses ;
- Premier Contact ;
- arcs personnels ;
- scènes déjà utilisées.

Il ne génère pas simplement un événement aléatoire. Chaque modèle possède des conditions : tension minimale/maximale, drapeaux ou promesses. Les scènes déjà jouées ne sont pas reproposées.

Les quatre arcs d’équipage sont enregistrés comme fils narratifs persistants.

## Tension

Une campagne calme favorise des scènes de respiration. Une tension élevée favorise conflits et conséquences. Les réponses peuvent réduire ou augmenter cette tension.

## Promesses

Les choix marqués `promise_*` sont conservés. Le Directeur peut rappeler une promesse ancienne, permettre de la réaffirmer ou de la rompre.

## Contenu initial

- 4 modèles de scènes systémiques.
- 4 fils d’arcs personnels.
- tension de 0 à 100 ;
- détection des promesses ;
- prévention de répétition.

## Acceptation

- Le Directeur ne déclenche pas plusieurs fois automatiquement dans le même jour.
- Le forçage manuel n’ignore pas les prérequis narratifs fondamentaux.
- Une scène résolue est mémorisée.
- Une promesse rompue a un effet relationnel collectif.

---

# Introduction et Guide

Toutes les versions 2.1 à 2.5 comportent quatre écrans d’introduction : contexte, équipage, règles de cartes/d20 et objectif de campagne.

Le bouton **Guide** est disponible en permanence. Le guide explique :

- boucle de jeu ;
- d20 ;
- cartes ;
- équipage ;
- missions ;
- progression ;
- sauvegarde.

L’introduction utilise un modal scrollable et fermable. Si JavaScript narratif ne démarre pas, le modal reste masqué et la page principale n’est pas bloquée.

---

# QA

Avant livraison :

- validation syntaxique de tous les scripts ;
- validation des compétences, attributs, DD, IDs et références ;
- simulation de nouvelles parties ;
- simulation de conversations et sauvegardes ;
- simulation d’expéditions ;
- simulation du Réseau ;
- simulation des jalons temporels ;
- simulation du Directeur ;
- contrôle des assets PWA ;
- test HTTP GitHub Pages.

Le contrôle visuel Chromium headless reste dépendant de l’environnement d’exécution et doit être distingué des tests moteur.
