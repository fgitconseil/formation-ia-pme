# Audit structurel — M3 Premiers réflexes : Checklist Niveau 1 — 2026-03
> Audité par : Claude (lecture directe de checklist.md)
> Grille : _qualite/grille-evaluation.md — ADAPTÉE (checklist référence, pas script vidéo)
> Module : content/modules/N1/M3-baseline-n1/checklist.md
> Note d'adaptation : M3 est une checklist à imprimer ou garder à portée — format Baseline N1.
> Les critères adaptés sont :
> - "5 sections template" → "3 catégories avant/pendant/après présentes"
> - "durée 18-22 min" → "document autonome et complet (utilisable sans le cours)"
> - "prompts copiables" → "actions copiables / formulations directement utilisables"
> - "accroche PME" → "chaque point ancré dans une situation concrète"

---

## Scores par dimension

| Dimension | Score max | Score | Justification |
|-----------|-----------|-------|---------------|
| 1.1 Conformité référentiel | 10 | 10 | 10 points alignés avec Prompting-final.md §1 (nature LLM, incertitude) + §2 (gouvernance, exfiltration) + §5 (supervision humaine) ✅ |
| 1.2 Références vérifiables | 10 | 10 | Aucune stat ou chiffre non sourcé · Tous les "pourquoi" sont des explications mécanistes (nature du LLM), pas des affirmations empiriques ✅ |
| 1.3 Compétences C1/C2 adressées | 5 | 5 | C1 (comprendre LLM) via points 5/6/8 · C2 (risques) via points 2/3/7/9 ✅ |
| 2.1 Points ancrés dans situations concrètes | 10 | 10 | Chaque signal d'alerte décrit une situation précise et reconnaissable : "Vous collez un contrat" / "Vous avez envoyé la même demande deux fois" / "Vous copiez-collez directement sans relire" ✅ |
| 2.2 Actions copiables et actionnables | 8 | 8 | Chaque point a une action claire en 1-2 phrases · Les formulations à ajouter aux prompts (points 5/6) sont directement copiables ✅ |
| 2.3 Gabarits directement utilisables | 7 | 7 | Point 5 : "Cite les passages ou sources sur lesquels tu t'appuies" — prompt copiable ✅ · Point 6 : "Si tu n'as pas d'information certaine sur ce point, dis-le explicitement" — prompt copiable ✅ · Mémo synthétique final en 3 lignes — directement imprimable ✅ |
| 2.4 Mémo synthétique présent | 5 | 5 | "AVANT → PENDANT → APRÈS" en 3 lignes en fin de document ✅ |
| 3.1 Pas de jargon non expliqué | 8 | 7 | "LLM" utilisé au point 1 sans explication — mais M1 est prérequis, acceptable · "DSI" au point 3 — acronyme métier non expliqué, risque pour PME sans DSI formalisée (-1) |
| 3.2 Lisibilité autonome (adapté : sans relire le cours) | 7 | 7 | Document utilisable sans avoir le cours sous les yeux · Chaque point est auto-explicatif (action + pourquoi + signal) ✅ |
| 3.3 Pas d'anglicismes | 5 | 5 | Aucun anglicisme détecté ✅ |
| 4.1 Structure 3 catégories présentes et claires | 5 | 5 | Avant / Pendant / Après — titres de section explicites ✅ |
| 4.2 Métadonnées présentes | 5 | 4 | Format et validation mentionnés en en-tête · Compétence cible et module précédent non renseignés (format référence ≠ script vidéo — déviation justifiée) (-1) |
| 4.3 Notes d'usage présentes | 5 | 4 | Pas de section "Notes de production" dédiée · L'en-tête ("À imprimer ou garder à portée") remplace la note d'usage (-1) |
| 5.1 Document autonome et complet | 7 | 7 | 10 points couvrent les situations clés de N1 · Un nouveau collaborateur peut l'utiliser sans formation préalable ✅ |
| 5.2 Équilibre 3 catégories | 3 | 3 | Avant : 3 points · Pendant : 4 points · Après : 3 points — répartition logique (pendant = phase la plus active) ✅ |
| **TOTAL** | **100** | **97** | |

---

## Critères partiels

**3.1 — "DSI" non expliqué**
> Points 2 et 3 : "vérification DSI" et "posez la question à votre DSI avant" — terme métier qui suppose qu'une DSI (Direction des Systèmes d'Information) existe et est accessible.
>
> En PME, cette fonction peut être externalisée, mutualisée ou inexistante. Une note "ou votre prestataire informatique" suffirait.
>
> Correction simple : "votre DSI ou prestataire IT".

**4.2 — Métadonnées réduites**
> Le format checklist référence n'a pas besoin des métadonnées complètes d'un script vidéo. L'en-tête ("Validation : Cocher les 10 points avant tout usage professionnel régulier") remplit la fonction. Score 4/5 justifié.

---

## Corrections prioritaires

1. **[RECOMMANDÉ]** Remplacer "votre DSI" par "votre DSI ou prestataire IT" aux points 2 et 3 — 30 secondes de correction
2. **[OPTIONNEL]** Ajouter un champ de date dans l'en-tête : "Date de validation : ___" — renforce l'aspect référence datée

---

## Décision

**✅ VALIDÉ — Score 97/100**

La checklist M3 est un outil de référence de haute qualité. Les 10 points couvrent les situations clés identifiées en M1 et M2. La structure action / pourquoi / signal d'alerte est appliquée uniformément. Le mémo synthétique final est directement imprimable.

C'est le format Baseline N1 idéal : pas un cours, pas un test — un outil à garder à portée et à consulter avant chaque usage professionnel.
