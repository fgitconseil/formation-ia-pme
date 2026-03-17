# M4 — Les 4 types de prompts
> Niveau : 🟡 N2 · Format : Vidéo · Durée cible : ~20 min
> Version script : v2 · Statut : BROUILLON
> Corrections v2 : SWOT/PESTEL + few-shot + thinking + agentique (NotebookLM)

---

## Métadonnées

| Champ | Valeur |
|---|---|
| Compétence cible | C3 — Rédiger un prompt selon les 4 types d'intention |
| Public | Employés ayant validé le Niveau 1 |
| Prérequis | M1, M2, M3 (Niveau 1 validé) |
| Module suivant | M5 — La méthode par niveaux 🟢🟡🔵🟣 |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche terrain                   (2 min)
2. Type 1 — Prompt de production      (4 min)
3. Type 2 — Prompt d'exploration      (5 min)
4. Type 3 — Prompt de structuration   (4 min)
5. Type 4 — Prompt de vérification    (4 min)
6. Synthèse + transition M5           (5 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Je vais vous raconter une erreur que je vois chaque semaine.

Un manager a une tâche à faire — disons analyser trois offres concurrentes avant une réunion stratégique. Il ouvre l'IA et il écrit : 'Analyse ces trois offres et dis-moi laquelle choisir.'

L'IA produit une réponse longue, bien structurée, avec des comparaisons. Mais quelque chose cloche. Les critères d'analyse ne sont pas les siens. Le format n'est pas ce dont il avait besoin. Et la recommandation finale est trop catégorique — elle ne tient pas compte du contexte.

Il recommence. Même résultat. Il se dit que l'IA n'est pas vraiment utile pour ce genre de tâche.

Ce qu'il ne savait pas, c'est qu'il utilisait le mauvais type de prompt.

Il avait besoin d'un prompt d'exploration — 'cartographie-moi les options avec leurs critères'. Il a utilisé un prompt de production — 'fais le choix à ma place'.

Ce module va vous apprendre à distinguer les 4 types de prompts. Parce qu'un mauvais type de prompt génère une mauvaise catégorie de réponse — même si le prompt est parfaitement rédigé.

Les 4 types ne sont pas des niveaux de complexité. Ce sont des intentions différentes. Production, Exploration, Structuration, Vérification. Chacun a son gabarit, ses règles, ses pièges."

---

## 2. Type 1 — Prompt de production (4 min)

**[Slide : titre « Type 1 — Production · Intention : Créer »]**

"Le premier type, c'est le prompt de production.

Vous l'utilisez quand vous savez exactement ce que vous voulez obtenir et que vous avez besoin que l'IA le produise pour vous.

Un email. Une synthèse. Un plan. Un compte rendu. Une proposition commerciale. Un script. Une fiche produit.

La condition, c'est que le livrable soit défini. Si vous ne savez pas encore ce que vous voulez produire — on verra ça avec le type 2.

**[Slide : gabarit de production]**

Le gabarit de production a 7 champs :

```
Rôle :        [Qui est l'IA dans ce contexte ?]
Objectif :    [Quel livrable précis doit être produit ?]
Contexte :    [Pour qui, dans quel cadre ?]
Données :     [Ce que vous fournissez — anonymisé]
Format :      [Structure exacte attendue en output]
Contraintes : [Longueur, ton, ce à éviter]
Exemples :    [Exemple de bon résultat : coller 1-2 exemples du format attendu]
```

**[Slide : pourquoi le champ Exemples]**

Ce dernier champ — les exemples — est celui que la plupart des gens oublient. Et c'est souvent le plus efficace.

L'IA apprend par imitation autant que par instruction. Lui montrer un exemple de ce que vous attendez — une réponse que vous avez déjà validée, un format que vous aimez, un ton que vous utilisez — est la méthode la plus fiable pour cadrer son output.

Si vous avez déjà un email bien rédigé dans ce style, collez-le. Si vous avez un format de compte rendu que votre direction apprécie, montrez-le. L'IA va s'en servir comme référence.

C'est ce que les experts appellent le 'few-shot prompting' — 'few-shot' parce que quelques exemples suffisent. Un ou deux, pas dix.

**[Slide : exemple concret]**

Exemple complet :

```
Rôle : Consultant en communication interne
Objectif : Rédiger un email annonçant la nouvelle politique d'usage de l'IA
Public : Managers non experts
Longueur : 250 mots maximum
Ton : Pédagogique et rassurant, pas alarmiste
Contraintes : Mentionner le respect du RGPD et le maintien du contrôle humain
Exemples : [Voici un email de ce type que nous avons envoyé en janvier
            et qui a bien été reçu : ...]
```

Remarquez : chaque champ apporte une contrainte précise. Plus les champs sont renseignés, moins l'IA doit 'deviner' — et moins elle se trompe.

Le point clé du prompt de production : si vous ne précisez pas le format, l'IA choisit. Et son choix n'est pas toujours le vôtre."

---

## 3. Type 2 — Prompt d'exploration (5 min)

**[Slide : titre « Type 2 — Exploration · Intention : Comprendre »]**

"Le deuxième type, c'est le prompt d'exploration.

Vous l'utilisez quand vous ne savez pas encore ce que vous voulez produire — mais que vous avez besoin de comprendre un sujet, de cartographier des options, d'identifier des risques ou de préparer une décision.

Retour à notre manager du début. Il devait analyser trois offres concurrentes. Il n'avait pas encore de critères clairs. Il avait besoin de voir le terrain avant de choisir. C'est un prompt d'exploration.

La distinction avec la production : dans l'exploration, le livrable attendu est une cartographie d'options ou une analyse structurée — pas une décision finale.

**[Slide : gabarit d'exploration]**

```
Rôle :              [Expert dans le domaine]
Sujet :             [Ce qu'on veut explorer]
Périmètre :         [Limites de l'analyse — quoi inclure, quoi exclure]
Cadre d'analyse :   [Voir note ci-dessous]
Critères :          [Ce qui doit être hiérarchisé ou priorisé]
Format :            [Tableau + synthèse exécutive — toujours conclure par une recommandation]
Réflexion :         [Réfléchis étape par étape avant de répondre.
                     Montre ton raisonnement entre balises <thinking>.]
```

**[Slide : note sur le cadre d'analyse — SWOT et PESTEL]**

Un point d'attention sur le champ 'Cadre d'analyse'.

Vous trouverez souvent des recommandations d'utiliser des outils comme le SWOT ou le PESTEL. Voici ce que ces acronymes signifient :

SWOT : Forces · Faiblesses · Opportunités · Menaces. Un cadre pour évaluer la position d'une entreprise ou d'un projet sur deux axes — interne et externe.

PESTEL : Politique · Économique · Social · Technologique · Environnemental · Légal. Un cadre pour analyser le contexte macro-environnemental qui influence une activité.

Ces outils sont utiles si vous les connaissez et si votre analyse s'y prête. Si ce n'est pas le cas, écrivez simplement : 'Suggère-moi un cadre d'analyse stratégique adapté à ma situation.' L'IA choisira ou proposera le cadre le plus pertinent pour votre question.

Il n'y a pas d'obligation d'utiliser ces noms. Ce qui compte, c'est de préciser quelle dimension vous voulez analyser.

**[Slide : le champ Réflexion — pourquoi il change tout]**

Le champ 'Réflexion' mérite une explication.

Quand vous demandez à l'IA de 'montrer son raisonnement', elle ralentit sa prédiction et décompose son analyse étape par étape avant de conclure. C'est ce qu'on appelle le Chain of Thought — raisonnement en chaîne.

Concrètement : l'IA commence par identifier les éléments pertinents, les organise, teste ses hypothèses, puis donne une réponse. Au lieu de sauter directement à la conclusion.

Les sources Anthropic qualifient cette technique d'"arme secrète" pour les prompts d'exploration et de vérification. Elle réduit les erreurs de raisonnement, rend les inférences plus fiables — et vous permet de voir où l'IA a peut-être mal interprété votre question.

**[Slide : une précaution sur l'exploration — le cut-off et le RAG]**

Une précaution spécifique aux prompts d'exploration : si votre analyse porte sur des données récentes — évolutions sectorielles, réglementations 2025-2026, chiffres de marché — l'IA peut ne pas les connaître.

Sa date de coupure l'empêche d'accéder aux informations postérieures à son entraînement. Pour une analyse stratégique qui dépend de données récentes, vous devez les lui fournir directement.

La solution technique pour ça, c'est le RAG — donner à l'IA vos documents de référence actualisés pour que son analyse repose sur vos données, pas sur des données génériques potentiellement périmées. M6 explique comment faire.

**[Slide : exemple concret]**

Exemple pour notre manager :

```
Rôle : Consultant stratégique
Sujet : Comparer 3 offres fournisseurs sur [critères à définir]
Périmètre : Critères techniques, prix, service après-vente, risques de dépendance
Cadre : Matrice risques / bénéfices
Format : Tableau comparatif + synthèse en 5 lignes
Hiérarchisation : Par impact sur notre activité principale
Note : Ne prends pas la décision finale — cartographie les options
Réflexion : Réfléchis étape par étape, montre ton raisonnement entre balises <thinking>
```

**[Slide : le risque de l'exploration]**

Le risque principal de l'exploration, c'est la dispersion.

L'IA peut générer beaucoup — trop de critères, trop de scénarios, trop d'angles. Pour éviter ça, ajoutez toujours à la fin : 'Conclue par 3 recommandations prioritaires' ou 'Hiérarchise par impact décroissant'.

Sans cette instruction, vous obtenez un catalogue. Avec elle, vous obtenez un outil d'aide à la décision."

---

## 4. Type 3 — Prompt de structuration (4 min)

**[Slide : titre « Type 3 — Structuration · Intention : Organiser »]**

"Le troisième type, c'est le prompt de structuration.

Vous l'utilisez quand vous avez du contenu brut — des notes de réunion, une transcription, un email long, des informations éparses — et que vous voulez l'organiser sans rien perdre.

La différence avec la production : vous ne demandez pas à l'IA de créer. Vous lui donnez une matière brute et vous lui demandez de la mettre en ordre.

C'est l'un des usages les plus puissants et les moins risqués de l'IA. Parce que vous fournissez toutes les données — l'IA n'a pas à inventer. Son seul rôle est d'organiser.

**[Slide : gabarit de structuration]**

```
Rôle :           [Expert en structuration documentaire]
Contenu source : [Le texte brut — copié-collé dans le prompt]
Objectif :       [Quel type de document en output]
Format cible :   [Plan hiérarchique / tableau / checklist / sections numérotées]
Contraintes :    [Ne rien supprimer — ajouter une section 'Points à clarifier']
Suivi :          [À chaque itération, liste ce qui a été traité et ce qui reste à traiter]
```

**[Slide : le champ Suivi — state tracking]**

Le champ 'Suivi' est particulièrement utile quand vous travaillez sur un document long ou un chantier en plusieurs sessions.

Demander à l'IA de lister ce qui a été traité et ce qui reste à faire lui permet de ne pas perdre le fil entre deux échanges. Sans cette instruction, l'IA repart de zéro à chaque message et peut oublier des sections déjà traitées ou en reprendre d'autres arbitrairement.

Formulation simple : 'À chaque réponse, commence par une ligne indiquant les sections déjà structurées et celles restant à traiter.'

**[Slide : exemple concret]**

Exemple — notes de réunion :

```
Rôle : Expert en structuration documentaire
Contenu : [Notes brutes de la réunion du 14 mars]
Objectif : Transformer en compte rendu de réunion
Format : Sections numérotées — Contexte / Décisions prises / Actions / Points ouverts
Contraintes : Ne supprimer aucune information
              Ajouter une section "Points à clarifier" pour les éléments ambigus
Suivi : Commence par lister les sections que tu as pu renseigner
        et celles qui nécessitent des informations complémentaires
```

**[Slide : la règle d'or de la structuration]**

La règle d'or du prompt de structuration est simple : zéro perte d'information.

L'IA a tendance à synthétiser quand elle structure. Ce n'est pas ce que vous lui demandez — vous lui demandez d'organiser.

La formulation 'Ne supprimer aucune information' doit être présente dans tous vos prompts de structuration. Ajoutez systématiquement la demande d'une section 'Points à clarifier' — c'est là que l'IA signale les ambiguïtés plutôt que de les résoudre arbitrairement."

---

## 5. Type 4 — Prompt de vérification (4 min)

**[Slide : titre « Type 4 — Vérification · Intention : Contrôler »]**

"Le quatrième type, c'est le prompt de vérification.

Vous l'utilisez quand vous avez un document existant et que vous voulez le soumettre à un contrôle — vérifier sa conformité, identifier ses lacunes, détecter des incohérences, valider sa structure.

La différence fondamentale avec les trois autres types : vous ne demandez pas à l'IA de produire ni d'organiser. Vous lui demandez de contrôler.

C'est le type de prompt qui requiert le plus de rigueur dans le cadrage — parce que la valeur d'une vérification dépend entièrement des critères de vérification que vous fournissez.

**[Slide : gabarit de vérification]**

```
Rôle :      [Expert dans le domaine concerné]
Élément :   [Le document à vérifier — collé dans le prompt]
Critères :  [Les standards, normes, règles auxquels comparer]
Retour :    [Rapport d'écarts structuré]
Règle :     [Cite les passages utilisés · Si absent, indique-le · Signale les zones d'incertitude]
Réflexion : [Réfléchis étape par étape avant de vérifier.
             Montre ton raisonnement entre balises <thinking>.]
```

**[Slide : pourquoi la Réflexion est indispensable en vérification]**

Sur un prompt de vérification, le champ Réflexion n'est pas optionnel.

Sans lui, l'IA peut appliquer ses critères trop vite et rater des nuances — valider un passage ambigu parce qu'il ressemble à quelque chose de conforme, ou signaler une alerte sur un élément qui est en fait correctement géré.

Avec le raisonnement explicité, vous voyez comment l'IA a interprété chaque critère. Vous pouvez corriger son interprétation si elle est fausse, avant qu'elle ne contamine toute la vérification.

**[Slide : exemple concret]**

Exemple — vérification d'une charte IA interne :

```
Rôle : Expert conformité RGPD
Élément : [Projet de charte IA interne — ci-dessous]
Critères : Article 22 RGPD (décisions automatisées) + exigence de contrôle humain
Retour : Rapport d'écarts — ce qui est conforme / ce qui manque / ce qui est ambigu
Règle : Cite les articles RGPD mobilisés
        Si un critère n'est pas couvrable sans source externe, indique-le
        Signale toute zone d'interprétation
Réflexion : Réfléchis étape par étape, montre ton raisonnement entre balises <thinking>
```

**[Slide : l'avertissement sur la vérification]**

Un avertissement important.

La vérification par l'IA ne remplace pas la vérification par un expert humain.

Elle est utile pour détecter des lacunes évidentes, structurer un premier audit ou préparer un avis juridique. Mais sur des sujets à fort enjeu réglementaire — RGPD, droit du travail, conformité sectorielle — la relecture d'un expert reste indispensable.

L'IA peut rater une obligation légale récente (cut-off), mal interpréter une nuance juridique, ou citer un article avec une formulation incorrecte. La vérification par l'IA est un premier filtre, pas un certificat de conformité."

---

## 6. Synthèse + transition M5 (5 min)

**[Slide : tableau de synthèse des 4 types]**

"Voilà la carte mentale des 4 types :

| Type | Intention | Quand l'utiliser | Risque si mal choisi |
|------|-----------|-----------------|---------------------|
| Production | Créer | Livrable défini | Résultat générique |
| Exploration | Comprendre | Sujet ouvert | Dispersion sans décision |
| Structuration | Organiser | Contenu brut | Perte d'information |
| Vérification | Contrôler | Document existant | Validation superficielle |

**[Slide : la question clé avant de prompter]**

Avant d'écrire chaque prompt, posez-vous cette question :

*'Qu'est-ce que je veux que l'IA fasse : créer, comprendre, organiser ou contrôler ?'*

La réponse à cette question détermine le gabarit à utiliser. Et le gabarit détermine la qualité du résultat.

Un manager qui sait distinguer ces 4 intentions obtient en moyenne un résultat utilisable dès le premier prompt. Celui qui ne les distingue pas passe en moyenne 3 tentatives à reformuler avant d'arriver au même résultat.

Ce n'est pas une question de talent. C'est une question de méthode.

**[Slide : les 4 types et la progression 🟢🟡🔵🟣]**

Ces 4 types s'inscrivent dans la progression que vous allez découvrir dans M5.

🟢 Structuration — c'est votre point de départ. Vous organisez ce que vous avez. C'est l'usage le moins risqué, le plus accessible.

🟡 Production et Vérification — vous fiabilisez chaque sortie. Vous vérifiez les faits critiques, vous contrôlez les formats. C'est là que les gabarits font toute la différence.

🔵 Exploration avec Réflexion (Chain of Thought) — vous analysez avec rigueur. Vous demandez à l'IA de montrer son raisonnement, de cartographier les options, de construire un argument étape par étape.

🟣 Agentique — vous déléguez une mission entière. C'est le territoire du Niveau 3.

Ce tableau n'est pas une hiérarchie — ce sont des niveaux d'engagement. Selon votre objectif du moment, vous utilisez le niveau qui correspond.

**[Slide : le 5e type — le prompt agentique]**

En 2026, un 5e type émerge dans les usages avancés.

C'est le prompt de délégation, ou prompt agentique.

Il ne demande pas un livrable. Il ne demande pas une analyse. Il confie une mission entière à l'IA — avec une autonomie de recherche, de décision intermédiaire et d'exécution.

Exemple : 'Analyse les 10 derniers contrats clients, identifie les 3 clauses les plus négociées, compare avec nos conditions générales et produis un mémo de recommandations.'

L'IA ne répond pas en une fois — elle orchestre une séquence de tâches, consulte des sources, produit des résultats intermédiaires et synthétise.

Ce type de prompt exige une infrastructure technique différente — des outils dédiés, une supervision humaine formalisée, une gestion du risque adaptée. C'est le territoire du Niveau 3 : M8 vous apprend à configurer l'assistant, M10 entre dans les architectures agentiques.

Pour l'instant, retenez que les 4 types de ce module couvrent l'essentiel de vos usages quotidiens. Le prompt agentique, c'est la prochaine étape — pas la première.

**[Retour caméra]**

Dans le module suivant — M5 — on va aller plus loin.

Maintenant que vous savez ce que vous voulez demander, on va vous montrer comment le demander avec un niveau de qualité croissant.

C'est la méthode par niveaux 🟢🟡🔵🟣. Elle s'applique aux 4 types de prompts. Et elle est ce qui fait la différence entre l'usage occasionnel et l'usage professionnel structuré.

Le quiz juste après va tester les 4 types. Prenez 2 minutes pour noter quel type vous utilisez le plus souvent — et lequel vous avez le moins pratiqué. C'est votre point de départ pour M5."

---

## Notes de production

- **Ton** : pédagogique mais rythmé — ce module est plus 'technique' que M1/M2, compenser avec des exemples concrets à chaque type
- **Rythme** : les 4 gabarits doivent être montrés à l'écran (slide ou zoom sur texte) — pas seulement lus
- **Visuels** : 1 slide par type (titre + gabarit + exemple) + 1 slide synthèse finale + 1 slide progression 🟢→🟣 = ~11 slides
- **Accroche mémorielle** : l'histoire du manager qui confond exploration et production — à jouer avec légèreté, pas condescendance
- **Point fort à soigner** : le tableau synthèse de fin — c'est ce que les apprenants vont photographier
- **Champ Exemples (few-shot)** : l'expliquer avec un exemple visuel — "comme si vous montriez un modèle à un nouveau collaborateur"
- **Champ Réflexion (CoT)** : démontrer à l'écran si possible — montrer la différence avant/après activation des balises `<thinking>`
- **SWOT/PESTEL** : afficher les acronymes décomposés à l'écran pendant la lecture
- **5e type agentique** : présenter avec enthousiasme modéré — "émergent, pas pour tout de suite" — pas de sur-promesse
- **À éviter** : noyer le gabarit dans les explications — montrer le gabarit, l'expliquer en 30 secondes, donner l'exemple, passer au suivant
- **Transition vers M5** : nommer 🟢🟡🔵🟣 avec la carte de correspondance — créer l'attente sans tout révéler
