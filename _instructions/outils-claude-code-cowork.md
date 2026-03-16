# Claude Code & Cowork — Guide d'usage pour ce projet
> Document de référence · Mis à jour : 2026-03
> Usage : orienter les choix d'automatisation à chaque étape du sprint

---

## 1. La formule du projet

```
Cowork    → produit et organise le contenu
Claude Code → construit le site et le pipeline de déploiement
Toi         → valides, filmes, publies
```

Règle simple : **"Chat pour réfléchir · Cowork pour faire · Claude Code pour construire"**

---

## 2. Claude Code

### Ce que c'est

Outil CLI (terminal) qui opère directement sur ton filesystem réel.
Il lit les fichiers, écrit du code, exécute des commandes shell, fait des opérations git —
sans que tu aies à tout re-prompter à chaque étape.

**Il ne suggère pas. Il fait.**

### Installation

```bash
# Prérequis : Node.js installé
npm install -g @anthropic-ai/claude-code

# Dans ton repo
cd D:\Fayaz\Documents\git\@fgitconseil\Formation_prompting
claude
```

Requiert un abonnement Claude (Pro ou Max) ou une clé API Anthropic Console.

### Quand l'utiliser dans ce projet

| Tâche | Commande type | Semaine |
|-------|---------------|---------|
| Créer toute la structure de dossiers manquante | `claude "crée tous les dossiers modules N2/N3 avec README.md"` | S1 |
| Générer le squelette Astro complet | `claude "initialise un projet Astro dans /site avec une page par module"` | S1 |
| Coder le quiz d'orientation JS | `claude "code un quiz 6 questions en JS vanilla dans /site/src/quiz-orientation"` | S1 |
| Pipeline Markdown → pages Astro | `claude "génère les pages Astro depuis les scripts Markdown de /content/modules"` | S7 |
| Configurer GitHub Actions (auto-deploy) | `claude "configure un workflow GitHub Actions pour déployer sur GitHub Pages"` | S1 |
| Générer tous les quiz en JSON | `claude "lis quiz.md de chaque module et génère quiz.json compatible JS"` | S3 |
| Script Pandoc → PDF livre blanc | `claude "écris un script shell qui compile les modules en PDF via Pandoc"` | S8 |
| Vérifier la structure du repo | `claude "vérifie que chaque dossier module contient bien script/quiz/exercice/post/CHANGELOG"` | Récurrent |

### Bonnes pratiques

```
✅ Toujours lancer depuis la racine du repo
✅ Donner le contexte : "dans ce projet de formation IA..."
✅ Préciser les contraintes : "sans modifier les fichiers existants"
✅ Demander une preview avant d'écrire : "montre-moi ce que tu vas créer"
✅ Commencer par des tâches isolées, pas "refais tout le site"
✅ Utiliser /clear entre deux tâches sans lien pour réduire le contexte

❌ Ne pas lancer sur un repo sans git (risque de perte)
❌ Ne pas demander des tâches vagues ("améliore le site")
❌ Ne pas confondre avec un chatbot — il exécute vraiment
```

### Prompt de démarrage recommandé pour ce projet

Copie ce bloc au début de chaque session Claude Code :

```
Tu travailles sur une formation IA Générative pour PME/ETI françaises.

Repo : D:\Fayaz\Documents\git\@fgitconseil\Formation_prompting
Stack : Astro + GitHub Pages (site), Markdown (contenu), Descript (vidéo)
Règles :
- Ne jamais modifier les fichiers script-vX.md existants (créer une nouvelle version)
- Respecter la convention kebab-case, sans accents
- Toujours mettre à jour CHANGELOG.md après modification d'un module
- Le contenu (content/) est indépendant du site (site/)

Avant toute action : liste ce que tu vas faire et attends ma confirmation.
```

### Multi-agents (usage avancé)

Claude Code supporte le lancement d'agents parallèles :
```bash
# Exemple : générer tous les quiz en parallèle
claude "en parallèle, génère le quiz.json pour M1, M2, M4, M5"
```
Utile en S3 quand tous les scripts sont prêts — peut générer
les 8 quiz en une seule session au lieu de 8.

---

## 3. Cowork

### Ce que c'est

Agent desktop intégré dans l'app Claude (macOS et Windows).
Tu pointes sur un dossier, tu décris ce que tu veux —
Claude planifie, exécute en VM isolée, livre le résultat dans ton filesystem.

