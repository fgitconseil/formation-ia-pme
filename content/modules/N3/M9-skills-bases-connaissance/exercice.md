# Exercices — M9 Projets et bases de connaissance
> 3 exercices pratiques · Durée totale estimée : ~50 min
> Public : référents IA · power users

---

## Exercice 1 — Auditer une base documentaire existante (20 min)

### Objectif
Évaluer la fiabilité d'une base documentaire réelle avant de l'intégrer dans une Base de connaissance du Projet.

### Contexte
Dans le module M9, vous avez appris que "garbage in, garbage out" s'applique directement aux Bases de connaissance du Projet. Avant de connecter un document à un assistant IA, vous devez savoir s'il est fiable.

Cet exercice vous donne une grille d'audit structurée pour évaluer chaque document.

### Instructions

**Étape 1 — Choisir votre base documentaire (5 min)**

Identifiez un ensemble de 5 à 10 documents que vous envisagez d'intégrer dans une Base de connaissance du Projet.

Exemples :
- Procédures internes (qualité, RH, opérations)
- Convention collective + accords d'entreprise
- Catalogue produit + grilles tarifaires
- Politiques internes (IA, données, sécurité)
- Fiches de poste + guides d'intégration

Votre base choisie : _______________

**Étape 2 — Auditer chaque document avec la grille (10 min)**

Pour chaque document, remplissez une ligne de la grille :

| Document | Date MàJ | Version active ? | Périmètre clair ? | Contradictions ? | Verdict |
|----------|----------|-----------------|-------------------|-----------------|---------|
| [Nom] | [AAAA-MM] | Oui / Non | Oui / Non | Oui / Non | ✅ Intégrer / ⚠️ Réviser / ❌ Exclure |
| | | | | | |
| | | | | | |
| | | | | | |

**Critères de verdict :**
- ✅ Intégrer : date récente, version unique et active, périmètre défini, pas de contradiction détectée
- ⚠️ Réviser : périmètre flou, date ancienne, ou doublon avec une autre version — réviser avant intégration
- ❌ Exclure : version obsolète remplacée par une autre, contradictions non résolues, périmètre indéfini

**Étape 3 — Bilan de l'audit (5 min)**

- Nombre de documents ✅ Prêts : ___
- Nombre de documents ⚠️ À réviser : ___
- Nombre de documents ❌ À exclure : ___

**Question de réflexion** : Si vous aviez intégré tous ces documents sans audit, combien de sources incorrectes aurait contenu votre Base de connaissance ?

---

## Exercice 2 — Rédiger des Instructions de Projet pour votre domaine (20 min)

### Objectif
Créer des Instructions de Projet opérationnelles en utilisant le gabarit en 5 champs.

### Contexte
Dans le script M9, vous avez vu qu'il manque souvent un gabarit d'Instructions de Projet copiable clé en main. Cet exercice le comble.

Des Instructions de Projet bien rédigées disent à l'IA quoi faire, avec quoi, dans quel périmètre, et ce qu'elle ne doit pas faire.

### Gabarit copiable

```
--- GABARIT INSTRUCTIONS DE PROJET ---

Nom                 : [Nom court et descriptif · ex : "Analyse contrats fournisseurs"]

Contexte            : [Pour qui ce Skill est-il conçu ? Dans quelle organisation ?
                       Quel est le niveau d'expertise de l'utilisateur ?
                       ex : "PME industrielle de 80 personnes · utilisateur = manager non juriste"]

Instructions        : [Les règles de traitement de ce Skill — 3 à 5 points]
                       1. [Instruction 1]
                       2. [Instruction 2]
                       3. [Instruction 3]
                       ex : "1. Identifier les clauses à négocier
                             2. Signaler les clauses inhabituelles pour ce type de contrat
                             3. Poser les questions clés avant signature
                             4. Ne jamais émettre un avis définitif — recommander une vérification experte"

Sources             : [Les documents ou bases de données utilisés par ce Skill]
                       ex : "Contrats types du secteur · procédure interne validation achats"

Limites             : [Ce que ce Skill ne fait pas · Ce qu'il renvoie vers un expert]
                       ex : "Ne traite pas les litiges en cours · renvoie vers le service juridique
                             pour tout contrat > 50 000€ ou durée > 3 ans"

---
```

### Instructions

1. Choisissez un cas d'usage récurrent dans votre travail (ou utilisez le cas "Analyse contrats" comme exercice)
2. Remplissez les 5 champs du gabarit
3. Soumettez vos Instructions de Projet dans votre outil IA et testez-les avec une demande réelle
4. Notez ce qui fonctionne et ce qui doit être ajusté — c'est votre v1

**Exemple d'Instructions de Projet complétées :**

```
Nom                 : Réponses aux objections commerciales

Contexte            : PME de distribution de matériaux de construction · utilisateur = commercial terrain
                      L'utilisateur n'a pas toujours accès à ses documents pendant les rendez-vous

Instructions        : 1. Identifier le type d'objection (prix / délai / qualité / concurrence)
                       2. Proposer 2 arguments adaptés au type d'objection
                       3. Si l'objection concerne un produit spécifique, citer les caractéristiques techniques
                       4. Toujours conclure par une question de relance
                       5. Ne jamais promettre un délai sans l'avoir vérifié

Sources             : Catalogue produit 2025 · Grille tarifaires Q1 2025 · FAQ technique produits

Limites             : Ne traite pas les demandes de remise supérieures à 15% (escalader au responsable commercial)
                      Ne traite pas les contrats-cadres (renvoyer vers le responsable grands comptes)
```

---

## Exercice 3 — Planifier la maintenance de la Base de connaissance (10 min)

### Objectif
Créer un calendrier de révision pour votre Base de connaissance — la condition pour qu'elle reste fiable dans le temps.

### Contexte
Une Base de connaissance non maintenue se dégrade sans signal visible. La maintenance est ce qui transforme un projet IA en infrastructure durable.

### Instructions

Remplissez le plan de maintenance pour la Base de connaissance que vous venez de créer :

```
--- PLAN DE MAINTENANCE BASE DE CONNAISSANCE ---

Nom de la Base de connaissance : [Nom]
Propriétaire         : [Nom + rôle — responsable des révisions]

Fréquence de révision planifiée :
  [ ] Mensuelle (domaine à évolution rapide : réglementaire, commercial, produit)
  [ ] Trimestrielle (domaine à évolution modérée)
  [ ] Semestrielle (domaine stable)

Prochaine révision planifiée : [Date]

Déclencheurs de révision non planifiée :
  - [ ] Changement réglementaire ou légal dans le domaine du Skill
  - [ ] Nouvelle version d'un document source
  - [ ] Signalement d'une réponse incorrecte par un utilisateur
  - [ ] Évolution de l'organisation (restructuration, nouveau service, fusion)

Procédure de révision :
  1. Vérifier chaque document source avec la grille d'audit (Exercice 1)
  2. Mettre à jour le Skill avec les nouvelles sources validées
  3. Archiver les versions obsolètes
  4. Re-tester avec 3 questions de référence (que vous documentez ici)

Questions de référence pour les tests de régression :
  Question 1 : _______________
  Question 2 : _______________
  Question 3 : _______________

---
```

### Conseil

Les questions de référence servent à vérifier que la Base de connaissance répond correctement après chaque révision. Ce sont des tests de non-régression.

Choisissez des questions représentatives de vos vrais cas d'usage — pas des questions trop simples. L'objectif est de détecter un problème avant que les utilisateurs le signalent.
