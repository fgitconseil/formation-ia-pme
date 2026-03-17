# CHANGELOG — M9 Skills et bases de connaissance

## v2.2 — 2026-03 · Correction post-validation transversale NotebookLM

### Correction
- 🔴 script-v2.md section Maintenance : ajout "Pratique 4 — Gestion active du contexte" (§5.8) — technique résumé intermédiaire toutes les 10-15 échanges pour éviter la dérive lors de sessions denses

---

## v2.1 — 2026-03 · Propagation terminologie quiz + exercice + post

### Corrections
- Quiz : titre + Q1-Q8 + corrigé — "Skill d'instruction" → "Instructions de Projet" · "Skill de connaissance" → "Base de connaissance du Projet" · "Skills déployés" → "Bases de connaissance déployées"
- Exercice : 3 exercices entiers + gabarits — même remplacement terminologique
- Post LinkedIn : pied de page variante B — "Skills de connaissance" → "Bases de connaissance du Projet"

---

## v2 — 2026-03 · BROUILLON · post-NotebookLM + ref v2

### Corrections intégrées
- 🔴 Intro Section 2 : phrase de démarcation Projets claude.ai vs Skills Claude Code
- 🔴 Terminologie : "Skill d'instruction" → "Instructions de Projet" · "Skill de connaissance" → "Base de connaissance du Projet" · "Skill" (outil) → "Projet" — partout dans le script
- 🔴 Exemple structuration : annoté [exemple illustratif]
- 🟡 Gabarit "Project Instructions" copiable 5 champs (Rôle · Contexte · Périmètre · Format · Contraintes) — Section 2
- 🟡 Section 6 : M10 = équipes IT/architectes · manager = prescripteur de besoins
- 🟡 Exemple concret MCP : "Claude lit Salesforce / écrit dans Jira sans copier-coller"
- 🟡 Paragraph Hooks : "Instructions = Conseil · Hook = Loi" — fin Section 2
- 🟢 Nuance RAG : "données nécessaires mais pas suffisantes" — Section 4

### Référence : _qualite/audits/M9-contre-validation-externe.md

---

## v1 — 2026-03 · BROUILLON

### Fichiers créés
- `script-v1.md` — Script vidéo ~20 min : accroche PME + Skill instruction vs connaissance + structuration sources (4 principes) + risque amplifié (3 mécanismes) + maintenance (2144 mots)
- `quiz.md` — 8 QCM + corrigé · seuil 70%
- `exercice.md` — 3 exercices : auditer sa base documentaire, rédiger un Skill (gabarit 5 champs), planifier la maintenance
- `post-linkedin.md` — 3 variantes : "votre IA est aussi fiable que vos données"

### Audit qualité (M9-audit-v1.md)
- Score : **95/100 ✅ Validé**
- Point fort : accroche "base documentaire qui échoue" + 3 mécanismes du risque amplifié + exemple nommage fichiers
- Corrections à appliquer en S9 :
  1. **[RECOMMANDÉ]** Ajouter gabarit Skill d'instruction copiable dans section 2 — inclus dans l'exercice.md (gabarit 5 champs)
  2. **[RECOMMANDÉ]** Ajouter exemple concret MCP en clôture — *"concrètement, un MCP permet à l'IA de lire votre CRM ou d'écrire dans votre ERP sans copier-coller"*
  3. **[OPTIONNEL]** Traduire "Garbage in, garbage out" à la première occurrence
  4. **[À VÉRIFIER S9]** Relecture orale : confirmer durée ≥ 18 min

### Décisions pédagogiques
- Gabarit Skill 5 champs (nom · contexte · instructions · sources · limites) fourni dans exercice.md
- Exercice 1 : grille d'audit documentaire (date · version · périmètre · contradictions · verdict)
- Exercice 3 : plan de maintenance avec propriétaire + fréquence + questions de référence (tests de non-régression)
- Post LinkedIn C (storytelling) : incident réel PME industrielle + résolution → cas concret diffusable

### Statut
- Script : BROUILLON · corrections terminologie + exemple MCP en S9
- Quiz : PRÊT
- Exercice : PRÊT
- Post LinkedIn : PRÊT
