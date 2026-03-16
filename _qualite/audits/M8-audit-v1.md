# Audit — M8 Créer son assistant personnalisé — 2026-03
> Audité par : Claude (lecture directe du script-v1.md)
> Module : content/modules/N3/M8-assistant-personnalise/script-v1.md

---

## Scores par dimension

| Dimension | Score max | Score | Justification |
|-----------|-----------|-------|---------------|
| 1.1 Conformité référentiel | 10 | 9 | Aligné avec Prompting-final.md section 9 (agents, system prompt, industrialisation) · Notion "system prompt" non citée dans le référentiel mais cohérente avec son esprit |
| 1.2 Références vérifiables | 10 | 9 | Aucune statistique ou chiffre non sourcé · Exemple PME "analyse précontractuelle" clairement simulé |
| 1.3 Compétence C6 adressée | 5 | 5 | C6 clairement démontrée — 5 composantes du system prompt + choix selon niveau de risque |
| 2.1 Accroche PME réelle | 10 | 9 | Référent IA + collègues répétant les mêmes questions + re-explication permanente — très ancré |
| 2.2 Exemples concrets | 8 | 8 | Exemple assistant juridique précontractuel PME 50 personnes — concret et opérationnel |
| 2.3 Prompts copiables | 7 | 7 | Gabarit system prompt complet + gabarit de test des 4 scénarios — directement utilisables |
| 2.4 Transition M9 | 5 | 5 | "Connaissance métier vs costume" — formulation mémorable qui crée l'envie |
| 3.1 Pas de jargon | 8 | 7 | "System prompt" expliqué dès sa première apparition · "Skill" déjà vu en M6 — OK |
| 3.2 Phrases courtes | 7 | 7 | Rythme adapté au public N3 — légèrement plus dense qu'en N1/N2, cohérent avec le niveau |
| 3.3 Pas d'anglicismes | 5 | 4 | "System prompt" utilisé tel quel — terme technique inévitable mais pourrait être traduit en "instructions permanentes" dès la première occurrence |
| 4.1 Template complet | 5 | 5 | Structure en 6 sections (+ avertissement N3) — déviation justifiée et bien annoncée |
| 4.2 Métadonnées complètes | 5 | 5 | Toutes renseignées |
| 4.3 Notes de production | 5 | 5 | Très bien renseignées — ton, visuels, points forts, avertissement N3 |
| 5.1 Durée estimée | 7 | 6 | 2119 mots → ~16 min narration pure · Slides et pauses compensent une partie · Légèrement court — à vérifier à voix haute |
| 5.2 Équilibre sections | 3 | 3 | Équilibre correct — aucune section ne dépasse 30% |
| **TOTAL** | **100** | **94** | |

---

## Critères échoués ou partiels

**1.1 — "System prompt" absent du référentiel Prompting-final.md**
> Le terme "system prompt" n'apparaît pas dans Prompting-final.md. Le module le présente comme une évidence N3.
>
> Ce n'est pas une erreur — le référentiel couvre la section 9 (agents) qui implique le concept — mais cela crée un léger gap entre le référentiel et le module.
>
> Correction : ajouter une ligne dans les Notes de production indiquant que "system prompt = couche d'instructions permanentes au sens de la section 9 du référentiel".

**3.3 — "System prompt" en anglais non traduit à la première occurrence**
> Extrait : *"le system prompt — les règles du jeu permanentes"*
>
> La parenthèse est bonne — elle traduit le concept. Mais le terme anglais précède la traduction.
>
> Correction mineure : inverser l'ordre : *"les instructions permanentes — ce qu'on appelle le system prompt"*.

**5.1 — Durée légèrement courte**
> 2119 mots ÷ 130 mots/min ≈ 16 min narration pure.
> L'avertissement N3 (~200 mots) + les slides + les pauses compensent probablement.
> À confirmer lors de la relecture orale en S9.
>
> Si la durée réelle est < 18 min : ajouter un exemple supplémentaire dans la section 3 (une deuxième application métier du gabarit system prompt — ex : assistant RH).

---

## Corrections prioritaires (ordre d'importance)

1. **[À VÉRIFIER en S9]** Relecture orale : valider durée réelle ≥ 18 min · Si < 18 min → ajouter un deuxième exemple de gabarit appliqué
2. **[RECOMMANDÉ avant tournage]** Inverser l'ordre "system prompt" / "instructions permanentes" à la première occurrence
3. **[OPTIONNEL]** Aligner la terminologie avec Prompting-final.md dans les notes de production

---

## Décision

**✅ VALIDÉ — Score 94/100**
Module structurellement excellent pour un public N3.
L'avertissement N3 + le gabarit 5 composantes + les 4 scénarios de test constituent un kit opérationnel complet.
Seule la durée réelle doit être confirmée à voix haute.
Prêt pour relecture orale (S9).
