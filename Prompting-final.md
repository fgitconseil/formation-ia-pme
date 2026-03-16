# 📘 Guide de collaboration avec l’IA Générative

> **Objectif** : rendre accessible à une population non experte une pratique structurée, sécurisée et industrialisable de l’IA conversationnelle.
Ce guide ne remplace ni l’expertise juridique, ni les procédures IT internes, ni les politiques de sécurité existantes. Il constitue un cadre méthodologique d’usage responsable.

---

## Positionnement du document

Ce document constitue la version consolidée du référentiel de collaboration avec les **Large Language Models (LLM)**.

Il est conçu comme :

- 📘 **Document institutionnel de référence**
- 🎓 **Support de formation opérationnel**
- 🧱 **Base de déclinaisons** (PPT, ateliers, charte interne, communications)
- 🏛 **Cadre de gouvernance organisationnelle**

---

## Architecture du guide

Le guide articule quatre dimensions complémentaires :

- Une **compréhension claire de l’outil**
- Une **gestion structurée des risques**
- Une **méthode progressive en maturité**
- Une **discipline de raisonnement et de pilotage**

Progression en maturité :

**🟢 Structurer → 🟡 Fiabiliser → 🔵 Optimiser → 🟣 Industrialiser**

---

# 1. Comprendre réellement ce qu’est un LLM

## 1.1 Nature technique

Un LLM est un **modèle statistique entraîné sur de vastes corpus textuels**.

Il ne comprend pas le sens comme un humain.
Il **prédit la suite la plus probable d’un texte** à partir du contexte fourni.

### Conséquences majeures

- Excellente capacité de structuration
- Reformulation performante
- Production de contenus plausibles mais parfois faux (hallucinations)
- Absence de signal spontané d’incertitude
- Date limite de connaissance (*cut-off*)

#### 🔎 Limite du cut-off et outils de recherche

Les modèles ne disposent pas nativement des informations postérieures à leur date d’entraînement.

L’utilisation d’outils de recherche web (Search) ou de navigation permet d’accéder à des informations récentes.

⚠️ Toutefois, ces outils augmentent l’exigence du niveau 🟡 (Fiabiliser) :

- Vérifier la fiabilité des sources
- Contrôler la date de publication
- Croiser les informations sensibles
- Distinguer faits établis et opinions

L’accès à plus d’information ne réduit pas le besoin de vérification - il l’augmente.

### 🔐 Règle d’or - Zéro confiance

> L’IA estime la probabilité. Elle ne garantit pas la vérité factuelle.

### Implications opérationnelles

- Clarifier explicitement la demande
- Encadrer les données sensibles
- Exiger des citations lorsque nécessaire
- Autoriser explicitement l’IA à dire « je ne sais pas »

---

## 1.2 Multimodal

Un LLM peut analyser différents formats :

- Graphiques
- Tableaux
- Images
- Captures d’écran
- Organigrammes

Il permet : **extraction, structuration, comparaison et synthèse**.

---

# 2. Gouvernance et gestion des risques

## Synthèse des risques majeurs

| Risque                       | Description                             | Mesure de contrôle                           |
| ---------------------------- | --------------------------------------- | -------------------------------------------- |
| Exfiltration de données      | Données sensibles envoyées dans l’outil | Interdits + anonymisation + formation        |
| Risque réputationnel         | Erreur publiée (dates, chiffres, droit) | Vérification + citations + validation        |
| Industrialisation prématurée | Automatiser un contenu non fiabilisé    | Respect strict 🟢🟡🔵 + pilote + supervision |

---

## 1️⃣ Exfiltration de données

| Élément | Description                                    | Mesure de contrôle           |
| ------- | ---------------------------------------------- | ---------------------------- |
| Risque  | Transmission involontaire de données sensibles | Politique claire + formation |
| Impact  | Juridique, contractuel, réputationnel          | Sanctions potentielles       |

### Interdictions formelles

- Données clients non anonymisées
- Code propriétaire
- Données RH sensibles

⚠️ Un document ouvert localement n’est pas visible par l’IA.

### Instruction de sécurisation à intégrer dans les prompts

```text
Réponds uniquement à partir des données fournies.
Si une information est absente, indique-le explicitement.
N’invente aucune donnée.
```

---

## 2️⃣ Risque réputationnel

| Élément | Description                                    | Mesure de contrôle             |
| ------- | ---------------------------------------------- | ------------------------------ |
| Risque  | Publication d’erreurs factuelles ou juridiques | Relecture humaine systématique |
| Impact  | Perte de crédibilité, risque médiatique        | Validation hiérarchique        |

### Toujours vérifier

- Dates
- Chiffres
- Citations
- Références réglementaires

Exiger les passages exacts mobilisés.

---

## 3️⃣ Industrialisation prématurée

| Élément | Description                            | Mesure de contrôle                |
| ------- | -------------------------------------- | --------------------------------- |
| Risque  | Automatiser un contenu non stabilisé   | Respect strict des niveaux 🟢🟡🔵 |
| Impact  | Propagation d’erreurs à grande échelle | Phase pilote obligatoire          |

### Règle fondamentale

> On ne transforme jamais un brouillon non fiabilisé en processus automatisé.

### Un contenu doit :

1. Être structuré sans perte (🟢)
2. Être vérifié et justifié (🟡)
3. Avoir subi plusieurs cycles d’amélioration (🔵)

La progression 🟢🟡🔵 constitue une **barrière de sécurité organisationnelle**.

