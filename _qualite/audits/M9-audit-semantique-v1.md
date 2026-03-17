# Audit sémantique — M9 Skills et bases de connaissance
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N3/M9-skills-bases-connaissance/script-v1.md
> Référence principale : Prompting-final.md §8 (Données et RAG)
> Référence technique : _qualite/gaps-infographie-claude-code.md
> Date : 2026-03

---

## Affirmations correctes

- **Nature du LLM** : "L'IA prédit la suite la plus probable" — conforme Prompting-final.md §1
- **RAG = accessibilité, pas exactitude** : Section 4 couvre "garbage in/out" et les 3 mécanismes de risque amplifié — conforme §8 ("Un système RAG ne garantit pas l'exactitude des données internes. Il garantit uniquement leur accessibilité contextuelle.")
- **Discipline 🟡 indispensable** : La notion de qualification des sources avant connexion est présente et bien formulée
- **Distinction Skill instruction / Skill de connaissance** : correcte dans le périmètre claude.ai (règle de traitement vs données métier)
- **MCP en clôture** : "connecteurs CRM/ERP" — mention juste, sans surpromesse technique
- **Contexte vs mémoire** : distinction correcte (la base de connaissance ne remplace pas la gestion du contexte)
- **Exemples simulés** : tous les exemples de Skills et de bases sont présentés comme modèles, non comme résultats réels ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Votre IA sera aussi fiable que vos données" | Section 4, accroche | Conforme §8 — formulation correcte mais mérite la nuance : "fiable dans ce périmètre" |
| "Un Skill d'instruction s'active automatiquement selon le contexte" | Section 2 | ⚠️ Vrai pour Claude Code Skills (description field = auto-invocation). Pour claude.ai Skills : activation par l'utilisateur, pas automatique — à préciser |
| "La base de connaissance filtre et sélectionne les documents pertinents" | Section 4 | Correct pour RAG standard — mais "filtre" peut suggérer une exactitude que §8 ne garantit pas |

---

## Confusions conceptuelles détectées

### 🔴 CRITIQUE — Skills Claude.ai ≠ Skills Claude Code

**Problème :**
Le script utilise le terme "Skill" exclusivement pour désigner les instructions réutilisables dans claude.ai (interface utilisateur). Il ne mentionne jamais l'existence des Skills Claude Code, ni ne précise que ce module couvre uniquement les Skills claude.ai.

Ce silence crée un risque de confusion majeur pour tout apprenant qui aura entendu parler des Skills Claude Code (fichiers `.claude/skills/SKILL.md`, activation automatique par description, usage CLI développeur).

**Tableau des deux systèmes :**

| Système | Outil | Public | Fichier | Activation |
|---------|-------|--------|---------|-----------|
| Skills claude.ai | claude.ai / Cowork | Utilisateurs non-dev | Instructions dans l'interface | Manuelle |
| Skills Claude Code | Terminal / CLI | Développeurs | `.claude/skills/SKILL.md` | Automatique (champ description) |

**Correction à apporter en S9 :**
Ajouter en introduction de la section Skills :
> *"Ce module couvre les Skills claude.ai — les instructions réutilisables que vous configurez dans votre interface. Les Skills Claude Code (fichiers techniques pour équipes de développement) sont un système différent, traité en M10 pour les équipes N3 avancées."*

**Impact sur le score : -10 points (confusion critique)**

---

### 🟡 IMPORTANT — Hooks absents

**Problème :**
Les Hooks (callbacks déterministes `PreToolUse` / `PostToolUse`) ne sont pas mentionnés dans le script. La distinction fondamentale "Mémoire = Conseil, Hook = Loi" (formulation de l'infographie Claude Code) est absente.

**Décision V1 :** Mentionner brièvement en clôture de la section Skills :
> *"Pour les équipes techniques : les Hooks Claude Code permettent d'aller au-delà des instructions — ils s'exécutent de façon déterministe, comme des garde-fous automatiques. C'est le niveau supérieur après les Skills."*

**Impact sur le score : -5 points (important mais optionnel V1 selon gaps-infographie)**

---

### ✅ RAG — Aucune confusion détectée

Le script distingue correctement :
- RAG ≠ mémoire parfaite (section 4 : risques de qualité amplifiés)
- RAG ≠ Skills (section 2 vs section 4 — deux outils distincts, clairement séparés)
- Base de connaissance ≠ contexte conversationnel

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Savoir quoi confier aux Skills vs garder en prompt ponctuel |
| Description | — | Non adressée explicitement |
| Discernment | ✅ | Évaluer la qualité des sources avant connexion RAG |
| Diligence | ✅ | Maintenance des Skills + audit documentaire |

**Alignement : 3/4 compétences → conforme**

---

## Concepts techniques N3

| Concept | Statut | Note |
|---------|--------|------|
| CLAUDE.md comme mémoire persistante | ✅ | Mentionné en transition vers M8 |
| Hiérarchie CLAUDE.md | — | Non applicable à M9 (M8 concerne ce sujet) |
| Skills : distinction claude.ai vs Claude Code | ❌ | Confusion critique — absent |
| Hooks : callbacks déterministes | ❌ | Absent — à mentionner brièvement |
| System prompt vs instructions conversationnelles | ✅ | Distinction présente via renvoi M8 |
| RAG : "accessibilité, pas exactitude" | ✅ | Conforme §8 |
| MCP : rôle d'orchestration | ⚠️ | Mentionné comme "connecteurs" — juste mais superficiel |

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 13 | RAG correct · Skills claude.ai corrects · 1 nuance sur activation automatique |
| Zéro confusion conceptuelle | 15 | 5 | Confusion critique Skills claude.ai / Claude Code non adressée |
| Exemples simulés clairement marqués | 10 | 10 | Tous les exemples présentés comme modèles ✅ |
| Alignement 4D Anthropic | 5 | 4 | 3/4 compétences adressées |
| Concepts techniques N3 corrects | 5 | 3 | RAG ✅ · System prompt ✅ · Skills confusion ❌ · Hooks ❌ |
| **Total** | **50** | **35** | |

---

## Décision

**⚠️ CORRECTIONS AVANT TOURNAGE — Score 35/50**

Le script M9 est sémantiquement solide sur le RAG (alignement §8 excellent) et sur la logique des Skills claude.ai. Le problème majeur est l'absence de délimitation du périmètre Skills : en ne disant pas explicitement "ce module couvre les Skills claude.ai uniquement", le script laisse ouvert un risque de confusion critique avec les Skills Claude Code.

**Corrections prioritaires pour S9 :**

1. **🔴 [BLOQUANT]** Ajouter en section 2 (introduction Skills) une phrase délimitant explicitement le périmètre : "Skills claude.ai = interface utilisateur. Skills Claude Code = système technique différent, M10."
2. **🟡 [RECOMMANDÉ]** Ajouter en clôture une mention des Hooks comme niveau de contrôle supérieur ("Mémoire = Conseil, Hook = Loi")
3. **🟢 [OPTIONNEL]** Préciser que l'activation d'un Skill claude.ai est manuelle (pas automatique comme en Claude Code)

**Effort estimé : 20-30 minutes en S9**
