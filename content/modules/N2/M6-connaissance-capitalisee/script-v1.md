# M6 — Capitaliser sa connaissance
> Niveau : 🟡 N2 · Format : Vidéo · Durée cible : ~20 min
> Version script : v1 · Statut : BROUILLON

---

## Métadonnées

| Champ | Valeur |
|---|---|
| Compétences cibles | C4, C5 — Capitaliser et sécuriser les connaissances en contexte IA |
| Public | Employés ayant validé M5 |
| Prérequis | M5 — La méthode par niveaux |
| Module suivant | M7 — Évaluation de base Niveau 2 |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche — le collaborateur qui re-explique le contexte  (2 min)
2. Projects — créer un espace de travail contextuel          (5 min)
3. Artifacts — demander un livrable, pas une réponse         (5 min)
4. Intro RAG/Skills — donner de la connaissance à l'IA       (5 min)
5. Clôture + transition M7                                   (3 min)
```

---

## 1. Accroche — Le collaborateur qui re-explique tout à chaque fois (2 min)

**[À caméra — ton direct, pas de slides]**

"Je vais vous décrire quelque chose que vous avez probablement déjà vécu.

Vous avez eu une excellente session de travail avec l'IA. Vous avez construit un contexte solide. L'IA connaissait votre secteur, votre ton, vos contraintes internes, le nom de vos produits. Les réponses étaient précises, pertinentes, directement utilisables.

Le lendemain, vous ouvrez une nouvelle conversation. Et vous re-expliquez tout depuis le début. Le secteur. Le ton. Les contraintes. Le nom des produits. Dix minutes de mise en contexte pour retrouver le niveau de la veille.

C'est le comportement par défaut de l'IA : elle n'a pas de mémoire persistante entre les sessions.

Mais il existe des outils pour changer ça. Des outils qui permettent de donner à l'IA un contexte stable, des documents de référence, et des instructions permanentes — pour que chaque conversation commence là où la précédente s'est arrêtée.

C'est l'objet de ce module."

---

## 2. Projects — créer un espace de travail contextuel (5 min)

**[Slide : titre « Projects — l'espace de travail persistant »]**

"Le premier outil, c'est les Projects.

Un Project dans Claude, c'est un espace de travail dédié à un sujet ou une mission précise. Tout ce que vous y mettez — documents, instructions, historique — reste accessible d'une session à l'autre.

**[Slide : ce que vous pouvez mettre dans un Project]**

Dans un Project, vous pouvez stocker trois types d'éléments :

Des instructions permanentes. Ce sont vos règles de travail : le ton à adopter, les formulations à éviter, les contraintes internes spécifiques à votre organisation.

Exemple : 'Dans ce projet, tu travailles pour une PME industrielle de 80 personnes. Nos clients sont des acheteurs techniques. Évite le jargon du conseil en stratégie.'

Des documents de référence. Vos fichiers clés que l'IA peut utiliser pour répondre : charte interne, catalogue produit, compte rendu de dernière réunion, procédures.

Un historique de conversation. Les échanges précédents restent disponibles — l'IA peut s'appuyer sur les décisions déjà prises plutôt que de les redemander.

**[Slide : exemple concret]**

Exemple pratique.

Vous gérez la communication d'une PME. Vous créez un Project 'Communication externe' avec :
- Votre charte de marque (ton, interdits, exemples)
- Les 3 derniers communiqués de presse comme exemples de style
- L'instruction : 'Les communiqués font toujours moins de 400 mots et commencent par un fait, pas un titre institutionnel'

Désormais, chaque fois que vous ouvrez ce Project pour rédiger un communiqué, l'IA sait exactement dans quel cadre elle travaille. Vous ne re-expliquez plus rien.

**[Slide : règle de gestion des Projects]**

Quatre règles pour bien gérer vos Projects :

Ouvrez un Project par périmètre de travail distinct — ne mélangez pas 'Communication externe' et 'Contrats fournisseurs' dans le même Project.

Nommez clairement les documents que vous y déposez : version, date, périmètre.

Ouvrez un nouveau Project quand le sujet change — pas quand la conversation s'allonge.

Nettoyez régulièrement : un Project encombré produit des réponses moins précises."

---

## 3. Artifacts — demander un livrable, pas une réponse (5 min)

**[Slide : titre « Artifacts — du contenu structuré, pas de la prose »]**

"Le deuxième outil change la façon dont vous recevez les réponses.

Par défaut, une IA répond en prose. Vous posez une question, elle développe une réponse en paragraphes. C'est utile pour comprendre — mais ce n'est pas toujours ce dont vous avez besoin.

Souvent, ce dont vous avez besoin, c'est d'un livrable. Quelque chose que vous pouvez directement copier, coller, partager, ou télécharger.

C'est à ça que servent les Artifacts.

**[Slide : qu'est-ce qu'un Artifact ?]**

Un Artifact, c'est un livrable structuré produit par l'IA dans un format directement exploitable :

- Un tableau Markdown que vous copiez dans Excel
- Un bloc de code documenté que vous intégrez directement
- Un document formaté que vous téléchargez
- Un formulaire ou une checklist prête à l'usage
- Un JSON d'actions ou de données structurées

La différence avec une réponse classique : l'Artifact est un objet autonome — pas une explication.

**[Slide : comment demander un Artifact]**

Pour demander un Artifact, la formulation change.

Au lieu de : 'Explique-moi comment organiser une réunion hebdomadaire'

Vous écrivez : 'Produis une checklist de préparation de réunion hebdomadaire en 3 sections, format Markdown, que je peux télécharger et partager directement avec mon équipe.'

La différence est dans l'intention : vous demandez à l'IA de produire un objet, pas de vous répondre.

**[Slide : exemples d'usages Artifact en PME]**

Quelques cas concrets :

Vous sortez d'une réunion de pilotage. Au lieu de demander un résumé, vous demandez un Artifact : 'Produis un tableau des décisions prises avec 3 colonnes — décision / responsable / échéance'.

Vous préparez un brief pour un prestataire. Au lieu d'une explication, vous demandez un Artifact : 'Génère un document de brief en Markdown avec les sections standard : contexte, objectifs, livrables attendus, contraintes, critères d'évaluation'.

Vous finalisez votre charte IA avec Marc. Vous lui demandez un Artifact : 'Transforme cette charte en tableau des usages — 3 colonnes : usage / niveau d'autorisation / condition'. Ce tableau peut aller directement dans votre wiki interne.

**[Slide : règle de l'Artifact]**

La règle de l'Artifact : si vous allez retravailler manuellement la réponse avant de l'utiliser, demandez directement le livrable final.

Demandez toujours : 'Quel format sera directement exploitable sans retraitement ?'
Puis demandez ce format."

---

## 4. Intro RAG/Skills — donner de la connaissance à l'IA (5 min)

**[Slide : titre « RAG et Skills — l'IA qui connaît votre métier »]**

"On vient de voir comment organiser le contexte de travail avec les Projects, et comment demander des livrables avec les Artifacts.

Il y a un troisième axe : donner à l'IA une connaissance métier qu'elle n'a pas par défaut.

**[Slide : le problème de la connaissance par défaut]**

Un LLM entraîné sur des données génériques ne connaît pas :

- Votre secteur spécifique et ses usages
- Vos documents internes (procédures, offres, contrats types)
- Vos clients, leurs noms, leurs historiques
- Votre vocabulaire maison, vos abréviations, votre culture d'entreprise

Résultat : chaque fois que vous avez besoin d'une réponse ancrée dans votre réalité, vous devez re-fournir les données depuis le début.

Deux approches permettent de changer ça : le RAG et les Skills.

**[Slide : RAG — Retrieval-Augmented Generation]**

Le RAG, c'est une architecture technique dans laquelle l'IA est connectée à une base documentaire de votre organisation.

Au lieu de répondre à partir de sa connaissance générale, l'IA va d'abord chercher les documents pertinents dans votre base, puis construire sa réponse à partir de ces documents.

Exemple concret : un assistant RH connecté à votre convention collective, votre règlement intérieur, vos procédures de recrutement. Quand un manager pose une question sur les congés, l'IA répond à partir de votre convention — pas d'une règle générique.

**[Slide : ce que le RAG ne garantit pas]**

Attention — et c'est important :

Le RAG garantit l'accessibilité contextuelle de vos documents. Il ne garantit pas l'exactitude.

Si vos documents sont contradictoires entre eux — plusieurs versions d'une même procédure — l'IA peut mélanger les sources. Si un document est obsolète, l'IA peut citer une règle qui ne s'applique plus.

La discipline 🟡 reste indispensable : plus vos données sont accessibles à l'IA, plus la vérification humaine est critique.

**[Slide : Skills — les instructions réutilisables]**

Les Skills, c'est plus simple et plus accessible pour une PME.

Un Skill, c'est un ensemble d'instructions sauvegardées que vous pouvez appeler à la demande dans n'importe quelle conversation.

Exemples :
- Un Skill 'Rédaction commerciale' avec votre ton, vos formules, vos interdits
- Un Skill 'Compte rendu réunion' avec votre format standard et vos sections obligatoires
- Un Skill 'Analyse de contrat' avec vos critères de vigilance habituels

Vous créez le Skill une fois. Vous l'appelez en une ligne dans n'importe quelle conversation.

**[Slide : là où vous en êtes]**

Récapitulatif de vos 3 outils de capitalisation :

| Outil | Usage | Avantage |
|-------|-------|----------|
| Projects | Contexte persistant par sujet | Re-explication zéro |
| Artifacts | Livrable structuré direct | Zéro retraitement manuel |
| RAG / Skills | Connaissance métier intégrée | Réponses ancrées dans votre réalité |

Ces trois outils fonctionnent ensemble. Un Project bien construit + des demandes d'Artifact + un Skill de rédaction = un flux de travail IA que vous n'avez plus besoin de reconfigurer à chaque session."

---

## 5. Clôture + transition M7 (3 min)

**[Retour caméra — ton direct]**

"Si je résume le chemin parcouru depuis le début du Niveau 2 :

M4 — vous savez quel type de prompt utiliser selon votre intention.
M5 — vous savez dans quel ordre progresser pour ne pas fragiliser vos livrables.
M6 — vous savez comment ne pas repartir de zéro à chaque session.

C'est la différence entre l'usage opportuniste — quand ça marche, tant mieux — et l'usage structuré — un résultat fiable, reproductible, capitalisé.

Dans le module suivant — M7 — on va faire le bilan du Niveau 2.

Ce n'est pas un module de contenu. C'est votre point de contrôle. Une évaluation de base pour vérifier que vous avez réellement intégré M4, M5, M6 — avant de passer au Niveau 3.

Le Niveau 3, c'est le niveau des power users : créer ses propres assistants, construire ses bases de connaissance, explorer les connecteurs avancés.

Le M7 est votre accès au Niveau 3. Prenez 10 minutes pour le passer — et si votre score est en dessous de 70%, revenez sur les modules concernés. Ce n'est pas une sanction : c'est une garantie que la suite sera utile."

---

## Notes de production

- **Ton** : pratique et concret — ce module est moins conceptuel que M5, plus outillé
- **Visuels** : captures d'écran ou schémas pour Projects et Artifacts — les apprenants doivent voir à quoi ça ressemble
- **Point fort** : le tableau récapitulatif des 3 outils (Projects/Artifacts/RAG-Skills) — à garder à l'écran 30 secondes
- **À soigner** : l'avertissement RAG (section 4) — éviter de le lire comme une mise en garde anxiogène, le formuler comme une exigence de discipline
- **Lien avec M5** : le cas Marc se retrouve dans la section Artifacts (tableau des usages de la charte) — maintenir la continuité narrative
- **Transition M7** : préparer psychologiquement à l'évaluation — ton bienveillant, pas pressurisant
