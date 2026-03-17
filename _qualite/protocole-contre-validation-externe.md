# Protocole de contre-validation externe — NotebookLM + Gemini
> Version : 2.1 · Mis à jour : 2026-03
> Niveau 2bis du système qualité — entre l'audit CC et la relecture orale
> Objectif : croiser nos modules avec les meilleures sources de référence externes

---

## Pourquoi cette étape

Les audits Claude Code détectent la structure et la véracité technique.
Ils ne détectent pas :
- Si le contenu est **réellement clair** pour un non-expert
- Si les **concepts s'enchaînent logiquement** du point de vue d'un lecteur externe
- Si des **présupposés implicites** rendent certains passages opaques
- Si le **niveau de difficulté** est adapté à chaque niveau (N1/N2/N3)
- Si nos formulations sont **alignées avec les standards de référence** du marché

NotebookLM et Gemini apportent une perspective "lecteur naïf" que Claude Code ne peut pas avoir.
Les sources externes permettent de situer notre formation dans le paysage existant.

---

## Sources de référence — bibliothèque complète

### 🔴 Priorité absolue — Sources Anthropic officielles

| Source | URL | Usage dans nos modules |
|--------|-----|----------------------|
| **Prompting-final.md** | (racine du repo) | Référentiel fondateur — toujours la source n°1 |
| **Anthropic Docs — Prompt Engineering Overview** | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | M4, M5 — techniques de base |
| **Anthropic Docs — Claude 4.x Best Practices** | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices | M4, M8, M9 — pratiques avancées |
| **Anthropic — Prompt Engineering for Business** | https://www.anthropic.com/news/prompt-engineering-for-business-performance | M2, M5 — ancrage entreprise |
| **Anthropic Interactive Tutorial** | https://github.com/anthropics/prompt-eng-interactive-tutorial | M4 — exercices pratiques de référence |

### 🔴 Priorité absolue — Skilljar Anthropic (cours officiels gratuits)

| Cours | URL | Modules concernés | Ce qu'il apporte |
|-------|-----|------------------|-----------------|
| **Claude 101** | https://anthropic.skilljar.com/claude-101 | M1, M6, M8, M9 | Projects, Artifacts, Skills, Cowork, Research mode |
| **AI Fluency: Framework & Foundations** | https://anthropic.skilljar.com/ai-fluency-framework-foundations | M1, M2, M4, M5 | Cadre 4D (Delegation/Description/Discernment/Diligence) |
| **Introduction to Agent Skills** | https://anthropic.skilljar.com/introduction-to-agent-skills | M9, M10 | Configuration Skills officielle Claude Code |
| **Introduction to MCP** | https://anthropic.skilljar.com/introduction-to-model-context-protocol | M10 | MCP officiel Anthropic |
| **AI Fluency for educators** | https://anthropic.skilljar.com/ai-fluency-for-educators | M3, M7, M11 | Méthode pédagogique de référence |

**PDF AI Fluency — à télécharger et garder en local :**
- About this course : https://www-cdn.anthropic.com/7e9692bba414a91a562af2a64b7e99d7946de590.pdf
- Effective prompting techniques : https://www-cdn.anthropic.com/62df988c101af71291b06843b63d39bbd600bed8.pdf

### 🟡 Haute priorité — Références internationales

| Source | URL | Usage | Ce qu'elle apporte |
|--------|-----|-------|-------------------|
| **DeepLearning.AI — Prompt Engineering for Developers** | https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/ | M4, M5 | Référence mondiale Ng/Fulford — les 2 principes fondamentaux |
| **IBM Guide — Prompt Engineering 2026** | https://www.ibm.com/think/prompt-engineering | M1, M4, M5 | Context engineering, RAG, techniques avancées |
| **Claude Prompt Guide — ThamJiaHe** | https://github.com/ThamJiaHe/claude-prompt-engineering-guide | M8, M9, M10 | Guide communautaire Claude 4.x — 220+ sources vérifiées |
| **Claude Code Ultimate Guide** | https://deepwiki.com/FlorianBruniaux/claude-code-ultimate-guide/4.1-claude.md-files-and-memory-hierarchy | M8, M9, M10 | Hiérarchie CLAUDE.md, Skills, Hooks |

