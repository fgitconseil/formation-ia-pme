# Quiz — M9 Projets et bases de connaissance
> 8 questions · Seuil de validation : 70% (6/8)
> Compétences testées : C5, C6

---

## Instructions

Choisissez la réponse la plus juste.
Corrigé en bas de page.

---

## Question 1

Quelle est la différence principale entre les Instructions de Projet et une Base de connaissance du Projet ?

A. Les Instructions de Projet sont plus rapides à configurer qu'une Base de connaissance du Projet
B. Les Instructions de Projet définissent comment l'IA traite une tâche. Une Base de connaissance du Projet embarque les données métier de votre organisation — les sources réelles, pas les règles de traitement.
C. Une Base de connaissance du Projet nécessite une équipe IT, les Instructions de Projet peuvent être configurées par n'importe qui
D. Il n'y a pas de différence — les deux permettent de sauvegarder des instructions réutilisables

---

## Question 2

Vous déposez 60 documents internes dans une Base de connaissance du Projet sans aucun travail de structuration préalable. Quel est le risque le plus probable ?

A. L'IA refusera de traiter autant de documents
B. L'IA pourra mélanger des versions différentes d'un même document, citer des règles obsolètes, ou confondre des procédures de services différents
C. Les réponses seront moins rapides mais tout aussi fiables
D. L'IA ignorera les documents les moins récents et s'appuiera uniquement sur les plus nouveaux

---

## Question 3

Votre Base de connaissance du Projet contient la convention collective de votre secteur et un accord d'entreprise daté de 2019. Une nouvelle négociation a eu lieu en 2024. Que faites-vous avant la prochaine mise à jour de la Base de connaissance ?

A. Rien — l'IA fera la différence entre un document récent et un document ancien
B. Archiver l'accord 2019 dans un dossier séparé, l'exclure de la Base de connaissance active, et intégrer l'accord 2024 à sa place
C. Laisser les deux documents — l'IA combinera les deux pour une réponse plus complète
D. Supprimer définitivement l'accord 2019 — les documents archivés ne sont jamais utiles

---

## Question 4

Le principe "garbage in, garbage out" appliqué aux Bases de connaissance du Projet signifie :

A. Une Base de connaissance avec beaucoup de données produit toujours de meilleures réponses qu'une Base avec peu de données
B. Des données de mauvaise qualité — contradictoires, obsolètes, mal structurées — produisent des réponses incorrectes, avec la même assurance que des données correctes
C. L'IA signale automatiquement quand les données sources sont de mauvaise qualité
D. Plus la Base de connaissance contient de données, plus le risque d'erreur est faible

---

## Question 5

Pourquoi le risque d'une donnée incorrecte dans une Base de connaissance du Projet est-il plus élevé que dans un prompt ponctuel mal formulé ?

A. Parce que les données d'une Base de connaissance sont chiffrées et difficiles à corriger
B. Parce qu'une Base de connaissance du Projet est déployée à l'échelle — une erreur dans les sources touche toutes les conversations de tous les utilisateurs, en continu, jusqu'à correction
C. Parce que les prompts ponctuels sont toujours relus par un humain avant usage
D. Il n'y a pas de différence de risque — l'impact est le même dans les deux cas

---

## Question 6

Avant d'intégrer un document dans une Base de connaissance du Projet, vous appliquez le niveau 🟡 (Fiabiliser). Quelle action est la plus critique ?

A. Vérifier que le document fait moins de 15 pages pour ne pas surcharger la Base de connaissance
B. Vérifier que le document est au format Markdown
C. Identifier si le document contient des affirmations sans date de mise à jour, des références croisées à d'autres versions, ou des sections contradictoires
D. Vérifier que le document a été approuvé par la direction

---

## Question 7

Vous avez configuré une Base de connaissance du Projet "Procédures qualité" pour votre service. Trois mois plus tard, une procédure a été révisée mais personne n'a mis à jour la Base de connaissance. Un manager a utilisé l'ancienne procédure après consultation de l'assistant. Quel point de votre dispositif a failli ?

A. La qualité du modèle IA utilisé
B. Le format des documents sources
C. La maintenance — la Base de connaissance n'avait pas de propriétaire désigné ni de calendrier de révision
D. Le prompt de l'utilisateur — il aurait dû vérifier la date du document cité

---

## Question 8

Quelle est la bonne fréquence de révision d'une Base de connaissance du Projet dans un domaine réglementaire (droit du travail, RGPD, normes sectorielles) ?

A. Une fois par an suffit — les réglementations changent rarement
B. À chaque nouvelle conversation — vérifier les sources avant chaque usage
C. Tous les 3 à 6 mois en révision planifiée, plus une révision déclenchée à chaque changement réglementaire connu dans le domaine
D. Seulement quand un utilisateur signale une erreur — les révisions préventives sont une perte de temps

---

## Corrigé

| # | Réponse | Justification |
|---|---------|---------------|
| 1 | **B** | Instructions de Projet = règles de traitement. Base de connaissance du Projet = données métier. La distinction est centrale dans M9. |
| 2 | **B** | Déposer des documents sans structuration = risque de mélange de versions, de citations obsolètes, de confusions entre services. C'est l'exemple de l'accroche du module. |
| 3 | **B** | La règle : un document actif = une Base de connaissance active. Les documents archivés sont conservés mais exclus de la Base de connaissance active. L'IA ne fait pas la différence toute seule. |
| 4 | **B** | L'IA produit des réponses cohérentes même à partir de données mauvaises. Elle ne signale pas spontanément la mauvaise qualité des sources. |
| 5 | **B** | L'effet d'échelle est le mécanisme clé du risque amplifié : une erreur dans une Base de connaissance déployée en équipe se multiplie par le nombre d'utilisateurs et de conversations. |
| 6 | **C** | La discipline 🟡 appliquée aux sources cible les zones d'ambiguïté, de contradiction et d'obsolescence — pas le format ou la longueur. |
| 7 | **C** | La maintenance est la faille la plus fréquente dans les Bases de connaissance déployées. Sans propriétaire et sans calendrier, la Base de connaissance se dégrade sans signal visible. |
| 8 | **C** | Révision planifiée (3-6 mois selon la vitesse de changement du domaine) + révision déclenchée sur événement (nouveau texte réglementaire, accord d'entreprise...). |

---

**Score ≥ 6/8 → Module validé · Passez à M10 (conditionnel) ou M11**
**Score < 6/8 → Revoir les sections structuration des sources (section 3) et risque amplifié (section 4)**
