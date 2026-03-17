# Audit sémantique — M8 Créer son assistant personnalisé
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N3/M8-assistant-personnalise/script-v1.md
> Référence technique : _qualite/gaps-infographie-claude-code.md
> Date : 2026-03

---

## Affirmations correctes

- **System prompt vs prompt utilisateur** : distinction explicitement illustrée par le schéma "system prompt / prompt utilisateur / réponse" — conforme à la réalité technique ✅
- **5 composantes du system prompt** : Rôle · Règles permanentes · Périmètre · Format de sortie · Signaux d'alerte — présentation juste et opérationnelle ✅
- **Robustesse** : 4 scénarios de test (hors périmètre, ton provocateur, données manquantes, demande ambiguë) — pédagogiquement solide ✅
- **Risques et limites** : l'assistant ne remplace pas le jugement humain, ne mémorise pas entre sessions (sauf Projects) — conforme ✅
- **Distinction niveau N3** : avertissement en ouverture que ce module suppose M1-M7 acquis — cadrage correct ✅
- **Exemples simulés** : l'exemple PME précontractuelle est clairement présenté comme illustration, non comme résultat garanti ✅
- **Instructions permanentes vs prompt ponctuel** : distinction fonctionnelle correcte — les instructions permanentes = composante du system prompt ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Le system prompt n'est pas visible par l'utilisateur final" | Section 3 | Vrai sur claude.ai Teams/API — mais dans Cowork/Projects partagés, la visibilité peut varier selon les droits admin. Nuance à considérer. |
| "L'assistant peut être partagé à toute une équipe" | Section 5 | Vrai pour Projects claude.ai Teams — vérifier que cette affirmation est contextualisée (Teams uniquement, pas plan gratuit) |

---

## Confusions conceptuelles détectées

### 🟡 IMPORTANT — Hiérarchie CLAUDE.md absente

**Problème :**
Le script explique bien le system prompt comme "mémoire persistante de l'assistant", mais ne fait pas le lien avec la hiérarchie CLAUDE.md (Global → Project → Subfolder). Cette hiérarchie est identifiée comme gap important dans `gaps-infographie-claude-code.md`.

**Ce qui manque :**
> *"Le system prompt de votre assistant = votre CLAUDE.md de projet. Pour une équipe : partager le CLAUDE.md via git = partager le contexte de travail."*

**Impact pédagogique :** Pour un apprenant N3 qui utilise Claude Code, l'absence de ce lien crée une opportunité manquée de cohérence entre les outils.

**Décision V1 :** Ajouter en S9, section "Aller plus loin" ou en clôture. Non bloquant pour la V1.

**Impact sur le score : -3 points (important mais non critique pour l'audience N3 non-dev)**

---

### ✅ /init et /compact — Absence justifiée

Les commandes Claude Code CLI (`/init`, `/compact`, `Shift+Tab`) ne sont pas mentionnées dans le script. C'est **correct** : le public M8 est composé d'utilisateurs avancés de claude.ai, pas de développeurs CLI. Ces commandes sont hors périmètre de ce module.

---

### ✅ System prompt vs instructions conversationnelles — Distinction claire

Le script distingue explicitement :
- System prompt = instructions permanentes, chargées avant toute conversation
- Prompt utilisateur = instruction ponctuelle dans la conversation

Le schéma à 3 niveaux ("system prompt / prompt utilisateur / réponse") est pédagogiquement solide.

---

### ✅ Agent vs assistant — Pas de confusion

Le script reste dans le périmètre "assistant personnalisé" sans déborder sur les agents autonomes. Le renvoi vers M10 pour les architectures multi-agents est implicite (non mentionné mais absence justifiée — M10 conditionnel).

---

### ✅ Hallucination vs erreur volontaire — Pas de confusion

La section sur les limites formule correctement : l'assistant peut produire des réponses incorrectes, non par mauvaise volonté mais par nature probabiliste du LLM. Conforme Prompting-final.md §1.

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Définir ce qu'on délègue à l'assistant vs ce qu'on garde en ponctuel |
| Description | ✅ | 5 composantes du system prompt = description précise du rôle |
| Discernment | — | Non adressée explicitement (M9 pour qualité sources) |
| Diligence | ✅ | 4 scénarios de test = vérification systématique |

**Alignement : 3/4 compétences → conforme**

---

## Concepts techniques N3

| Concept | Statut | Note |
|---------|--------|------|
| CLAUDE.md comme mémoire persistante | ✅ | Expliqué via la métaphore "cerveau de l'assistant" |
| Hiérarchie CLAUDE.md (Global → Project → Subfolder) | ❌ | Absent — gap identifié, correction S9 recommandée |
| Skills : distinction claude.ai vs Claude Code | — | Non applicable à M8 (sujet M9) |
| Hooks | — | Non applicable à M8 dans l'état actuel |
| System prompt vs instructions conversationnelles | ✅ | Distinction majeure du module — excellente |
| Agent vs assistant personnalisé | ✅ | Périmètre maintenu, pas de confusion |

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 14 | Quasi-parfait · 1 nuance sur visibilité system prompt en contexte Teams |
| Zéro confusion conceptuelle | 15 | 13 | Hiérarchie CLAUDE.md absente (-2) · /init absence justifiée ✅ |
| Exemples simulés clairement marqués | 10 | 10 | Exemple PME précontractuelle bien marqué comme illustration ✅ |
| Alignement 4D Anthropic | 5 | 4 | 3/4 compétences adressées |
| Concepts techniques N3 corrects | 5 | 4 | System prompt ✅ · Hiérarchie CLAUDE.md ❌ (-1) |
| **Total** | **50** | **45** | |

---

## Décision

**✅ VALIDÉ SÉMANTIQUEMENT — Score 45/50**

Le script M8 est sémantiquement fiable. La distinction system prompt / prompt conversationnel est la colonne vertébrale du module et elle est correctement traitée. Les 5 composantes sont exactes. Les limites et risques sont formulés sans exagération ni minimisation.

**Corrections recommandées pour S9 (non bloquantes) :**

1. **🟡 [RECOMMANDÉ]** Ajouter en clôture le lien CLAUDE.md : *"Le system prompt que vous venez de rédiger est l'équivalent d'un CLAUDE.md pour votre assistant. Si vous travaillez en équipe avec Claude Code, le partage du CLAUDE.md via git = partage du contexte de travail."*
2. **🟢 [OPTIONNEL]** Préciser que la visibilité du system prompt peut varier selon le plan (Teams admin vs utilisateur standard)

**Effort estimé : 15 minutes en S9**