**Différence clé avec Claude Code :** pas de terminal requis.
Interface graphique, tâches planifiables, accès aux connecteurs (Asana, Notion...).

### Prérequis

- Abonnement **Claude Max** (100-200€/mois)
- App Claude Desktop installée (macOS ou Windows)
- Dossier autorisé : pointer sur `Formation_prompting\`

### Quand l'utiliser dans ce projet

| Tâche | Prompt Cowork | Semaine |
|-------|---------------|---------|
| Transformer notes brutes → scripts structurés | voir bloc ci-dessous | S2-S3 |
| Compiler 11 scripts → chapitres livre blanc | voir bloc ci-dessous | S8 |
| Générer 3 variantes post LinkedIn par module | voir bloc ci-dessous | S1-S12 |
| Vérification hebdo cohérence modules | tâche planifiée (voir ci-dessous) | Récurrent |
| Synthèse feedbacks Aristid | voir bloc ci-dessous | S4 |

### Prompts Cowork prêts à l'emploi

**Tâche 1 — Transformer des notes en script (S2-S3)**
```
Dossier : Formation_prompting\content\modules\N1\M2-risques-gouvernance

Lis le fichier Prompting-final.md à la racine du repo (section 2 "Gouvernance et risques").
Crée un fichier script-v1.md avec cette structure exacte :
- Métadonnées (niveau, format, durée, compétence cible)
- 5 sections numérotées (accroche, contenu principal, exemples, implications, clôture)
- Notes de production à la fin

Contraintes :
- Ton pédagogique, phrases courtes, pas de jargon
- Durée cible : 20 min (environ 2800 mots)
- Public : manager non expert en IA
```

**Tâche 2 — Générer le livre blanc (S8)**
```
Dossier : Formation_prompting\

Lis tous les fichiers script-vFinal.md dans content/modules/ (N1, N2, N3).
Compile-les en un livre blanc cohérent dans livrables\livre-blanc\livre-blanc-v1.md

Structure attendue :
- Introduction (pourquoi ce guide, pour qui)
- Partie 1 : Comprendre (issu de N1)
- Partie 2 : Maîtriser (issu de N2)
- Partie 3 : Déployer (issu de N3)
- Conclusion et ressources

Reformate en prose continue (pas en script vidéo).
Ajoute une transition entre chaque partie.
Longueur cible : 8 000-10 000 mots.
```

**Tâche 3 — Posts LinkedIn (hebdomadaire)**
```
Dossier : Formation_prompting\content\modules\

Lis le fichier script-v1.md du module [NOM_MODULE].
Génère 3 variantes de post LinkedIn dans post-linkedin.md :
- Variante A : court (500 caractères max, accroche terrain)
- Variante B : carrousel (5 slides, 1 idée par slide)
- Variante C : storytelling (1200 caractères, structure : situation → problème → leçon → CTA)

Règles :
- Première phrase = accroche sans "Je" ni question rhétorique
- Pas d'émojis sauf en fin de liste
- Ton expert terrain, pas académique
- CTA final : pointer vers la formation (lien en commentaire)
```

**Tâche 4 — Vérification hebdomadaire (tâche planifiée)**
```
[Planifier : chaque lundi matin]

Dossier : Formation_prompting\

Vérifie que chaque dossier dans content/modules/ contient :
script-v1.md · quiz.md · exercice.md · post-linkedin.md · CHANGELOG.md

Pour chaque fichier manquant : liste-le dans _journal\recap-structure.md
avec le module concerné et la priorité (BLOQUANT / NORMAL).

Ne crée aucun fichier. Rapport uniquement.
```

**Tâche 5 — Synthèse feedbacks Aristid (S4)**
```
Dossier : Formation_prompting\

J'ai pris des notes sur la session Aristid dans le fichier
_journal\2026-W04.md (section "Feedbacks").

