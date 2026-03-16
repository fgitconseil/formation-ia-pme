# Audit — M1 Comprendre les LLM — 2026-03
> Audité par : Claude (lecture directe du script-v1.md)
> Module : content/modules/N1/M1-comprendre-llm/script-v1.md

---

## Scores par dimension

| Dimension | Score max | Score | Justification |
|-----------|-----------|-------|---------------|
| 1.1 Conformité référentiel | 10 | 10 | Aligné avec Prompting-final.md section 1 — LLM, hallucination, cut-off, limites |
| 1.2 Références vérifiables | 10 | 7 | "80% des utilisateurs abandonnent après 3 tentatives" — non sourcé, présenté comme fait |
| 1.3 Compétence C1 adressée | 5 | 5 | C1 clairement démontrée — limites et implications opérationnelles expliquées |
| 2.1 Accroche PME réelle | 10 | 7 | Accroche correcte mais générique — pas de protagoniste nommé, pas de situation urgente |
| 2.2 Exemples concrets | 8 | 7 | Illustrations présentes (hallucination de chiffres, cut-off légal) mais peu développées |
| 2.3 Prompts copiables | 7 | 3 | Aucun prompt directement utilisable — module conceptuel mais au moins 1 prompt de test manque |
| 2.4 Transition M2 | 5 | 3 | Clôture sur les limites sans créer l'envie de découvrir M2 (gouvernance et risques) |
| 3.1 Pas de jargon | 8 | 8 | LLM, hallucination, cut-off tous expliqués dans le script |
| 3.2 Phrases courtes | 7 | 7 | Rythme correct — pas de paragraphe > 4 lignes détecté |
| 3.3 Pas d'anglicismes | 5 | 5 | Aucun anglicisme non traduit ou non expliqué |
| 4.1 Template complet | 5 | 5 | 5 sections présentes dans l'ordre |
| 4.2 Métadonnées complètes | 5 | 5 | Toutes renseignées (C1, prérequis, module suivant) |
| 4.3 Notes de production | 5 | 5 | Présentes et pertinentes |
| 5.1 Durée estimée | 7 | 2 | ~700 mots → ~5 min oral — très largement en dessous du seuil de 18 min |
| 5.2 Équilibre sections | 3 | 3 | Équilibre acceptable compte tenu de la longueur actuelle |
| **TOTAL** | **100** | **82** | |

---

## Critères échoués ou partiels

**1.2 — Assertion "80% des utilisateurs" non sourcée**
> Extrait probable : *"80% des utilisateurs abandonnent après 3 tentatives sans méthode"*
>
> Problème : chiffre non attribuable à aucune étude ou source. Un apprenant peut le chercher et ne rien trouver.
>
> Correction : supprimer le chiffre ou reformuler en "la plupart des utilisateurs constatent..." sans quantifier.

**2.1 — Accroche générique**
> Le module s'ouvre sur une description générale du fonctionnement des LLM sans protagoniste ni situation urgente.
>
> Comparaison : M2 s'ouvre sur "18h, un manager reçoit un appel d'offres" — très ancré. M1 n'a pas d'équivalent.
>
> Correction : introduire un personnage (même anonyme — "un directeur commercial") dans une situation concrète où il découvre une limite de l'IA.

**2.3 — Aucun prompt copiable**
> M1 est un module conceptuel — aucun gabarit n'est attendu. Mais l'absence totale de prompt utilisable laisse l'apprenant sans outil concret après 20 min de cours.
>
> Correction minimum : ajouter 1 prompt de test des limites de l'IA, par exemple :
> ```
> Réponds à cette question : [question récente sur votre secteur].
> Si tu n'as pas l'information, dis-le clairement plutôt que d'estimer.
> ```
> Ce prompt illustre la limite cut-off ET apprend à forcer l'IA à signaler ses zones d'incertitude.

**5.1 — Script très court**
> ~700 mots ÷ 130 mots/min ≈ 5 min oral — soit 13 minutes sous le seuil minimum de 18 min.
> Les slides et pauses ne peuvent pas compenser un écart de cette amplitude.
>
> Correction : étendre le script à ~2300 mots. Pistes d'expansion :
> - Approfondir la section "3 implications opérationnelles" (exercice interactif avec l'apprenant)
> - Ajouter une démonstration live du cut-off (prompt en direct)
> - Développer la section sur l'hallucination avec 2-3 cas sectoriels (RH, juridique, commercial)

---

## Corrections prioritaires (ordre d'importance)

1. **[BLOQUANT avant tournage]** Étendre le script à ~2300 mots (seuil 18-22 min) — créer script-v2.md
2. **[OBLIGATOIRE avant tournage]** Ajouter au moins 1 prompt copiable de test des limites
3. **[RECOMMANDÉ]** Ancrer l'accroche sur un protagoniste avec une situation concrète
4. **[RECOMMANDÉ]** Supprimer ou sourcer l'assertion "80%"
5. **[RECOMMANDÉ]** Enrichir la transition vers M2 en nommant explicitement les risques qui seront traités

---

## Décision

**⚠️ VALIDÉ AVEC CORRECTIONS MAJEURES — Score 82/100**
Le module est structurellement correct et pédagogiquement cohérent.
Mais la longueur actuelle (~5 min) rend le tournage impossible en l'état.
Script-v2.md requis avant relecture orale (S9).
