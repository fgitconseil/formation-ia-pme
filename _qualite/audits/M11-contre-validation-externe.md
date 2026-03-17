# Contre-validation externe — M11 Baseline N3 : Gouverner un dispositif IA — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · CNIL · AI Act
> Audit : M11-audit-semantique-v1.md (48/50) ✅ · Audit structurel (94/100) ✅
> Format : Guide PDF

---

## NotebookLM — 3 questions de validation marché

### Q1 — Alignement avec AI Act et CNIL 2026

**Verdict : ✅ Étroitement aligné sur les 5 composants**

- Supervision humaine ("L'IA propose, l'humain décide") — conforme exigence centrale AI Act ✅
- Traçabilité via outils simples (wiki, tableau partagé) — répond à l'obligation sans surenchère ✅
- KPI qualité et risque (incidents de confidentialité) — répond aux préoccupations CNIL/RGPD ✅

**Exigences réglementaires potentiellement absentes :**

1. **Classification du risque AI Act**
   → L'AI Act repose sur une pyramide des risques (interdits / hauts risques / risques limités)
   → Ajouter un critère : "Classer officiellement le cas d'usage selon les catégories AI Act
     avant l'industrialisation" — assure la conformité juridique totale

2. **AI Literacy — Article 4 AI Act**
   → Présent via la formation mais non formellement nommé
   → Ajouter mention explicite : cette formation répond à l'obligation d'alphabétisation IA
     de l'Article 4 de l'AI Act (en vigueur depuis 2025)

---

### Q2 — Cycle d'amélioration vs standards marché 2026

**Verdict : ✅ Sémantiquement excellent — conforme aux méthodes de déploiement IA**

- Signaux de dégradation (reformulations trop fréquentes, contournements) → maintenance préventive ✅
- Lien audit documentaire M9 → évite que le dispositif repose sur des infos obsolètes ✅

**Standard émergent à mentionner : Framework 4 couches**
→ CLAUDE.md → Skills → Hooks → Sub-agents
→ Jugé optionnel pour profils non-développeurs mais devient standard pour organisations
  utilisant Claude Code pour automatiser des workflows complexes
→ Intégrer comme "analogie organisationnelle" pour visualiser un dispositif mature
→ Recommandation : 1 paragraphe en section "Aller plus loin"

---

### Q3 — Calibration PME vs Grande Organisation

**Verdict : ✅ Spécifiquement calibré PME françaises — évite délibérément la bureaucratie**

- Traçabilité via Excel/fichiers partagés → adapté aux ressources PME ✅
- Commencer avec 2-3 indicateurs → réaliste pour structure agile ✅
- 10 critères checklist → "très opérationnels" et directement applicables ✅
- Critère 10 (validation cycles 🟢🟡🔵) → sécurise le déploiement sans budget externe ✅

**2 ajouts recommandés pour le contexte PME/ETI françaises :**

1. **Template concret tableau de bord**
   → Ajouter modèle Google Sheets ou Excel pour éviter que les KPI restent théoriques
   → "Voici comment implémenter concrètement le tableau de bord dans votre environnement PME"

2. **Souveraineté et conformité locale**
   → Pour PME/ETI françaises : mention sur le choix de modèles conformes ou hébergés en Europe
   → Ex : solutions Mistral ou API RGPD-friendly dans la partie "Audit des sources et outils"

---

## Synthèse — corrections guide-v2.md M11

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Ajouter critère "Classification AI Act" dans checklist 🟣 | NotebookLM Q1 | 🟡 Important | 15 min |
| 2 | Nommer explicitement Article 4 AI Act (AI Literacy) | NotebookLM Q1 | 🟡 Valeur ajoutée | 5 min |
| 3 | Template tableau de bord concret (Excel/Sheets) | NotebookLM Q3 | 🟡 PME pratique | 20 min |
| 4 | Mention souveraineté numérique / hébergement Europe | NotebookLM Q3 | 🟢 Mineur | 10 min |
| 5 | Paragraphe "Aller plus loin" — Framework 4 couches (si M10 IN) | NotebookLM Q2 | 🟢 Optionnel | 15 min |

**Effort total M11 : ~1h**
**Score estimé post-corrections : 50/50**

## Points forts confirmés — module de référence
- ✅ Supervision humaine — irréprochable, alignée AI Act
- ✅ Traçabilité simple — adaptée PME sans surenchère technique
- ✅ Calibration PME explicite — évite délibérément la bureaucratie
- ✅ Signaux de dégradation — approche maintenance préventive
- ✅ Module considéré comme "outil de référence de haute qualité" par NotebookLM

## Décision finale M11
- [x] ⚠️ Corrections légères (Classification AI Act + template concret + souveraineté)
- [x] Validation marché confirmée — aucune contradiction avec les sources 2026
- [x] Module solide — enrichissements de surface uniquement
