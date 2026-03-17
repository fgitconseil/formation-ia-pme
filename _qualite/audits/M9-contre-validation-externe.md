# Contre-validation externe — M9 Skills & bases de connaissance — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · DeepLearning.AI · Claude Code Ultimate Guide · CNIL · AI Act
> Audits : M9-audit-v1.md (95/100) · M9-audit-semantique-v1.md (35/50)

---

## NotebookLM — 5 questions complètes

### Q1 — Confusion Skills/Projets ✅ CONFIRMÉE

**Problème terrain identifié :**
- Attente déçue : activation automatique attendue, activation manuelle réelle
- Risque recherche complémentaire : doc Claude Code (terminal, SKILL.md) aux antipodes
- Le terme "Skill" n'apparaît pas dans l'interface claude.ai — manager ne trouve pas le bouton

**Corrections nécessaires dans le script :**
- Section 2 : "Skill d'instruction" → "Instructions de Projet"
- Section 2 : "Skill de connaissance" → "Base de connaissance du Projet"
- Intro Section 2 : phrase de démarcation explicite
- Section 6 (Agents/MCP) : clarifier que M10 s'adresse aux équipes IT, pas aux managers

**Formulation corrigée intro Section 2 :**
> "Ce que nous configurons ici dans l'interface claude.ai s'appelle des Projets.
> Ne les confondez pas avec les 'Skills' de Claude Code, qui sont des fichiers
> de configuration pour les développeurs utilisant le terminal."

**Ajouts requis :**
- Gabarit opérationnel "Project Instructions" copiable (contexte, rôle, format, contraintes)
- Exemple concret MCP : "Concrètement, un MCP permet à Claude de lire vos données
  dans Salesforce ou d'écrire un ticket dans Jira sans copier-coller"

---

### Q2 — Cohérence avec Prompting-final.md v2

**Points cohérents ✅**
- Nature du LLM ("prédit la suite la plus probable") — conforme §1
- RAG "Garbage in, garbage out" — conforme §8
- Discipline 🟡 Fiabiliser appliquée aux sources — conforme
- Accroche sur échec dû aux données obsolètes — illustre risques du référentiel

**Contradictions avec le référentiel v2 ⚠️**

1. Terminologie Skills/Projets
   - Script : "Skill d'instruction" et "Skill de connaissance"
   - Référentiel v2 : "Project Instructions" et "Project Knowledge"
   - Impact : l'apprenant cherche un bouton "Skills" qui n'existe pas sur claude.ai