---

# 3. Choisir le bon modèle

Le choix du modèle n’est pas une préférence technique, mais une décision proportionnée au niveau de risque et d’exigence attendu.

| Catégorie           | Usage                                    | Niveau recommandé |
| ------------------- | ---------------------------------------- | ----------------- |
| Raisonnement avancé | Analyse complexe, juridique, stratégique | 🟡🔵              |
| Généraliste         | Production polyvalente                   | 🟢🟡              |
| Flash / Mini        | Volume, tâches simples                   | 🟢                |

**Arbitrage = criticité × coût × volume × sensibilité.**

---

# 4. Progression en maturité

## Synthèse des niveaux

| Niveau            | Finalité                                 | Critère de validation        |
| ----------------- | ---------------------------------------- | ---------------------------- |
| 🟢 Structurer     | Organiser 100 % de la matière sans perte | Aucune information supprimée |
| 🟡 Fiabiliser     | Rendre le contenu vérifiable             | Sources citées               |
| 🔵 Optimiser      | Rendre le contenu exploitable            | Format réutilisable          |
| 🟣 Industrialiser | Intégrer dans un système gouverné        | Processus traçable et mesuré |


### 🎯 À retenir - Progression en maturité

🟢 Structurer → Mettre de l’ordre sans perdre d’information  
🟡 Fiabiliser → Rendre chaque affirmation vérifiable  
🔵 Optimiser → Transformer en outil directement exploitable  
🟣 Industrialiser → Intégrer dans un système gouverné et auditable  

⚠️ Aucun passage direct 🟢 → 🟣 n’est acceptable.

---

## 🟢 Structurer - Niveau 1

> Réorganiser **100 % de la matière brute sans lisser le fond**.

### Indicateurs de qualité

- Aucun élément omis
- Structure logique claire
- Points d’ambiguïté identifiés

### Prompt type

```text
Rôle : Expert en structuration documentaire
Objectif : Organiser ces notes en plan hiérarchique
Contraintes : Ne supprimer aucune information
Format : Markdown avec section "Points à clarifier"
```

---

## 🟡 Fiabiliser - Niveau 2

> Transformer un contenu structuré en contenu vérifiable.

### Indicateurs de qualité

- Citations explicites
- Obligations manquantes identifiées
- Zones de risque formalisées

### Prompt type

```text
Rôle : Expert conformité
Objectif : Vérifier conformité avec document joint
Instructions :
- Cite les passages exacts
- Identifie les obligations manquantes
- Si absent, indique-le explicitement
```

---

## 🔵 Optimiser - Niveau 3

> Transformer un document validé en outil opérationnel prêt à l’usage.

### Indicateurs de qualité

- Format directement exploitable
- Aucun retraitement manuel
- Adaptation claire au public cible

### Prompt type

```text
Je veux transformer ce document en kit opérationnel.
Avant de répondre, pose-moi 5 questions stratégiques.
Puis génère :
- FAQ
- Check-list
- Tableau synthétique
```

---

## 🟣 Industrialiser - Niveau 4

> Intégrer le livrable optimisé dans un système organisationnel mesurable et gouverné.

### Pré-requis

- Cycles d’amélioration 🔵 réalisés
- Validation juridique
- Analyse de risques formalisée

### Composants clés

| Dimension   | Contenu attendu       |
| ----------- | --------------------- |
| Processus   | Workflow documenté    |
| Outils      | Intégration sécurisée |
| Gouvernance | Rôles définis         |
| Traçabilité | Logs et archivage     |
| Pilotage    | KPI suivis            |

### Séquence type

```text
1) Stabiliser la version
2) Formaliser le workflow
3) Tester sur périmètre pilote
4) Mesurer
5) Ajuster
6) Déployer
```

⚠️ On n’industrialise jamais une première version.

---

# 5. Bonnes pratiques pour les prompts

## 5.1 Rôle de l’humain

Même au niveau avancé :

- L’IA propose.
- L’humain analyse.
- L’humain valide.
- L’humain décide.

> La responsabilité finale reste humaine.
L’usage de l’IA ne transfère aucune responsabilité décisionnelle à l’outil.

---

## 5.2 Recherche vs Rédaction

| Usage              | Finalité                       | Vigilance          |
| ------------------ | ------------------------------ | ------------------ |
| Outil de rédaction | Produire un livrable structuré | Vérifier cohérence |
| Outil de recherche | Obtenir des données récentes   | Vérifier sources   |

### Points clés

- Les modèles ont une date limite de connaissance (cut-off).
- Les mises à jour récentes ne sont pas garanties.
- Pour des sujets sensibles ou juridiques : privilégier des sources vérifiables.

---

## 5.3 Pièges à éviter

### 🟢 Structuration

- ❌ Confondre résumer et structurer.
- ✅ Objectif = zéro perte d’information.
- ❌ Oublier le format attendu.

### 🟡 Fiabilisation

- ❌ Valider sans citations.
- ❌ Interdire implicitement le « je ne sais pas ».

### 🔵 Optimisation

- ❌ Automatiser un contenu non validé.
- ❌ Multiplier les formats sans objectif.

---

## 5.4 Adapter le ton

Toujours préciser :

- Public
- Niveau d’expertise
- Longueur
- Ton
- Objectif (information ou décision)

```text
Public : non expert
Ton : pédagogique
Style : phrases courtes
Éviter : jargon
```

---

