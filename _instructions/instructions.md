# Instructions projet — Formation IA Générative
> Version : 1.2 · Sprint : 3 mois · Démarré : 2026-03
> Document de référence pour toute décision de contenu, technique et pédagogique

---

## 1. Vision & ambition

**Rendre accessible une pratique structurée, sécurisée et industrialisable
de l'IA conversationnelle à tout employé de PME/ETI française,
sans expertise technique.**

Ce projet n'est pas une formation sur les outils.
C'est une formation sur la **méthode d'usage responsable**.

Positionnement différenciant :
- Ancrage PME/ETI françaises (RGPD, contexte juridique, enjeux de taille)
- Progression par maturité (pas par fonctionnalité)
- Cas concrets terrain, pas d'exemples génériques
- Gouvernance et risques au cœur, pas en annexe

**Public** : tout employé non expert, France.
**Langue** : français uniquement.
**Ton** : pédagogique, terrain, direct, sans jargon.

---

## 2. Les 3 couches du projet

```
┌─────────────────────────────────────────────────────────┐
│  COUCHE CONTENU                                         │
│  content/modules/ · content/populations/ · quiz/        │
│  → indépendant de la technologie                        │
│  → produit en Markdown, versionné, jamais écrasé        │
├─────────────────────────────────────────────────────────┤
│  COUCHE TECH                                            │
│  site/ (Astro + GitHub Pages)                           │
│  → consomme content/ pour générer les pages             │
│  → quiz JSON + quiz d'orientation JS vanilla            │
├─────────────────────────────────────────────────────────┤
│  COUCHE DÉPLOIEMENT                                     │
│  GitHub Actions (CI/CD automatique)                     │
│  → push sur main → build Astro → deploy GitHub Pages    │
└─────────────────────────────────────────────────────────┘
```

**Règle d'or des couches** : une modification dans content/ ne doit jamais
nécessiter une modification dans site/ — et inversement.
Le pipeline Markdown → pages est automatisé.

---

## 3. Stack technique

| Composant | Outil | Raison |
|-----------|-------|--------|
| Site | Astro + GitHub Pages | 0€, Markdown natif, portable |
| Contenu | Markdown (kebab-case) | Versionnable, lisible sans outil |
| Vidéo | Tournage réel + Descript | Authenticité + coût minimal |
| CI/CD | GitHub Actions | Automatique, documenté |
| Quiz site | JSON + JS vanilla | Sans dépendance framework |
| PDF livre blanc | Pandoc | Script shell, reproductible |
| Synthèse vocale V2 | Coqui + SadTalker | Open source, après lancement |

---

## 4. Les 4 destinations (D1–D4)

| Code | Destination | Format | Échéance |
|------|-------------|--------|----------|
| D1 | Formation en ligne | Site Astro public, 11 modules + quiz | S12 lancement |
| D2 | Vidéos pédagogiques | 8 vidéos tournées (M1-M2, M4-M6, M8-M10) | S10-S11 |
| D3 | Livre blanc PDF | Compilation des 11 scripts en prose continue | S8 |
| D4 | Présentation client (Aristid) | Deck 20 slides + synthèse feedback | S4 |

**Priorité** : D1 (site) > D3 (livre blanc) > D4 (Aristid) > D2 (vidéos).
En cas de retard, les vidéos peuvent être ajoutées post-lancement.

**Note sur D2** : les modules Baseline (M3, M7, M11) n'ont pas de vidéo —
ce sont des évaluations écrites/interactives uniquement.

---

## 5. Architecture 11 modules

### Niveau 1 — Comprendre & situer (N1)
> Public : tout employé, aucun prérequis
> Compétences visées : C1, C2, C6

| Module | Titre | Type | Compétence |
|--------|-------|------|------------|
| M1 | Comprendre l'IA Générative | Vidéo | C1 |
| M2 | Risques & gouvernance | Vidéo | C2, C5 |
| M3 | Évaluation de base N1 | Baseline (pas de vidéo) | C1, C2 |

### Niveau 2 — Prompting & méthode (N2)
> Public : employés ayant validé N1
> Compétences visées : C3, C4, C5

| Module | Titre | Type | Compétence |
|--------|-------|------|------------|
| M4 | Les 4 types de prompts | Vidéo | C3 |
| M5 | La méthode par niveaux 🟢🟡🔵🟣 | Vidéo | C4 |
| M6 | Capitaliser sa connaissance | Vidéo | C4, C5 |
| M7 | Évaluation de base N2 | Baseline (pas de vidéo) | C3, C4 |

### Niveau 3 — Configurer & déployer (N3)
> Public : power users, profils avancés
> Compétences visées : C5, C6

| Module | Titre | Type | Compétence |
|--------|-------|------|------------|
| M8 | Créer son assistant personnalisé | Vidéo | C6 |
| M9 | Skills & bases de connaissance | Vidéo | C5, C6 |
| M10 | Introduction aux MCP | Vidéo (conditionnel V1) | C6 |
| M11 | Évaluation de base N3 | Baseline (pas de vidéo) | C5, C6 |

**Règle de priorité en cas de retard** : couper M10 en V1. Ne jamais couper M3, M7, M11.

---

## 6. Référentiel — 6 compétences

| Code | Compétence | Module principal | Évaluée dans |
|------|------------|-----------------|--------------|
| C1 | Comprendre ce qu'est réellement un LLM | M1 | M3 |
| C2 | Identifier et gérer les 3 risques majeurs | M2 | M3 |
| C3 | Rédiger un prompt selon les 4 types d'intention | M4 | M7 |
| C4 | Appliquer la progression 🟢🟡🔵🟣 sur un cas réel | M5 | M7 |
| C5 | Sécuriser les données en contexte professionnel | M2, M6 | M3, M7 |
| C6 | Choisir le bon modèle selon le niveau de risque | M3, M8 | M11 |

**Validation** : chaque compétence est validée par le quiz du module Baseline correspondant.
Seuil minimum : 70% (6/8 questions) par module.

---

## 7. Règles non négociables

### Contenu
- **Jamais écraser** un fichier script-vX.md → créer script-v(X+1).md
- **Toujours mettre à jour** CHANGELOG.md après modification d'un module
- **Versionner avant de modifier** : si doute, créer une nouvelle version
- **Référentiel source absolu** : Prompting-final.md — lire les sections pertinentes avant tout contenu

### Nommage
- Kebab-case sur tous les fichiers et dossiers
- Sans accents, sans espaces, sans majuscules
- Noms de modules : Mxx-nom-court/ (ex : M4-4types-prompts/)

### Ton et style
- Pédagogique, terrain, phrases courtes
- Pas de jargon sans explication immédiate
- Pas de condescendance — le public est expert dans son métier
- Exemples PME françaises en priorité (éviter les exemples Silicon Valley)

### Technique
- Content (Markdown) et site (Astro) restent indépendants
- Tout script shell documenté dans un commentaire d'en-tête
- GitHub Actions : ne jamais modifier le workflow de déploiement sans test local

### Décisions structurantes
- Toute décision qui modifie l'architecture → dans _instructions/decisions.md
- Toute évolution de semaine → dans _journal/YYYY-WXX.md
- Feedbacks terrain Aristid → dans livrables/presentation-aristid/
