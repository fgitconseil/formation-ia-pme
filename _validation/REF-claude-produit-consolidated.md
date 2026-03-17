# REF-claude-produit-consolidated.md
> Source : Documentation produit Claude (claude.ai, support, MCP)
> Consolidation pour NotebookLM — Formation IA PME/ETI françaises
> Date de consolidation : 2026-03-17

---

## Source 1 — Projets Claude.ai (support.claude.ai)

### Qu'est-ce qu'un Projet Claude ?

Un Projet Claude est un espace de travail dédié dans claude.ai qui regroupe :
- Des **Instructions de Projet** (instructions permanentes qui s'appliquent à toutes les conversations du projet)
- Une **Base de connaissances** (documents, fichiers, données de référence accessibles à Claude)
- Un **historique de conversations** lié au contexte du projet

### Base de connaissances (Knowledge Base / RAG)

La base de connaissances d'un Projet permet d'uploader des documents que Claude peut consulter lors de chaque conversation :
- Fichiers PDF, Word, texte, CSV
- Jusqu'à plusieurs centaines de pages selon le plan
- Les données restent dans le projet — pas de rechargement à chaque session

**Principe RAG (Retrieval-Augmented Generation) :**
Claude ne mémorise pas les documents — il les lit à chaque fois qu'il en a besoin. Les données restent sous votre contrôle. Claude cite les sources qu'il utilise.

**Cas d'usage typiques :**
- Documentation produit interne (fiches techniques, procédures)
- Bases réglementaires (conventions collectives, normes sectorielles)
- FAQ interne, glossaires métier
- Historiques de projets clients

### Instructions de Projet

Les Instructions de Projet (appelées "system prompt" en langage technique) sont des instructions permanentes qui :
- S'appliquent à toutes les conversations du projet sans les réécrire
- Définissent le rôle, le ton, les contraintes, le périmètre
- Peuvent inclure des gabarits de réponse, des exemples, des règles métier

**Ce que vous pouvez définir dans les Instructions de Projet :**
- Rôle et expertise simulée : "Tu es un assistant RH spécialisé en droit du travail français"
- Contraintes de confidentialité : "Ne mentionne jamais les salaires individuels"
- Format de réponse : "Toujours répondre avec un tableau + une recommandation en 3 points"
- Périmètre : "Si la question sort de ce périmètre, indique-le et oriente vers [contact]"

### Collaboration et partage

Dans les plans Teams et Enterprise :
- Les Projets peuvent être partagés avec une équipe
- Les Instructions de Projet s'appliquent à tous les membres
- Garantit la cohérence des réponses pour tous les utilisateurs du projet

---

## Source 2 — Hiérarchie CLAUDE.md (documentation Claude Code)

### Les 3 niveaux de mémoire d'un assistant Claude Code

**Niveau 1 — Global** (`~/.claude/CLAUDE.md`)
- S'applique à TOUS les projets sur la machine
- Contient : préférences personnelles, style de réponse, langue, conventions
- Priorité : la plus basse (peut être surchargée)

**Niveau 2 — Projet** (`./CLAUDE.md` à la racine du projet)
- S'applique uniquement au projet courant
- Contient : contexte du projet, conventions, architecture, contraintes métier
- Priorité : moyenne

**Niveau 3 — Local** (`./CLAUDE.local.md` ou sous-dossiers)
- S'applique à un sous-ensemble du projet
- Contient : instructions spécifiques à un module ou composant
- Priorité : la plus haute (surcharge les niveaux supérieurs)

**Règle de précédence :** Local > Projet > Global

**Budget tokens CLAUDE.md :**
Les fichiers CLAUDE.md consomment des tokens du contexte. Recommandation : garder chaque niveau concis (< 500 tokens). Modulariser les instructions longues en les référençant plutôt qu'en les répétant.

**Bénéfice clé :**
Un assistant Claude Code avec un CLAUDE.md bien rédigé au niveau Projet n'a jamais besoin qu'on lui réexplique le contexte — il le connaît dès l'ouverture de chaque conversation.

---

## Source 3 — Model Context Protocol (modelcontextprotocol.io)

### Qu'est-ce que le MCP ?

Le Model Context Protocol (MCP) est un standard ouvert qui permet à Claude de se connecter à des services et outils externes de façon standardisée.

**Analogie clé : le MCP est l'USB-C des agents IA.**
Avant l'USB-C, chaque appareil avait son propre connecteur. L'USB-C a créé un standard universel. Le MCP fait la même chose pour les connexions entre LLMs et outils métier.

### Les composants d'une architecture MCP

**Serveur MCP**
Programme intermédiaire qui fait le lien entre Claude et un outil métier (Salesforce, Jira, SIRH, base de données). Le serveur expose des capacités sous forme de Tools et Resources.

**Client MCP**
L'interface Claude qui se connecte au serveur (Claude Desktop, claude.ai en mode agentique).

**Tools**
Actions que Claude peut exécuter via le serveur : créer un ticket, envoyer un email, mettre à jour une fiche client. Les Tools modifient l'état d'un système — ils nécessitent une supervision humaine pour les actions irréversibles.

**Resources**
Données que Claude peut lire via le serveur : fiche client, solde de congés, liste de produits. Les Resources exposent de l'information en lecture seule — moins de risques que les Tools.

**Permissions**
Définissent qui peut accéder à quoi et avec quels droits. Principe du moindre privilège : Claude ne reçoit que les permissions strictement nécessaires à sa tâche.

### Écosystème MCP

Le MCP est open source et adopté par un écosystème croissant :
- Serveurs disponibles pour : Salesforce, Jira, GitHub, bases de données SQL, Google Workspace, Slack, et des dizaines d'autres
- Compatible avec d'autres LLMs qui adoptent le standard (pas limité à Claude)
- Développement de serveurs custom possible pour des outils propriétaires

### Avant/Après le MCP

**Avant (sans MCP) :**
- Le commercial copie-colle la fiche client dans Claude avant chaque appel
- Le RH recharge les fichiers congés chaque semaine dans l'assistant
- L'analyste attend 3 jours un rapport qui interroge 3 systèmes différents

**Après (avec MCP) :**
- Claude lit directement le CRM avant le rendez-vous
- Claude répond aux questions congés en interrogeant le SIRH en temps réel
- Claude génère le rapport en quelques secondes en accédant aux 3 sources

---

## Récapitulatif produit Claude pour la formation

| Fonctionnalité | Nom technique | Nom dans la formation | Module |
|----------------|--------------|----------------------|--------|
| Instructions permanentes | System prompt | Instructions de Projet | M8 |
| Documents de référence | Knowledge base / RAG | Base de connaissances | M9 |
| Espace de travail dédié | Project | Projet Claude | M9 |
| Connexion outils métier | MCP / Tool use | Connecteur MCP | M10 |
| Actions exécutables | Tools | Tools MCP | M10 |
| Données accessibles | Resources | Resources MCP | M10 |
| Droits d'accès | Permissions | Permissions MCP | M10 |

*Sources : support.claude.ai, deepwiki.com (Claude Code), modelcontextprotocol.io*