## 5.5 Formats stratégiques

| Format              | Quand l’utiliser                  | Bénéfice                        |
| ------------------- | --------------------------------- | ------------------------------- |
| Tableau Markdown    | Comparaisons, données structurées | Copie directe vers Excel / Word |
| Liste d’actions     | Plan opérationnel                 | Pilotage simple                 |
| Check-list          | Validation rapide                 | Réduction des oublis            |
| FAQ                 | Support utilisateur               | Clarté pédagogique              |
| JSON / Bloc de code | Intégration technique             | Automatisation                  |
| Plan hiérarchique   | Organisation d’idées              | Vision structurée               |

---

## 5.6 Détecteur qualité

```text
1) Le rôle est-il défini ?
2) La cible est-elle claire ?
3) Les données sont-elles explicites ?
4) L’IA peut-elle dire qu’elle ne sait pas ?
```

---

## 5.7 Cadrage inversé

```text
Je veux obtenir : [Résultat]
Voici mes données : [Données]
Avant de commencer :
- Pose-moi les 5 questions les plus pertinentes
- Puis propose le prompt idéal
```

---

## 5.8 Gestion des conversations longues

Les LLM fonctionnent avec une fenêtre de contexte limitée (*context window*). Lorsque le volume d’échanges devient important, certaines informations anciennes peuvent perdre en priorité ou en visibilité.

### Bonnes pratiques

- Diviser le travail par sous-tâche.
- Ouvrir une nouvelle session si le contexte devient dense.
- Résumer avant de poursuivre.

### Gestion active du contexte (Context Window Management)

Un résumé intermédiaire structuré permet :

- De recentrer l’IA sur l’objectif initial
- De consolider les décisions déjà prises
- De réduire le risque de dérive ou d’oubli

Exemple de prompt de recentrage :

```text
Résume en 10 lignes maximum :
- L’objectif initial
- Les décisions déjà actées
- Les points encore ouverts
Puis confirme que la suite reste alignée avec cet objectif.
```

---

# 6. Raisonnement à adopter

Cette section décrit la discipline cognitive à appliquer **à chaque interaction avec un LLM**. Elle constitue la charnière entre la méthode (section 4) et la pratique opérationnelle (section 5).

---

## Synthèse stratégique

| Étape            | Logique dominante        | Risque si omise             | Niveau principalement mobilisé |
| ---------------- | ------------------------ | --------------------------- | ------------------------------ |
| 🟢 Clarifier     | Cadrage                  | Mauvaise réponse pertinente | Structuration                  |
| 🟢 Décomposer    | Architecture             | Confusion ou oubli          | Structuration                  |
| 🟡 Diagnostiquer | Discernement des sources | Mélange implicite           | Fiabilisation                  |
| 🟡 Sécuriser     | Maîtrise du risque       | Hallucination crédible      | Fiabilisation                  |
| 🔵 Améliorer     | Robustesse               | Version fragile             | Optimisation                   |

---

## 🟢 Étape 1 - Clarifier

### Finalité

Définir précisément **ce qui doit être produit**, pour **qui**, et avec **quel niveau d’exigence**.

### Pourquoi c’est critique

Un LLM répond toujours à la question posée. Si la question est floue, la réponse sera structurellement floue - même si elle semble correcte.

### Points de cadrage

- Quel artefact doit être produit ? (note, plan, analyse, synthèse, check-list…)
- Qui va l’utiliser ? (manager, juriste, COMEX, opérationnel…)
- Quel niveau de profondeur est attendu ?
- Quel format est exploitable sans retraitement ?

### Critère de qualité

La cible et le format peuvent être reformulés en une phrase claire.

### Prompt type

```text
Avant de répondre :
- Reformule l’objectif en une phrase
- Identifie le public cible
- Confirme le format attendu
```

---

## 🟢 Étape 2 - Décomposer

### Finalité

Transformer une demande globale en sous-parties traitables.

### Pourquoi c’est critique

Un problème complexe non découpé génère une réponse superficielle. La décomposition structure la pensée.

### Questions structurantes

- Quelles connaissances sont nécessaires ?
- Quelles décisions doivent être prises ?
- Quels critères doivent être appliqués ?
- Quel ordre logique est pertinent ?

### Critère de qualité

Chaque sous-partie peut être traitée indépendamment.

### Prompt type

```text
Décompose cette demande en sous-étapes logiques.
Pour chacune : précise objectif, données nécessaires et livrable attendu.
```

---

## 🟡 Étape 3 - Diagnostiquer les données

### Finalité

Distinguer clairement :

- Ce qui est fourni
- Ce qui relève du savoir général du modèle

### Risque principal

L’IA complète implicitement avec des hypothèses plausibles.

### Règle critique

Un document non joint n’est pas visible. Une donnée non fournie sera comblée par probabilité.

### Décision à prendre explicitement

Souhaitez-vous :

- Une réponse basée uniquement sur les données fournies ?
- Une réponse enrichie par connaissance générale ?

### Prompt type

```text
Réponds uniquement à partir des données fournies.
Si une information manque, indique-le explicitement.
N’utilise aucune hypothèse implicite.
```

---

## 🟡 Étape 4 - Sécuriser

### Finalité

Réduire le risque d’erreur, d’invention ou d’affirmation non justifiée.

### Actions de sécurisation

- Exiger citations ou justification
- Autoriser explicitement "je ne sais pas"
- Identifier les zones d’incertitude

