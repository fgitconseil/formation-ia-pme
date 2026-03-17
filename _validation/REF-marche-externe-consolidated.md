# REF-marche-externe-consolidated.md
> Source : IBM, DeepLearning.AI, Jedha, CentraleSupélec
> Consolidation pour NotebookLM — Formation IA PME/ETI françaises
> Date de consolidation : 2026-03-17

---

## Source 1 — IBM · Techniques de prompt engineering

### Vue d'ensemble des techniques

IBM répertorie les techniques de prompt engineering applicables en entreprise. Voici les principales, avec leur niveau de complexité et leurs cas d'usage.

### Techniques de base

**Zero-shot prompting**
Demander directement sans exemple. Fonctionne bien pour les tâches simples et bien définies. Niveau : débutant.

**Few-shot prompting**
Fournir 1 à 5 exemples du résultat attendu avant la vraie demande. Améliore significativement la conformité du format et la pertinence du contenu. Niveau : intermédiaire.

**Chain-of-Thought (CoT)**
Demander à Claude de "penser étape par étape" avant de répondre. Améliore les performances sur les tâches de raisonnement : analyse, calcul, comparaison, évaluation. Niveau : intermédiaire.

### Techniques avancées

**RAG (Retrieval-Augmented Generation)**
Combiner un LLM avec une base de documents externe. Le modèle génère des réponses ancrées dans des données réelles et actualisées. Applicable en entreprise via les bases de connaissances Claude (M9) ou via MCP (M10). Niveau : avancé.

**Systèmes agentiques**
Architectures où un LLM orchestrateur délègue des sous-tâches à des agents spécialisés. Chaque agent a accès à des outils spécifiques. Niveau : expert. Correspond à la progression 🟣 de la formation.

**Tree of Thoughts**
Extension du Chain-of-Thought où plusieurs chemins de raisonnement sont explorés en parallèle avant de sélectionner le meilleur. Utile pour les problèmes d'optimisation et de planification complexe. Niveau : expert.

**Meta-prompting**
Utiliser Claude pour générer ou améliorer des prompts. Technique de "prompt engineering assisté" : vous décrivez ce que vous voulez obtenir, Claude vous aide à formuler le prompt optimal. Niveau : avancé.

**Context Engineering**
Discipline émergente qui dépasse le prompt engineering : gestion complète du contexte d'un système IA, incluant les instructions permanentes, les outils disponibles, la mémoire, les exemples et les données. Le cadre dans lequel opère l'agent, pas juste la requête ponctuelle.

---

## Source 2 — DeepLearning.AI · Principes fondamentaux (Isa Fulford & Andrew Ng)

### Les 2 principes fondamentaux

**Principe 1 — Clarté des instructions**
Écrire des instructions claires et spécifiques. L'ambiguïté est la première cause d'échec des prompts. Plus vous êtes précis sur le contexte, le format, les contraintes et l'objectif, meilleures sont les réponses.

**Principe 2 — Itération et amélioration**
Le premier prompt est rarement optimal. Le processus de prompt engineering est itératif : tester → observer → comprendre l'écart → ajuster. Ne pas chercher le prompt parfait du premier coup.

### Les 9 leçons clés

1. **Délimiteurs clairs** : utilisez `"""`, `---`, ou des balises XML pour séparer les différentes parties de votre prompt
2. **Demandez une sortie structurée** : JSON, liste numérotée, tableau — spécifiez le format
3. **Vérification de conditions** : demandez à Claude de vérifier si les conditions sont réunies avant d'exécuter la tâche
4. **Few-shot prompting** : donnez des exemples réussis avant la vraie tâche
5. **Temps de réflexion** : demandez à Claude de raisonner avant de conclure
6. **Hallucinations** : Claude peut inventer des informations avec confiance — ancrez dans des sources réelles (RAG)
7. **Tokens de sortie** : contrôlez la longueur des réponses
8. **Transformation** : Claude peut transformer, traduire, reformater, corriger
9. **Expansion** : générer beaucoup de contenu à partir de peu d'input (brainstorming, variantes)

---

## Source 3 — Jedha · Prompt Engineering (référentiel français)

### Méthodologie TORCEEF

