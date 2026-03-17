# ALERTE TRANSVERSALE — Confusion interface web / architecture dev
> Détectée par : NotebookLM (contre-validation M5 + M9) · 2026-03
> Niveau : 🔴 CRITIQUE — impacte Prompting-final.md (référentiel source)

---

## Résumé

Prompting-final.md utilise des termes relevant de l'architecture développeur
(Claude Code / API) dans des sections destinées à des managers PME sur claude.ai.
Tous les modules s'appuyant sur ces sections héritent de la confusion.

---

## 4 zones de confusion dans Prompting-final.md

### Zone 1 — "Skills" (§8.1)
- Référentiel : "Créer des Skills spécialisés lorsque le travail devient récurrent"
- Réalité : Skills = fichiers SKILL.md dans ~/.claude/skills/ — CLI développeurs
- ✅ Terme correct pour managers : "Projets dédiés avec Instructions personnalisées"

### Zone 2 — "Agents" (§9)
- Référentiel : Agent = "architecture orchestrée mêlant LLM, API, mémoire, actions"
- Réalité : Architecture sous-agents Claude Code — système technique complexe
- ✅ Terme correct pour managers : "Workflows documentés" ou "Processus automatisés"
- Risque : manager confond avec un fil de discussion ou un Projet

### Zone 3 — "Mémoire" (§9)
- Référentiel : Mémoire = "historique, contexte, état" dans architecture orchestrée
- Réalité : Gestion avancée via hiérarchie CLAUDE.md, persistance CLI — Claude Code
- ✅ Terme correct pour managers : "fenêtre de contexte d'une conversation ou d'un Projet"

### Zone 4 — "Industrialisation 🟣" (§4 et §9)
- Référentiel : Prérequis "logs d'activité exploitables", "intégration via API"
- Réalité : Inaccessible via claude.ai standard — concerne infrastructure API / Claude Code
- ✅ Terme correct pour managers : "Workflows documentés" + "Processus validés par l'équipe"

---

## Modules impactés

| Module | Terme problématique | Impact |
|--------|--------------------|----|
| Prompting-final.md §8.1 + §9 | Skills / Agents / Mémoire / Logs | 🔴 Source du problème |
| M6 — Connaissance capitalisée | "Skills" → "Projets" | 🔴 Critique |
| M9 — Skills & bases | "Skills" — module entier | 🔴 Confirmé — correction prête |
| M5 — Méthode niveaux | Transition vers M6 | 🟡 Mineur |
| M8 — Assistant personnalisé | "Mémoire" / architecture | 🟡 À vérifier |
| M11 — Gouvernance | "Industrialisation" §9 / logs API | 🟡 À vérifier |
| M10 — Intro MCP | "Agents" — N3 dev → OK si étiqueté | ✅ Assumé |

---

## Corrections recommandées

### 1. Notes éditoriales dans Prompting-final.md

**En tête de §8 (Gestion des données et RAG) :**
> Note 2026 : ce guide utilise "Skills" au sens large de la capitalisation.
> Pour les managers sur claude.ai : fonctionnalité équivalente = Projets + Instructions.
> Pour les développeurs Claude Code : Skills = fichiers SKILL.md (voir M10).
> Cette formation N1→N2 cible l'interface claude.ai sauf mention explicite.

**En tête de §9 (Agents IA) :**
> Note 2026 : cette section décrit l'architecture technique (Claude Code / API).
> Pour les managers PME, les équivalents accessibles sont :
> Workflows documentés · Projets structurés (N1→N2).
> Le déploiement d'agents relève du N3 avancé et nécessite support IT.

### 2. Lexique dans M3 Baseline N1

| Terme dans la documentation | Sur claude.ai (managers) | Profil |
|----------------------------|--------------------------|--------|
| Skills (Claude Code) | Projets + Instructions | Managers ✅ |
| Agents (Claude Code) | Workflows documentés | Managers ✅ |
| SKILL.md, CLAUDE.md | Interface graphique | Développeurs |
| API / Logs d'activité | Interface graphique | IT / Dev |

### 3. Remplacer "Skills" par "Projets/Instructions" dans M6

---

## Plan d'action S9 — priorité absolue

| Action | Où | Effort | Priorité |
|--------|----|--------|----------|
| Notes éditoriales §8 + §9 | Prompting-final.md | 30 min | 🔴 |
| Lexique interface/dev | M3 checklist.md | 20 min | 🔴 |
| Remplacer Skills → Projets | M6 script-v2.md | 30 min | 🔴 |
| Vérifier M8 et M11 | M8/M11 scripts | 20 min | 🟡 |
| Vérifier transition M5→M6 | M5 script-v2.md | 10 min | 🟡 |

**Effort total : ~1h30 · Traiter AVANT les autres corrections S9**

---

## Valeur ajoutée de la contre-validation externe

L'audit CC travaille en vase clos sur chaque script.
NotebookLM a croisé en temps réel avec les docs officielles et remonté
que le problème vient du référentiel source — couche non détectable en interne.
