# Fiche population — IT / DSI

> Profil : DSI, responsables IT, chefs de projet technique, administrateurs systèmes
> Niveau de départ recommandé : N2 → N3 (profil avancé)
> Mise à jour : 2026-03

---

## 3 cas d'usage prioritaires

### 1. Rédaction de documentation technique et procédures

**Contexte** : transformer des notes techniques en documentation utilisable,
rédiger des procédures d'exploitation, des guides utilisateurs, des runbooks.

**Prompt type** :
```
Tu es un expert IT qui rédige de la documentation pour [public cible : utilisateurs finaux / équipe technique / direction].

Voici mes notes brutes sur [sujet / procédure] :
[coller les notes]

Transforme-les en documentation structurée avec :
- Titre et objet du document
- Prérequis / conditions d'application
- Étapes numérotées (verbes d'action, une étape = une action)
- Points d'attention et cas d'erreur courants
- Annexes si nécessaire (glossaire, contacts)

Niveau de détail : [expert / intermédiaire / grand public].
Format : Markdown.
```

---

### 2. Aide à la cartographie IA de l'organisation

**Contexte** : identifier les outils IA déjà utilisés (shadow IT ou validés),
évaluer les risques, proposer un cadre de gouvernance cohérent
avec la politique de sécurité SI.

**Prompt type** :
```
Je dois réaliser un audit des usages IA dans mon organisation
([taille], [secteur]).

Aide-moi à construire :
1. Un questionnaire de 8 questions pour recenser les usages IA par département
2. Une grille de classification des outils (sécurisé / sous conditions / interdit)
   basée sur : type de données traitées × exposition externe × conformité RGPD
3. Un template de politique d'usage acceptable (1 page max)

Format : tableau + texte, prêt à être adapté.
```

---

### 3. Analyse de code et aide au débogage

**Contexte** : comprendre un code hérité, déboguer un script,
rédiger des tests unitaires, documenter une API existante.

**Prompt type** :
```
Voici un bloc de code [langage] :
[coller le code — vérifier qu'il ne contient pas de secrets ou credentials]

Je rencontre le problème suivant : [décrire le comportement observé vs attendu].

Analyse ce code et :
1. Explique ce qu'il fait ligne par ligne (synthèse en 5 lignes max)
2. Identifie la source probable du problème
3. Propose une correction commentée
4. Signale d'autres problèmes potentiels (sécurité, performance) que tu observes

Ne réécris pas tout le code si la correction est localisée.
```

---

## 2 risques spécifiques

### Risque 1 — Exfiltration involontaire de données d'infrastructure

Le profil IT a accès à des informations critiques :
architecture réseau, credentials, clés API, configurations de sécurité,
code source propriétaire. Coller ces éléments dans un LLM public
équivaut à les exposer à un tiers.

**Règle absolue** : avant tout copier-coller dans un LLM :
- Supprimer tous les credentials, tokens, clés API, mots de passe
- Anonymiser les noms de domaines, IPs, noms d'infrastructure
- Vérifier que le code ne contient pas de données client

Utiliser uniquement des instances avec politique de non-rétention
(Claude for Enterprise ou déploiement on-premise si disponible).

---

### Risque 2 — Délégation excessive sans revue de sécurité

L'IA génère du code fonctionnel mais pas nécessairement sécurisé.
Des patterns comme l'injection SQL, les failles XSS ou la gestion incorrecte
des erreurs peuvent apparaître dans des scripts générés par LLM.

**Antidote** : tout code généré par IA doit passer une revue humaine
avant intégration en production. Demander explicitement à l'IA
d'identifier les risques de sécurité dans son propre output
("identifie les failles potentielles dans ce code que tu viens de générer").

---

## Module de départ recommandé

**→ M8 — Créer son assistant personnalisé**

La DSI est typiquement le premier profil à atteindre le Niveau 3.
M8 permet de configurer des assistants IA adaptés aux workflows IT :
assistant de débogage, assistant de documentation, assistant de réponse aux tickets.

Prérequis recommandés avant M8 : parcourir M1 (comprendre les LLM)
et M2 (gouvernance) pour poser le cadre sécurité de l'organisation.

Ensuite : **M10** (MCP) pour évaluer les connecteurs avec les outils SI existants.
