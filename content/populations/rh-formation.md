# Fiche population — RH / Formation

> Profil : DRH, responsables RH, chargés de formation, gestionnaires de paie
> Niveau de départ recommandé : N1
> Mise à jour : 2026-03

---

## 3 cas d'usage prioritaires

### 1. Rédaction de fiches de poste et offres d'emploi

**Contexte** : créer des offres attractives, cohérentes avec la marque employeur,
conformes aux exigences légales (non-discrimination, égalité H/F).

**Prompt type** :
```
Tu es un expert RH spécialisé en recrutement.
Je recrute un(e) [intitulé du poste] pour une entreprise [secteur, taille].

Rédige une offre d'emploi avec :
- Titre accrocheur (sans mention de genre)
- Contexte et mission (3 phrases max)
- 5 responsabilités principales (bullet points actifs)
- 4 compétences requises + 2 appréciées
- Ce que nous offrons (3 éléments différenciants)

Contraintes : ton [direct / chaleureux], pas de jargon RH,
formulation inclusive, lecture < 3 min.
```

---

### 2. Construction de parcours de formation

**Contexte** : concevoir un plan de formation adapté à un profil, identifier
les gaps de compétences, structurer un programme de montée en compétences.

**Prompt type** :
```
Je dois former [profil : ex. managers de proximité] sur [sujet].
Niveau actuel estimé : [débutant / intermédiaire].
Contraintes : [durée dispo, format présentiel/distanciel, budget].

Propose-moi :
1. Les 3 compétences prioritaires à développer (avec justification)
2. Un séquencement pédagogique en [X] étapes
3. Pour chaque étape : format recommandé + durée + indicateur de maîtrise
4. Les 2 erreurs classiques dans ce type de parcours

Format : tableau + notes d'implémentation.
```

---

### 3. Synthèse d'entretiens et préparation de comités RH

**Contexte** : préparer les entretiens annuels, synthétiser des feedbacks 360,
structurer un dossier pour un comité de carrière ou de promotion.

**Prompt type** :
```
Voici les notes brutes de l'entretien annuel de [prénom / poste] :
[coller les notes — sans nom complet ni données identifiantes si possible]

Rédige une synthèse structurée avec :
1. Points forts observés (3 max, avec exemple concret)
2. Axes de développement (2 max, formulés positivement)
3. Engagements pris pour l'année prochaine
4. Niveau de performance global : [échelle ou catégorie que tu utilises]

Ton : factuel, bienveillant, prêt à être partagé avec le manager.
```

---

## 2 risques spécifiques

### Risque 1 — Traitement de données personnelles et RGPD

La RH traite les données les plus sensibles de l'entreprise :
salaires, évaluations, situations médicales, orientations syndicales,
situations familiales. Toutes ces données sont protégées par le RGPD.

**Règle absolue** : ne jamais coller de données nominatives complètes
dans un LLM public. Anonymiser systématiquement avant de soumettre
(remplacer nom/prénom par "Employé A", supprimer dates de naissance,
numéros de sécurité sociale, adresses).

Utiliser uniquement des instances avec politique de non-rétention
et vérifier la conformité avec le DPO de l'entreprise.

---

### Risque 2 — Biais de recrutement et discrimination algorithmique

Les LLM sont entraînés sur des données historiques qui reflètent
les biais sociétaux existants (genre, origine, âge).
Demander à l'IA de "choisir le meilleur candidat" ou de "noter des CV"
peut amplifier ces biais de façon invisible.

**Antidote** : utiliser l'IA pour des tâches de *rédaction et structuration*,
jamais pour des tâches de *sélection ou évaluation comparative de personnes*.
Toujours garder la décision finale entre mains humaines.
Relire les outputs IA avec un regard inclusivité avant publication.

---

## Module de départ recommandé

**→ M2 — Risques & gouvernance de l'IA**

La RH est la fonction la plus exposée aux risques RGPD et éthiques de l'IA.
Commencer par M2 permet de poser le cadre avant tout usage opérationnel :
quelles données peut-on traiter, avec quel outil, sous quelles conditions.

Ensuite : **M4** (4 types de prompts) pour maîtriser les cas d'usage rédactionnels.
