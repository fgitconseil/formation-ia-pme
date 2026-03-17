# Protocole de contrôle qualité — 3 niveaux
> Usage : définit QUI fait QUOI à QUEL moment pour chaque module

---

## Vue d'ensemble du processus

```
Production Claude Code
        ↓
Niveau 1 — Auto-audit IA (Claude Code · immédiat · ~5 min)
        ↓
Niveau 2 — Relecture humaine (toi · ~20 min par module)
        ↓
Niveau 3 — Test terrain (beta testeur · avant tournage)
        ↓
Validation vFinal → Tournage
```

---

## Niveau 1 — Auto-audit Claude Code

**Quand :** immédiatement après chaque module produit
**Durée :** ~5 min (automatisé)
**Qui :** Claude Code

### Prompt d'audit à lancer après chaque module

```
Lis CLAUDE.md pour le contexte.
Lis _qualite/grille-evaluation.md pour les critères.
Lis [chemin du module]/script-v1.md

Effectue un audit qualité complet selon la grille-evaluation.md.

Pour chaque critère :
- Attribue le score (max ou 0, pas de demi-points)
- Justifie en une phrase
- Pour les critères échoués : cite l'extrait problématique

Calcule le score total et la décision.
Produis le rapport dans _qualite/audits/[module]-audit-v1.md

Format du rapport :
# Audit — [Module] — [Date]
## Scores par dimension (tableau)
## Critères échoués (liste avec citations)
## Corrections prioritaires (liste ordonnée)
## Décision : VALIDÉ / CORRECTIONS / RÉÉCRITURE
```

### Ce que Claude Code détecte bien
- Termes techniques non expliqués
- Sections manquantes du template
- Métadonnées incomplètes
- Décompte de mots (estimation durée)
- Prompts copiables vs vagues

### Ce que Claude Code ne détecte pas (réservé au niveau 2)
- Exactitude des références légales (RGPD, AI Act)
- Fluidité orale réelle
- Cohérence émotionnelle de l'accroche
- Si les exemples "sonnent vrai" pour un manager PME

---

## Niveau 2 — Relecture humaine

**Quand :** après l'audit Claude Code
**Durée :** ~20 min par module
**Qui :** toi

### Protocole de relecture en 4 étapes

**Étape 1 — Lire le rapport d'audit Claude Code (2 min)**
- Identifier les critères échoués
- Décider si correction immédiate ou acceptable

**Étape 2 — Lire le script à voix haute (15 min)**
C'est l'étape la plus critique. Elle révèle ce que la lecture silencieuse cache.

À noter pendant la lecture :
```
[ ] Passages où tu butes → reformuler
[ ] Passages où tu t'ennuies en lisant → couper ou accélérer
[ ] Passages qui sonnent "trop écrit" → réécrire en oral
[ ] Durée réelle chronométrée : ___ min
[ ] Exemple d'accroche : est-ce que ça m'aurait parlé si j'étais le manager RH de l'histoire ?
```

**Étape 3 — Vérifier les références critiques (2 min)**
Pour chaque mention de RGPD, AI Act, article de loi :
- Est-ce un exemple "simulé" clairement marqué ?
- Si présenté comme réel : vérifier dans la source officielle
- En cas de doute : ajouter la mention `[exemple à vérifier avant tournage]`

**Étape 4 — Valider ou corriger**
- Score audit ≥ 80 ET relecture orale OK → `Statut : VALIDÉ RELECTURE`
- Corrections mineures → faire en direct, mettre à jour CHANGELOG
- Corrections majeures → créer script-v2.md, documenter dans CHANGELOG

---

## Niveau 3 — Test terrain

**Quand :** avant le tournage · S10 (beta test)
**Durée :** 30 min par testeur
**Qui :** 6 beta testeurs (voir plan-execution.md)

### Ce qu'on teste

| Test | Méthode | Seuil cible |
|------|---------|-------------|
| Compréhension des concepts clés | Questions orales après visionnage | 80% de bonnes réponses |
| Score quiz module | Quiz en ligne | ≥ 70% |
| Formulation valeur perçue | "Qu'est-ce que vous retenez ?" | 1 idée clé identifiable |
| Utilité perçue | Note 1-5 | ≥ 4/5 |
| Termes incompris | Signalement pendant le test | 0 terme bloquant |

### Grille de retour testeur

```markdown
## Retour testeur — [Module] — [Profil testeur]

### Concepts compris
- [ ] Concept 1 : [intitulé]
- [ ] Concept 2 : [intitulé]
- [ ] Concept 3 : [intitulé]

### Score quiz : __ / 8

### Termes qui ont posé problème
- [terme] → reformulation suggérée : [suggestion]

### Ce que le testeur retient (verbatim)
"[citation exacte]"

### Note d'utilité perçue : __ / 5

### Décision : TOURNAGE / AJUSTEMENT MINEUR / RÉVISION
```

---

## Tableau de suivi qualité global

> Mettre à jour dans CLAUDE.md après chaque validation

| Module | Audit CC | Score | Relecture orale | Test terrain | Statut |
|--------|----------|-------|-----------------|--------------|--------|
| M1 | ❌ à faire | — | ❌ | ❌ | BROUILLON |
| M2 | ❌ à faire | — | ❌ | ❌ | BROUILLON |
| M3 | ❌ à faire | — | ❌ | ❌ | BROUILLON |
| M4 | ❌ à faire | — | ❌ | ❌ | BROUILLON |
| M5 | ❌ à faire | — | ❌ | ❌ | BROUILLON |
| M6 | ❌ à faire | — | ❌ | ❌ | BROUILLON |

---

## Statuts possibles d'un module

| Statut | Signification | Condition |
|--------|---------------|-----------|
| `BROUILLON` | Produit, non audité | Par défaut à la création |
| `AUDITÉ` | Audit Claude Code effectué | Score calculé |
| `CORRIGÉ` | Corrections appliquées post-audit | v2 créée si nécessaire |
| `VALIDÉ RELECTURE` | Relecture orale passée | Durée + fluidité OK |
| `VALIDÉ TERRAIN` | Test beta testeur passé | Score quiz ≥ 70% |
| `FINAL` | Prêt pour tournage | Tous les niveaux validés |
