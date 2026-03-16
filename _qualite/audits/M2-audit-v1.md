# Audit — M2 Risques et gouvernance — 2026-03
> Audité par : Claude (lecture directe du script-v1.md)
> Module : content/modules/N1/M2-risques-gouvernance/script-v1.md

---

## Scores par dimension

| Dimension | Score max | Score | Justification |
|-----------|-----------|-------|---------------|
| 1.1 Conformité référentiel | 10 | 10 | Aligné avec Prompting-final.md section 2 — exfiltration, réputationnel, industrialisation prématurée |
| 1.2 Références vérifiables | 10 | 7 | "milliers de salariés" et "majorité des entreprises" présentés comme faits sans source |
| 1.3 Compétence C2 adressée | 5 | 5 | C2 clairement adressée — 3 risques + protocole pratique |
| 2.1 Accroche PME réelle | 10 | 10 | Accroche excellente — 18h, appel d'offres, manager sous pression, décision en temps réel |
| 2.2 Exemples concrets | 8 | 8 | Chaque risque illustré par un scénario opérationnel (offre, RH, industrialisation prématurée) |
| 2.3 Prompts copiables | 7 | 4 | Protocoles pratiques (3 questions, 3 règles) mais 0 prompt IA directement utilisable |
| 2.4 Transition M3 | 5 | 3 | Clôture sur les règles de gouvernance sans créer d'envie vers M3 (baseline N1) |
| 3.1 Pas de jargon | 8 | 7 | LLM non réexpliqué (OK, M1 est prérequis) — "industrialisation" pourrait être précisé |
| 3.2 Phrases courtes | 7 | 7 | Rythme correct — sections bien découpées |
| 3.3 Pas d'anglicismes | 5 | 5 | Aucun anglicisme non traduit détecté |
| 4.1 Template complet | 5 | 5 | 5 sections présentes dans l'ordre |
| 4.2 Métadonnées complètes | 5 | 5 | Toutes renseignées |
| 4.3 Notes de production | 5 | 5 | Présentes et bien détaillées |
| 5.1 Durée estimée | 7 | 3 | ~1050 mots → ~8 min oral — 10 minutes sous le seuil minimum de 18 min |
| 5.2 Équilibre sections | 3 | 2 | Section 4 (industrialisation + 🟢🟡🔵🟣) ≈ 33% du script — légèrement dominante |
| **TOTAL** | **100** | **86** | |

---

## Critères échoués ou partiels

**1.2 — Assertions non sourcées**
> Extrait type : *"des milliers de salariés utilisent l'IA en contournant les règles de leur entreprise"*
> Extrait type : *"la majorité des entreprises n'ont pas encore de politique IA formalisée"*
>
> Problème : chiffres/tendances présentés comme établis sans attribution.
>
> Correction : reformuler en "de nombreux salariés..." / "beaucoup d'entreprises n'ont pas encore..." ou citer une source (Gartner, ANSSI, étude sectorielle).

**2.3 — Aucun prompt copiable**
> Le module traite des risques — des protocoles humains (3 questions, 3 règles) sont fournis, mais aucun prompt IA utilisable directement.
>
> Prompting-final.md §2 contient un exemple de prompt de sécurisation :
> ```
> Avant de répondre : identifie les éléments de cette demande qui pourraient
> être sensibles (données personnelles, informations confidentielles, décisions
> à fort impact). Liste-les avant de traiter la demande.
> ```
> Correction : intégrer ce prompt dans la section "risque exfiltration" — il illustre comment l'IA peut elle-même signaler les zones de risque.

**2.4 — Transition M3 peu motivante**
> Le script se clôture sur "3 règles de gouvernance" sans nommer ce qui arrive ensuite.
>
> Correction : ajouter 2-3 phrases du type : "Maintenant que vous savez ce qu'il ne faut pas faire, M3 vous donne la checklist de ce qu'il faut faire systématiquement — votre baseline N1."

**5.1 — Script court**
> ~1050 mots ÷ 130 mots/min ≈ 8 min oral — soit 10 minutes sous le seuil de 18 min.
>
> Correction : étendre à ~2300 mots. Pistes d'expansion :
> - Développer le risque réputationnel avec un deuxième scénario (secteur différent — santé, juridique)
> - Ajouter une section interactive : "testez vos réflexes" — 2-3 cas rapides avec bonne/mauvaise réaction
> - Intégrer le prompt de sécurisation et le faire analyser par l'apprenant

---

## Corrections prioritaires (ordre d'importance)

1. **[BLOQUANT avant tournage]** Étendre le script à ~2300 mots (seuil 18-22 min) — créer script-v2.md
2. **[OBLIGATOIRE avant tournage]** Intégrer le prompt de sécurisation de Prompting-final.md §2
3. **[RECOMMANDÉ]** Reformuler les assertions non sourcées ("milliers", "majorité")
4. **[RECOMMANDÉ]** Enrichir la transition M3 — nommer explicitement la checklist de départ

---

## Décision

**⚠️ VALIDÉ AVEC CORRECTIONS MAJEURES — Score 86/100**
L'accroche (18h, appel d'offres) est la meilleure du Niveau 1 — à conserver intégralement.
La structure des 3 risques est solide et pédagogiquement efficace.
Mais la longueur (~8 min) rend le tournage impossible en l'état.
Script-v2.md requis avant relecture orale (S9).
