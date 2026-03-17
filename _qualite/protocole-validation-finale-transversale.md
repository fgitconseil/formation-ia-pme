# Protocole de validation finale — Vision transversale
> Version : 1.0 · 2026-03
> Après la contre-validation module par module — valider la formation comme un tout

---

## Pourquoi cette étape

Les contre-validations NotebookLM précédentes ont validé chaque module séparément.
Cette session valide la **cohérence de la formation dans son ensemble** :
- Vocabulaire homogène d'un module à l'autre
- Progression pédagogique fluide M1→M11
- Absence de redondances non intentionnelles
- Bridges entre modules suffisamment préparés

---

## Sources à charger dans NotebookLM (session unique)

Ajouter aux sources permanentes déjà chargées :

**Modules v2 (scripts/checklist/atelier/guide) :**
```
content/modules/N1/M1-comprendre-llm/script-v2.md
content/modules/N1/M2-risques-gouvernance/script-v2.md
content/modules/N1/M3-baseline-n1/checklist.md       ← v1 (pas de v2 produite)
content/modules/N2/M4-4types-prompts/script-v2.md
content/modules/N2/M5-methode-niveaux/script-v2.md
content/modules/N2/M6-connaissance-capitalisee/script-v2.md
content/modules/N2/M7-baseline-n2/atelier-v2.md
content/modules/N3/M8-assistant-personnalise/script-v2.md
content/modules/N3/M9-skills-bases-connaissance/script-v2.md
content/modules/N3/M11-baseline-n3/guide-v2.md
```

Note sur M10 : conditionnel — ne pas charger · décision post-Aristid S4

---

## NotebookLM — 4 questions transversales

### Q1 — Cohérence du vocabulaire

```
En parcourant tous les modules chargés, identifie les termes clés
utilisés de façon incohérente d'un module à l'autre.
Par exemple : un concept nommé différemment dans M1 et M5,
ou une notion introduite en M4 mais utilisée sans rappel en M7.
Liste les 3-5 incohérences les plus importantes.
```

### Q2 — Fluidité de la progression pédagogique

```
La progression M1→M3 (N1) puis M4→M7 (N2) puis M8→M11 (N3)
est-elle fluide pour un apprenant qui suit les modules dans l'ordre ?
Y a-t-il un saut de difficulté abrupt entre deux modules ?
Y a-t-il un concept utilisé en N2 qui aurait dû être introduit en N1 ?
```

### Q3 — Redondances non intentionnelles

```
Y a-t-il des passages qui se répètent de façon non intentionnelle
entre modules ? (à distinguer des reprises pédagogiques volontaires
comme le cas Marc RH qui apparaît dans M5 et M6)
```

### Q4 — Validation M3 exercice (cas Nicolas)

```
L'exercice principal de M3 présente un cas : Nicolas envoie un email
avec un prompt contenant des données sensibles (contrat client, marges, noms).
L'apprenant doit identifier les problèmes, corriger le prompt
et rédiger une réponse à Nicolas.

Est-ce exercice :
1. Cohérent avec ce qui a été enseigné en M1 et M2 ?
2. Bien calibré en difficulté pour un apprenant N1 ?
3. Le corrigé fourni est-il aligné avec les principes du référentiel v2 ?
Y a-t-il une correction ou un enrichissement à apporter ?
```

---

## Gemini — 3 questions sur les angles non vus

**Setup : coller le contenu de README.md (plan des 11 modules)**

### Q1 — Angle manquant vs marché 2026

```
Voici le plan d'une formation IA générative pour managers PME françaises.
Y a-t-il un sujet que TOUTES les formations IA de 2026 couvrent
et que cette formation omet complètement ?
```

### Q2 — Action concrète le lendemain matin

```
Un manager de PME française vient de terminer cette formation complète.
Quelle serait la PREMIÈRE chose qu'il pourrait faire concrètement
le lendemain matin à 9h ?
Est-ce suffisamment clair dans la formation ou faut-il ajouter
un guide "premiers pas" en sortie de formation ?
```

### Q3 — Contradictions avec les pratiques terrain françaises

```
Y a-t-il une contradiction entre ce que cette formation enseigne
et les pratiques réelles observées dans les entreprises françaises en 2026 ?
Par exemple : un conseil qui serait théoriquement correct
mais difficile à appliquer dans une PME française typique.
```

---

## Grille de collecte

Fichier à créer : `_qualite/audits/validation-finale-transversale.md`

```markdown
# Validation finale transversale — [Date]

## NotebookLM

### Q1 — Incohérences vocabulaire
- [terme 1] : module X dit "..." / module Y dit "..."
- ...

### Q2 — Saut de difficulté
- Entre M[X] et M[Y] : [description]

### Q3 — Redondances
- [passage] présent dans M[X] et M[Y]

### Q4 — M3 exercice Nicolas
- Cohérence M1/M2 : ✅ / ⚠️
- Calibration difficulté : ✅ / ⚠️
- Corrigé aligné ref v2 : ✅ / ⚠️
- Corrections : [liste]

## Gemini

### Q1 — Angle manquant
### Q2 — Action lendemain matin
### Q3 — Contradictions terrain France

## Synthèse — corrections finales avant relecture orale

| Correction | Module | Priorité | Effort |
|------------|--------|----------|--------|
| | | | |
```

---

## Séquence complète avant tournage

```
1. Validation finale NotebookLM (transversale) ← maintenant
2. Validation finale Gemini (angles non vus)    ← maintenant
3. Relecture orale (~3h bloquées)               ← seule action non délégable
4. Aristid S4 (test terrain)                    ← valide les messages clés
5. Corrections v3 post-Aristid (M5 notamment)  ← Claude Code
6. Tournage M1 + M2 (premiers modules)          ← démarrer par les plus solides
```
