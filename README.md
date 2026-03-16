# Formation IA Générative — PME/ETI françaises
> Version : 1.2 · Sprint : 3 mois · Démarré : 2026-03

## Architecture du repo

```
Formation_prompting/
│
├── _instructions/          # Cerveau du projet (plan, décisions, règles)
│   ├── instructions.md     # Instructions projet v1.2
│   ├── plan-execution.md   # Plan 12 semaines
│   └── decisions.md        # Journal des décisions importantes
│
├── _journal/               # Trace hebdomadaire de toutes les évolutions
│   └── YYYY-WXX.md        # Une entrée par semaine
│
├── content/                # COUCHE CONTENU (indépendante de la tech)
│   ├── modules/
│   │   ├── N1/             # Niveau 1 — Comprendre & situer
│   │   │   ├── M1-comprendre-llm/
│   │   │   ├── M2-risques-gouvernance/
│   │   │   └── M3-baseline-n1/
│   │   ├── N2/             # Niveau 2 — Prompting & méthode
│   │   │   ├── M4-4types-prompts/
│   │   │   ├── M5-methode-niveaux/
│   │   │   ├── M6-connaissance-capitalisee/
│   │   │   └── M7-baseline-n2/
│   │   └── N3/             # Niveau 3 — Configurer & déployer (power users)
│   │       ├── M8-assistant-personnalise/
│   │       ├── M9-skills-bases-connaissance/
│   │       ├── M10-intro-mcp/
│   │       └── M11-baseline-n3/
│   ├── quiz/               # Quiz JSON par niveau
│   └── populations/        # Fiches cas d'usage par profil
│
├── linkedin/               # Posts LinkedIn par semaine
│   └── S01/ … S12/
│
├── livrables/              # Outputs finaux versionnés
│   ├── livre-blanc/
│   └── presentation-aristid/
│
├── site/                   # COUCHE TECH — Astro (généré depuis content/)
│
└── Prompting-final.md      # Référentiel source original

```

## Structure d'un module (convention)

Chaque dossier module contient exactement :
```
Mxx-nom-module/
├── script-v1.md        # Script vidéo (version en cours)
├── exercice.md         # Exercice pratique
├── quiz.md             # Questions + corrigé
├── post-linkedin.md    # 3 variantes de post
└── CHANGELOG.md        # Historique des versions du module
```

## Règles d'hygiène

- **Jamais** modifier un fichier sans incrémenter la version dans CHANGELOG.md
- **Toujours** documenter les feedbacks terrain dans `_journal/`
- **Décision structurante** → dans `_instructions/decisions.md`
- **Nommage fichiers** : kebab-case, pas d'accents, pas d'espaces
- **Versionning script** : script-v1.md → script-v2.md (ne pas écraser)

## Commandes utiles (Claude Code)

```bash
# Vérifier la structure complète
tree Formation_prompting/ -I node_modules

# Déployer le site
cd site && npm run build && npm run deploy

# Générer PDF livre blanc
pandoc livrables/livre-blanc/livre-blanc-v1.md -o livrables/livre-blanc/livre-blanc-v1.pdf
```