### 🟡 Haute priorité — Références françaises (ancrage terrain)

| Source | URL | Usage | Ce qu'elle apporte |
|--------|-----|-------|-------------------|
| **Jedha — Formation Prompt Engineering** | https://www.jedha.co/formations/formation-prompt-engineer | M1, M4 | Référence FR certifiante — ce que le marché enseigne |
| **CentraleSupélec Exed — Prompt Engineering** | https://exed.centralesupelec.fr/formation/prompt-engineering-maitrisez-les-meilleures-techniques-de-prompting-2/ | M4, M5 | Niveau académique français — TORCEEF, Chain-of-Thought |
| **FUN MOOC — IA générative** | https://www.fun-mooc.fr | M1, M2 | Formation publique gratuite FR — niveau N1 de référence |

### 🟢 Complémentaire — Gouvernance et cadre réglementaire

| Source | URL | Usage |
|--------|-----|-------|
| **RGPD — Article 22** | https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article22 | M2 — décisions automatisées |
| **AI Act — Règlement UE** | https://artificialintelligenceact.eu/fr/ | M2 — systèmes à haut risque |
| **CNIL — Recommandations IA** | https://www.cnil.fr/fr/intelligence-artificielle | M2, M11 — conformité française |

---

## Cadre 4D Anthropic — référence pour l'alignement sémantique

La formation officielle Anthropic (AI Fluency) est structurée autour de 4 compétences.
Chaque module doit adresser au moins une de ces compétences.

| Compétence | Définition | Nos modules |
|------------|------------|-------------|
| **Delegation** | Savoir quoi confier à l'IA et quand | M1, M2, M5, M8 |
| **Description** | Formuler la demande efficacement | M4, M5, M6 |
| **Discernment** | Évaluer et vérifier la réponse | M2, M3, M5, M7 |
| **Diligence** | Usage éthique, sécurisé, responsable | M2, M3, M9, M11 |

---

## Ordre de priorité des tests

| Ordre | Module | Score sémant. | Raison |
|-------|--------|:------------:|--------|
| 1 | **M9** | 35/50 ⚠️ | Le plus risqué — confusion Skills |
| 2 | **M5** | 44/50 ⚠️ | Correction bloquante à confirmer |
| 3 | **M1** | 44/50 ⚠️ | Base de tout — clarté N1 critique |
| 4 | **M2** | 40/50 ⚠️ | Risques — vérifier ancrage réglementaire |
| 5 | **M4** | 47/50 ✅ | Pivot N1→N2 — croiser avec DeepLearning.AI |
| 6 | **M8** | 45/50 ✅ | N3 — croiser avec Claude Code docs |
| 7 | **M6, M7, M11** | ≥47/50 ✅ | Déjà bien validés — test de confirmation |

---

## Protocole NotebookLM

### Setup (une seule fois)

NotebookLM accepte 3 types de sources : fichiers locaux, PDFs, et URLs directement.
Objectif : constituer une base de référence complète qui reste chargée en permanence.

**Étape 1 — Créer le Notebook**
Nom : **"Validation Formation IA PME"**

**Étape 2 — Charger les sources permanentes (ne jamais retirer)**

*Fichiers locaux à uploader :*
- `Prompting-final.md` → depuis la racine du repo
- PDF AI Fluency "About this course" → télécharger puis uploader
- PDF AI Fluency "Effective prompting techniques" → télécharger puis uploader

*URLs à coller directement dans NotebookLM ("Ajouter une source → URL") :*

