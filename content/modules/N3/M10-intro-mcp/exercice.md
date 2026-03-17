# M10 — Exercice pratique · Connecter l'IA à vos outils métier
> Niveau : 🟣 N3 · Format : Exercice autonome · Durée estimée : ~30 min
> Version : v1 · Statut : BROUILLON

---

## Introduction

Ce que vous avez appris dans M10 n'a de valeur que si vous pouvez l'appliquer à votre organisation réelle.

Ces 3 exercices vous amènent de la compréhension à la préparation concrète d'un déploiement MCP.

Vous n'allez pas déployer un connecteur MCP dans cet exercice. Vous allez produire les deux livrables qui précèdent tout déploiement : le cahier des charges pour votre équipe IT, et le cadre de gouvernance pour votre organisation.

**Important** : si vous n'avez pas de service IT interne, adaptez l'exercice 2 pour un prestataire externe ou un intégrateur. Le livrable reste le même.

---

## Exercice 1 — Cartographier vos connecteurs MCP potentiels (10 min)

### Objectif

Identifier les 3 connexions MCP qui auraient le plus de valeur pour votre organisation, et évaluer leur faisabilité avant d'aller plus loin.

### Méthode

**Étape 1 — Lister vos outils métier connectables**

Remplissez ce tableau avec les outils que votre organisation utilise :

| Outil / Système | Type | Usage actuel | Données concernées |
|-----------------|------|-------------|-------------------|
| Ex : Salesforce | CRM | Fiches clients | Contacts, opportunités, historique |
| | | | |
| | | | |
| | | | |
| | | | |

Types suggérés : CRM · SIRH · ERP · Base de données · Messagerie · Agenda · Stockage documents · Outil projet · BI/reporting

**Étape 2 — Évaluer la valeur d'une connexion MCP**

Pour chaque outil listé, notez chaque critère de 1 (faible) à 3 (fort) :

| Outil | Fréquence d'usage IA/semaine | Temps gagné par connexion | Risque de la donnée (1=faible, 3=élevé) | Score valeur net |
|-------|------------------------------|--------------------------|----------------------------------------|-----------------|
| | | | | |
| | | | | |
| | | | | |

Calcul du score valeur net : (Fréquence + Temps gagné) − Risque

**Étape 3 — Sélectionner vos 3 priorités**

Notez ici vos 3 connecteurs MCP prioritaires, du plus au moins urgent :

1. **Premier connecteur** : ___________
   Raison : ___________
   Type de connexion principalement utile : ☐ Resource (lecture) · ☐ Tool (écriture) · ☐ Les deux

2. **Deuxième connecteur** : ___________
   Raison : ___________
   Type : ☐ Resource · ☐ Tool · ☐ Les deux

3. **Troisième connecteur** : ___________
   Raison : ___________
   Type : ☐ Resource · ☐ Tool · ☐ Les deux

---

## Exercice 2 — Rédiger le cahier des charges IT (15 min)

### Objectif

Produire le document que vous donnez à votre équipe IT (ou prestataire) pour déployer votre premier connecteur MCP. Un cahier des charges clair permet à l'équipe technique de travailler sans vous revenir 10 fois avec des questions.

### Instructions

Prenez le connecteur prioritaire identifié en exercice 1. Remplissez cette fiche :

---

