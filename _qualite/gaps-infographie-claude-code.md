# Analyse des gaps — Infographie Claude Code Workflow
> Source : "Antisèche pour le Workflow Claude Code — Édition 2026"
> Analyse : 2026-03 · Impact sur nos modules N3 (M8, M9, M10, M11)

---

## Résumé : ce que l'infographie couvre que nos modules ne couvrent pas

### 🔴 Gap CRITIQUE — Confusion M9 : Skills Claude.ai ≠ Skills Claude Code

**Problème :**
Notre M9 "Skills et bases de connaissance" mélange deux systèmes distincts :

| Système | Outil | Public | Fichier | Usage |
|---------|-------|--------|---------|-------|
| **Skills Claude.ai** | claude.ai / Cowork | Utilisateurs non-dev | Instructions dans l'interface | Personnaliser le comportement de Claude |
| **Skills Claude Code** | Terminal / CLI | Développeurs | `.claude/skills/SKILL.md` | Auto-invocation via description field |

**Ce que l'infographie montre :**
- Skills Claude Code = fichiers markdown dans `.claude/skills/`
- Le champ `description` est critique pour l'auto-activation
- Claude auto-invoque le skill quand la description matche la demande
- Différent des instructions manuelles dans un prompt

**Correction à apporter en S9 :**
Ajouter une section de clarification dans M9 :
```
Deux types de Skills — ne pas confondre :
- Skills claude.ai : instructions dans votre interface (accessible à tous)
- Skills Claude Code : fichiers SKILL.md pour équipes techniques (M10 → N3 avancé)
Ce module couvre les Skills claude.ai. Les Skills Claude Code relèvent de M10.
```

---

### 🟡 Gap IMPORTANT — Hooks : concept absent de nos modules

**Ce que c'est :**
Les Hooks sont des callbacks déterministes dans Claude Code :
- `PreToolUse` : s'exécute AVANT chaque action de Claude
- `PostToolUse` : s'exécute APRÈS chaque action
- `Notification` : alertes en temps réel

**Différence clé avec les instructions CLAUDE.md :**
- Instructions CLAUDE.md = probabiliste (Claude peut les ignorer)
- Hooks = déterministe (s'exécutent quoi qu'il arrive, comme des garde-fous)

**Impact sur nos modules :**
- M9 : mentionner l'existence des Hooks comme niveau de contrôle supérieur
- M10 : si MCP IN, les Hooks sont une notion complémentaire
- M11 : dans la gouvernance, les Hooks = "loi" vs instructions = "conseil"

**Décision V1 :** Mentionner le concept brièvement en M9/M11 sans en faire un module dédié.
La formulation de l'infographie est parfaite : "Mémoire = Conseil, Hook = Loi"

---

### 🟡 Gap IMPORTANT — Hiérarchie CLAUDE.md à 3 niveaux

**Ce que l'infographie montre :**
```
~/.claude/CLAUDE.md    → Global (tous les projets)
~/CLAUDE.md            → Parent (monorepo root)
./CLAUDE.md            → Projet (partagé sur git)  ← c'est celui qu'on utilise
./frontend/CLAUDE.md   → Sous-dossier (scoped)
```

**Règle de précédence :** Local > Project > Global
(Le plus spécifique écrase le plus général)

**Impact sur M8 :**
Ajouter en M8 : "Le system prompt de votre assistant = votre CLAUDE.md de projet.
Pour une équipe : partager le CLAUDE.md via git = partager le contexte de travail."

**Décision V1 :** Mentionner la hiérarchie 2 niveaux (Global + Projet) dans M8.
Le niveau sous-dossier est trop technique pour notre public N3.

---

### 🟢 Gap MINEUR — Architecture 4 couches (L1→L4)

**Ce que l'infographie montre :**
```
L1 — CLAUDE.md        Contexte persistant et règles
L2 — Skills           Packs de connaissances auto-invoqués
L3 — Portals/Hooks    Garde-fous et automatisation
L4 — Sub-agents       Sous-agents avec leur propre contexte
```

**Impact sur M11 :**
Ce framework 4 couches est une excellente analogie pour la section "Gouverner un dispositif IA".
Ajouter dans guide.md de M11 :
"Un dispositif IA mature = 4 couches empilées : contexte (CLAUDE.md) → expertise (Skills) → garde-fous (Hooks) → spécialisation (Agents)"

---

### 🟢 Gap MINEUR — Commandes utiles non mentionnées

| Commande | Usage | Module à enrichir |
|----------|-------|------------------|
| `/init` | Génère un CLAUDE.md skeleton adapté au projet | M8 (setup assistant) |
| `/compact` | Compresse le contexte avant saturation | M6 (gestion contexte) |
| `Shift+Tab` | Active le mode Plan (exploration avant action) | M8 |
| `/clear` | Remet le contexte à zéro entre tâches | M8 |

---

## Plan de correction S9 — par module

| Module | Correction | Priorité | Effort |
|--------|------------|----------|--------|
| M9 | Clarifier Skills claude.ai vs Claude Code | 🔴 Critique | 30 min |
| M9 | Mentionner Hooks comme niveau supérieur | 🟡 Important | 15 min |
| M8 | Ajouter hiérarchie CLAUDE.md 2 niveaux | 🟡 Important | 20 min |
| M8 | Mentionner /init et /compact | 🟢 Mineur | 10 min |
| M11 | Ajouter framework 4 couches dans gouvernance | 🟢 Mineur | 20 min |

**Total effort estimé : ~1h30 en S9**

---

## Ce que nos modules font bien vs l'infographie

| Concept infographie | Couvert dans nos modules | Qualité |
|--------------------|--------------------------|---------|
| CLAUDE.md comme mémoire persistante | ✅ M8, M9 | Bonne |
| Skills = instructions réutilisables | ✅ M9 (confusion à corriger) | À corriger |
| Hiérarchie mémoire | ⚠️ Partielle (un seul niveau) | À enrichir |
| Hooks déterministes | ❌ Absent | À mentionner |
| Architecture 4 couches | ❌ Absent | À mentionner en M11 |
| Commandes /init /compact | ❌ Absent | À mentionner en M8 |
| Permissions et sécurité | ✅ M2 (angle différent mais cohérent) | Bonne |
| Sub-agents | ✅ M10 (MCP) si IN | Bonne |