| Priorité | URL | Couverture |
|----------|-----|-----------|
| 🔴 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | Techniques de base Anthropic |
| 🔴 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices | Best practices Claude 4.x |
| 🔴 | https://www.anthropic.com/news/prompt-engineering-for-business-performance | Ancrage entreprise |
| 🔴 | https://anthropic.skilljar.com/ai-fluency-framework-foundations | Cadre 4D officiel Anthropic |
| 🔴 | https://anthropic.skilljar.com/claude-101 | Fonctionnalités produit Claude |
| 🟡 | https://www.ibm.com/think/prompt-engineering | Référence internationale 2026 |
| 🟡 | https://deepwiki.com/FlorianBruniaux/claude-code-ultimate-guide/4.1-claude.md-files-and-memory-hierarchy | Hiérarchie CLAUDE.md (M8/M9) |
| 🟡 | https://anthropic.skilljar.com/introduction-to-agent-skills | Skills Claude Code officiels (M9) |
| 🟢 | https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article22 | RGPD Article 22 (M2) |
| 🟢 | https://artificialintelligenceact.eu/fr/ | AI Act FR (M2/M11) |
| 🟢 | https://www.cnil.fr/fr/intelligence-artificielle | CNIL recommandations IA (M2/M11) |

> ⚠️ **Limite NotebookLM : 50 sources par Notebook.**
> Charger les 🔴 en priorité (5 URLs + 3 fichiers = 8 sources permanentes).
> Ajouter les 🟡 et 🟢 selon le module testé.
> Si besoin pour M8/M9/M10 : créer un second Notebook "Validation N3"
> avec les sources techniques Claude Code.

**Étape 3 — Sources par rotation (ajouter + retirer à chaque module)**
- Script du module testé (fichier local)
- Rapport d'audit CC du module (fichier local — dans `_qualite/audits/`)

**Avantage du rapport d'audit CC :** NotebookLM confirme ou infirme les problèmes déjà identifiés — sans repartir de zéro. Il peut aussi en trouver de nouveaux non détectés par CC.

**Étape 4 — Vérification du Notebook avant le premier test**
```
Demande à NotebookLM : "Quelles sources as-tu chargées ?
Résume en une phrase ce que chaque source apporte
pour valider une formation IA générative pour PME françaises."
```
Cette question confirme que NotebookLM a bien indexé toutes les sources.

### Questions standard par module

**Question 1 — Clarté pour un non-expert PME**
```
En tant que manager de PME non expert en IA, quels passages de ce script
seraient difficiles à comprendre ?
Liste les 3 termes ou concepts qui nécessiteraient une explication supplémentaire.
```

**Question 2 — Cohérence avec le référentiel**
```
Ce script est-il cohérent avec le document Prompting-final.md ?
Y a-t-il des affirmations qui contredisent ou s'écartent du référentiel ?
```

**Question 3 — Alignement avec le cadre 4D Anthropic**
```
En te basant sur le cours AI Fluency Anthropic (cadre 4D : Delegation,
Description, Discernment, Diligence), quelles compétences ce script développe-t-il ?
Y a-t-il une compétence importante qui manque pour ce niveau ?
```

**Question 4 — Complétude**
```
Quels points importants du référentiel Prompting-final.md ne sont PAS abordés
dans ce script, mais auraient dû l'être pour ce niveau (N1/N2/N3) ?
```

**Question spécifique M9 — Confusion Skills**
```
Ce script parle de "Skills" pour désigner des instructions réutilisables.
La différence entre "Skills claude.ai (interface utilisateur, tous publics)"
et "Skills Claude Code (fichiers SKILL.md, profils techniques)" est-elle
clairement expliquée ou totalement absente ?
```

**Question spécifique M5 — Exemple simulé**
```
Le script mentionne un "exemple de retour réel" d'un rapport d'écarts IA.
Est-ce clairement identifié comme un exemple simulé à titre illustratif,
ou est-ce présenté comme un résultat réel que l'IA produit systématiquement ?
```

---

## Protocole Gemini

### Pourquoi Gemini en complément
- Modèle différent = biais différents = angles non vus par NotebookLM
- Accès au web → peut signaler si des infos sont obsolètes ou contradites
- Utile pour vérifier les concepts techniques N3 et les références légales

### Prompts Gemini

**Analyse critique globale**
```
Tu es un expert en formation IA générative pour entreprises.
Lis ce script de module de formation destiné à des managers de PME françaises
non experts en IA. Niveau : [N1 / N2 / N3].

Donne-moi :
1. Les 3 points forts du script
2. Les 3 faiblesses ou imprécisions
3. Une affirmation que tu considères inexacte ou trop simplifiée
4. Une notion absente mais importante pour ce public
5. Ce script est-il en ligne avec les meilleures pratiques du marché 2026 ?
```

