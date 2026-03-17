# M2 — Exercice pratique : Cartographier et sécuriser ses usages IA
> Durée : ~20 min · Format : réflexion + mise en pratique autonome

---

## Objectif

Appliquer les 3 risques du module à votre contexte professionnel réel :
identifier ce que vous faites déjà, ce que vous faites à risque, et poser vos règles personnelles.

---

## Exercice 1 — Inventaire de vos usages actuels (5 min)

**Ce que vous faites :**
Listez les 3 à 5 dernières tâches pour lesquelles vous avez utilisé (ou voulu utiliser) une IA.

Pour chaque tâche, répondez aux 3 questions de sécurité :

| Tâche | Données rendables publiques ? | Personnes identifiables ? | Avantage concurrentiel ? |
|-------|------------------------------|--------------------------|--------------------------|
| _ex: rédiger email client_ | Non | Oui (nom + contrat) | Non |
| | | | |
| | | | |

**Ce que vous observez :**
- Avez-vous déjà transmis des données des colonnes 2 ou 3 à un LLM public ?
- Si oui : était-ce conscient ?

**Ce à retenir :**
Le risque d'exfiltration est souvent involontaire — il vient du réflexe de copier-coller sans réfléchir.

---

## Exercice 2 — Construire son protocole de vérification (5 min)

**Ce que vous faites :**
Prenez un output IA récent (un texte que l'IA a généré pour vous).
Appliquez le protocole de vérification en 3 temps.

**Étape 1** : Identifiez les zones à risque dans le texte.
Encerclez (ou surlignez) tous les éléments qui appartiennent à ces catégories :
- [ ] Dates et délais
- [ ] Chiffres et statistiques
- [ ] Références légales ou normatives
- [ ] Engagements ou promesses
- [ ] Noms propres d'organisations

**Étape 2** : Pour chaque zone identifiée, notez la source primaire où vous devriez vérifier.
_(ex : "article de loi → legifrance.fr", "chiffre marché → rapport sectoriel officiel")_

**Étape 3** : Définissez qui fait la vérification dans votre organisation.
- Vous-même avant envoi ?
- Un collègue en relecture ?
- Un expert métier sur les zones réglementaires ?

**Ce à retenir :**
Un protocole de vérification n'a de valeur que s'il est appliqué systématiquement.
Décidez une règle simple et tenez-vous-y.

---

## Exercice 3 — Évaluer un usage IA de votre équipe (10 min)

**Ce que vous faites :**
Identifiez un usage IA existant dans votre équipe ou organisation
(ou un usage que vous envisagez de mettre en place).

Évaluez sa maturité sur la grille suivante :

| Critère | Oui | Non | Commentaire |
|---------|-----|-----|-------------|
| Le contenu a été utilisé et validé humainement ≥ 1 mois | | | |
| Les erreurs types ont été identifiées et corrigées | | | |
| Une supervision humaine est maintenue dans le processus | | | |
| Les données utilisées ne contiennent pas d'informations sensibles | | | |
| Un responsable est désigné pour chaque étape du processus | | | |

**Score :**
- 5/5 oui → Vous êtes prêt à optimiser (🔵)
- 3-4/5 oui → Vous êtes en phase de fiabilisation (🟡), continuez
- 0-2/5 oui → Restez en structuration (🟢), ne passez pas encore à l'automatisation

**Ce à retenir :**
L'objectif n'est pas de bloquer les usages IA — c'est de les faire progresser méthodiquement
pour éviter les erreurs coûteuses à grande échelle.

---

## Grille de réflexion (à conserver)

| Exercice | Ce que j'ai découvert | Ma règle personnelle |
|----------|----------------------|---------------------|
| 1 — Inventaire usages | | |
| 2 — Protocole vérification | | |
| 3 — Évaluation maturité | | |

---

## Conclusion de l'exercice

Vous avez maintenant une image claire de vos usages actuels et de leur niveau de risque.

La suite — M3 — est l'évaluation de base du Niveau 1.
Elle consolide les acquis de M1 et M2 avant de passer à la méthode pratique en N2.
