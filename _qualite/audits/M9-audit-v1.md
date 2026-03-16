# Audit — M9 Skills et bases de connaissance — 2026-03
> Audité par : Claude (lecture directe du script-v1.md)
> Module : content/modules/N3/M9-skills-bases-connaissance/script-v1.md

---

## Scores par dimension

| Dimension | Score max | Score | Justification |
|-----------|-----------|-------|---------------|
| 1.1 Conformité référentiel | 10 | 10 | Aligné avec Prompting-final.md section 8 (RAG, qualité des données, discipline 🟡) + section 9 (agents) |
| 1.2 Références vérifiables | 10 | 9 | Accroche "base documentaire qui échoue" clairement fictive (scénario simulé) · Principe "garbage in, garbage out" = expression connue sans prétention à être une statistique |
| 1.3 Compétences C5+C6 adressées | 5 | 5 | C5 (sécuriser les données) + C6 (choisir selon risque) clairement démontrées |
| 2.1 Accroche PME réelle | 10 | 10 | PME + 3 ans de documentation + échec de déploiement IA + causes précises — accroche excellente et très fréquente en réalité |
| 2.2 Exemples concrets | 8 | 8 | Exemples de nommage de fichiers (avant/après), structuration, maintenance — tous opérationnels |
| 2.3 Prompts copiables | 7 | 6 | Prompt de vérification de document source — copiable · Gabarit de nommage de fichiers — directement applicable · Pas de gabarit Skill d'instruction copiable clé en main |
| 2.4 Transition M10/M11 | 5 | 5 | Double transition (M10 optionnel/conditionnel + M11 baseline) bien expliquée — honnête sur le caractère technique de M10 |
| 3.1 Pas de jargon | 8 | 7 | "RAG" non mentionné (évité volontairement dans le script) · "Skills" défini en M6 — OK · "MCP" mentionné en clôture sans être expliqué — risque d'opacité |
| 3.2 Phrases courtes | 7 | 7 | Bon rythme — la section 4 (risque amplifié) est dense mais adaptée au sujet et au public N3 |
| 3.3 Pas d'anglicismes | 5 | 4 | "Garbage in, garbage out" utilisé comme titre de section — expression connue mais anglaise non traduite · "Skills" déjà établi en M6 — OK |
| 4.1 Template complet | 5 | 5 | 6 sections — déviation justifiée (clôture séparée des transitions M10/M11) |
| 4.2 Métadonnées complètes | 5 | 5 | Toutes renseignées |
| 4.3 Notes de production | 5 | 5 | Bien renseignées — lien avec M5, ton expert, transition M10/M11 explicité |
| 5.1 Durée estimée | 7 | 6 | 2144 mots → ~16-17 min narration pure · Slides et pauses compensent · À confirmer à voix haute |
| 5.2 Équilibre sections | 3 | 3 | Bien réparti — aucune section dominante |
| **TOTAL** | **100** | **95** | |

---

## Critères échoués ou partiels

**2.3 — Pas de gabarit Skill d'instruction copiable**
> Le module explique bien la différence Skill d'instruction / Skill de connaissance.
> Il donne un prompt de vérification de sources — copiable.
> Mais il ne fournit pas de gabarit concret pour créer un Skill d'instruction.
>
> Or le M6 a présenté les Skills de façon succincte. Le M9 est le bon endroit pour donner un gabarit opérationnel.
>
> Correction recommandée : ajouter dans la section 2 un gabarit de Skill d'instruction :
> ```
> Nom du Skill : [Nom court]
> Rôle : [Expertise que ce Skill embarque]
> Règles permanentes : [3-5 règles de traitement]
> Format de sortie : [Format par défaut de ce Skill]
> Périmètre : [Ce que ce Skill traite / ne traite pas]
> ```

**3.1 — "MCP" non expliqué en clôture**
> Extrait : *"M10 couvre les MCP : les Model Context Protocols"*
>
> L'acronyme est développé — c'est bien. Mais la phrase suivante ("connecteurs qui permettent à l'IA d'interagir directement avec vos outils existants") peut sembler abstraite pour quelqu'un qui n'a jamais entendu parler de MCP.
>
> Correction légère : ajouter un exemple concret en une phrase : *"concrètement, un MCP permet à l'IA de lire votre CRM ou d'écrire dans votre ERP — sans copier-coller".*

**3.3 — "Garbage in, garbage out" en anglais**
> L'expression est utilisée comme titre de section et dans le corps du texte.
> Elle est suffisamment connue pour ne pas être un blocage de compréhension.
> Mais pour un public non anglophone ou une PME de province, la traduire une fois serait utile.
>
> Correction simple : à la première occurrence, ajouter *"— littéralement : ce que vous donnez, vous le récupérez"*.

**5.1 — Durée légèrement courte**
> 2144 mots ÷ 130 mots/min ≈ 16-17 min.
> À confirmer à voix haute lors de S9.
>
> Si < 18 min : ajouter le gabarit Skill d'instruction (correction 2.3) — cela représente ~150 mots supplémentaires et comble simultanément les deux gaps.

---

## Corrections prioritaires (ordre d'importance)

1. **[RECOMMANDÉ avant tournage]** Ajouter gabarit Skill d'instruction copiable dans section 2 — comble 2.3 et consolide la durée
2. **[RECOMMANDÉ]** Ajouter exemple concret pour MCP en clôture (CRM / ERP — une phrase)
3. **[OPTIONNEL]** Traduire "Garbage in, garbage out" à la première occurrence
4. **[À VÉRIFIER en S9]** Confirmer durée ≥ 18 min à voix haute

---

## Décision

**✅ VALIDÉ — Score 95/100**
Module de très bonne qualité pour le public N3.
L'accroche (base documentaire qui échoue) est particulièrement forte — c'est le cas d'usage le plus fréquent en PME.
La section "risque amplifié" (3 mécanismes) est le point fort pédagogique du module.
Corrections 1 et 2 peuvent être faites en 15 min.
Prêt pour relecture orale après corrections.
