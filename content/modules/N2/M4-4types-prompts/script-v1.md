# M4 — Les 4 types de prompts
> Niveau : 🟡 N2 · Format : Vidéo · Durée cible : ~20 min
> Version script : v1 · Statut : BROUILLON

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
2. Type 1 — Prompt de production      (3 min)
3. Type 2 — Prompt d'exploration      (4 min)
4. Type 3 — Prompt de structuration   (4 min)
5. Type 4 — Prompt de vérification    (3 min)
6. Synthèse + transition M5           (4 min)
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

Ce module va vous apprendre à distinguer les 4 types de prompts. Parce qu'un mauvais type de prompt génère une mauvaise catégorie de réponse — même si le prompt est parfaitement rédigé."

---

## 2. Type 1 — Prompt de production (3 min)

**[Slide : titre « Type 1 — Production · Intention : Créer »]**

"Le premier type, c'est le prompt de production.

Vous l'utilisez quand vous savez exactement ce que vous voulez obtenir et que vous avez besoin que l'IA le produise pour vous.

Un email. Une synthèse. Un plan. Un compte rendu. Une proposition commerciale. Un script. Une fiche produit.

La condition, c'est que le livrable soit défini. Si vous ne savez pas encore ce que vous voulez produire — on verra ça avec le type 2.

**[Slide : gabarit de production]**

Le gabarit de production a 6 champs :

```
Rôle :        [Qui est l'IA dans ce contexte ?]
Objectif :    [Quel livrable précis doit être produit ?]
Contexte :    [Pour qui, dans quel cadre ?]
Données :     [Ce que vous fournissez — anonymisé]
Format :      [Structure exacte attendue en output]
Contraintes : [Longueur, ton, ce à éviter]
```

**[Slide : exemple concret]**

Exemple réel :

```
Rôle : Consultant en communication interne
Objectif : Rédiger un email annonçant la nouvelle politique d'usage de l'IA
Public : Managers non experts
Longueur : 250 mots maximum
Ton : Pédagogique et rassurant, pas alarmiste
Contraintes : Mentionner le respect du RGPD et le maintien du contrôle humain
```

Remarquez : chaque champ apporte une contrainte précise. Plus les champs sont renseignés, moins l'IA doit 'deviner' — et moins elle se trompe.

Le point clé du prompt de production : si vous ne précisez pas le format, l'IA choisit. Et son choix n'est pas toujours le vôtre."

---

## 3. Type 2 — Prompt d'exploration (4 min)

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
Cadre d'analyse :   [SWOT / PESTEL / matrice risques-impact / ou demander à l'IA de choisir]
Critères :          [Ce qui doit être hiérarchisé ou priorisé]
Format :            [Tableau + synthèse exécutive — toujours conclure par une recommandation]
```

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
```

**[Slide : exemple concret]**

Exemple — notes de réunion :

```
Rôle : Expert en structuration documentaire
Contenu : [Notes brutes de la réunion du 14 mars]
Objectif : Transformer en compte rendu de réunion
Format : Sections numérotées — Contexte / Décisions prises / Actions / Points ouverts
Contraintes : Ne supprimer aucune information
              Ajouter une section "Points à clarifier" pour les éléments ambigus
```

**[Slide : la règle d'or de la structuration]**

La règle d'or du prompt de structuration est simple : zéro perte d'information.

L'IA a tendance à synthétiser quand elle structure. Ce n'est pas ce que vous lui demandez — vous lui demandez d'organiser.

La formulation 'Ne supprimer aucune information' doit être présente dans tous vos prompts de structuration. Ajoutez systématiquement la demande d'une section 'Points à clarifier' — c'est là que l'IA signale les ambiguïtés plutôt que de les résoudre arbitrairement."

---

## 5. Type 4 — Prompt de vérification (3 min)

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
```

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
```

**[Slide : l'avertissement sur la vérification]**

Un avertissement important.

La vérification par l'IA ne remplace pas la vérification par un expert humain.

Elle est utile pour détecter des lacunes évidentes, structurer un premier audit ou préparer un avis juridique. Mais sur des sujets à fort enjeu réglementaire — RGPD, droit du travail, conformité sectorielle — la relecture d'un expert reste indispensable.

L'IA peut rater une obligation légale récente (cut-off), mal interpréter une nuance juridique, ou citer un article avec une formulation incorrecte. La vérification par l'IA est un premier filtre, pas un certificat de conformité."

---

## 6. Synthèse + transition M5 (4 min)

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

**[Retour caméra]**

Dans le module suivant — M5 — on va aller plus loin.

Maintenant que vous savez ce que vous voulez demander, on va vous montrer comment le demander avec un niveau de qualité croissant.

C'est la méthode par niveaux 🟢🟡🔵🟣. Elle s'applique aux 4 types de prompts.
Et elle est ce qui fait la différence entre l'usage occasionnel et l'usage professionnel structuré.

Le quiz juste après va tester les 4 types. Prenez 2 minutes pour noter quel type vous utilisez le plus souvent — et lequel vous avez le moins pratiqué. C'est votre point de départ pour M5."

---

## Notes de production

- **Ton** : pédagogique mais rythmé — ce module est plus 'technique' que M1/M2, compenser avec des exemples concrets à chaque type
- **Rythme** : les 4 gabarits doivent être montrés à l'écran (slide ou zoom sur texte) — pas seulement lus
- **Visuels** : 1 slide par type (titre + gabarit + exemple) + 1 slide synthèse finale = 9 slides
- **Accroche mémorielle** : l'histoire du manager qui confond exploration et production — à jouer avec légèreté, pas condescendance
- **Point fort à soigner** : le tableau synthèse de fin — c'est ce que les apprenants vont photographier
- **À éviter** : noyer le gabarit dans les explications — montrer le gabarit, l'expliquer en 30 secondes, donner l'exemple, passer au suivant
- **Transition vers M5** : nommer 🟢🟡🔵🟣 mais ne pas les expliquer — créer l'attente