**Test de mémorisation**
```
Si un manager de PME regarde cette vidéo de 20 minutes, quelle est
LA phrase qu'il va retenir ? Est-ce la bonne ?
La bonne = l'objectif pédagogique du module est [compétence cible].
```

**Vérification vs DeepLearning.AI / IBM (pour M4 et M5)**
```
Compare l'approche du prompting présentée dans ce script avec les
principes enseignés par Andrew Ng (DeepLearning.AI) et la documentation
IBM 2026 sur le prompt engineering.
Y a-t-il des contradictions ou des approches significativement différentes ?
```

**Vérification technique N3 (M8, M9, M10)**
```
Ce script mentionne [concept technique — Skills / CLAUDE.md / MCP].
Est-ce que la description donnée est techniquement exacte en mars 2026 ?
Y a-t-il des évolutions récentes qui la rendraient obsolète ou incomplète ?
```

**Vérification réglementaire (M2)**
```
Les références à l'Article 22 du RGPD et à l'AI Act (systèmes à haut risque)
dans ce script sont-elles exactes et à jour en 2026 ?
Y a-t-il des évolutions législatives récentes à mentionner ?
```

---

## Grille de collecte des retours

Créer un fichier par module testé dans `_qualite/audits/` :
`[Mxx]-contre-validation-externe.md`

```markdown
# Contre-validation externe — [Module] — [Date]
> Sources consultées : [liste des URLs + fichiers chargés]

## NotebookLM

### Termes nécessitant explication
- [terme] — passage : [citation courte]

### Incohérences avec Prompting-final.md
- [incohérence] OU Aucune détectée ✅

### Alignement 4D Anthropic
- Compétences adressées : [liste]
- Compétence manquante : [si applicable]

### Points manquants signalés
- [point]

### Niveau de difficulté
Trop simple / Adapté ✅ / Trop complexe

## Gemini

### 3 points forts
1.
2.
3.

### 3 faiblesses
1.
2.
3.

### Affirmations à revoir
- [affirmation] → correction : [suggestion]

### Message retenu
"[phrase]" — Est-ce le bon ? Oui ✅ / Non → Bon message attendu : [message]

### Vérification technique / réglementaire
- [point vérifié] : ✅ Exact / ⚠️ À nuancer / ❌ Inexact

## Synthèse — corrections à intégrer en S9

| Correction | Source | Priorité |
|------------|--------|----------|
| | | |

## Décision
- [ ] ✅ Aucune correction supplémentaire
- [ ] ⚠️ Corrections mineures à intégrer en S9
- [ ] 🔴 Point bloquant à traiter
```

---

## Ce qu'on fait des résultats

Les retours NotebookLM + Gemini + relecture humaine alimentent **3 livrables** :

| Livrable | Ce qu'on utilise |
|----------|-----------------|
| **Corrections S9** | Liste finalisée avec priorités mises à jour |
| **Deck Aristid** | Passages les plus clairs → slides · Angles validés par 3 sources |
| **Livre blanc** | Formulations validées par Prompting-final.md + NotebookLM + Gemini |

> **Règle d'or :** une formulation validée par 3 sources indépendantes
> (CC + NotebookLM + Gemini) est une formulation stable —
> réutilisable sans risque dans tous les livrables dérivés.

---

## Checklist de démarrage (avant le premier test)

```
[ ] Télécharger les 2 PDFs AI Fluency Anthropic (liens section "Sources")
[ ] Créer le Notebook NotebookLM "Validation Formation IA PME"
[ ] Uploader : Prompting-final.md + 2 PDFs AI Fluency
[ ] Ajouter les 5 URLs prioritaires 🔴 (docs Anthropic + Skilljar)
[ ] Vérification : demander à NotebookLM de lister ses sources
[ ] Ajouter le script M9 + audit CC M9 (premier module à tester)
[ ] Pour chaque module : créer le fichier [Mxx]-contre-validation-externe.md
```
