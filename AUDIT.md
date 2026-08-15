# Audit EXODUS 2149 v2.5

## Résultat

- Contrôles structure/contenu : **470**
- Erreurs détectées : **0**
- Simulations narratives : **500**
- Exceptions moteur/narration : **0**
- Introduction : 4 écrans
- Guide : 7 sections
- Conversations : 12
- Expéditions : 4
- Nœuds d’expédition : 16
- PNJ sociaux : 12
- Jalons d’héritage : 5
- Modèles du Directeur : 4

## Vérifications

- Syntaxe Node de `content.js`, `narrative_content.js`, `engine.js`, `narrative.js`, `app.js`, `narrative_ui.js`, `sw.js`.
- IDs HTML sans doublon.
- Références CSS/JS présentes.
- Compétences et attributs des tests narratifs valides.
- DD narratifs dans la plage prévue.
- Persistance des relations et scènes après export/import de sauvegarde.
- Le service worker inclut les trois nouveaux fichiers narratifs.
- Le modal d’introduction est masqué par défaut : en cas de panne narrative, il ne rend pas la page blanche.

## Limite du contrôle visuel

Le test Chromium headless de cet environnement a expiré sur son infrastructure DBus/zygote. Il n’est donc **pas** déclaré réussi. Le chargement HTTP de la v2.5 a été contrôlé séparément : les 11 ressources principales répondent HTTP 200.
