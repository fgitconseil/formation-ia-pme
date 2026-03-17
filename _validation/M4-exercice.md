# M4 — Exercice pratique : Identifier, corriger, construire
> Durée : ~20 min · Format : 3 exercices progressifs

---

## Objectif

Passer de la théorie à la pratique : reconnaître les 4 types dans des situations réelles,
corriger un prompt mal typé, puis construire votre propre gabarit de production.

---

## Exercice 1 — Classer 6 demandes dans les 4 types (7 min)

Pour chacune des demandes ci-dessous, indiquez le type de prompt adapté :
**P = Production · E = Exploration · S = Structuration · V = Vérification**

| # | Demande | Type |
|---|---------|------|
| 1 | *"J'ai les notes de 3 réunions sur notre projet de transformation digitale. Organise-les en feuille de route claire."* | |
| 2 | *"Rédige une offre d'emploi pour un poste de contrôleur de gestion senior dans une ETI industrielle."* | |
| 3 | *"Avant de choisir entre Salesforce et HubSpot, aide-moi à voir les critères qui comptent pour une PME de 50 personnes."* | |
| 4 | *"Voici notre plan de communication de crise. Vérifie s'il couvre les scénarios réglementaires obligatoires."* | |
| 5 | *"J'ai une transcription de 45 min d'interview client. Transforme-la en synthèse utilisable pour l'équipe produit."* | |
| 6 | *"Avant de signer ce contrat de prestation, dis-moi si les clauses de responsabilité sont standards ou problématiques."* | |

**Corrigé :**

| # | Type | Raison |
|---|------|--------|
| 1 | **S** | Contenu brut (notes) → à organiser sans recréer |
| 2 | **P** | Livrable défini (offre d'emploi) avec format attendu |
| 3 | **E** | Pas de livrable défini — besoin de cartographier avant de décider |
| 4 | **V** | Document existant (plan) → contrôler sur des critères précis |
| 5 | **S** | Contenu brut (transcription) → à structurer sans perte d'info |
| 6 | **V** | Document existant (contrat) → identifier les écarts sur des standards |

**Score :** 6/6 → passage direct à l'exercice 3 · < 4/6 → relire les gabarits dans le script M4

---

## Exercice 2 — Réécrire un prompt mal typé (7 min)

Voici un prompt réel envoyé par un manager à l'IA :

> *"Parle-moi des bonnes pratiques pour organiser les réunions d'équipe. J'ai besoin d'améliorer nos réunions hebdomadaires."*

**Problème :** Ce prompt est flou sur 3 dimensions — le type d'intention n'est pas clair, le livrable attendu n'est pas précisé, et le contexte est absent.

**Étape 1 :** Identifiez quel type serait le plus adapté à ce besoin.
- Le manager veut-il *comprendre* le terrain ? → Exploration
- Veut-il *produire* un guide ou une checklist ? → Production
- A-t-il du contenu brut à organiser ? → Structuration
- A-t-il un process existant à contrôler ? → Vérification

**Étape 2 :** Réécrivez le prompt avec le gabarit correspondant.

*(Exemple de réécriture si le manager veut produire une checklist opérationnelle :)*

```
Rôle : Expert en efficacité organisationnelle
Objectif : Créer une checklist de préparation pour des réunions hebdomadaires d'équipe de 6 à 10 personnes
Contexte : PME industrielle, managers de proximité, réunions souvent trop longues ou sans suivi
Format : Checklist en 3 parties — Avant (5 points) · Pendant (4 points) · Après (3 points)
Contraintes : Actions concrètes, verbes d'action, < 1 page
```

**Votre réécriture** (choisissez le type qui correspond à votre lecture du besoin) :

```
Rôle :
Objectif :
Contexte :
Format :
Contraintes :
```

---

## Exercice 3 — Construire votre gabarit de production personnel (6 min)

Identifiez une tâche récurrente dans votre travail pour laquelle vous utilisez (ou pourriez utiliser) l'IA.

**Exemples de tâches récurrentes :**
- Rédiger des comptes rendus de réunion
- Produire des synthèses de rapports
- Préparer des notes pour un comité
- Rédiger des communications internes
- Préparer des réponses à appels d'offres

**Remplissez votre gabarit de production :**

```
Ma tâche récurrente : _______________

Rôle :        [Quel expert voulez-vous que l'IA joue ?]
Objectif :    [Quel livrable précis produire ?]
Contexte :    [Pour qui, dans quel cadre, à quelle fréquence ?]
Données :     [Ce que vous fournissez habituellement — anonymisé]
Format :      [Structure exacte attendue en output]
Contraintes : [Longueur, ton, ce à éviter absolument]
```

**Testez votre gabarit** sur un cas réel et notez :
- [ ] Le résultat était utilisable dès le premier essai ?
- [ ] Quel champ manquait ou était trop vague ?
- [ ] Qu'ajouteriez-vous pour le prochain usage ?

**Capitalisez-le** : enregistrez ce gabarit dans votre bibliothèque de prompts personnelle (point 10 de la checklist M3).

---

## Grille de réflexion

| Exercice | Ce que j'ai appris | Mon action cette semaine |
|----------|-------------------|--------------------------|
| 1 — Classification | | |
| 2 — Réécriture | | |
| 3 — Mon gabarit | | |
