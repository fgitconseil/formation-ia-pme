# CHANGELOG — M11 Baseline N3

## v1 — 2026-03 · BROUILLON

### Fichiers créés
- `guide.md` — Guide référentiel ~20 min autonome : 5 composants d'un dispositif gouverné + cycle d'amélioration continue + checklist 10 critères 🟣 + tableau de bord 4 dimensions
- `quiz.md` — Quiz validation N3 consolidé (10 QCM couvrant M8+M9+M11) · seuil 70% · attestation de complétion
- `exercice.md` — Projet final : plan de déploiement IA en 4 étapes (cas d'usage + workflow + KPI + risques)
- `post-linkedin.md` — 3 variantes : "usage ponctuel vs système gouverné"

### Décisions de format
- M11 est un GUIDE (pas une vidéo) — format référentiel à conserver, pas à regarder une fois
- `guide.md` remplace `script-v1.md` conformément à la convention Baseline (voir CLAUDE.md)
- Checklist 10 critères = porte d'entrée vers 🟣 Industrialiser — auto-évaluation rigoureuse
- Tableau de bord 4 dimensions : usage · qualité · risque · adoption — modèle directement réutilisable

### Cohérence avec le référentiel
- Partie 1 (composants) = Prompting-final.md section 9 (agents + industrialisation) + section 🟣
- Partie 3 (checklist) = 10 critères dont : cycles 🟢🟡🔵 validés, sources auditées, supervision humaine formalisée
- Exercice final : structure en 4 étapes conforme à la séquence 🟣 du référentiel (stabiliser → formaliser → tester → mesurer)
- Quiz N3 : 10 questions croisées M8/M9/M11, pas de redite avec les quiz individuels

### Statut
- Guide : BROUILLON
- Quiz : PRÊT
- Exercice : PRÊT
- Post LinkedIn : PRÊT

### À faire (S9)
- Audit qualité (grille-evaluation.md → M11-audit-v1.md)
- Relecture du guide : vérifier longueur réelle (~1500 mots cible)

---

## v2 — 2026-03 · BROUILLON · contre-validation externe

### Extension structurelle
- ~1690 mots (v1) → ~2569 mots (v2)
- Structure 4 parties préservée · Partie 4 enrichie + section "Aller plus loin" ajoutée

### Enrichissements intégrés
- 🔴 Terminologie : "Skills d'instruction" → "Instructions de Projet", "Skills de connaissance" → "Bases de connaissance", "Propriétaire du Skill" → "Propriétaire de la Base de connaissance"
- 🟡 Nommer explicitement Article 4 AI Act (AI Literacy) dans l'Introduction
- 🟡 Ajouter critère 11 "Classification AI Act" dans checklist 🟣 — Partie 3 (10 → 11 critères)
- 🟡 Critère 9 mis à jour : mention documentation formation AI Literacy (obligation Art. 4)
- 🟡 Template tableau de bord concret : structure colonnes A→I (Excel/Sheets) + mise en forme conditionnelle + routine mensuelle — Partie 4
- 🟢 Mention souveraineté numérique / hébergement Europe (Mistral, Azure France, RGPD) — Partie 2
- 🟢 Framework 4 couches optionnel (Instructions → Bases de connaissance → Hooks → Sous-agents) — Notes référent IA

### Référence : _qualite/audits/M11-contre-validation-externe.md
