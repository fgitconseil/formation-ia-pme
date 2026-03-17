## Faux positifs NotebookLM — patterns identifiés

---

### Faux positif #1 — M3 / §3 référentiel (récurrent)

**Apparu dans :** Validation transversale PROMPT 1 + PROMPT 2 (deux sessions distinctes)

**Ce que NotebookLM dit :**
"M3 Non conforme — le script/quiz est une checklist, alors que §3 du référentiel
définit les critères stratégiques de choix du modèle."

**Analyse :**
Confusion par numéro — NotebookLM mappe Module 3 sur Section 3 du référentiel.

Correspondance réelle :
- §3 référentiel "Choisir le bon modèle" → appartient pédagogiquement à M8 (N3)
- M3 "Baseline N1" → checklist 10 points pour tout employé, aucun prérequis

Intégrer §3 dans M3 = erreur pédagogique grave (contenu N3 dans module N1).

**Décision : IGNORER systématiquement dans toutes les futures sessions.**

**Règle :** Si NotebookLM signale une incohérence entre Module X et Section X
du référentiel, vérifier manuellement. Les numéros modules et sections
ne sont pas corrélés.

---

### Faux positif #2 — Search augmente l'exigence dans M1

**Apparu dans :** Validation transversale PROMPT 1 + PROMPT 2

**Ce que NotebookLM dit :**
"M1 devrait mentionner que Search augmente l'exigence de vérification."

**Analyse :**
La nuance "Search augmente l'exigence 🟡" est une subtilité de niveau N2.
M1 = N1 sans prérequis — correct de ne pas l'y mettre.
Cette nuance est déjà dans M5-script-v2.md (commit 3be3030) — bon niveau.

**Décision : IGNORER pour M1. Déjà traité au bon niveau (M5).**

---

### Faux positif #3 — Terminologie Skills/Projets "encore présente"

**Apparu dans :** Validation transversale PROMPT 2

**Ce que NotebookLM dit :**
"Certains posts LinkedIn M9 utilisent encore Skills pour l'interface web."

**Analyse :**
Correction appliquée dans commit f38c453 — 100% propagée.
NotebookLM avait chargé une version antérieure des fichiers.

**Décision : IGNORER — déjà corrigé. Vérifier la version des fichiers chargés.**

---

## Règle générale pour les futures sessions NotebookLM

Quand NotebookLM répète les mêmes faux positifs sur 2 passes successives
sans trouver de nouveaux problèmes → le contenu est stable, arrêter les passes.

Signal de stabilité atteint : 2026-03-17 après validation finale transversale.