### Critère de robustesse

Toute affirmation sensible est traçable.

### Prompt type

```text
Cite les passages utilisés.
Si une information n’est pas présente, indique-le.
Signale toute zone d’incertitude.
```

---

## 🔵 Étape 5 - Boucle d’amélioration

### Finalité

Passer d’un contenu correct à un contenu robuste, stable et standardisable.

### Pourquoi c’est stratégique

Une première version est rarement optimale. La qualité provient de l’itération structurée.

### Logique d’itération

```text
1) Auto-critique structurée
2) Amélioration ciblée
3) Test d’usage réel
4) Ajustement
5) Nouvelle version
```

### Critères de passage vers 🔵

- Le livrable est directement exploitable
- Les ambiguïtés ont disparu
- Les risques ont été identifiés
- Le format est stabilisé

### Principe stratégique

La boucle d’amélioration est le moteur du passage 🟡 → 🔵.

⚠️ L’industrialisation (🟣) est impossible sans plusieurs cycles d’amélioration validés.

---

**En résumé :** Structurer organise.
Fiabiliser sécurise.
Optimiser stabilise.
Industrialiser systématise.

### 🧠 Discipline mentale à adopter

1. Clarifier avant d’agir  
2. Structurer avant de vérifier  
3. Vérifier avant d’optimiser  
4. Optimiser avant d’automatiser  

Cette séquence est une discipline, pas une option.

La discipline de raisonnement est ce qui transforme un usage opportuniste en pratique professionnelle.

# 7. Les 4 types de prompts

Les 4 types de prompts correspondent à **4 intentions cognitives distinctes**. Bien les distinguer permet d’éviter les confusions méthodologiques.

---

## Synthèse comparative

| Type          | Intention  | Quand l’utiliser  | Niveau dominant | Risque principal         |
| ------------- | ---------- | ----------------- | --------------- | ------------------------ |
| Production    | Créer      | Livrable défini   | 🟢              | Mauvais cadrage          |
| Exploration   | Comprendre | Sujet ouvert      | 🟢              | Dispersion               |
| Structuration | Organiser  | Contenu brut      | 🟢              | Perte d’information      |
| Vérification  | Contrôler  | Document existant | 🟡              | Validation superficielle |

---

## 7.1 Prompt de production (🟢 Base)

### Finalité

Produire un livrable lorsque l’objectif est clairement défini.

### Logique

On sait **ce que l’on veut produire**, mais pas encore la formulation optimale.

### Gabarit structuré

```text
Rôle :
Objectif :
Contexte :
Données disponibles :
Format attendu :
Contraintes :
Ordre d’exécution :
```

### Bonnes pratiques

- Toujours préciser le format final
- Définir le public cible
- Indiquer les contraintes (longueur, ton, niveau)

### Exemple concret

```text
Rôle : Consultant en communication RH
Objectif : Rédiger un email interne expliquant la nouvelle politique IA
Public : Managers
Longueur : 300 mots maximum
Ton : Pédagogique et rassurant
Contraintes : Mentionner RGPD et contrôle humain
```

### 🔵 Optimisation - Critique interne

```text
Après ta réponse :
1) Identifie les faiblesses
2) Propose des améliorations
3) Fournis une version optimisée
```

Cette étape permet le passage 🟢 → 🔵.

---

### 🔵 Optimisation avancée des prompts

Au-delà de la critique interne, l’optimisation peut inclure :

- **Standardisation du format** (check-list, tableau, JSON)
- **Adaptation multi-public** (opérationnel vs COMEX)
- **Compression stratégique** (résumé exécutif 5 lignes)
- **Transformation en workflow** (étapes, responsabilités, délais)

Exemple :

```text
Reformule ce livrable pour un COMEX en 10 lignes maximum.
Puis transforme-le en check-list opérationnelle pour managers.
Enfin génère un JSON des actions avec responsable et échéance.
```

Un prompt optimisé produit un livrable directement exploitable sans retraitement manuel.

---

## 7.2 Prompt d’exploration (🟢 Base)

### Finalité
Explorer un sujet avant prise de décision et produire une **cartographie structurée des options**.

### Logique
On ne cherche pas un livrable final mais une compréhension élargie, structurée et priorisée.

---

### Méthodologie recommandée (Exploration structurée)

1. **Définir le périmètre** (quoi / où / quand / pour qui)
2. **Choisir un cadre d’analyse** (SWOT, PESTEL, 5 Forces, matrice risques/impact, scénarios) **ou demander au LLM de proposer le cadre le plus pertinent et de justifier son choix pour couvrir tous les angles**
3. **Exiger une hiérarchisation** (impact, probabilité, priorité)
4. **Relier l’analyse à une décision** (recommandations actionnables)

---

### Gabarit enrichi

```text
Rôle :
Sujet :
Périmètre :
Cadre méthodologique (ex : SWOT / PESTEL) :
Critères de priorisation :
Profondeur attendue :
Format de sortie : tableau structuré + synthèse exécutive
```

---

### Exemples

```text
Analyse l’introduction de l’IA en RH via une matrice SWOT.
Hiérarchise les risques par impact et probabilité.
Conclue par 3 recommandations prioritaires.
```

```text
Évalue l’environnement réglementaire de l’IA via un cadre PESTEL.
Présente le résultat en tableau.
Identifie les facteurs critiques à 12 mois.
```

---

### Risque principal
Se perdre dans l’exhaustivité sans priorisation ni décision.

