# Analyse — Anthropic Skilljar vs Notre formation
> Analyse effectuée : 2026-03
> Source : https://anthropic.skilljar.com/
> Objectif : identifier les gaps et enrichissements possibles

---

## Catalogue Anthropic Skilljar (13 cours)

| Cours | Public cible | Pertinence projet |
|-------|-------------|-------------------|
| Claude 101 | Grand public / employés | 🔴 Haute |
| AI Fluency: Framework & Foundations | Tout public | 🔴 Haute |
| Claude Code in Action | Développeurs | 🟡 Moyenne (pour nous, pas pour nos apprenants) |
| Building with the Claude API | Développeurs | ⚪ Faible |
| Introduction to Model Context Protocol | Développeurs | 🟡 Moyenne (M10) |
| Introduction to Agent Skills | Power users | 🟡 Moyenne (M9) |
| AI Fluency for educators | Formateurs | 🟡 Moyenne (inspiration pédagogique) |
| AI Fluency for students | Étudiants | ⚪ Faible |
| AI Fluency for nonprofits | Associations | ⚪ Faible |
| Teaching AI Fluency | Formateurs | 🟡 Moyenne (méthode) |
| Claude with Amazon Bedrock | Tech/Cloud | ⚪ Faible |
| Claude with Google Vertex AI | Tech/Cloud | ⚪ Faible |
| Model Context Protocol: Advanced Topics | Développeurs | ⚪ Faible |

---

## Analyse détaillée : Claude 101

### Curriculum complet

```
1. Meet Claude
   - What is Claude?
   - Your first conversation with Claude
   - Getting better results

2. Claude desktop app: Chat, Cowork, Code

3. Organizing your work and knowledge
   - Introduction to projects
   - Creating with artifacts
   - Working with skills

4. Expanding Claude's reach
   - Connecting your tools
   - Enterprise search
   - Research mode for deep dives

5. Putting it all together
   - Claude in action: use-cases by role
   - Other ways to work with Claude

6. Conclusion & certificate
```

### Ce que Claude 101 couvre que nos modules ne couvrent pas

| Sujet | Status dans notre formation | Action recommandée |
|-------|-----------------------------|-------------------|
| **Projects** (organisation du travail par contexte) | ❌ Absent | Ajouter dans M6 (connaissance capitalisée) |
| **Artifacts** (créer des livrables structurés) | ❌ Absent | Ajouter dans M4 (types de prompts) |
| **Skills** (instructions réutilisables) | ⚠️ Effleuré en M9 | Approfondir avec le contenu officiel |
| **Research mode** (recherche approfondie) | ❌ Absent | Mentionner dans M1 (limites / cut-off) |
| **Cowork** (agent desktop) | ✅ Couvert dans outils internes | Référencer dans M8-M9 |
| **Use-cases par rôle** | ⚠️ Populations en quiz, pas en modules | Structurer en fiches populations |
| **Enterprise search** | ❌ Absent | Optionnel — hors périmètre PME V1 |

### Verdict Claude 101

Notre formation va **plus loin** sur la méthode (🟢🟡🔵🟣, gouvernance, risques).
Claude 101 va **plus loin** sur les fonctionnalités produit (Projects, Artifacts, Skills).

