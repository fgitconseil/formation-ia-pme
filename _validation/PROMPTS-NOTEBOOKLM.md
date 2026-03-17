# Prompts NotebookLM — Validation finale complète
> À utiliser une fois les 49 sources chargées (44 fichiers + 4 REF + Prompting-final-v2.md)
> Lancer les prompts dans l'ordre — attendre la réponse avant de passer au suivant

---

## PROMPT 1 — Scripts : alignement avec le référentiel réel

```
Le référentiel Prompting-final-v2.md vient d'être chargé dans sa version
complète et définitive (1543 lignes · corrections §8 et §9 incluses).

Les scripts des modules v2 ont été produits avant que ce fichier soit
disponible dans son intégralité.

Pour chaque module M1 à M11, réponds à cette question unique en croisant
le script du module avec Prompting-final-v2.md :

"Y a-t-il une affirmation dans ce script qui contredit directement le
référentiel, ou un point important du référentiel que ce module devrait
couvrir et ne couvre pas ?"

Format de réponse attendu — 1 ligne par module :
M1 : ✅ Aligné / ⚠️ [problème précis en 1 phrase]
M2 : ✅ Aligné / ⚠️ [problème précis en 1 phrase]
...jusqu'à M11

Puis une synthèse des 3 points les plus importants à corriger
avant la relecture orale.
```

---

## PROMPT 2 — Quiz : exactitude des bonnes réponses

```
J'ai chargé les quiz de M1 à M11 (8 questions chacun sauf M11 = 10).

Question unique : en croisant chaque quiz avec le référentiel
Prompting-final-v2.md et les sources de référence disponibles,
y a-t-il une "bonne réponse" officielle qui est inexacte, trop
simplifiée ou contestable selon les standards 2026 ?

Format attendu — 1 ligne par module :
M1-quiz : ✅ Toutes correctes / ⚠️ Q[X] : [problème]
...jusqu'à M11

Signaler uniquement les cas problématiques.
```

---

## PROMPT 3 — Cohérence transversale M1→M11

```
En parcourant l'ensemble des scripts M1 à M11 chargés :

Q1 — VOCABULAIRE : y a-t-il des termes clés utilisés de façon
incohérente d'un module à l'autre ? Lister les 3 incohérences
les plus importantes avec les modules concernés.

Q2 — PROGRESSION : y a-t-il un saut de difficulté abrupt
entre deux modules ? Un concept utilisé en N2 qui aurait dû
être introduit en N1 ?

Q3 — REDONDANCES : y a-t-il des passages qui se répètent
de façon non intentionnelle entre modules ?
(exclure les reprises pédagogiques volontaires comme le cas Marc)
```

---

## PROMPT 4 — Exercices et posts LinkedIn

```
J'ai chargé les exercices et posts LinkedIn de M1 à M11.

Q1 — EXERCICES : les mises en situation proposées sont-elles
réalistes pour un manager PME français en 2026 ?
Y a-t-il un exercice dont le scénario est dépassé ou mal calibré ?

Q2 — POSTS LINKEDIN : y a-t-il une affirmation dans les posts
qui serait techniquement inexacte ou exagérée selon les sources
disponibles ? Signaler uniquement les cas problématiques.

Q3 — TERMINOLOGIE POSTS : en dehors des corrections déjà connues
(M6/M7/M9 Skills→Projets), y a-t-il d'autres incohérences
terminologiques dans les posts LinkedIn ?
```

---

## PROMPT 5 — Validation M3 (seul module sans contre-validation individuelle)

```
M3 est le seul module qui n'a pas eu de contre-validation individuelle
(score 97/100 + 50/50 — considéré comme optimal).

Maintenant que tous les modules sont chargés et que le référentiel
complet est disponible :

Q1 — La checklist M3 (10 points) est-elle cohérente avec ce qui
est enseigné en M1 et M2 ? Y a-t-il un point qui anticipe
des notions abordées seulement en M4 ou après ?

Q2 — L'exercice de M3 (cas Nicolas — email avec prompt risqué)
est-il bien calibré pour un apprenant qui vient de terminer M1+M2 ?
Le corrigé est-il aligné avec le référentiel v2 ?

Q3 — Les posts LinkedIn de M3 sont-ils cohérents avec le ton
et le niveau d'un module de baseline N1 ?
```

---

## Notes d'utilisation

- Attendre la réponse complète de chaque prompt avant de passer au suivant
- Copier chaque réponse dans _qualite/audits/validation-finale-transversale.md
- Les corrections identifiées alimentent la dernière commande Claude Code
  avant la relecture orale
- Si NotebookLM signale une limitation de contexte, charger les modules
  par niveau (N1 · N2 · N3) en 3 sessions séparées