👉 Bon réflexe : toujours demander une hiérarchisation et une recommandation finale.

---

## 7.3 Prompt de structuration (🟢 Base)

### Finalité

Transformer un contenu brut en structure exploitable.

### Logique

La valeur ajoutée est dans l’organisation, pas dans la création.

### Gabarit

```text
Rôle :
Contenu source :
Objectif :
Format cible :
Contraintes :
```

### Critère de qualité

- Zéro perte d’information
- Cohérence logique
- Ajout d’une section "Points à clarifier"

### Exemple

```text
Rôle : Expert en structuration
Contenu : Notes de réunion ci-dessous
Objectif : Transformer en plan de charte
Format : Markdown hiérarchique
Contraintes : Ne rien supprimer
```

---

## 7.4 Prompt de vérification (🟢 Base, 🟡 usage critique)

### Finalité

Analyser un livrable existant pour détecter écarts et faiblesses.

### Logique

On ne produit pas. On contrôle.

### Gabarit

```text
Rôle :
Élément :
Critères :
Type de retour :
Si absent : indique-le
Cite les passages utilisés
```

### Exemple

```text
Rôle : Expert conformité RGPD
Élément : Plan de charte ci-dessous
Critères : Article 22 RGPD + contrôle humain
Type de retour : Rapport d’écarts structuré
Si absent : indique-le explicitement
Cite les passages réglementaires mobilisés
```

### Niveau d’exigence

Mobilisé au niveau 🟡 pour fiabiliser.

⚠️ Sans citation explicite, la vérification est superficielle.

---

### 🎯 À retenir - Typologie des prompts

Produire → Explorer → Structurer → Vérifier  
Chaque intention nécessite un cadrage spécifique.

Un mauvais type de prompt génère une mauvaise catégorie de réponse.

---

# 8. Gestion des données et RAG

La qualité d’une réponse dépend directement de la qualité des données fournies.

---

## 🟢 Centraliser

Centraliser ne signifie pas seulement regrouper des fichiers, mais structurer l’environnement de travail IA.

- Regrouper les documents dans un espace dédié (ex : Projet ChatGPT)
- Nommer clairement les fichiers (version, date, périmètre)
- Versionner les fichiers pour éviter les confusions
- Utiliser les **Projets ChatGPT** pour conserver un contexte cohérent par sujet
- Créer des **Skills spécialisés** lorsque le travail devient récurrent ou structuré

### ⚠️ Attention à la taille du contexte

Les LLM fonctionnent avec une fenêtre de contexte limitée.

Bonnes pratiques :
- Éviter d’empiler des documents non nécessaires
- Résumer les corpus volumineux avant exploitation
- Ouvrir un nouveau Projet lorsque le périmètre change
- Nettoyer régulièrement les conversations longues

Un contexte structuré améliore la qualité des réponses autant que la qualité du prompt.

---

## 🟡 Donner des instructions explicites

```text
Utilise uniquement le document "strategie-2026.md".
Si l’information n’est pas présente, indique-le.
```

Décider explicitement : réponse limitée aux sources ou enrichie.

---

## 🔵 Préparer les données

- Résumer avant analyse
- Transformer en tableau
- Nettoyer les transcriptions
- Structurer les corpus longs

---

## RAG (IA connectée aux données internes)

Un système RAG ne garantit pas l’exactitude des données internes. Il garantit uniquement leur accessibilité contextuelle.

### Risques

- Mélange de versions
- Incohérences croisées
- Sur-agrégation

### Obligations

- Citation précise
- Vérification de version
- Contrôle croisé

> Plus la donnée est accessible, plus la discipline 🟡 est indispensable.

---


# 9. Agents IA et industrialisation

## Positionnement de cette section

La conception et le déploiement d’agents IA relèvent d’un **niveau d’expertise supérieur**.

Ce guide en présente les principes structurants, mais la mise en œuvre opérationnelle nécessite :

- Compétences techniques (architecture, API, orchestration)
- Compétences en gestion des risques
- Compétences en gouvernance IT et conformité

👉 Cette section vise à donner un cadre de compréhension, non un tutoriel d’implémentation technique.

---

## Qu’est-ce qu’un agent IA ?

Un agent combine :

- **LLM** (moteur de raisonnement)
- **Outils** (API, bases documentaires, systèmes internes)
- **Mémoire** (historique, contexte, état)
- **Actions automatisées** (déclenchement de processus)

Un agent n’est pas un simple prompt avancé. C’est une **architecture orchestrée**.

---

## Principe directeur

> Aucun agent n’est déployé sans validation 🟢🟡🔵 complète.

Un agent amplifie l’impact d’un raisonnement. S’il est fragile, l’erreur devient systémique.

---

## Exigences minimales d’industrialisation

- Tests fonctionnels documentés
- Logs d’activité exploitables
- Supervision humaine obligatoire
- Audit régulier
- Indicateurs de performance (KPI)
- Mécanisme d’arrêt d’urgence

---

## Différence clé

| Usage ponctuel              | Agent industrialisé             |
| --------------------------- | ------------------------------- |
| Interaction humaine directe | Processus automatisé            |
| Faible risque systémique    | Risque amplifié                 |
| Contrôle immédiat           | Contrôle différé                |
| Décision assistée           | Décision partiellement déléguée |

L’industrialisation amplifie l’impact des décisions, positives comme négatives.

---

## Message clé