→ **Enrichissement prioritaire : ajouter Projects + Artifacts dans M6**
→ **Enrichissement secondaire : fiches use-cases par rôle dans /content/populations/**

---

## Analyse détaillée : AI Fluency — Framework & Foundations

### Le cadre 4D (framework académique validé par Anthropic)

```
Delegation  → Savoir quoi confier à l'IA (décision de délégation)
Description → Formuler la demande efficacement (prompting)
Discernment → Évaluer et vérifier la réponse (esprit critique)
Diligence   → Usage éthique, sécurisé, responsable
```

### Comparaison avec notre cadre 🟢🟡🔵🟣

| 4D Anthropic | Notre cadre | Alignement |
|---|---|---|
| Delegation | 🟢 Structurer (comprendre ce qu'on confie) | ✅ Couvert |
| Description | 🟢🟡 Prompting + types de prompts | ✅ Couvert |
| Discernment | 🟡 Fiabiliser + vérification | ✅ Couvert |
| Diligence | 🟢 Gouvernance + risques (M2) | ✅ Couvert |

### Ce que le 4D apporte en plus

- Le concept de **"Description-Discernment loop"** (boucle itérative description ↔ évaluation)
  → C'est notre boucle d'amélioration 🔵, mais formulée différemment
  → Peut enrichir le script M5 (méthode en pratique)

- La notion de **"Delegation"** comme décision consciente
  → Manque dans notre M1 : on explique ce qu'est l'IA, mais pas comment décider *quoi* lui confier
  → Enrichissement pour M2 ou M4

### Verdict AI Fluency

Les deux cadres sont **complémentaires, pas concurrents**.
Le 4D est plus académique et exportable (certifiant).
Notre cadre est plus opérationnel et progressif.

→ **Enrichissement : mentionner le 4D dans le référentiel pédagogique**
→ **Enrichissement : ajouter "Delegation" comme 7e compétence du référentiel**

---

## Synthèse — Ce qui manque dans notre documentation

### Gaps prioritaires (à combler avant tournage)

| Gap | Impact | Module concerné | Effort |
|-----|--------|-----------------|--------|
| **Projects & Artifacts** (fonctionnalités produit) | Fort | M6 | Faible — 1 section supplémentaire |
| **Concept de Delegation** (quoi confier à l'IA) | Fort | M1 ou M2 | Faible — 1 paragraphe |
| **Fiches use-cases par rôle** (5 populations) | Moyen | /content/populations/ | Moyen — 5 fiches |
| **Research mode** (outil de recherche approfondie) | Moyen | M1 (cut-off section) | Faible — 1 paragraphe |

### Gaps secondaires (V2 ou optionnels)

| Gap | Impact | Module concerné | Décision |
|-----|--------|-----------------|----------|
| Enterprise search | Faible (hors PME V1) | — | V2 |
| Agent Skills (configuration avancée) | Moyen | M9 | Enrichir M9 avec docs officielles |
| Certification / attestation | Moyen | Quiz N3 | Prévoir template attestation |

---

## Recommandations concrètes

### 1. Enrichir M1 — Ajouter le concept de Delegation (30 min de travail)

Dans la section "3 implications clés" du script M1, ajouter :

```
Implication 0 (avant les 3 autres) : Savoir quoi déléguer

Avant de demander quoi que ce soit à l'IA, posez-vous la question :
"Est-ce que cette tâche est bien adaptée à un LLM ?"

L'IA est excellente pour : structurer, reformuler, comparer, synthétiser,
générer des variantes, analyser des patterns.

L'IA est risquée pour : facts précis, références réglementaires,
décisions à fort impact, données sensibles.

La décision de déléguer est la première compétence de l'utilisateur expert.
```

### 2. Enrichir M6 — Ajouter Projects et Artifacts (1h de travail)

Ajouter une section dans script-v1.md de M6 :

```
Section : Les outils d'organisation capitalisée (Claude-specific)

Projects : créer des espaces de travail contextualisés par sujet.
Tout ce que vous envoyez dans un Project est mémorisé pour la session.
Exemple : un Project "Charte IA" conserve tous les documents de référence.

Artifacts : demander à l'IA de produire un livrable structuré
(code, tableau, document) plutôt qu'une réponse en prose.
Avantage : le livrable est directement téléchargeable et réutilisable.
```

### 3. Créer les 5 fiches populations (3h de travail)

Dans /content/populations/, créer un fichier par profil :

```
direction-comex.md
rh-formation.md
commercial-marketing.md
it-dsi.md
operationnels.md
```

Structure de chaque fiche :
- 3 cas d'usage prioritaires avec prompt type
- 2 risques spécifiques au rôle
- 1 module de départ recommandé

### 4. Référencer les cours Anthropic dans le README

Ajouter une section "Ressources complémentaires" dans README.md :
- Claude 101 (gratuit) — fonctionnalités produit
- AI Fluency Framework (gratuit) — cadre académique complémentaire

---

## Ce que notre formation fait mieux qu'Anthropic Skilljar

| Dimension | Skilljar | Notre formation | Avantage |
|-----------|----------|-----------------|----------|
| Ancrage PME France | ❌ Global / générique | ✅ Spécifique PME/ETI françaises | Nôtre |
| Progression en maturité | ❌ Pas de notion de niveaux | ✅ 🟢🟡🔵🟣 explicite | Nôtre |
| Gouvernance et risques | ⚠️ Diligence (superficiel) | ✅ Module dédié + cas concrets | Nôtre |
| Cas métier concrets | ⚠️ Use-cases génériques | ✅ Cas Marc RH + populations ciblées | Nôtre |
| Way of Working (Baseline) | ❌ Absent | ✅ M3, M7, M11 dédiés | Nôtre |
| Réglementaire (RGPD, AI Act) | ❌ Absent | ✅ Ancré dans M2 | Nôtre |
| Langue | 🇺🇸 Anglais uniquement | 🇫🇷 Français | Nôtre |

**Conclusion : notre différenciation est réelle et défendable.**
Anthropic forme à l'outil. Nous formons à l'opérationnalisation dans un contexte professionnel français.

---

## Ressources à consulter avant de finaliser les scripts

| Ressource | URL | Pour quel module |
|-----------|-----|-----------------|
| Claude 101 (s'inscrire gratuitement) | https://anthropic.skilljar.com/claude-101 | M1, M6, M8, M9 |
| AI Fluency Framework | https://anthropic.skilljar.com/ai-fluency-framework-foundations | M1, M2, M5 |
| Docs Claude officielle | https://docs.claude.ai | M8, M9, M10 |
| PDF "About this course" AI Fluency | https://www-cdn.anthropic.com/7e9692bba414a91a562af2a64b7e99d7946de590.pdf | Référentiel pédagogique |
