# REF-anthropic-officiel-consolidated.md
> Source : Documentation officielle Anthropic / Claude
> Consolidation pour NotebookLM — Formation IA PME/ETI françaises
> Date de consolidation : 2026-03-17

---

## Source 1 — Claude Best Practices (platform.claude.com)

### Principes fondamentaux pour bien utiliser Claude

**Soyez direct et clair**
Claude répond mieux aux instructions explicites. Évitez le vague. Dites exactement ce que vous voulez : format, longueur, ton, public cible. Claude n'est pas devin — chaque instruction manquante est une source d'approximation.

**Donnez du contexte**
Plus Claude comprend votre situation, mieux il adapte sa réponse. Contexte utile : votre rôle, votre public, l'objectif de la tâche, les contraintes (confidentialité, format, délai).

**Fournissez des exemples (few-shot prompting)**
Montrez un exemple de ce que vous attendez plutôt que de le décrire. Un exemple vaut mieux que dix adjectifs. Technique : donnez 1 à 3 exemples du format ou du style voulu avant la vraie demande.

**Utilisez des balises XML pour structurer**
Pour les prompts complexes, les balises XML (comme `<contexte>`, `<instructions>`, `<exemple>`) permettent à Claude de mieux distinguer les différentes parties de votre demande.

**Définissez le rôle**
"Tu es un juriste spécialisé en droit du travail français" ou "Tu es un assistant RH dans une PME de 80 personnes" — définir le rôle améliore la pertinence des réponses.

**Contrôlez le format de sortie**
Spécifiez : bullet points, tableau, JSON, texte continu, longueur maximale. Claude s'adapte aux contraintes de format explicites.

**Utilisez les outils (tool use)**
Claude peut appeler des fonctions externes, accéder à des bases de données, utiliser des APIs. Définissez clairement quels outils sont disponibles et quand les utiliser.

---

### Chain-of-Thought et raisonnement étendu

**Thinking / Raisonnement étendu**
Pour les tâches complexes (analyse, décision, évaluation), demandez à Claude d'exposer son raisonnement avant de donner sa réponse. Techniques :
- "Réfléchis étape par étape avant de répondre"
- "Expose ton raisonnement, puis critique-le avant de conclure"
- Balises `<thinking>` pour des instructions système avancées

**Quand utiliser le thinking :**
- Problèmes mathématiques ou logiques
- Analyses multi-critères
- Vérification de conformité
- Évaluation de risques

---

### Systèmes agentiques

**Agents et orchestration**
Claude peut opérer dans des architectures multi-agents : en tant qu'orchestrateur (qui délègue des sous-tâches) ou en tant que sous-agent (qui exécute des tâches spécifiques).

**Principes pour les systèmes agentiques :**
- Définir clairement les outils disponibles et leurs limites
- Toujours maintenir une supervision humaine pour les actions irréversibles
- Implémenter des checkpoints de validation entre les étapes
- Prévoir des mécanismes de rollback

---

## Source 2 — Anthropic Business Performance

### Techniques validées pour améliorer les performances

**1. Décomposition étape par étape (Chain-of-Thought)**
Demander à Claude de décomposer un problème en étapes successives avant de répondre. Impact documenté : amélioration de précision jusqu'à 20% sur des tâches complexes pour des entreprises Fortune 500.

**2. Few-shot prompting**
Fournir des exemples concrets du résultat attendu. Particulièrement efficace pour :
- Les tâches de classification
- La génération de contenu dans un format précis
- L'extraction structurée d'information

**3. Prompt chaining**
Décomposer une tâche complexe en plusieurs prompts séquentiels, où la sortie de l'un devient l'entrée du suivant. Exemple en 3 étapes :
1. Extraire les informations pertinentes
2. Analyser et comparer
3. Synthétiser et recommander

**Impact mesuré :** Les entreprises qui utilisent ces 3 techniques ensemble observent en moyenne une amélioration de 20% de la précision des réponses sur des tâches métier critiques.

---

## Source 3 — Guide Claude 4 Best Practices

### Ce qui change avec les modèles Claude 4

**Instructions directes vs politesse excessive**
Les modèles Claude 4 répondent mieux aux instructions directes. Inutile d'être excessivement poli ou de sur-expliquer. Soyez concis et précis.

**Gestion du contexte long**
Claude peut maintenant traiter des contextes très longs (200K tokens). Conseils :
- Placez les informations les plus importantes au début ou à la fin du contexte
- Utilisez des marqueurs clairs pour délimiter les sections
- Évitez la redondance inutile

**Output control avancé**
Nouvelles capacités de contrôle de sortie :
- Format JSON strict avec schéma défini
- Markdown structuré
- Code avec syntaxe validée
- Longueur précise en tokens ou en mots

**Utilisation des outils dans Claude 4**
Les outils (tool use) sont mieux intégrés. Claude 4 peut :
- Décider de manière autonome quand utiliser quel outil
- Chaîner plusieurs appels d'outils
- Gérer les erreurs de retour d'outil

---

## Récapitulatif des bonnes pratiques Anthropic

| Technique | Quand l'utiliser | Impact attendu |
|-----------|-----------------|----------------|
| Instructions directes et explicites | Toujours | Réponses plus précises |
| Contexte riche | Tâches métier complexes | Adaptation au cas réel |
| Few-shot (1-3 exemples) | Format précis attendu | Conformité de format +40% |
| Balises XML | Prompts multi-parties | Parsing amélioré |
| Chain-of-Thought | Analyse et décision | Précision +20% |
| Prompt chaining | Tâches multi-étapes | Qualité sur tâches longues |
| Rôle défini | Expertise métier requise | Pertinence sectorielle |
| Tool use / MCP | Accès données réelles | Élimination copier-coller |

---

## Pertinence pour la formation PME/ETI

Ces pratiques officielles Anthropic valident les contenus de la formation :
- **M4 (4 types de prompts)** : few-shot, Chain-of-Thought, prompt chaining sont documentés
- **M8 (assistant personnalisé)** : instructions permanentes = best practices Anthropic pour le rôle et le contexte
- **M9 (bases de connaissance)** : RAG est la technique recommandée pour les données internes
- **M10 (MCP)** : tool use et systèmes agentiques = niveau avancé des best practices

*Sources : platform.claude.com, anthropic.com/business*
