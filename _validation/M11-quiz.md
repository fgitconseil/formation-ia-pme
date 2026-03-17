# Quiz de validation — Niveau 3 — Attestation de complétion
> Module M11 · 10 questions · Seuil : 70% (7/10)
> Couvre M8, M9, M11 — dernière évaluation de la formation

---

## Instructions

Ce quiz valide l'ensemble du Niveau 3 et clôture la formation.
Les questions couvrent la configuration d'un assistant (M8), la gestion des bases de connaissance (M9), et la gouvernance d'un dispositif IA (M11).
Un score ≥ 7/10 valide votre complétion du Niveau 3.

---

## Question 1

Un assistant personnalisé bien configuré se distingue d'une conversation ordinaire principalement parce que :

A. Il utilise un modèle IA plus puissant
B. Il embarque des règles permanentes (rôle, périmètre, signaux d'alerte) qui s'appliquent à chaque conversation sans re-configuration
C. Il est plus rapide car il n'attend pas vos instructions
D. Il peut accéder à Internet en temps réel

---

## Question 2

Vous avez déployé un assistant pour votre équipe. Trois semaines après, un collègue signale que l'assistant a donné une réponse erronée sur une procédure interne. Quelle est votre première action ?

A. Désactiver l'assistant immédiatement jusqu'à investigation complète
B. Demander au collègue de reformuler sa question
C. Investiguer la source de l'erreur : est-elle dans le system prompt, dans une source de la Base de connaissance, ou dans la formulation de la question ? Puis corriger à la source.
D. Informer l'ensemble de l'équipe de ne plus utiliser l'assistant sur ce sujet

---

## Question 3

La règle "on n'industrialise jamais une première version" signifie :

A. Vous devez attendre 6 mois minimum avant tout déploiement
B. Une première version doit avoir subi plusieurs cycles 🟢🟡🔵 d'amélioration et de validation avant d'être déployée à grande échelle
C. Les premières versions sont toujours insuffisantes — il faut tout réécrire avant déploiement
D. Seule une version validée par un expert externe peut être industrialisée

---

## Question 4

Vous avez une Base de connaissance du Projet "Procédures RH" qui fonctionne bien depuis 4 mois. Une nouvelle négociation collective vient d'aboutir à un avenant à votre convention collective. Que faites-vous ?

A. Rien — un accord de 4 mois est encore récent et ne nécessite pas de mise à jour
B. Ajouter l'avenant dans la Base de connaissance sans supprimer l'ancienne version pour conserver l'historique complet
C. Archiver l'ancienne version, intégrer le nouvel avenant après l'avoir audité avec la grille M9, et re-tester la Base de connaissance avec vos questions de référence
D. Créer une nouvelle Base de connaissance en parallèle pour le nouvel avenant et laisser l'ancienne en service

---

## Question 5

Dans un dispositif IA gouverné, à quoi sert la traçabilité ?

A. À surveiller les employés qui utilisent l'IA
B. À pouvoir identifier l'assistant utilisé, la version de la Base de connaissance, et si une validation humaine a eu lieu — pour tout output diffusé ou toute décision prise avec l'aide de l'IA
C. À calculer le coût d'usage de l'IA par service
D. À prouver aux auditeurs que l'IA n'est pas utilisée pour des décisions importantes

---

## Question 6

Un signal de dégradation d'un dispositif IA est :

A. Une réponse que vous trouvez trop longue
B. Le fait que les utilisateurs reformulent leurs questions plus souvent, contournent l'assistant, ou signalent davantage d'anomalies — avant même qu'un incident majeur ne survienne
C. Une mise à jour du modèle IA par le fournisseur
D. Une augmentation du nombre de sessions IA par semaine

---

## Question 7

Votre référent IA change de poste. Vous devez transmettre la gestion du dispositif IA à un successeur. Qu'est-ce qui permet cette transmission dans les meilleures conditions ?

A. Un briefing oral de 2 heures sur les usages habituels
B. L'accès aux conversations historiques de l'ancien référent
C. Un processus documenté, une fiche de référence par assistant, un responsable par Projet, et un tableau de bord actif — tout ce que le guide M11 vous a demandé de construire
D. Une formation au module M1 pour que le successeur parte des bases

---

## Question 8

La supervision humaine au Niveau 3 diffère de celle du Niveau 1 parce que :

A. Elle n'est plus nécessaire au Niveau 3 — les assistants bien configurés sont suffisamment fiables
B. Elle est plus légère car les assistants sont mieux configurés
C. Elle est formalisée comme une étape explicite dans le processus, avec un valideur nommé et des critères définis — pas seulement une recommandation
D. Elle est déléguée au référent IA plutôt qu'à chaque utilisateur

---

## Question 9

Vous envisagez d'industrialiser un cas d'usage : générer automatiquement les comptes rendus de réunion de direction. Le processus serait entièrement automatisé — transcription → génération → envoi. Quelle question est la plus importante à vous poser avant de déployer ?

A. Quel modèle IA utiliser pour cette tâche ?
B. Une validation humaine est-elle intégrée avant envoi — et si oui, par qui, selon quels critères ?
C. Le processus est-il assez rapide pour justifier l'investissement ?
D. Les participants à la réunion sont-ils favorables à l'usage de l'IA ?

---

## Question 10

Vous consultez votre tableau de bord de pilotage et constatez que le "% d'outputs utilisés sans correction majeure" est passé de 85% à 62% en deux mois. Quelle est l'interprétation la plus probable ?

A. Les utilisateurs sont devenus plus exigeants — ce n'est pas une dégradation du dispositif
B. Le modèle IA a été mis à jour par le fournisseur et la qualité a baissé
C. Le dispositif se dégrade — probablement parce que les sources de la Base de connaissance ne sont plus à jour, ou parce que les utilisateurs utilisent l'assistant hors de son périmètre configuré
D. L'indicateur est trop volatil pour être interprété — attendre encore 2 mois

---

## Corrigé

| # | Réponse | Justification |
|---|---------|---------------|
| 1 | **B** | Le system prompt embarque les règles permanentes. Sans lui, chaque conversation recommence de zéro. |
| 2 | **C** | L'investigation à la source est la bonne démarche — pas la désactivation précipitée ni la reformulation. Un incident est un signal d'amélioration. |
| 3 | **B** | Plusieurs cycles 🟢🟡🔵 validés sont la condition de l'industrialisation. Industrialiser une première version non éprouvée, c'est amplifier l'erreur à grande échelle. |
| 4 | **C** | Archiver l'ancienne version + auditer la nouvelle + re-tester la Base de connaissance avec les questions de référence. Laisser deux versions coexister = risque de mélange. |
| 5 | **B** | La traçabilité permet de répondre aux questions de responsabilité : qui a utilisé quoi, comment, avec quelle validation. C'est la condition d'un usage auditable. |
| 6 | **B** | Les signaux de dégradation précèdent les incidents. Les détecter tôt est l'objectif du pilotage — pas attendre l'erreur visible. |
| 7 | **C** | La transmissibilité est un critère de maturité du dispositif. Un dispositif non documenté est personnellement dépendant — c'est un risque organisationnel. |
| 8 | **C** | Au Niveau 3, la supervision est formalisée dans le processus avec un valideur nommé et des critères. Ce n'est plus une recommandation générale mais une étape définie. |
| 9 | **B** | La supervision humaine est non négociable avant diffusion d'un output sensible. Automatiser sans validation intermédiaire sur des comptes rendus de direction est un risque réputationnel et stratégique. |
| 10 | **C** | Une baisse significative de la qualité des outputs est un signal de dégradation du dispositif — sources obsolètes ou dérive d'usage hors périmètre. Déclencher un audit. |

---

**Score ≥ 7/10 → Niveau 3 validé · Formation IA Générative complétée**
**Score 5-6/10 → Revoir les modules correspondant aux questions échouées**
**Score < 5/10 → Revoir l'ensemble du Niveau 3 (M8, M9, M11)**

---

*Félicitations pour avoir terminé la formation IA Générative pour PME/ETI françaises.*
*Vous avez maintenant les outils pour utiliser, capitaliser, configurer et gouverner un dispositif IA dans votre organisation.*
