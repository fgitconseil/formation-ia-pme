# M10 — Posts LinkedIn · Connecter l'IA à vos outils métier
> Version : v1 · Statut : BROUILLON
> Thème : "Ce que signifie 'connecter votre IA à vos outils métier'
> — et pourquoi c'est le projet de 2026 pour les ETI françaises"

---

## Variante A — Court (280 caractères environ)

En 2026, la vraie rupture IA pour les ETI françaises, ce n'est pas un meilleur modèle.

C'est Claude qui lit votre CRM avant chaque rendez-vous. Sans copier-coller.

C'est Claude qui crée le ticket Jira après la réunion. Sans intervention manuelle.

C'est le MCP — le protocole qui connecte l'IA à vos outils métier.

Et la question n'est plus "est-ce que ça marche ?" Elle est : "qui gouverne ça dans votre organisation ?"

---

## Variante B — Carrousel (5 slides)

**Slide 1 — Accroche**

"Connecter votre IA à vos outils" — vous entendez ça partout en 2026.

Voici ce que ça signifie concrètement. Et ce que ça implique pour votre organisation.

---

**Slide 2 — Avant**

Aujourd'hui dans la plupart des ETI françaises :

→ Le commercial copie-colle la fiche client dans Claude avant chaque appel
→ Le RH recharge les fichiers congés chaque semaine dans l'assistant
→ La direction attend 3 jours un rapport qui interroge 3 systèmes différents

Le problème : ce n'est pas l'IA qui est en cause. C'est l'absence de connexion.

---

**Slide 3 — Ce qu'est le MCP**

MCP = Model Context Protocol

C'est le standard qui permet à Claude de se connecter directement à vos outils.

Pas de copier-coller. Pas de rechargement manuel. Pas de données obsolètes.

Analogie : le MCP est l'USB-C des agents IA. Un connecteur universel.

Exemples concrets :
→ Claude lit Salesforce · écrit dans Jira · requête votre base de données
→ En langage naturel · avec les données réelles de vos systèmes

---

**Slide 4 — Ce qui change vraiment**

Ce n'est pas juste de la productivité.

C'est le passage de l'IA comme outil ponctuel → à l'IA comme composant d'infrastructure.

Et ça change les questions à se poser :

❌ "Est-ce que l'IA produit une bonne réponse ?"
✅ "Qui gouverne l'accès aux données ? Qui supervise les actions ? Qui audite ?"

Les ETI qui réussissent cette transition ont une chose en commun : un référent IA qui comprend à la fois les possibilités et les responsabilités.

---

**Slide 5 — Ce que vous devez faire maintenant**

3 décisions à prendre avant tout déploiement MCP :

1. **Quoi connecter ?** Identifier les 3 outils où la connexion a la plus haute valeur — et le niveau de risque de chaque donnée exposée.

2. **Avec quels droits ?** Définir les permissions exactes. Ce que Claude peut lire. Ce qu'il peut modifier. Ce qu'il ne touche jamais sans confirmation humaine.

3. **Qui gouverne ?** Nommer un responsable du dispositif, définir les logs, planifier les tests, prévoir le rollback.

Le MCP est disponible. Les connecteurs existent. Ce qui manque souvent : le cadre de décision.

---

## Variante C — Storytelling (le référent IA débordé)

**Titre / Accroche**

Être référent IA dans une ETI en 2026, c'est ça :

Lundi — le commercial veut que Claude lise Salesforce avant ses rendez-vous.
Mardi — le RH veut que l'assistant accède au SIRH pour les questions de congés.
Mercredi — la DSI veut requêter la base de données en langage naturel.
Jeudi — la direction veut un tableau de bord automatisé depuis 3 sources.

Toutes ces demandes sont légitimes. Toutes arrivent en même temps.

Et vous ne savez pas quoi répondre. Pas parce que c'est impossible. Parce que vous n'avez pas le cadre pour les arbitrer.

---

**Le cadre existe.**

Il s'appelle MCP — Model Context Protocol.

C'est le standard qui permet à Claude de se connecter à ces outils. Pas un par un, avec des développements sur mesure. Avec un protocole universel — comme l'USB-C des agents IA.

Concrètement :

→ Un **Serveur MCP** fait le lien entre Claude et votre outil (Salesforce, SIRH, BDD)
→ Des **Resources** définissent ce que Claude peut lire (en lecture seule)
→ Des **Tools** définissent ce que Claude peut faire (avec confirmation humaine obligatoire pour toute action irréversible)
→ Des **Permissions** définissent qui peut accéder à quoi

---

**Mais voici ce que j'ai appris.**

La partie technique, votre IT peut la gérer.

Ce que votre IT ne peut pas faire à votre place :

→ Décider quelles données sont exposables
→ Définir quelles actions nécessitent une validation humaine
→ Établir les logs d'audit et le plan de rollback
→ Former les utilisateurs et répondre des incidents

Ces 4 décisions appartiennent au référent IA. Pas à la DSI. Pas au manager. Au référent IA.

---

**Ce que je dis maintenant quand je reçois une demande de connexion :**

"Avant qu'on parle technique, donnez-moi 30 minutes pour répondre à 3 questions :

Quelles données exactement ? Avec quels droits ? Et si quelque chose se passe mal, comment on revient en arrière ?"

Ces 30 minutes sauvent des semaines.

---

Le MCP est le projet IA de 2026 pour les ETI françaises.

La question n'est pas si vous allez le faire. C'est comment vous allez le gouverner.

---

*Si ce sujet vous intéresse, le Module 10 de notre formation couvre l'architecture MCP, les cas d'usage PME concrets, et le cahier des charges à donner à votre équipe IT.*

---

## Notes de publication

- **Variante A** : idéale pour un post de veille hebdomadaire — court, percutant, une seule idée
- **Variante B (carrousel)** : meilleur engagement sur LinkedIn — les carrousels 5-7 slides surperforment. Illustrer chaque slide avec une icône ou un visuel simple (pas de texte dense)
- **Variante C (storytelling)** : idéale pour les profils référents IA / DSI qui se reconnaissent dans la situation. Plus long, mais très fort sur l'identification. Publier le lundi matin (pic de décision pro)
- **Call to action** : toujours terminer par une question ouverte ou un point d'action — éviter "likez et partagez"