Si votre organisation n’a pas encore stabilisé les niveaux 🟢🟡🔵, il est prématuré de passer au niveau 🟣 via des agents.

La création d’agents relève d’une décision stratégique et non d’une expérimentation individuelle.

---

# 10. Cas complet - Marc (RH)

## 10.1 Contexte stratégique

Marc travaille aux Ressources Humaines.
Il doit livrer une **charte interne d’usage de l’IA générative** avant vendredi.

Il dispose :

- De 3 heures de notes prises en réunion (désordonnées, parfois contradictoires)
- D’exigences réglementaires complexes (RGPD, AI Act) qu’il n’a pas le temps de relire en détail
- De contraintes internes fortes (IT, juridique, direction)

La direction demande un résultat « zéro risque ».

Marc n’est pas expert en IA.
S’il aborde le sujet de manière linéaire, il risque de se noyer dans la complexité.

Il va donc appliquer la méthode 🟢 → 🟡 → 🔵 pour avancer de façon structurée :

- 🟢 **Structurer** : transformer le chaos des notes en plan clair, sans perte d’information
- 🟡 **Fiabiliser** : rendre chaque section vérifiable, justifiée et sans invention
- 🔵 **Optimiser** : transformer la charte validée en kit de déploiement réutilisable

### Situation organisationnelle

Le service RH doit rédiger une charte interne à partir :

- De notes de réunion désordonnées
- Des exigences réglementaires (AI Act, RGPD)
- Des contraintes internes (IT, juridique, direction)

### Enjeu réel

Ce n’est pas seulement produire un document. C’est produire un **document juridiquement robuste, pédagogiquement clair et organisationnellement exploitable**, capable d’être compris par des managers non experts et défendable en cas d’audit.

---

## 10.2 Synthèse méthodologique

| Niveau            | Objectif              | Transformation opérée       | Livrable produit                   |
| ----------------- | --------------------- | --------------------------- | ---------------------------------- |
| 🟢 Structurer     | Organiser la matière  | Chaos → Plan                | Plan hiérarchique                  |
| 🟡 Fiabiliser     | Vérifier conformité   | Plan → Document sécurisé    | Rapport d’écarts + version ajustée |
| 🔵 Optimiser      | Rendre exploitable    | Document → Kit opérationnel | FAQ + Check-list + Tableau         |
| 🟣 Industrialiser | Intégrer dans système | Kit → Processus             | Workflow + Formation + Audit       |

---

## 10.3 🟢 Étape 1 - Structurer (Niveau 1)

### Action

Utilisation du **Prompt de Structuration** pour transformer les notes brutes en plan exploitable.

### Objectif

Transformer 3 pages de notes désorganisées en un plan cohérent de charte, sans suppression d’information.

### Prompt utilisé

```text
Transforme ces notes en plan hiérarchique Markdown.
Ne supprime aucune information.
Ajoute une section "Points à clarifier".
```

### Résultat obtenu (exemple de sortie attendue)

```text
Charte interne d’usage de l’IA générative

1. Objectif et périmètre
Encadrer l’usage des outils d’IA générative au sein de l’entreprise
Garantir conformité réglementaire et protection des données
Favoriser l’innovation responsable

2. Définitions
IA générative
Données personnelles
Système à haut risque

3. Principes généraux
L’IA est un outil d’assistance, non de décision autonome
Obligation de contrôle humain
Responsabilité finale de l’utilisateur

4. Classification des usages
4.1 Usage libre (faible risque)
Aide à la rédaction
Synthèse de documents non sensibles

4.2 Usage encadré (risque modéré)
Analyse de données internes anonymisées
Aide à la préparation de rapports stratégiques

4.3 Usage interdit ou soumis à validation
Analyse automatisée de candidatures
Notation ou scoring de salariés
Traitement de données personnelles sensibles

5. Protection des données
Interdiction d’entrer des données clients non anonymisées
Interdiction de données RH sensibles sans base légale
Obligation d’utiliser les versions validées par l’IT

6. Transparence et information
Information des collaborateurs en cas d’usage significatif d’IA
Obligation de signaler les contenus générés si impact externe

7. Gouvernance
Création d’un référent ou comité IA
Validation des nouveaux cas d’usage
Cartographie annuelle des usages

8. Formation et sensibilisation
Formation obligatoire des managers
Guide de bonnes pratiques
```

```text
Points à clarifier
- Définition précise des usages « à haut risque » au regard de l’AI Act
- Modalités de traçabilité des usages
- Processus de validation des nouveaux outils
- Responsabilité contractuelle du fournisseur
```

👉 À ce stade, le résultat est structuré mais non encore vérifié juridiquement.

---

## 10.4 🟡 Étape 2 - Fiabiliser

### Action

Utilisation du **Prompt de Vérification** avec sécurisation renforcée (niveau 🟡).

### Objectif

Comparer le plan structuré aux obligations réglementaires officielles (RGPD, AI Act) afin d’identifier :

- Les obligations manquantes
- Les formulations imprécises
- Les risques juridiques implicites
- Les zones non couvertes

### Instruction type

```text
Vérifie si ce plan respecte le document réglementaire joint.
- Si une obligation manque, indique-le
- Cite les passages exacts utilisés
- Si une information n’est pas présente dans le document, dis-le explicitement
- N’effectue aucune hypothèse implicite
```

### Résultat attendu

- Rapport d’écarts structuré
- Références réglementaires citées
- Sections à compléter identifiées
- Recommandations précises d’ajustement
- Version ajustée proposée

