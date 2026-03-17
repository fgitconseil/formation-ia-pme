# CLAUDE.md — Contexte projet (lu automatiquement par Claude Code)

## Ce projet

Formation IA Générative pour PME/ETI françaises.
Positionnement : opérationnalisation, pas technologie.
Public : PME/ETI françaises, non experts. Langue : français uniquement.

---

## Document de référence ABSOLU

```
Prompting-final-v2.md (racine du repo) — VERSION CORRIGÉE 2026-03
```

---

## ✅ PRODUCTION + VALIDATION — 100% COMPLÈTES

| Module | Script | Quiz | Exercice | Post LI | Validation | Statut |
|--------|:------:|:----:|:--------:|:-------:|:----------:|--------|
| M1 | v2 2238m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M2 | v2 2375m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M3 | checklist v1 | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M4 | v2 3246m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M5 | v2 1897m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ v3 post-Aristid |
| M6 | v2 2517m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M7 | atelier-v2 1804m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M8 | v2 2632m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M9 | v2 2589m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |
| M10 | v1 2693m | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ⏳ Conditionnel — décision S4 |
| M11 | guide-v2 | ✅ | ✅ | ✅ | ✅ NbLM + Gemini | ✅ Prêt relecture orale |

Commits : f38c453 · 3be3030 · 55632df
Terminologie Skills→Projets/Instructions : 100% propagée ✅
Ajouts finaux validés : _qualite/audits/validation-ajouts-finaux.md ✅

---

## ✅ SYSTÈME QUALITÉ — 100% COMPLET

| Étape | Statut |
|-------|--------|
| Audits structurels + sémantiques (11 modules) | ✅ |
| Contre-validations NotebookLM individuelles (11 modules) | ✅ |
| Audit quiz + exercices + posts (11 modules) | ✅ |
| Validation finale transversale NotebookLM (5 prompts) | ✅ |
| Validation finale Gemini (4 prompts) | ✅ |
| Validation ciblée ajouts finaux M9 + M11 | ✅ |

---

## ÉTAPES RESTANTES AVANT TOURNAGE

```
1-5. ✅ Production + validation + corrections — TERMINÉES
6. ⏳ Relecture orale (~3h bloquées) — seule action non délégable
7. ⏳ Aristid S4 — test terrain · décision M10 IN/OUT
8. ⏳ v3 post-Aristid (M5 principalement)
9. ⏳ Tournage M1 + M2 en premier
```

### Protocole relecture orale (bloquer ~3h d'un coup)

Scripts à lire dans l'ordre — chronomètre à la main :

| Ordre | Module | Fichier | Durée cible |
|-------|--------|---------|-------------|
| 1 | M1 | script-v2.md | ~18-22 min |
| 2 | M2 | script-v2.md | ~18-22 min |
| 3 | M4 | script-v2.md | ~18-22 min |
| 4 | M5 | script-v2.md | ~15-18 min |
| 5 | M6 | script-v2.md | ~18-22 min |
| 6 | M8 | script-v2.md | ~18-22 min |
| 7 | M9 | script-v2.md | ~18-22 min |

Grille pendant la lecture :
```
[ ] Passages où tu butes → reformuler
[ ] Passages "trop écrits" → réécrire en oral
[ ] Durée réelle : ___ min (cible : < 22 min)
[ ] L'accroche me parlerait-elle si j'étais le manager de l'histoire ?
```

---

## Roadmap V2 (post-lancement)

Documentée dans _qualite/audits/validation-finale-transversale.md

- Multimodalité native (image, audio, vidéo)
- Module 0 "Business Case PME" / ROI formation
- Souveraineté numérique — section dédiée M11
- Option B "Mode dégradé" (vieux ERP sans API)
- Charte IA simplifiée 1 page
- "Small Data PME" + angle "libération burn-out"
- PKM / Second Brain : 2 phrases dans M6 et M7
- M10 si coupé en V1

---

## Conventions non négociables

- Référentiel source : Prompting-final-v2.md (pas v1)
- Ne jamais écraser script-vX.md → créer script-v(X+1).md
- Toujours mettre à jour CHANGELOG.md après modification
- Longueur cible scripts : ~2300 mots
- Ton : pédagogique, terrain, phrases courtes, sans jargon

## Règle de priorité si retard

Couper M10 (MCP). **Jamais couper M3, M7, M11.**
