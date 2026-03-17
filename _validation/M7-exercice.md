# Exercice de synthèse — M7 Niveau 2
> Cas complet · Durée estimée : ~30 min
> Objectif : faire passer un vrai livrable de 🟢 (structuré) à 🔵 (optimisé) en appliquant la méthode + vos prompts capitalisés

---

## Introduction

Cet exercice est le point d'arrivée du Niveau 2.

Vous allez prendre un vrai document de travail — quelque chose que vous devez produire ou avez récemment produit — et le faire progresser de 🟢 à 🔵 en appliquant la méthode complète.

Pas d'exemple fictif. Pas de cas simulé.
Votre travail réel. Votre progression mesurable.

---

## Consigne générale

Choisissez un livrable de travail parmi ces options (ou proposez le vôtre) :

- Un compte rendu de réunion à rédiger à partir de vos notes
- Une note de synthèse sur un sujet en cours dans votre organisation
- Une proposition commerciale ou un brief prestataire à construire
- Un plan de communication ou de formation à préparer
- Un rapport d'analyse interne (performance, risques, projet)

Votre livrable choisi : _______________

---

## Étape 1 — Niveau 🟢 : Structurer sans perte d'information

### Objectif
Organiser toute la matière brute disponible sans en supprimer un seul élément.

### Ce que vous faites

1. Rassemblez vos matières brutes : notes, emails, CR de réunion, données, documents existants.
2. Rédigez un prompt de structuration en utilisant le gabarit M4 :

```
Rôle : Expert en structuration documentaire
Contenu source : [Collez ici toute votre matière brute]
Objectif : Organiser en plan hiérarchique Markdown
Contraintes : Ne supprimer aucune information
              Ajouter une section "Points à clarifier"
Format : Plan avec sections numérotées
```

3. Envoyez ce prompt et notez le résultat.

**Évaluation 🟢**
- [ ] Toute la matière brute est présente dans le plan (aucune suppression)
- [ ] La section "Points à clarifier" existe et contient les ambiguïtés identifiées
- [ ] La structure est logique et navigable

Si les 3 critères sont cochés → vous avez validé le niveau 🟢.

Notez la durée : ___ min pour ce cycle.

---

## Étape 2 — Niveau 🟡 : Fiabiliser le contenu

### Objectif
Rendre chaque affirmation sensible vérifiable. Identifier ce qui manque.

### Ce que vous faites

1. Identifiez les sections de votre plan qui contiennent :
   - Des chiffres ou données à vérifier
   - Des références réglementaires (RGPD, AI Act, droit du travail...)
   - Des affirmations de fait qui doivent être sourcées
   - Des décisions à valider par une autre partie prenante

2. Pour chacune, rédigez un prompt de vérification :

```
Rôle : Expert [dans le domaine concerné]
Contenu : [La section à vérifier — copiée depuis le plan 🟢]
Critères : [Les règles, normes ou standards auxquels comparer]
Retour attendu : Rapport d'écarts structuré
Règle : Cite les sources utilisées
        Si une information est absente ou non vérifiable, indique-le
        Signale toute zone d'incertitude ou d'interprétation
```

3. Pour chaque section sans référence externe vérifiable, ajoutez manuellement la mention : *[À valider par : ___]*

**Évaluation 🟡**
- [ ] Chaque affirmation sensible est soit sourcée, soit marquée [À valider]
- [ ] Les obligations manquantes ont été identifiées
- [ ] Les zones d'incertitude sont signalées (pas supprimées)

Si les 3 critères sont cochés → vous avez validé le niveau 🟡.

Notez : combien d'éléments avez-vous dû ajouter ou corriger grâce au 🟡 ?
___

---

## Étape 3 — Niveau 🔵 : Optimiser pour l'usage final

### Objectif
Transformer le contenu structuré et fiabilisé en livrable directement exploitable par son destinataire.

### Ce que vous faites

1. Définissez votre destinataire final :
   - Qui va utiliser ce document ? ___
   - Dans quel contexte ? ___
   - Quel format est le plus utile pour eux ? ___

2. Rédigez un prompt d'optimisation :

```
Rôle : [Expert du domaine + expert communication pour ce public]
Contenu : [Votre plan fiabilisé au complet]
Objectif : Transformer en [nom du livrable final] directement exploitable
Public : [Votre destinataire exact]
Format : [Format précis : tableau / document Word / checklist / présentation / FAQ...]
Contraintes : [Longueur, ton, éléments obligatoires, éléments à exclure]
Qualité requise : Aucun retraitement manuel après production
```

3. Évaluez l'Artifact produit :

**Évaluation 🔵**
- [ ] Le format correspond exactement à ce que le destinataire peut utiliser
- [ ] Aucun retraitement manuel n'est nécessaire avant diffusion
- [ ] Le contenu fiabilisé en 🟡 est intégralement présent
- [ ] Le ton et la longueur sont adaptés au public

Si les 4 critères sont cochés → vous avez validé le niveau 🔵.

---

## Bilan de l'exercice

Remplissez ce tableau récapitulatif :

| Niveau | Validé ? | Durée | Ce que j'ai appris |
|--------|----------|-------|--------------------|
| 🟢 Structurer | [ ] | ___ min | |
| 🟡 Fiabiliser | [ ] | ___ min | |
| 🔵 Optimiser | [ ] | ___ min | |
| **Total** | | ___ min | |

**Question de réflexion**

Si vous aviez sauté directement à 🔵 (comme la plupart des gens), qu'aurait-il manqué dans le livrable final ?
___

**Ficher ce workflow**

Vous venez d'appliquer un workflow complet 🟢→🟡→🔵 sur un vrai document.
Créez maintenant la fiche prompt correspondante dans votre bibliothèque (Partie 1 du M7).

Ce n'est pas un exercice de plus. C'est le premier élément de votre capital méthodologique.