Lis ce fichier et génère un rapport dans
livrables\presentation-aristid\synthese-feedback-aristid.md avec :
- Les 3 messages qui ont le plus accroché (avec citations exactes si disponibles)
- Les 3 moments de perte (avec reformulation suggérée)
- Les mots spontanés utilisés par le public
- Recommandations de révision pour M1 et M5
- Décision recommandée sur M10 (MCP in/out en V1)
```

---

## 4. Tableau de décision — quel outil pour quelle tâche

| Type de tâche | Claude Code | Cowork | Pourquoi |
|---------------|-------------|--------|----------|
| Créer structure de dossiers | ✅ Idéal | ✅ Possible | CC plus rapide en CLI |
| Écrire/modifier du code (Astro, JS, JSON) | ✅ Idéal | ⚠️ Limité | CC comprend le code |
| Configurer GitHub Actions / CI | ✅ Idéal | ❌ Non adapté | Requiert terminal + git |
| Convertir Markdown → PDF (Pandoc) | ✅ Idéal | ✅ Possible | CC via shell script |
| Rédiger un script de module | ⚠️ Possible | ✅ Idéal | Cowork = tâche longue non-dev |
| Compiler le livre blanc | ⚠️ Possible | ✅ Idéal | Cowork gère mieux le long-form |
| Générer les posts LinkedIn | ⚠️ Possible | ✅ Idéal | Cowork + tâche planifiée |
| Vérification de cohérence hebdo | ✅ Possible | ✅ Idéal | Cowork = tâche planifiable |
| Synthèse feedbacks terrain | ❌ Non adapté | ✅ Idéal | Tâche non-dev, multi-fichiers |
| Opérations git (commit, tag, push) | ✅ Idéal | ❌ Non adapté | CC natif git |

---

## 5. Séquence recommandée pour le sprint

### Semaine 1 — Claude Code en priorité

```bash
cd D:\Fayaz\Documents\git\@fgitconseil\Formation_prompting

# 1. Compléter la structure du repo
claude "crée les README.md manquants dans tous les dossiers modules vides (M2 à M11)
avec le template : titre, statut À RÉDIGER, liste des fichiers à créer"

# 2. Initialiser Astro
claude "initialise un projet Astro dans le dossier /site,
configure GitHub Pages dans package.json,
crée une page index vide et une page par module (11 pages)"

# 3. Configurer GitHub Actions
claude "crée .github/workflows/deploy.yml pour déployer automatiquement
le site Astro sur GitHub Pages à chaque push sur main"

# 4. Quiz d'orientation
claude "code le quiz d'orientation dans /site/src/pages/index.astro :
6 questions, logique JS vanilla, 5 profils en output,
recommandation niveau + 3 cas d'usage par profil"
```

### Semaines 2-3 — Cowork pour les scripts (si Max disponible)

Utiliser les prompts de la section 3 pour générer M2 à M11
en parallèle des scripts que tu rédiges toi-même.

### Semaines 5-7 — Claude Code pour intégrer les vidéos

```bash
claude "génère les pages Astro pour chaque module à partir
des fichiers script-v1.md dans content/modules/,
intègre les placeholders vidéo et les quiz JSON"
```

---

## 6. Contraintes et limites à connaître

### Claude Code
- Requiert d'être à l'aise avec un terminal (pas de GUI)
- Demande une confirmation avant les actions destructives
- Le contexte se réinitialise entre les sessions → toujours inclure le prompt de démarrage
- Ne pas lancer sans git initialisé (risque de perte sur erreur)

### Cowork
- Claude Max requis (100-200€/mois) — non disponible sur Pro
- Les tâches planifiées ne s'exécutent que si l'app est ouverte
- Limité sur les tâches nécessitant du code complexe (préférer CC)
- Encore en "research preview" — comportement parfois imprévisible sur fichiers complexes
- Ne pas utiliser pour des données sensibles (clients, RH)

---

## 7. Initialisation git (à faire en S1)

```bash
cd D:\Fayaz\Documents\git\@fgitconseil\Formation_prompting

git init
git add .
git commit -m "feat: initialisation structure projet formation IA"
git branch -M main
git remote add origin https://github.com/[TON_COMPTE]/formation-ia-pme.git
git push -u origin main

# Tag de version
git tag v0.1.0 -m "Structure initiale + module M1 complet"
git push origin v0.1.0
```

Convention de tags :
- `v0.x.0` — structure / fondation
- `v1.0.0` — lancement (S12)
- `v1.x.0` — améliorations post-lancement

---

## 8. Prompt de vérification rapide (à utiliser n'importe quand)

Dans Claude Code, pour auditer l'état du projet :

```
Lis la structure de D:\Fayaz\Documents\git\@fgitconseil\Formation_prompting
et génère un rapport dans _journal\audit-[DATE].md avec :

1. Modules complétés (5 fichiers présents) vs en cours vs vides
2. Scripts avec statut vFinal vs brouillon
3. Fichiers CHANGELOG.md à jour
4. Cohérence entre content/ et site/ (pages générées ?)
5. Dernière entrée dans _journal/ (à jour ?)

Format : tableau Markdown + liste des actions prioritaires
```