Jedha, école française de data science, enseigne le prompt engineering avec la méthodologie TORCEEF développée en collaboration avec CentraleSupélec :

**T — Tâche** : définir précisément ce que l'IA doit faire
**O — Objectif** : préciser le but final et le contexte d'utilisation
**R — Rôle** : assigner une identité ou une expertise à l'IA
**C — Contexte** : fournir le contexte situationnel nécessaire
**E — Exemple** : illustrer avec des cas concrets (few-shot)
**E — Exigences** : spécifier les contraintes (format, longueur, ton, exclusions)
**F — Format** : définir la structure exacte de la sortie attendue

**Niveau de certification :** RNCP niveau 6 (équivalent Bac+3/4)
**Durée typique :** 42h de formation

### Techniques couvertes

- Zero-shot / Few-shot / Chain-of-Thought
- Tree-of-Thoughts pour les problèmes complexes
- Prompt chaining pour les tâches séquentielles
- RAG pour les données internes

---

## Source 4 — CentraleSupélec · Formation IA professionnelle

### Méthodologie T.O.R.C.E.F

CentraleSupélec (Grande École d'ingénieurs française) enseigne une méthodologie structurée de prompt engineering alignée sur les besoins des entreprises.

**Principes pédagogiques :**
- 70% d'ateliers pratiques, 30% de théorie
- Durée : 7h de formation intensive
- Public : cadres et managers en entreprise

### Chain-of-Thought en contexte professionnel

CentraleSupélec insiste sur l'importance du raisonnement étape par étape pour les tâches à fort enjeu :
- Décisions managériales complexes
- Analyse réglementaire
- Évaluation de risques
- Synthèse de données contradictoires

**Formulation recommandée :**
"Avant de répondre, expose ton raisonnement étape par étape, identifie les limites de ton analyse, puis donne ta conclusion."

### Positionnement marché français

CentraleSupélec positionne le prompt engineering comme une compétence professionnelle fondamentale pour les cadres, au même titre que la maîtrise d'Excel ou PowerPoint. La formation est destinée aux non-techniciens.

---

## Positionnement de la formation dans le marché

### Points de différenciation

| Critère | IBM/DeepLearning.AI | Jedha/CentraleSupélec | Notre formation PME/ETI |
|---------|--------------------|-----------------------|------------------------|
| Public cible | Développeurs + data scientists | Reconversion tech | PME/ETI non techniques |
| Langue | Anglais principalement | Français | Français exclusivement |
| Durée | En ligne, auto-rythmé | 42h+ | 11 modules, ~4h |
| Focus | Technique | Technique + certification | Opérationnel terrain |
| Cas d'usage | Génériques | Génériques | PME/ETI françaises |
| Niveau entrée | Intermédiaire | Débutant+ | Tous niveaux |
| Gouvernance | Peu couverte | Peu couverte | Centrale (M2, M11) |

### Ce que notre formation apporte de spécifique

1. **Progression 🟢🟡🔵🟣** : parcours adapté au niveau de maturité IA de chaque employé
2. **Cas terrain PME** : Marc RH, référent IA, directrice ETI — pas des cas abstract
3. **Gouvernance centrale** : M2 risques + M11 gouvernance = colonne vertébrale de la formation
4. **MCP niveau industriel** : M10 = au-delà de ce que propose tout concurrent
5. **AI Act intégré** : conformité réglementaire française dès le module 2

### Techniques couvertes par notre formation vs marché

| Technique | IBM | DeepLearning.AI | TORCEEF | Notre formation |
|-----------|-----|----------------|---------|-----------------|
| Zero/Few-shot | ✅ | ✅ | ✅ | ✅ M4 |
| Chain-of-Thought | ✅ | ✅ | ✅ | ✅ M4, M5 |
| Prompt chaining | ✅ | ✅ | ✅ | ✅ M6 |
| RAG | ✅ | — | ✅ | ✅ M9 |
| MCP/Agentique | ✅ | — | — | ✅ M10 |
| Gouvernance | — | — | — | ✅ M2, M11 |
| AI Act | — | — | — | ✅ M2, M11 |

*Sources : ibm.com/think/topics/prompt-engineering, deeplearning.ai, jedha.co, centralesupelec.fr*