**CAHIER DES CHARGES — Connecteur MCP [Nom de l'outil]**

**Date** : ___________
**Demandeur** : ___________
**Responsable technique désigné** : ___________

---

**1. Périmètre fonctionnel**

Quel problème ce connecteur résout-il ? (1-2 phrases maximum)

___________

---

**2. Resources à exposer (lecture seule)**

Listez les données que Claude doit pouvoir lire. Pour chaque Resource, précisez le périmètre exact.

| Resource | Description | Périmètre (qui peut y accéder) | Données exclues |
|----------|-------------|-------------------------------|-----------------|
| | | | |
| | | | |
| | | | |

---

**3. Tools à exposer (actions d'écriture)**

Listez les actions que Claude doit pouvoir exécuter. Pour chaque Tool, précisez si une confirmation humaine est obligatoire.

| Tool | Action exécutée | Confirmation humaine obligatoire ? | Conditions d'activation |
|------|----------------|-----------------------------------|------------------------|
| | | ☐ Oui · ☐ Non | |
| | | ☐ Oui · ☐ Non | |
| | | ☐ Oui · ☐ Non | |

**Règle par défaut** : tout Tool qui modifie des données en production → confirmation humaine obligatoire.

---

**4. Droits et permissions**

Quel compte technique sera utilisé pour la connexion MCP ?

Droits accordés à ce compte : ___________

Droits explicitement refusés : ___________

Gestion des données sensibles (RGPD) : ___________

---

**5. Contraintes techniques**

Environnement cible (production / staging / développement) : ___________

Interface Claude utilisée comme client MCP : ___________

Serveur MCP disponible pour cet outil : ☐ Open source existant · ☐ À développer · ☐ Inconnu

Contraintes d'hébergement (on-premise / cloud / Europe) : ___________

---

**6. Tests attendus avant mise en production**

Décrivez les 6 scénarios de test à valider (4 scénarios M8 + 2 scénarios MCP spécifiques) :

| Scénario | Ce qui est testé | Résultat attendu |
|----------|-----------------|-----------------|
| 1. Demande normale dans le périmètre | | |
| 2. Demande hors périmètre | | |
| 3. Données sensibles dans la demande | | |
| 4. Pression de la demande | | |
| 5. Données inattendues (erreur SIRH/CRM) | | |
| 6. Tentative d'accès hors permissions | | |

---

**7. Plan de rollback**

Comment déconnecter le serveur MCP en moins de 10 minutes si un problème survient ?

Procédure : ___________

Qui peut exécuter le rollback : ___________

L'assistant continue-t-il à fonctionner en mode dégradé ? ☐ Oui (préciser) · ☐ Non · ☐ À configurer

---

## Exercice 3 — Définir les règles de gouvernance (5 min)

### Objectif

Fixer les règles opérationnelles du dispositif avant déploiement. Ces règles sont le contrat entre vous (référent IA), votre équipe technique, et les utilisateurs finaux.

### Instructions

Complétez cette fiche de gouvernance :

---

**RÈGLES DE GOUVERNANCE — Dispositif MCP [Nom]**

**Date** : ___________
**Référent IA responsable** : ___________

---

**Décisions humaines obligatoires**

Liste des actions qui nécessitent une validation humaine explicite avant exécution :

1. ___________
2. ___________
3. ___________

---

**Logs et traçabilité**

Où sont stockés les logs des actions MCP ? ___________

Qui consulte les logs, à quelle fréquence ? ___________

Durée de rétention des logs : ___________

---

**Alertes**

Quelles situations déclenchent une alerte immédiate au référent IA ?

- ☐ Tentative d'accès à une Resource hors périmètre
- ☐ Erreur répétée d'un Tool (> ___ fois en ___ minutes)
- ☐ Volume d'actions anormalement élevé
- ☐ Autre : ___________

---

**Revue de gouvernance**

Fréquence de revue des permissions : ___________

Déclencheurs d'une révision immédiate :
- Changement de personnel ayant accès au système connecté
- Incident ou anomalie constaté
- Évolution réglementaire (RGPD, AI Act)
- Mise à jour majeure du serveur MCP ou de l'outil connecté

---

**Procédure en cas d'incident**

1. Qui est prévenu en premier : ___________
2. Action immédiate (rollback ?) : ___________
3. Analyse post-incident (délai) : ___________
4. Communication aux utilisateurs : ___________

---

## Bilan de l'exercice

Avant de passer à M11, vérifiez :

- [ ] J'ai identifié mes 3 connecteurs MCP prioritaires avec leur niveau de risque
- [ ] J'ai produit un cahier des charges IT pour mon premier connecteur
- [ ] J'ai défini les règles de gouvernance du dispositif
- [ ] Chaque Tool d'écriture a une confirmation humaine obligatoire documentée
- [ ] Le plan de rollback est défini et testable

Si vous avez coché les 5 points : votre premier déploiement MCP a un cadre solide. Passez à M11 pour la gouvernance dans la durée.

Si vous n'avez pas pu remplir certaines sections : c'est de l'information à collecter auprès de votre équipe IT — pas un blocage. Notez les manques et planifiez les conversations nécessaires.
