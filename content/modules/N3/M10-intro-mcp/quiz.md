# M10 — Quiz · Connecter l'IA à vos outils métier — MCP
> Niveau : 🟣 N3 · Seuil de réussite : 70% (6/8)
> Version : v1 · Statut : BROUILLON

---

## Instructions

8 questions à choix unique. Une seule réponse correcte par question.

Seuil : 6/8 (70%) pour valider le module et accéder à M11.

Si vous obtenez moins de 6/8 : relisez les sections concernées avant de continuer.

---

## Questions

**Question 1 — Définition du MCP**

MCP signifie Model Context Protocol. Quelle est la meilleure description de ce standard ?

A. Un format de fichier pour stocker les instructions permanentes d'un assistant Claude

B. Un protocole universel qui permet à Claude de se connecter à des services externes de façon standardisée

C. Un système de gestion des droits d'accès au sein de claude.ai

D. Un langage de programmation spécialisé pour les agents IA

---

**Question 2 — Rôle du Serveur MCP**

Dans une architecture MCP, quel est le rôle du Serveur MCP ?

A. Stocker les conversations de Claude pour les réutiliser dans des sessions futures

B. Faire le lien entre Claude et un outil métier en exposant des capacités (Tools et Resources) que Claude peut utiliser

C. Gérer les permissions des utilisateurs dans l'interface claude.ai

D. Compresser et chiffrer les données avant de les envoyer à Claude

---

**Question 3 — Tools vs Resources**

Quelle est la distinction fondamentale entre un Tool et une Resource dans une architecture MCP ?

A. Un Tool est payant, une Resource est gratuite

B. Un Tool traite du texte, une Resource traite des données structurées

C. Un Tool permet à Claude d'exécuter une action (écriture), une Resource permet à Claude de lire une donnée

D. Un Tool fonctionne en temps réel, une Resource nécessite une synchronisation manuelle

---

**Question 4 — Gouvernance des Tools**

Vous déployez un Tool MCP `send_email` qui permet à Claude d'envoyer des emails depuis le compte du manager. Quelle règle de gouvernance est obligatoire ?

A. Claude peut envoyer les emails automatiquement si le ton est professionnel

B. Le Tool doit être limité à 10 emails par jour

C. Chaque email doit déclencher une confirmation humaine avant envoi

D. Le Tool ne peut s'activer que pendant les heures de bureau

---

**Question 5 — Cas d'usage PME réaliste**

Un responsable RH veut que Claude réponde aux questions des managers sur les soldes de congés en accédant directement au SIRH. Quelle configuration est la plus appropriée ?

A. Donner à Claude un accès complet au SIRH (toutes les données, tous les employés)

B. Configurer une Resource en lecture seule sur les soldes de congés, limitée aux membres de l'équipe du manager connecté, sans accès aux données salariales

C. Copier les données SIRH dans un fichier Excel partagé que Claude peut lire

D. Utiliser une API REST sans MCP, c'est plus simple

---

**Question 6 — MCP vs simple API**

Quelle est la différence principale entre une connexion MCP et une intégration API classique (REST) ?

A. Le MCP est plus rapide qu'une API REST

B. Le MCP est un standard universel qui définit comment exposer des Tools et des Resources à un LLM, là où une API REST est une interface généraliste qui nécessite une intégration spécifique pour chaque LLM

C. Le MCP fonctionne uniquement avec Claude, une API REST fonctionne avec tous les LLM

D. Le MCP ne nécessite pas d'authentification, contrairement aux API REST

---

**Question 7 — Logs et traçabilité**

Pourquoi les logs de chaque action MCP sont-ils une responsabilité non délégable du référent IA ?

A. Les logs permettent de facturer les coûts de chaque connexion à l'équipe concernée

B. Les logs permettent d'auditer un incident, prouver une conformité, et identifier un comportement anormal avant qu'il cause des dégâts

C. Les logs sont exigés par claude.ai pour activer les fonctionnalités MCP

D. Les logs permettent à Claude d'apprendre de ses erreurs et de s'améliorer

---

**Question 8 — Scénario de déploiement**

Vous êtes référent IA dans une ETI. Le service commercial vous demande de connecter Claude à Salesforce pour lire les fiches clients avant les rendez-vous. Quelle est votre première action ?

A. Demander à l'équipe IT d'installer un serveur MCP Salesforce immédiatement

B. Évaluer quelles données Salesforce doivent être exposées, définir les permissions, planifier les tests de robustesse — avant toute installation technique

C. Refuser la demande car Salesforce contient des données personnelles

D. Demander à Anthropic l'autorisation d'accéder à Salesforce via MCP

---

## Corrigé

**Q1 → B**
MCP est un protocole universel de connexion entre un LLM et des services externes. Ce n'est pas un format de fichier (A), un système de permissions interne à claude.ai (C), ni un langage de programmation (D).

**Q2 → B**
Le serveur MCP fait le lien entre Claude et l'outil métier. Il ne stocke pas les conversations (A), ne gère pas les permissions utilisateurs claude.ai (C), ni ne chiffre les données (D).

**Q3 → C**
La distinction fondamentale est lecture vs écriture. Un Tool exécute une action qui modifie un état dans un système. Une Resource expose des données en lecture seule. Cette distinction détermine le niveau de risque et les exigences de gouvernance.

**Q4 → C**
Tout Tool qui produit un effet dans un système externe (envoyer un email, créer un ticket, mettre à jour une fiche) doit déclencher une confirmation humaine obligatoire. La fréquence (A, B) ou le moment de la journée (D) ne sont pas les bons critères de gouvernance.

**Q5 → B**
La configuration correcte combine : lecture seule (pas d'écriture non supervisée), périmètre limité (équipe du manager connecté uniquement), et exclusion des données sensibles (salaires). L'accès complet (A) expose des données non nécessaires. Le fichier Excel (C) crée des problèmes de synchronisation. Une API REST sans MCP (D) n'est pas fausse mais ne répond pas à la question posée.

**Q6 → B**
Le MCP est un standard spécialement conçu pour exposer des capacités à un LLM avec des concepts structurés (Tools, Resources, Permissions). Une API REST est une interface généraliste qui ne définit pas ces concepts — il faut construire une intégration spécifique pour chaque LLM. Le MCP n'est pas universel dans le sens où il serait limité à Claude (C est faux) — il est open source et d'autres LLM peuvent l'adopter.

**Q7 → B**
Les logs servent à trois fins : audit d'incident (tracer ce qui s'est passé), preuve de conformité (répondre aux exigences réglementaires), et détection préventive d'anomalies. Claude n'apprend pas de ses erreurs via les logs (D) — c'est une confusion courante.

**Q8 → B**
La première action est de gouvernance, pas technique. Définir le périmètre des données à exposer, les permissions, et le plan de test — avant toute installation. L'installation (A) sans cadrage préalable crée des risques non maîtrisés. Refuser d'emblée (C) n'est pas la bonne approche — c'est encadrer l'usage, pas le bloquer. Anthropic n'accorde pas d'autorisation individuelle (D) — les permissions sont de votre responsabilité.

---

## Résultats

| Score | Niveau | Action |
|-------|--------|--------|
| 8/8 | ✅ Excellent | Vous pouvez déployer avec confiance. Passez à M11. |
| 6-7/8 | ✅ Validé | Prêt pour M11. Notez les questions ratées pour votre référence. |
| 4-5/8 | ⚠️ À consolider | Relisez les sections correspondantes avant de déployer. |
| < 4/8 | ⚠️ À revoir | Repassez M10 avant tout déploiement MCP. |
