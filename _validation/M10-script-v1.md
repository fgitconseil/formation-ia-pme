# M10 — Connecter l'IA à vos outils métier — Introduction au MCP
> Niveau : 🟣 N3 · Format : Vidéo · Durée cible : ~20 min
> Version script : v1 · Statut : BROUILLON
> Note : module conditionnel V1 — décision inclusion post-Aristid S4

---

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Compétence cible | C6 — Déployer un dispositif IA connecté aux outils de l'organisation |
| Public | Power users · Référents IA · Équipes IT PME/ETI |
| Prérequis | M8 — Assistant personnalisé · M9 — Projets et bases de connaissance |
| Module suivant | M11 — Gouverner un dispositif IA |
| Durée cible | 20 min |

---

## ⚠️ Avertissement — Ce module s'adresse aux équipes techniques

**[Slide : fond couleur distincte — ton sérieux]**

Ce module s'adresse aux équipes techniques et référents IA qui déploient des dispositifs IA pour leur organisation.

Il suppose que vous avez validé M8 (configuration d'un assistant) et M9 (bases de connaissance). Sans ces fondations, ce que vous allez voir ici n'a pas de contexte d'application.

**Si vous êtes manager N1 ou N2**, vous pouvez parcourir ce module pour comprendre ce que demander à votre service IT — et pour arbitrer intelligemment les demandes de connexion que vous recevez. Ce n'est pas un mode d'emploi technique — c'est un cadre de décision.

**Si vous êtes référent IA ou équipe IT**, ce module vous donne le vocabulaire, l'architecture de base, et les règles de gouvernance pour déployer un premier connecteur MCP dans votre organisation.

Ce que vous allez apprendre ici a une portée différente des modules précédents.

Connecter l'IA à vos outils métier, c'est lui donner accès à vos données en temps réel — et la capacité d'agir dans vos systèmes. Ce n'est plus un assistant de conversation. C'est un composant d'infrastructure.

Cela implique des décisions que vous seul pouvez prendre : quelles données exposer, quels droits accorder, qui supervise, comment tester, comment revenir en arrière.

Ce module vous donne les outils pour prendre ces décisions correctement.

---

## Structure du script

```
0. Avertissement (2 min)
1. Accroche terrain                           (2 min)
2. Qu'est-ce que le MCP                       (5 min)
3. Architecture d'un dispositif MCP en PME   (8 min)
4. Ce que le référent IA doit gouverner       (3 min)
5. Clôture + transition M11                   (2 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Laissez-moi vous décrire une semaine type de référent IA dans une ETI en 2026.

Lundi matin, le service commercial vous appelle. Ils veulent que Claude lise automatiquement les fiches clients dans Salesforce avant chaque rendez-vous — sans copier-coller.

Mardi, c'est le service RH. Ils voudraient que l'assistant RH que vous avez configuré en M8 puisse accéder directement au SIRH pour répondre aux questions de congés — sans avoir à charger les fichiers à la main chaque semaine.

Mercredi, la DSI. Ils ont une base de données PostgreSQL avec 5 ans d'historique de production. Ils veulent que l'IA puisse la requêter en langage naturel.

Jeudi, la direction. Elle veut un tableau de bord qui se met à jour automatiquement depuis trois sources de données différentes.

Chaque demande est légitime. Chaque demande est urgente. Et vous ne savez pas comment les arbitrer — ni ce qu'il faut demander à vos équipes techniques pour les réaliser.

Ce module répond à cette question.

Toutes ces demandes reposent sur le même mécanisme : le MCP. Et comprendre ce mécanisme — même sans être développeur — est la condition pour arbitrer correctement ce qui vaut la peine d'être connecté, ce qui ne l'est pas, et comment le faire sans créer de risques."

---

## 2. Qu'est-ce que le MCP (5 min)

**[Slide : titre "MCP — Model Context Protocol"]**

"MCP signifie Model Context Protocol. C'est un protocole standard — un langage commun — qui permet à un LLM comme Claude de se connecter à des services externes de façon structurée et sécurisée.

**[Slide : analogie USB-C]**

La meilleure façon de comprendre le MCP, c'est l'analogie USB-C.

Avant USB-C, chaque appareil avait son propre câble. Pour connecter un écran à un ordinateur, il fallait une interface spécifique. Pour connecter une clé USB, une autre. Pour charger, une autre encore.

USB-C a résolu ça en créant un standard universel. Un seul connecteur qui sait faire passer de l'électricité, des données, de la vidéo — vers n'importe quel appareil compatible.

Le MCP est l'USB-C des agents IA. Au lieu de développer une intégration spécifique pour chaque outil métier, vous disposez d'un protocole universel qui permet à Claude de se connecter à n'importe quel service exposant une interface MCP.

**[Slide : avant / après MCP]**

Sans MCP, chaque connexion est un développement sur mesure. Un connecteur Salesforce différent d'un connecteur Jira. Un connecteur SQL différent d'un connecteur ERP. Des semaines de développement par connexion.

Avec MCP, n'importe quel outil qui expose un serveur MCP peut être connecté à Claude — avec le même protocole, les mêmes concepts, les mêmes mécanismes de sécurité.

**[Slide : exemples concrets]**

Ce que ça permet concrètement dans une PME ou une ETI :

Claude lit une fiche client dans Salesforce avant de rédiger un email commercial — sans copier-coller manuel. La fiche est toujours à jour, les données sont celles du CRM réel.

Claude crée un ticket dans Jira après chaque réunion de sprint — le compte rendu structuré (produit en M9) alimente directement l'outil projet sans intervention humaine.

Claude requête une base de données de production en langage naturel — 'Quels sont les 10 produits les plus retournés ce trimestre ?' — sans que le manager n'ait besoin de passer par un analyste ou d'apprendre SQL.

**[Slide : ce que MCP n'est pas]**

Ce que le MCP n'est pas :

Ce n'est pas un outil que vous activez en un clic. Une connexion MCP nécessite un serveur MCP configuré côté service externe — ce qui implique un travail de votre équipe IT ou d'un prestataire.

Ce n'est pas une magie qui rend l'IA infaillible. Les données que Claude lit via MCP sont aussi fiables que les données dans vos systèmes. Garbage in, garbage out — comme on l'a vu en M9.

Et ce n'est pas une décision à prendre seul. Connecter l'IA à un système de production, c'est une décision de gouvernance — pas une décision technique."

---

## 3. Architecture d'un dispositif MCP en PME (8 min)

**[Slide : titre "Les 5 composants d'une architecture MCP"]**

"Pour prendre des décisions éclairées sur un déploiement MCP, il faut comprendre les 5 composants de l'architecture.

**[Slide : composant 1 — Le Serveur MCP]**

Composant 1 : le Serveur MCP.

C'est le programme qui fait le lien entre Claude et votre outil métier. Il expose des capacités — des actions possibles et des données accessibles — que Claude peut utiliser.

Analogie : le serveur MCP est comme un traducteur bilingue entre Claude (qui parle le langage de l'IA) et votre CRM ou votre SIRH (qui parlent leur propre langage).

Dans la pratique : Anthropic et la communauté open source publient des serveurs MCP prêts à l'emploi pour les outils les plus courants — Salesforce, GitHub, Google Drive, bases de données SQL. Pour des outils internes sur mesure, votre équipe IT peut en développer un.

**[Slide : composant 2 — Le Client MCP]**

Composant 2 : le Client MCP.

C'est Claude. Ou plus précisément : l'interface qui intègre Claude et qui sait communiquer avec des serveurs MCP.

Claude Code, Claude.ai (en mode Enterprise configuré), ou des applications construites sur l'API Anthropic peuvent être des clients MCP.

Ce que ça signifie pour vous : tous les accès Claude ne sont pas automatiquement des clients MCP. Vérifiez que l'interface que vous utilisez supporte les connexions MCP avant de concevoir votre architecture.

**[Slide : composant 3 — Les Tools (Outils)]**

Composant 3 : les Tools — les outils.

Un Tool est une action que Claude peut exécuter via le serveur MCP. C'est une capacité d'écriture — pas seulement de lecture.

Exemples :
- `create_ticket` : crée un ticket dans Jira avec les paramètres définis
- `update_contact` : met à jour une fiche Salesforce
- `send_email` : envoie un email via le serveur mail de l'organisation
- `run_query` : exécute une requête SQL sur une base de données

**Point de gouvernance critique :** chaque Tool est une action réelle dans votre système. Un Tool mal configuré ou mal encadré peut créer de vrais tickets, modifier de vraies données, envoyer de vrais emails — sans confirmation humaine si vous ne l'avez pas prévu.

C'est pourquoi la gouvernance des Tools est la priorité absolue d'un déploiement MCP.

**[Slide : composant 4 — Les Resources (Ressources)]**

Composant 4 : les Resources — les ressources.

Une Resource est une donnée que Claude peut lire via le serveur MCP. C'est une capacité de lecture — pas d'écriture.

Exemples :
- Une fiche client Salesforce en lecture seule
- Un fichier de configuration dans un répertoire partagé
- Le calendrier de disponibilité d'une équipe
- Un rapport financier dans un outil de BI

Les Resources sont généralement moins risquées que les Tools — Claude ne modifie rien. Mais elles soulèvent des questions de confidentialité : quelles données Claude peut-il lire ? Pour quel usage ? Avec quelles garanties de non-rétention ?

**[Slide : composant 5 — Les Permissions]**

Composant 5 : les Permissions.

Les Permissions définissent ce que le client MCP (Claude) est autorisé à faire avec les Tools et les Resources exposés par le serveur.

C'est le mécanisme de contrôle d'accès. Exactement comme un compte utilisateur dans votre ERP a des droits définis — lecture seule, écriture sur certains modules, interdiction sur d'autres.

Pour chaque déploiement MCP, vous devez définir explicitement :
- Quels Tools Claude peut utiliser (et lesquels lui sont interdits)
- Quelles Resources Claude peut lire
- Sous quelles conditions (périmètre, utilisateur, contexte)

**[Slide : cas concret PME — assistant RH connecté SIRH]**

Voyons comment ces 5 composants s'articulent dans un cas réel.

Contexte : une PME industrielle de 120 personnes. Le service RH a un assistant Claude configuré en M8 pour répondre aux questions des managers sur les congés, les procédures, les contrats. Ils veulent l'améliorer : plutôt que de recharger les fichiers chaque semaine, ils veulent que l'assistant accède directement au SIRH.

Architecture déployée :

Le Serveur MCP est installé sur l'infrastructure interne et connecté au SIRH. Il expose deux types de capacités.

Côté Resources (lecture) :
- Solde de congés par employé (lecture seule)
- Calendrier des absences de l'équipe (lecture seule)
- Fiches de poste (lecture seule)

Côté Tools (écriture) :
- `submit_leave_request` : soumet une demande de congé — mais uniquement après confirmation explicite du manager dans l'interface

Les Permissions sont définies ainsi :
- Claude peut lire les soldes de congés UNIQUEMENT pour les membres de l'équipe du manager connecté
- Claude ne peut pas lire les données salariales — ce Resource est exclu
- Le Tool `submit_leave_request` déclenche toujours une confirmation humaine avant exécution

Résultat : les managers obtiennent des réponses ancrées dans les données réelles de leur équipe, sans copier-coller, sans données obsolètes. Et aucune action n'est exécutée dans le SIRH sans validation humaine explicite.

C'est ce que permet une architecture MCP bien gouvernée."

---

## 4. Ce que le référent IA doit gouverner (3 min)

**[Slide : titre "4 responsabilités non délégables"]**

"Connecter l'IA à vos systèmes, c'est augmenter sa capacité — et augmenter proportionnellement votre responsabilité de gouvernance.

Il y a quatre responsabilités que le référent IA ne peut pas déléguer à l'équipe technique.

**[Slide : responsabilité 1 — Les décisions humaines obligatoires]**

Responsabilité 1 : définir quels Tools nécessitent une confirmation humaine.

Règle par défaut : tout Tool qui modifie des données dans un système de production doit déclencher une étape de validation humaine avant exécution. Pas une validation possible — une validation obligatoire, inscrite dans la configuration.

Un Tool qui envoie des emails, crée des tickets, met à jour des contacts, soumet des formulaires : confirmation humaine systématique.

Un Tool qui lit des données, génère des rapports, prépare des brouillons : peut fonctionner sans confirmation, sous réserve que les Permissions soient bien définies.

**[Slide : responsabilité 2 — Les logs]**

Responsabilité 2 : s'assurer que chaque action MCP est journalisée.

Pour chaque Tool exécuté, vous devez pouvoir répondre : qui a demandé l'action, quel outil l'a exécutée, à quelle date et heure, avec quels paramètres, quel a été le résultat.

Ce n'est pas de la bureaucratie. C'est la condition pour auditer un incident, prouver une conformité, et identifier un comportement anormal avant qu'il cause des dégâts.

**[Slide : responsabilité 3 — Les tests de robustesse]**

Responsabilité 3 : tester le dispositif avant déploiement — et après chaque modification.

Les 4 scénarios de test de M8 s'appliquent. Ajoutez-y deux scénarios spécifiques MCP :

Scénario 5 — Données inattendues : que se passe-t-il si le SIRH renvoie une donnée vide, une erreur, ou un format inattendu ? L'assistant gère-t-il l'erreur proprement ou produit-il une réponse absurde ?

Scénario 6 — Demande hors permissions : Claude tente-t-il d'accéder à une Resource ou un Tool qui lui est interdit ? Le système lui répond-il correctement, et Claude signale-t-il la limite ?

**[Slide : responsabilité 4 — Le rollback]**

Responsabilité 4 : avoir un plan de rollback.

Avant de déployer un connecteur MCP en production, définissez comment vous le déconnectez si quelque chose ne va pas.

La déconnexion doit être possible en moins de 10 minutes. Elle doit être testée avant le déploiement — pas le jour de l'incident.

Et l'assistant doit continuer à fonctionner en mode dégradé si le serveur MCP est indisponible — avec des messages clairs pour l'utilisateur, pas des erreurs techniques."

---

## 5. Clôture + transition M11 (2 min)

**[Retour caméra — ton direct]**

"Vous avez maintenant tous les composants d'un dispositif IA complet.

M8 — vous savez configurer les règles permanentes d'un assistant.
M9 — vous savez lui donner une base de connaissance fiable et maintenue.
M10 — vous savez connecter cet assistant à vos outils métier en temps réel.

C'est l'architecture complète d'un dispositif IA au niveau 🟣 Industrialiser.

Mais avoir les composants, ce n'est pas gouverner le dispositif.

Un système bien configuré qui n'est pas maintenu se dégrade. Une base de connaissance qui n'est pas révisée devient obsolète. Un connecteur MCP dont les permissions ne sont pas auditées crée des risques invisibles.

M11 vous donnera le cadre pour gouverner ce dispositif dans la durée.

Pas comme un projet informatique qui se termine à la mise en production. Comme un actif organisationnel qui s'améliore, qui s'adapte, et qui reste fiable parce que quelqu'un en est responsable.

C'est le dernier module. Et le plus important pour ceux qui veulent que leur dispositif IA soit encore utile dans 18 mois."

---

## Notes de production

- **Ton** : technique mais accessible — ce module s'adresse à des profils mixtes (IT + référents IA). Éviter le jargon développeur pur (pas de code, pas de CLI) tout en restant précis sur les concepts
- **Avertissement N3** : lire à caméra, pas en slide — le ton doit être celui d'un briefing professionnel sérieux
- **Analogie USB-C** : visuel fort — montrer un câble USB-C à l'écran si possible, ou l'afficher en slide. C'est l'accroche mémorielle principale
- **Visuels** : schéma architecture (Serveur MCP ↔ Client ↔ Tools/Resources) simple et clair · 1 slide par composant · slide comparaison avant/après
- **Cas concret SIRH** : afficher l'architecture sous forme de tableau à l'écran — Resources autorisées / Tools autorisés / Permissions définies — lisible d'un coup d'œil
- **Point fort** : les 4 responsabilités non délégables — présenter comme un cadre de décision, pas une liste technique. Lire lentement, une par une.
- **À soigner** : la distinction Resources (lecture) vs Tools (écriture) — c'est la distinction de risque fondamentale. Souligner visuellement à chaque occurrence
- **Transition M11** : "le dernier module — et le plus important" — créer l'envie, pas la pression
- **Durée estimée** : ~20 min à vitesse standard · les sections 2 et 3 peuvent aller jusqu'à 22 min si les exemples sont développés en live