2. Mode d'activation
   - Script section 2 : suggère une forme d'automatisme
   - Réalité claude.ai : activation manuelle (choix du projet par l'utilisateur)
   - Claude Code : activation automatique via champ `description` SKILL.md — distinct

3. Cible des Agents et MCP
   - Script : présente Agents comme étape de montée en compétence du manager
   - Référentiel v2 §9 : architectures techniques pour IT, manager = prescripteur de besoins

4. Hooks absents
   - Référentiel v2 + N3 : distinction Mémoire ("Conseils") vs Hooks ("Loi")
   - Script : se limite aux Instructions/Mémoire, ignore les garde-fous déterministes

**Lacunes opérationnelles**
- Pas de gabarit copiable pour Project Instructions
- MCP mentionné sans exemple concret (CRM/ERP)

---

### Q3 — Alignement cadre 4D Anthropic

**Compétences adressées (3/4)**
- ✅ Delegation : choisir ce qu'on confie (instructions vs connaissance vs prompt ponctuel)
- ✅ Discernment : "Garbage in, garbage out" — qualification des sources avant connexion RAG
- ✅ Diligence : maintenance, responsable par Skill, révisions trimestrielles

**Compétence manquante**
- ❌ Description : pas de gabarit opérationnel pour rédiger les Project Instructions
  (contexte, rôle, format de sortie, contraintes)
  → L'apprenant sait QUOI faire mais pas COMMENT le formuler

---

### Q4 — Points manquants vs Prompting-final.md v2

1. **Hooks** (critique N3) — garde-fous déterministes PreToolUse/PostToolUse
   → "La Loi" vs Skills = "La Mémoire"
   → Crucial pour sécuriser les données métier (Compétence C5)

2. **Hiérarchie CLAUDE.md à 3 niveaux**
   → Global (~/.claude/CLAUDE.md) : préférences transversales
   → Projet (/project/CLAUDE.md) : conventions équipe partagées
   → Local (.claude/CLAUDE.md) : overrides temporaires développeur
   → Absence critique pour comprendre l'héritage des connaissances

3. **Confusion sémantique Skills Web vs Skills Code** (déjà traité Q1/Q2)

4. **Nuance RAG : accessibilité ≠ exactitude**
   → Script : "votre IA sera aussi fiable que vos données"
   → Référentiel : l'IA peut halluciner ou mal interpréter une source correcte
     si contexte saturé — mise en garde sur limite intrinsèque du RAG manquante

5. **Gabarits opérationnels**
   → Pas de template Project Instructions copiable (Rôle, Contexte, Contraintes, Format)

---

### Q5 — Distinction Skills vs RAG ✅ Conceptuellement correcte, terminologie incorrecte

**Verdict :** La distinction règles/données est claire dans l'esprit du script
mais le terme "Skill" est utilisé pour des réalités qui s'appellent "Projets" sur claude.ai

**Clarification technique apportée par NotebookLM :**
- RAG = moteur technique qui s'active automatiquement quand la base de connaissance
  dépasse la fenêtre de contexte initiale (jusqu'à 10× la capacité standard)
- "Skill de connaissance" du script = "Project Knowledge" sur claude.ai
- Lien : RAG est le moteur · Projet est le contenant · Knowledge est le contenu

**Tableau de synthèse NotebookLM :**

| Concept | Définition technique | Statut dans script M9 |
|---------|---------------------|----------------------|
| RAG | Moteur de recherche interne extrayant passages pertinents | Présent sous "Skill de connaissance" — terme RAG évité volontairement |
| Skill | Fichier SKILL.md pour automatiser tâches dans Claude Code | Utilisé à tort pour désigner fonctionnalités web |
| Projet / Connaissance | Espace de travail claude.ai avec documents | Cible réelle du module, nommée "Skill" par erreur |

---

## Synthèse complète — corrections script-v2.md M9

| # | Correction | Priorité | Effort |
|---|-----------|----------|--------|
| 1 | Intro Section 2 : phrase démarcation Skills claude.ai/Claude Code | 🔴 Bloquant | 10 min |
| 2 | Renommer "Skill d'instruction" → "Instructions de Projet" partout | 🔴 Critique | 20 min |
| 3 | Renommer "Skill de connaissance" → "Base de connaissance du Projet" | 🔴 Critique | 20 min |
| 4 | Gabarit copiable "Project Instructions" (5 champs) | 🟡 Important | 20 min |
| 5 | Section 6 : M10 = IT/architectes, manager = prescripteur de besoins | 🟡 Important | 10 min |
| 6 | Exemple concret MCP (Salesforce/Jira) | 🟡 Important | 5 min |
| 7 | Mention Hooks (1 paragraphe — "La Loi" vs "La Mémoire") | 🟡 Important | 15 min |
| 8 | Nuance RAG : accessibilité ≠ exactitude (1 phrase) | 🟢 Mineur | 5 min |

**Effort total script-v2.md M9 : ~1h45**
**Score estimé post-corrections : 47-49/50 sémantique**

## Décision finale M9
- [x] 🔴 Corrections bloquantes confirmées (1, 2, 3)
- [x] ⚠️ Corrections importantes (4, 5, 6, 7)
- Script-v2.md à produire via Claude Code avec toutes les corrections intégrées