---

### 🪞 Extrait simulé du rapport d’écart généré par l’IA (effet miroir)

```text
⚠️ Alerte : Votre plan actuel ne mentionne pas explicitement le droit de recours
 des salariés en cas de décision partiellement automatisée.

⚠️ Référence identifiée : RGPD - Article 22 (Décisions individuelles automatisées).

💡 Suggestion : Ajouter une sous-section "Droits des personnes concernées"
 dans le chapitre 6 (Transparence et information), incluant :
- Droit d’obtenir une intervention humaine
- Droit d’exprimer son point de vue
- Droit de contester la décision

⚠️ Point de vigilance : La classification des usages (libre / encadré / interdit)
 n’est pas reliée explicitement à une analyse de risque formalisée.

⚠️ Référence identifiée : AI Act - Obligations applicables aux systèmes à haut risque (Section IV).

💡 Suggestion : Ajouter un paragraphe expliquant les critères de qualification
 "haut risque" et le processus interne de validation associé.
```

👉 Ce type de retour transforme l’IA en partenaire d’audit :

- Elle ne se contente pas d’approuver.
- Elle identifie les écarts.
- Elle justifie avec des références.
- Elle propose une amélioration concrète.

⚠️ Rappel : la validation juridique finale reste humaine (juridique / direction).

---

## 10.5 🔵 Étape 3 - Optimiser

### Action

Utilisation du **Cadrage inversé** (questions stratégiques préalables) combiné aux **formats exploitables standardisés** (FAQ, check-list, tableau, JSON).

### Objectif

Transformer le document juridiquement validé en **kit de déploiement opérationnel**, directement utilisable par :

- Les collaborateurs
- Les managers
- Les équipes RH / conformité

Il ne s’agit plus d’expliquer la règle. Il s’agit de la rendre **applicable en situation réelle**.

### Prompt utilisé

```text
Je veux transformer cette charte en kit de communication interne.

Avant de produire les livrables :
- Pose-moi 5 questions pour préciser le public cible, le niveau d’expertise,
  le ton attendu et les supports de diffusion.

Ensuite génère :
- Une FAQ pédagogique collaborateurs
- Une check-list opérationnelle managers
- Un tableau des usages autorisés / encadrés / interdits
- Un JSON des actions de formation avec responsable et échéance
```

---

### Résultat attendu

- Version pédagogique simplifiée
- Support directement exploitable
- Formats réutilisables sans retraitement
- Message clair sans perte de conformité

---

### 🪞 Extrait simulé du kit généré

```text
FAQ - Usage de l’IA générative

Q : Puis-je utiliser ChatGPT pour rédiger un email interne ?
R : Oui, si aucune donnée personnelle sensible n’est incluse.

Q : Puis-je analyser des CV avec un outil IA ?
R : Non, sauf validation préalable et analyse de risque formalisée.
```

```text
Check-list Managers

□ Ai-je vérifié l’absence de données sensibles ?
□ L’usage relève-t-il d’un cas autorisé ?
□ Un contrôle humain est-il maintenu ?
□ L’outil utilisé est-il validé par l’IT ?
```

```text
Tableau des usages

Usage | Niveau | Condition
Rédaction email interne | Libre | Pas de données sensibles
Analyse CV | Interdit sans validation | Analyse de risque obligatoire
Synthèse document public | Libre | Vérification humaine requise
```

```json
[
  {
    "action": "Formation managers IA",
    "responsable": "RH",
    "echeance": "2025-03-31"
  },
  {
    "action": "Création comité IA",
    "responsable": "Direction",
    "echeance": "2025-02-15"
  }
]
```

👉 On passe d’un document statique à un système réutilisable, structuré et opérationnel.

---

## 10.6 🟣 Industrialiser

### Objectif

Transformer le kit opérationnel en **système organisationnel gouverné, traçable et auditable**.

L’industrialisation ne consiste pas à diffuser un document.
Elle consiste à intégrer la règle dans les processus réels de décision.

---

### Pré-requis obligatoires

- Validation juridique formelle
- Version stabilisée (après plusieurs cycles 🔵)
- Analyse de risque documentée
- Sponsorship direction

⚠️ Sans ces pré-requis, l’industrialisation amplifie les erreurs.

---

### Architecture cible

| Dimension | Élément attendu | Responsable |
|------------|----------------|-------------|
| Processus | Workflow formalisé des cas d’usage de l'IA | RH / IT |
| Gouvernance | Comité IA + référent désigné | Direction |
| Formation | Module e-learning obligatoire | RH |
| Traçabilité | Registre des usages de l'IA | IT / Conformité |
| Audit | Revue annuelle conformité | Juridique |

---

### Workflow type - Validation d’un nouveau cas d’usage de l'IA

```text
1. Déclaration du cas d’usage par un manager
2. Qualification du niveau de risque (libre / encadré / haut risque)
3. Si encadré ou haut risque → analyse formalisée
4. Validation par référent IA ou comité
5. Enregistrement dans le registre interne
6. Autorisation d’usage
7. Revue annuelle ou déclenchée en cas d’incident
```

---

### Intégration dans les systèmes internes

- Intégration du JSON des actions dans l’outil RH
- Ajout d’un champ "Usage IA" dans les workflows existants
- Lien automatique vers la check-list managers
- Centralisation des demandes via formulaire standardisé

---

### Indicateurs de pilotage (KPI)

