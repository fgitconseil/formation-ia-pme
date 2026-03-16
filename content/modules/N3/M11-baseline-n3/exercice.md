# Projet final — M11 Niveau 3
> Conception d'un plan de déploiement IA pour votre organisation
> Durée estimée : ~60 min · Livrable réutilisable directement

---

## Introduction

Ceci est le projet final de la formation.

Pas un exercice fictif. Votre organisation réelle. Un cas d'usage que vous voulez faire passer de l'usage individuel à un usage structuré et reproductible.

L'objectif n'est pas la perfection. C'est de produire un premier plan de déploiement suffisamment solide pour être présenté à votre manager ou à votre équipe.

---

## Étape 1 — Identifier votre cas d'usage à industrialiser (10 min)

### Critères de sélection

Un bon cas d'usage pour un premier déploiement est :

- **Récurrent** : il se répète au moins une fois par semaine
- **Balisé** : le périmètre est clair — il ne couvre pas tous les usages IA de l'organisation
- **Vérifiable** : un humain peut évaluer la qualité de l'output avant diffusion
- **À enjeu modéré** : pas un cas à fort impact juridique ou stratégique pour un premier déploiement

### Exemples de cas d'usage de premier déploiement

- Comptes rendus de réunion d'équipe (opérations, RH, commercial)
- Rédaction d'offres d'emploi standardisées
- Synthèses de comptes clients pour la préparation des revues mensuelles
- Analyse préliminaire de contrats fournisseurs standard
- Réponses aux questions fréquentes internes (procédures, congés, IT)

### Votre cas d'usage

| Champ | Votre réponse |
|-------|---------------|
| Intitulé du cas d'usage | |
| Service(s) concerné(s) | |
| Fréquence actuelle | |
| Qui l'utilise aujourd'hui ? | |
| Pourquoi ce cas ? (valeur attendue) | |

---

## Étape 2 — Rédiger le workflow de validation (15 min)

### Objectif
Décrire les étapes du processus IA de bout en bout, avec les points de contrôle humain.

### Template de workflow

Remplissez chaque étape :

```
WORKFLOW — [Nom du cas d'usage]

ÉTAPE 1 — ENTRÉE
  Qui soumet la demande : ___
  Quelles données sont fournies : ___
  Données interdites (à anonymiser ou exclure) : ___

ÉTAPE 2 — TRAITEMENT IA
  Outil utilisé (assistant / Skill / conversation) : ___
  System prompt ou Skill actif : ___
  Type de prompt (M4) : Production / Exploration / Structuration / Vérification
  Niveau de la méthode (M5) : 🟢 / 🟡 / 🔵

ÉTAPE 3 — VALIDATION HUMAINE
  Qui valide ? : ___
  Critères de validation : ___
  Délai maximum avant validation : ___
  Que se passe-t-il si non validé ? : ___

ÉTAPE 4 — DIFFUSION
  Vers qui ? : ___
  Sous quelle forme ? (email / doc partagé / outil interne) : ___
  Traçabilité : comment noter que cet output a été produit avec l'IA ? : ___

ÉTAPE 5 — CAPITALISATION
  L'output est-il conservé dans la bibliothèque de prompts ? : Oui / Non
  Amélioration notée (si applicable) : ___
```

---

## Étape 3 — Définir les KPI de suivi (10 min)

Choisissez 3 indicateurs parmi ceux proposés, ou définissez les vôtres.

| KPI | Fréquence | Responsable | Valeur cible |
|-----|-----------|-------------|--------------|
| | | | |
| | | | |
| | | | |

**Indicateurs proposés (à adapter) :**
- % d'outputs validés sans correction → cible ≥ 80%
- Temps moyen de production (avec IA vs sans IA) → cible : réduction ≥ 30%
- Taux d'adoption (% d'utilisateurs formés qui utilisent régulièrement) → cible ≥ 70%
- Anomalies signalées par les utilisateurs → cible : 0 non traitée sous 48h

---

## Étape 4 — Identifier les risques et les garde-fous (15 min)

### Grille d'analyse des risques

Pour chaque risque, évaluez l'impact (1=faible, 3=élevé) et définissez le garde-fou.

| Risque | Impact (1-3) | Probabilité (1-3) | Garde-fou |
|--------|-------------|-------------------|-----------|
| Données confidentielles transmises sans anonymisation | | | |
| Source du Skill obsolète → réponse incorrecte diffusée | | | |
| Validation humaine contournée sous pression délai | | | |
| Utilisateur hors formation utilise l'assistant | | | |
| Output utilisé pour une décision à fort enjeu sans vérification | | | |
| [Risque spécifique à votre cas d'usage] | | | |

### Les 3 garde-fous non négociables

Quels que soient vos risques spécifiques, ces 3 garde-fous doivent figurer dans tout déploiement :

1. **Validation humaine obligatoire avant toute diffusion externe**
   Responsable : ___ / Critères : ___

2. **Référent IA désigné et joignable**
   Nom : ___ / Comment le contacter : ___

3. **Mécanisme de signalement d'anomalie**
   Comment signaler : ___ / Qui traite : ___ / Délai de traitement : ___

---

## Grille d'auto-évaluation du plan

Avant de présenter votre plan, vérifiez ces 8 points :

- [ ] Le cas d'usage est clairement délimité — pas trop large, pas trop vague
- [ ] Le workflow est écrit étape par étape, pas seulement décrit en général
- [ ] La validation humaine est nommée (qui), définie (critères) et planifiée (quand)
- [ ] Les données interdites sont listées explicitement
- [ ] Au moins 3 KPI sont définis avec un responsable chacun
- [ ] Au moins 3 risques sont identifiés avec leur garde-fou
- [ ] Un référent IA est désigné
- [ ] Un mécanisme de signalement d'anomalie est prévu

**Score 8/8** → Plan prêt pour présentation
**Score 6-7/8** → Compléter les points manquants
**Score < 6/8** → Retravailler le plan avant présentation — les points manquants sont des risques non maîtrisés

---

## Ce que vous avez produit

Un plan de déploiement IA en 4 étapes :

1. Cas d'usage identifié et délimité
2. Workflow documenté avec points de contrôle humain
3. KPI définis avec responsables
4. Risques identifiés avec garde-fous

Ce plan est votre première contribution concrète à la gouvernance IA de votre organisation.

Il peut évoluer. Il évoluera. C'est normal.

Ce qui compte, c'est qu'il existe — et qu'il soit partagé.
