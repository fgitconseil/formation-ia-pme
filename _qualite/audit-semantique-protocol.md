# Protocole d'audit sémantique — Véracité et adéquation des contenus
> Version : 1.0 · Complément à grille-evaluation.md (qui audite la STRUCTURE)
> Cet outil audite le FOND : est-ce que ce qu'on dit est exact et aligné avec les sources ?

---

## Les 3 sources de référence

| Source | Rôle | Priorité |
|--------|------|----------|
| `Prompting-final.md` | Référentiel pédagogique fondateur | 🔴 Absolue |
| Anthropic Skilljar (AI Fluency + Claude 101) | Cadre officiel Anthropic | 🟡 Haute |
| Infographie "Antisèche Workflow Claude Code" | Concepts techniques récents | 🟡 Haute (N3 surtout) |

---

## Méthode d'audit sémantique en 4 étapes

### Étape 1 — Vérification des affirmations factuelles

Pour chaque affirmation dans le script, classifier :

| Type | Exemple | Action |
|------|---------|--------|
| **Fait vérifiable** | "RGPD Article 22 — droit de recours" | Vérifier dans la source officielle |
| **Concept technique** | "Un LLM prédit la suite la plus probable" | Croiser avec Prompting-final.md section 1 |
| **Analogie pédagogique** | "L'IA comme un calculateur de probabilités" | Vérifier qu'elle ne crée pas de confusion |
| **Exemple simulé** | Rapport d'écarts fictif | Marquer explicitement [exemple simulé] |
| **Chiffre/stat** | "95% des pilotes IA échouent" | Citer la source (Gartner, MIT, etc.) |

### Étape 2 — Détection des confusions conceptuelles

Concepts souvent confondus dans les formations IA — vérifier que nos modules ne mélangent pas :

| Confusion | Risque | Module concerné |
|-----------|--------|-----------------|
| Skills Claude.ai ≠ Skills Claude Code | ⚠️ CRITIQUE — deux systèmes différents | M9 |
| RAG ≠ Skills | Confusion fréquente | M6, M9 |
| Prompt ≠ System prompt | Niveaux différents | M8 |
| Hallucination ≠ erreur volontaire | Malentendu sur la nature | M1 |
| Cut-off ≠ ignorance totale | L'IA a quand même un raisonnement général | M1 |
| Agent ≠ assistant personnalisé | Niveaux d'autonomie différents | M8, M10 |
| MCP ≠ simple API | Architecture différente | M10 |
| Hooks ≠ instructions CLAUDE.md | Déterministe vs probabiliste | M9, M10 |

### Étape 3 — Alignement avec le cadre 4D Anthropic

Vérifier que chaque module adresse au moins une des 4 compétences du cadre AI Fluency :

| Module | Delegation | Description | Discernment | Diligence |
|--------|-----------|-------------|-------------|-----------|
| M1 | ✅ (quoi confier) | — | — | ✅ (règle d'or) |
| M2 | — | — | — | ✅ (3 risques) |
| M3 | — | — | ✅ (checklist) | ✅ (vérification) |
| M4 | — | ✅ (4 types) | — | — |
| M5 | ✅ (niveaux) | ✅ (prompts) | ✅ (fiabiliser) | ✅ (gouverner) |
| M6 | ✅ (capitaliser) | — | — | — |
| M7 | — | ✅ (itérer) | ✅ (évaluer) | — |
| M8 | ✅ (déléguer à l'assistant) | ✅ (system prompt) | — | ✅ (périmètre/sécurité) |
| M9 | — | — | ✅ (qualité sources) | ✅ (maintenance) |
| M11 | ✅ (gouvernance) | — | ✅ (KPI/audit) | ✅ (industrialiser) |

### Étape 4 — Validation des concepts techniques N3

Pour les modules M8, M9, M10, M11 (Niveau 3 — power users), vérifier :

```
[ ] CLAUDE.md : mentionné comme mémoire persistante ? ✅ ou ❌
[ ] Hiérarchie CLAUDE.md : Global → Project → Subfolder mentionnée ? (optionnel N1/N2, important N3)
[ ] Skills : distinction Claude.ai (utilisateurs) vs Claude Code (dev) faite ? ✅ ou ❌
[ ] Hooks : concept de callbacks déterministes mentionné ? (optionnel V1)
[ ] System prompt vs instructions conversationnelles : distinction claire ?
[ ] Agents/sub-agents : autonomie différente d'un assistant simple ?
[ ] MCP : "USB-C des agents IA" — rôle d'orchestration bien expliqué ?
```

---

## Prompt d'audit sémantique pour Claude Code

```
Lis CLAUDE.md pour le contexte.
Lis _qualite/audit-semantique-protocol.md pour la méthode.
Lis Prompting-final.md [sections pertinentes selon le module].
Lis le script du module : [chemin]/script-v1.md

Effectue un audit SÉMANTIQUE (pas structurel) selon le protocole.

Pour chaque affirmation factuelle du script :
1. Classe-la (fait vérifiable / concept / analogie / exemple simulé / stat)
2. Vérifie sa conformité avec Prompting-final.md
3. Signale toute confusion conceptuelle (liste étape 2)
4. Vérifie l'alignement 4D
5. Pour N3 : valide les concepts techniques (étape 4)

Format de sortie : _qualite/audits/[Mxx]-audit-semantique-v1.md
Structure :
## Affirmations correctes (liste)
## Affirmations à vérifier (liste + source recommandée)
## Confusions conceptuelles détectées (liste + correction)
## Alignement 4D (tableau)
## Concepts techniques N3 (si applicable)
## Score sémantique /50 + décision
```

---

## Scores et décisions

| Score sémantique | Signification | Action |
|-----------------|---------------|--------|
| 45-50 | Contenu fiable | ✅ Validé sémantiquement |
| 35-44 | Quelques imprécisions | ⚠️ Corrections avant tournage |
| < 35 | Erreurs significatives | ❌ Réécriture partielle requise |

---

## Grille de scoring sémantique /50

| Critère | Max | Description |
|---------|-----|-------------|
| Affirmations factuelles correctes | 15 | Chaque fait est vérifiable et juste |
| Zéro confusion conceptuelle | 15 | Aucun mélange de concepts différents |
| Exemples simulés clairement marqués | 10 | Pas présentés comme réels |
| Alignement 4D Anthropic | 5 | Au moins 1 compétence adressée |
| Concepts techniques N3 corrects | 5 | (N3 uniquement, sinon bonus) |
| **Total** | **50** | |