| Indicateur | Finalité |
|------------|----------|
| % managers formés | Mesure d’appropriation |
| Nombre de cas d’usage déclarés | Mesure de maturité |
| Délai moyen de validation | Efficacité du processus |
| Incidents liés à l’IA | Niveau de risque réel |

---

### Mécanismes de contrôle

- Logs d’activité
- Procédure d’arrêt d’urgence
- Audit annuel
- Mise à jour réglementaire semestrielle

---

### Message clé

🟣 Industrialiser =

```text
Règle formalisée
+ Processus intégré
+ Responsabilités claires
+ Traçabilité mesurable
+ Contrôle continu
```
Le niveau de formalisation doit rester proportionné à la criticité des usages.

On passe d’un document validé à un **système vivant**, piloté et auditable.

---

# 🔎 Synthèse globale du référentiel

L’IA générative est un outil puissant dont la valeur dépend du cadre d’usage.

Elle devient un levier stratégique lorsque :

- Les demandes sont structurées
- Les réponses sont vérifiées
- Les livrables sont optimisés
- Les usages sont gouvernés

🟢 L’IA assiste  
🟡 L’humain contrôle  
🔵 L’organisation structure  
🟣 La gouvernance sécurise

---

# 11. Mise en action - Exercices guidés

## 🟢 Exercice - Structurer

### Mission
Vous êtes Marc. Vous disposez de 3 pages de notes désorganisées issues de réunions (RH, IT, Juridique, Direction).

### Objectif
Obtenir un **plan clair, exhaustif et exploitable** servant de base à une charte interne.

### Consignes
- Utilisez un Prompt de Structuration.
- Exigez un plan hiérarchique en Markdown.
- Interdisez toute suppression d’information.
- Demandez explicitement une section "Points à clarifier".

### Critères de réussite
- 100 % des éléments initiaux sont présents.
- Les contradictions apparaissent explicitement.
- Les zones d’ambiguïté sont isolées.

### Question de réflexion
Le résultat organise-t-il réellement l’information ou la simplifie-t-il excessivement ?

---

## 🟡 Exercice - Fiabiliser

### Mission
Votre plan est prêt. La direction exige un document juridiquement sécurisé.

### Objectif
Transformer un plan structuré en document **vérifiable, traçable et défendable en audit**.

### Consignes
- Utilisez un Prompt de Vérification.
- Exigez des citations précises des textes réglementaires.
- Autorisez explicitement l’IA à signaler les manques.
- Interdisez toute hypothèse implicite.

### Critères de réussite
- Chaque recommandation est reliée à une référence.
- Les obligations absentes sont clairement identifiées.
- Les zones d’incertitude sont explicitées.

### Question de réflexion
L’IA cite-t-elle réellement des passages ou reste-t-elle vague et interprétative ?

---

## 🔵 Exercice - Optimiser

### Mission
La charte est validée juridiquement. Les managers disposent de 2 minutes pour comprendre leurs obligations.

### Objectif
Transformer le document en **outil opérationnel immédiatement exploitable**.

### Consignes
- Utilisez le Cadrage inversé.
- Demandez explicitement à l’IA de poser des questions sur la culture de l’entreprise et le niveau d’expertise des managers.
- Exigez un format Check-list et/ou Tableau Markdown.
- Demandez une synthèse exécutive en 5 lignes maximum.

### Critères de réussite
- Le livrable peut être utilisé sans retraitement.
- Les obligations sont claires et actionnables.
- Le format réduit le risque d’oubli.

### Question de réflexion
Le format produit est-il directement exploitable sans retravail manuel ?

---

# 12. Annexe - Fiche de mission complète (données enrichies)

## 📌 Données brutes - Notes de Marc (enrichies)

- Tout le monde utilise déjà ChatGPT pour rédiger emails et comptes rendus.
- Impossible d’interdire complètement l’usage.
- Un manager a collé un compte rendu client contenant des données sensibles.
- Certains souhaitent analyser automatiquement des CV pour présélection.
- Risque de discrimination algorithmique évoqué.
- Question : nos usages relèvent-ils de « haut risque » au sens de l’AI Act ?
- Qui est responsable en cas d’erreur issue d’un contenu généré par IA ?
- Faut-il informer les salariés si une IA intervient dans un processus RH ?
- Peut-on tracer les usages de l'IA réalisés par les managers ?
- L’IT souhaite imposer uniquement des outils validés.
- Le juridique demande un contrôle humain systématique.
- La direction veut une cartographie annuelle des usages de l'IA.
- Besoin d’une formation obligatoire des managers.
- Nécessité de formaliser un comité ou référent IA.
- Interdiction d’entrer des données personnelles sensibles sans base légale.
- Clarifier la responsabilité contractuelle du fournisseur de l’outil IA.

---

## 📘 Références réglementaires simplifiées (enrichies)

- RGPD - Article 22 : droit de ne pas faire l’objet d’une décision fondée exclusivement sur un traitement automatisé produisant des effets juridiques significatifs ; droit d’obtenir une intervention humaine, d’exprimer son point de vue et de contester la décision.
- AI Act (Section IV - systèmes à haut risque) : obligations de documentation des risques, contrôle humain, transparence, traçabilité, gouvernance des données et évaluation de conformité préalable.
- Obligation générale de transparence pour certains systèmes IA.

---

## 🚀 Mission finale - Déploiement

Objectif : passer d’un document statique à un système opérationnel, piloté et auditable.