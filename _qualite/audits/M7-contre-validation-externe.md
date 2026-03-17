# Contre-validation externe — M7 Baseline N2 : Itérer sur ses prompts — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · DeepLearning.AI
> Audit : M7-audit-semantique-v1.md (49/50) ✅
> Format : Atelier (pas une vidéo)

---

## NotebookLM — 3 questions de validation marché

### Q1 — Méthode d'itération en 3 cycles vs état de l'art 2026

**Verdict : ✅ Étroitement alignée avec Anthropic, DeepLearning.AI, IBM**

**Validation des 3 cycles :**
- Cycle 1 (Intention) → "instructions claires et directes" — conforme Anthropic ✅
- Cycle 2 (Contexte) → ajouter rôle, public, motivation — validé DeepLearning.AI ✅
- Cycle 3 (Méthode) → Few-shot + découpage de tâches complexes — conforme IBM 2026 ✅

**Concept clé à ajouter pour 2026 : "Pensée" (Thinking)**
→ Claude 4.6 utilise la "pensée adaptative" pour optimiser ses résultats
→ Intégrer dans Cycle 3 : demander à l'IA de "penser étape par étape"
  ou de "critiquer son propre plan" avant de répondre
→ Formulation suggérée : "Avant de répondre, expose ton raisonnement
  puis critique-le avant de donner ta réponse finale"

---

### Q2 — Checklist Niveau 3 (8 points) — prérequis M8/M9

**Verdict : ✅ Bien calibrée**

**Alignement confirmé :**
- Point 5 (configuration d'un Project) → prérequis direct pour M8 (assistants) ✅
- Point 3 (maîtrise niveau 🟡 / citations) → indispensable pour M9 (RAG) ✅

**Critère manquant : Discernement de délégation**
→ Selon le cadre AI Fluency Anthropic, savoir QUAND déléguer à un assistant
  vs traiter via un simple prompt est une compétence clé N3
→ Ajouter : "Je sais identifier quelles tâches bénéficient d'un assistant
  permanent vs quelles tâches se traitent mieux en conversation ponctuelle"

---

### Q3 — "Bibliothèque de prompts" : toujours pertinente en 2026 ?

**Verdict : ✅ Pertinente — mais le support évolue**

**L'évolution du concept :**
- Bibliothèques statiques (fichiers texte) → Skills (fichiers SKILL.md modulaires,
  découvrables par l'IA en Claude Code)
- Instructions dans bibliothèque → intégrées dans Instructions de Projet
  pour un contexte permanent sur claude.ai
- Hiérarchie CLAUDE.md (Global/Projet/Local) = évolution naturelle de la bibliothèque
  pour les équipes travaillant avec Claude Code

**Positionnement juste pour manager PME :**
→ Passer d'une "liste de copier-coller" à une "stratégie de capitalisation"
→ La bibliothèque = patrimoine de méthodes que l'équipe partage
  pour standardiser les processus → premier pas vers 🟣 Industrialiser
→ Sur claude.ai : les Instructions de Projet REMPLACENT la bibliothèque statique
  en offrant un contexte permanent et partageable

---

## Synthèse — corrections atelier-v2.md M7

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Ajouter "Thinking step-by-step" dans Cycle 3 | NotebookLM Q1 | 🟡 Important | 10 min |
| 2 | Ajouter critère Discernement de délégation dans checklist N3 | NotebookLM Q2 | 🟡 Important | 10 min |
| 3 | Mise à jour section bibliothèque : Instructions de Projet = évolution naturelle | NotebookLM Q3 | 🟡 Valeur ajoutée | 15 min |
| 4 | Aligner terminologie Skills → Instructions de Projet (cohérence avec ref v2) | Alerte transversale | 🔴 Important | 10 min |

**Effort total M7 : ~45 min**
**Score estimé post-corrections : 50/50**

## Points forts confirmés
- ✅ Structure 3 cycles — alignée avec toutes les sources
- ✅ Checklist N3 — bien calibrée (1 critère à ajouter)
- ✅ Approche pratique — force la création du patrimoine avant l'automatisation
- ✅ Module le plus solide de toute la formation (99/100 structurel + 49/50 sémantique)

## Décision finale M7
- [x] ⚠️ Corrections légères (Thinking + Discernement + terminologie Projets)
- [x] Validation marché confirmée — aucune contradiction avec les sources 2026
- [x] Concept bibliothèque prompts encore pertinent — enrichir avec évolution naturelle
