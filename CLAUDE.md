# CLAUDE.md — Contexte projet (lu automatiquement par Claude Code)

## Ce projet

Formation IA Générative pour PME/ETI françaises.
Objectif : rendre accessible une pratique structurée et industrialisable de l'IA
conversationnelle à tout employé, sans expertise technique.

**Positionnement : opérationnalisation, pas technologie.**
**Public : PME/ETI françaises, non experts.**
**Langue : français uniquement.**

---

## Document de référence ABSOLU

```
Prompting-final.md (racine du repo)
```

Ce fichier est le référentiel pédagogique source de toute la formation.
**Avant de produire tout contenu (script, quiz, exercice, post), lire les sections pertinentes.**

Sections clés :
- Section 1  → Nature du LLM, limites, règle d'or (pour M1)
- Section 2  → Gouvernance et risques (pour M2)
- Sections 4-6 → Progression 🟢🟡🔵🟣 et raisonnement (pour M4, M5)
- Section 7  → Les 4 types de prompts (pour M4)
- Section 8  → Données et RAG (pour M6, M9)
- Section 9  → Agents IA (pour M10)
- Section 10 → Cas complet Marc RH (référence de style et niveau pour TOUS les modules)

---

## Structure du repo

```
Formation_prompting/
├── CLAUDE.md                    ← ce fichier (lu automatiquement)
├── Prompting-final.md           ← RÉFÉRENTIEL SOURCE
├── README.md                    ← architecture du repo
├── _instructions/               ← cerveau du projet
│   ├── instructions.md          ✅ v1.2 complète
│   ├── plan-execution.md        ✅ 12 semaines complet
│   ├── decisions.md             ✅ journal des décisions
│   ├── outils-claude-code-cowork.md  ✅
│   └── analyse-skilljar-vs-formation.md  ✅
├── _journal/                    ← trace hebdomadaire
├── content/
│   ├── modules/
│   │   ├── N1/ (M1→M3)         ← Niveau 1 : Comprendre & situer
│   │   ├── N2/ (M4→M7)         ← Niveau 2 : Prompting & méthode
│   │   └── N3/ (M8→M11)        ← Niveau 3 : Configurer & déployer (power users)
│   ├── quiz/                    ← quiz JSON pour le site
│   └── populations/             ✅ 5 fiches créées
├── linkedin/                    ← posts par semaine
├── livrables/                   ← livre blanc, présentation Aristid
└── site/                        ← Astro (en cours d'init)
```

---

## Conventions non négociables

- **Nommage** : kebab-case, sans accents, sans espaces
- **Ne jamais écraser** un fichier script-vX.md → créer script-v(X+1).md
- **Toujours mettre à jour** CHANGELOG.md après modification d'un module
- **Ton** : pédagogique, terrain, phrases courtes, sans jargon
- **Public cible** : manager PME/ETI non expert, France

---

## Structure standard d'un module (5 fichiers obligatoires)

```
Mxx-nom-module/
├── script-v1.md      # Script vidéo (~2800 mots, ~20 min)
├── quiz.md           # 8 questions QCM + corrigé, seuil 70%
├── exercice.md       # 3 exercices pratiques autonomes
├── post-linkedin.md  # 3 variantes (court / carrousel / storytelling)
└── CHANGELOG.md      # Historique des versions
```

Exception modules Baseline (M3, M7, M11) :
- Pas de script vidéo → remplacé par checklist.md ou guide.md
- Format outil à consulter, pas à regarder

---

## Template script (à respecter pour chaque module vidéo)

```markdown
# Mxx — [Titre]
> Niveau : 🟢/🟡/🔵 · Format : Vidéo · Durée cible : ~20 min
> Version : v1 · Statut : BROUILLON

## Métadonnées
[tableau : compétence cible, public, prérequis, module suivant, durée]

## Structure du script
[plan des 5 sections avec durées]

## 1. Accroche terrain (2 min)
[À caméra — ton direct, situation réelle PME]

## 2-4. [Contenu principal]
[Sections avec slides simples, exemples concrets, règles clés]

## 5. Message de clôture (3 min)
[Retour caméra — synthèse + transition vers le module suivant]

## Notes de production
[Ton, rythme, visuels, points forts à soigner]
```

---

## Référentiel pédagogique (6 compétences)

| Code | Compétence | Module principal |
|------|------------|-----------------|
| C1 | Comprendre ce qu'est réellement un LLM | M1 |
| C2 | Identifier et gérer les 3 risques majeurs | M2 |
| C3 | Rédiger un prompt selon les 4 types d'intention | M4 |
| C4 | Appliquer la progression 🟢🟡🔵🟣 sur un cas réel | M5 |
| C5 | Sécuriser les données en contexte professionnel | M2, M6 |
| C6 | Choisir le bon modèle selon le niveau de risque | M3, M8 |

---

## État d'avancement — mis à jour 2026-03

### _instructions/
| Fichier | Statut |
|---------|--------|
| instructions.md | ✅ v1.2 |
| plan-execution.md | ✅ 12 semaines |
| decisions.md | ✅ |
| outils-claude-code-cowork.md | ✅ |
| analyse-skilljar-vs-formation.md | ✅ |

### Modules
| Module | Script | Quiz | Exercice | Post LI | CHANGELOG |
|--------|--------|------|----------|---------|-----------|
| M1 — Comprendre le LLM | ✅ v1 | ✅ | ✅ | ✅ | ✅ |
| M2 — Risques & gouvernance | ✅ v1 | ✅ | ✅ | ✅ | ✅ |
| M3 — Baseline N1 | ❌ | ❌ | ❌ | ❌ | ❌ |
| M4 — 4 types de prompts | ❌ | ❌ | ❌ | ❌ | ❌ |
| M5 — Méthode niveaux | ❌ | ❌ | ❌ | ❌ | ❌ |
| M6 — Connaissance capitalisée | ❌ | ❌ | ❌ | ❌ | ❌ |
| M7 — Baseline N2 | ❌ | ❌ | ❌ | ❌ | ❌ |
| M8 — Assistant personnalisé | ❌ | ❌ | ❌ | ❌ | ❌ |
| M9 — Skills & bases | ❌ | ❌ | ❌ | ❌ | ❌ |
| M10 — Intro MCP (conditionnel) | ❌ | ❌ | ❌ | ❌ | ❌ |
| M11 — Baseline N3 | ❌ | ❌ | ❌ | ❌ | ❌ |

### Autres
| Élément | Statut |
|---------|--------|
| Populations (5 fiches) | ✅ |
| Quiz d'orientation (6 questions) | ❌ à coder en JS |
| Quiz N1 consolidé | ❌ |
| Quiz N2 consolidé | ❌ |
| Quiz N3 consolidé | ❌ |
| Site Astro | ❌ en cours (tâche B) |
| Git initialisé | ❌ en cours (tâche B) |
| Livre blanc | ❌ S8 |

---

## Prochaines étapes (selon plan-execution.md)

**En cours — Tâche B :**
- Init git + premier commit
- Init Astro dans /site

**Après tâche B — Semaine 2 suite :**
- M3 Baseline N1 (checklist.md + quiz + exercice + post + CHANGELOG)
- Scripts M4 et M5 (cœur du N2)

---

## Règle de priorité si retard

Couper M10 (MCP) en V1. **Jamais couper M3, M7, M11 (Baselines).**
