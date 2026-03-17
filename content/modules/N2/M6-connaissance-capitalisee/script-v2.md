# M6 — Capitaliser sa connaissance
> Niveau : 🟡 N2 · Format : Vidéo · Durée cible : ~20 min
> Version script : v2 · Statut : BROUILLON
> Corrections v2 : terminologie Instructions de Projet + 2 exemples extension durée (NotebookLM)

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
1. Accroche — le collaborateur qui re-explique le contexte   (2 min)
2. Projects — créer un espace de travail contextuel          (4 min)
3. Artifacts — demander un livrable, pas une réponse         (5 min)
4. RAG et Instructions de Projet — donner de la connaissance (6 min)
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

Ce module couvre trois de ces outils : les Projects, les Artifacts, et les Instructions de Projet. Et deux exemples concrets pour que vous voyiez exactement comment ils s'articulent dans un usage professionnel réel."

---

## 2. Projects — créer un espace de travail contextuel (4 min)

**[Slide : titre « Projects — l'espace de travail persistant »]**

"Le premier outil, c'est les Projects.

Un Project dans Claude, c'est un espace de travail dédié à un sujet ou une mission précise. Tout ce que vous y mettez — documents, instructions, historique — reste accessible d'une session à l'autre.

**[Slide : ce que vous pouvez mettre dans un Project]**

Dans un Project, vous pouvez stocker trois types d'éléments :

Des instructions permanentes. Ce sont vos règles de travail : le ton à adopter, les formulations à éviter, les contraintes internes spécifiques à votre organisation.

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
- Un tableau de bord interactif en HTML ou React

La différence avec une réponse classique : l'Artifact est un objet autonome — pas une explication.

**[Slide : comment demander un Artifact]**

Pour demander un Artifact, la formulation change.

Au lieu de : 'Explique-moi comment organiser une réunion hebdomadaire'

Vous écrivez : 'Produis une checklist de préparation de réunion hebdomadaire en 3 sections, format Markdown, que je peux télécharger et partager directement avec mon équipe.'

La différence est dans l'intention : vous demandez à l'IA de produire un objet, pas de vous répondre.

**[Slide : exemple étendu — tableau de bord Artifact]**

Voici un exemple qui montre jusqu'où peut aller un Artifact.

Contexte : vous avez des données de ventes mensuelles pour 5 familles de produits. Vous en avez besoin pour une réunion de pilotage — pas sous forme de tableau texte, mais sous forme d'un outil que votre équipe peut utiliser directement à l'écran.

**[Gabarit — à copier]**

```
Rôle : Expert en data visualization pour dirigeants PME
Objectif : Créer un tableau de bord de pilotage commercial
Données : [Coller vos données de ventes — anonymisées si besoin]
Format : Artifact React (ou HTML simple si React indisponible)
         — Affichage des ventes par famille de produits
         — Filtre par période (mois / trimestre / année)
         — Indicateurs : CA total · évolution vs période précédente · top 3 produits
Contraintes : Interface lisible sur écran 15 pouces en salle de réunion
              Couleurs sobres (pas de rouge/vert uniquement — accessibilité)
              Aucune donnée client visible dans le rendu final
```

Résultat : un tableau de bord interactif que vous pouvez ouvrir directement dans le navigateur, partager en lien, ou intégrer dans une présentation. Sans développeur. Sans outil de BI dédié.

C'est là qu'un Artifact change vraiment la nature du livrable. Vous n'obtenez plus un texte qui décrit un tableau de bord — vous obtenez le tableau de bord.

**[Slide : règle de l'Artifact]**

La règle de l'Artifact : si vous allez retravailler manuellement la réponse avant de l'utiliser, demandez directement le livrable final.

Demandez toujours : 'Quel format sera directement exploitable sans retraitement ?'
Puis demandez ce format."

---

## 4. RAG et Instructions de Projet — donner de la connaissance à l'IA (6 min)

**[Slide : titre « RAG et Instructions de Projet — l'IA qui connaît votre métier »]**

"On vient de voir comment organiser le contexte de travail avec les Projects, et comment demander des livrables avec les Artifacts.

Il y a un troisième axe : donner à l'IA une connaissance métier qu'elle n'a pas par défaut.

**[Slide : le problème de la connaissance par défaut]**

Un LLM entraîné sur des données génériques ne connaît pas :

- Votre secteur spécifique et ses usages
- Vos documents internes (procédures, offres, contrats types)
- Vos clients, leurs noms, leurs historiques
- Votre vocabulaire maison, vos abréviations, votre culture d'entreprise

Résultat : chaque fois que vous avez besoin d'une réponse ancrée dans votre réalité, vous devez re-fournir les données depuis le début.

Deux approches permettent de changer ça : le RAG et les Instructions de Projet.

**[Slide : RAG — Retrieval-Augmented Generation]**

Le RAG, c'est une architecture technique dans laquelle l'IA est connectée à une base documentaire de votre organisation.

Au lieu de répondre à partir de sa connaissance générale, l'IA va d'abord chercher les documents pertinents dans votre base, puis construire sa réponse à partir de ces documents.

Exemple concret : un assistant RH connecté à votre convention collective, votre règlement intérieur, vos procédures de recrutement. Quand un manager pose une question sur les congés, l'IA répond à partir de votre convention — pas d'une règle générique.

**[Slide : ce que le RAG ne garantit pas]**

Attention — et c'est important :

Le RAG garantit l'accessibilité contextuelle de vos documents. Il ne garantit pas l'exactitude.

Si vos documents sont contradictoires entre eux — plusieurs versions d'une même procédure — l'IA peut mélanger les sources. Si un document est obsolète, l'IA peut citer une règle qui ne s'applique plus.

La discipline 🟡 reste indispensable : plus vos données sont accessibles à l'IA, plus la vérification humaine est critique.

**[Slide : Instructions de Projet — la capitalisation accessible à tous]**

Les Instructions de Projet, c'est plus simple et plus accessible que le RAG pour une PME qui commence.

Dans les paramètres de chaque Project sur claude.ai, vous trouvez un champ 'Instructions du projet'. C'est là que vous écrivez les règles permanentes qui s'appliquent à toutes les conversations de ce Project.

Exemples d'Instructions de Projet :
- 'Rédige toujours en français, avec un ton professionnel sobre. Évite le jargon conseil.'
- 'Notre convention collective est la métallurgie. Cite-la explicitement quand tu réponds à des questions RH.'
- 'Format par défaut : sections numérotées + tableau récapitulatif en fin de réponse.'

Vous créez les instructions une fois. Elles s'appliquent à chaque nouvelle conversation dans ce Project.

**[Slide : exemple étendu — analyse de conformité contractuelle]**

Voici un exemple qui articule les trois outils ensemble.

Contexte : vous gérez une PME de services. Un prestataire vous envoie un nouveau contrat. Vous devez vérifier rapidement s'il respecte votre charte de sécurité interne — sans avoir le temps d'envoyer ça à un avocat pour un premier tri.

Configuration du Project :

Dans le Project 'Contrats prestataires', vous avez chargé :
- Votre charte de sécurité interne (version en vigueur)
- Vos conditions générales d'achat
- Une fiche des 5 clauses à surveiller systématiquement (clause de confidentialité, sous-traitance autorisée, responsabilité en cas d'incident, conditions de résiliation, propriété intellectuelle)

**[Gabarit — à copier]**

```
Rôle : Expert en conformité contractuelle pour PME de services
Objectif : Vérifier si ce contrat prestataire respecte notre charte de sécurité

Étape 1 — Identifier :
Lis le contrat ci-dessous et identifie les clauses qui couvrent (ou ne couvrent pas) :
- Confidentialité des données
- Sous-traitance autorisée
- Responsabilité en cas d'incident
- Conditions de résiliation
- Propriété intellectuelle des livrables

Étape 2 — Comparer :
Pour chaque clause identifiée, compare avec les exigences de notre charte de sécurité
[chargée dans le Project].
Signale explicitement : conforme / non conforme / absent / ambigu.

Étape 3 — Synthèse :
Produis un Artifact — tableau de conformité avec 4 colonnes :
Clause | Présente dans le contrat | Conforme à notre charte | Action recommandée

Règle : Cite les articles du contrat mobilisés.
        Si une exigence de la charte n'est pas couverte, signale-le explicitement.
        Ne prends pas de décision de signature — fournis le diagnostic pour décision humaine.
```

Ce gabarit enchaîne trois tâches : identifier → comparer → synthétiser. C'est ce qu'on appelle du prompt chaining — l'IA traite les tâches dans l'ordre plutôt qu'en une seule passe floue.

Résultat : un tableau de conformité en 5 minutes. Pas un avis juridique — un outil de première lecture pour savoir si ça vaut la peine d'appeler l'avocat.

**[Slide : tableau récapitulatif des 3 outils]**

| Outil | Usage | Avantage |
|-------|-------|----------|
| Projects | Contexte persistant par sujet | Re-explication zéro |
| Artifacts | Livrable structuré direct | Zéro retraitement manuel |
| RAG / Instructions de Projet | Connaissance métier intégrée | Réponses ancrées dans votre réalité |

Ces trois outils fonctionnent ensemble. Un Project bien construit + des Instructions de Projet + des demandes d'Artifact = un flux de travail IA que vous n'avez plus besoin de reconfigurer à chaque session."

---

## 5. Clôture + transition M7 (3 min)

**[Retour caméra — ton direct]**

"Si je résume le chemin parcouru depuis le début du Niveau 2 :

M4 — vous savez quel type de prompt utiliser selon votre intention.
M5 — vous savez dans quel ordre progresser pour ne pas fragiliser vos livrables.
M6 — vous savez comment ne pas repartir de zéro à chaque session.

C'est la différence entre l'usage opportuniste — quand ça marche, tant mieux — et l'usage structuré — un résultat fiable, reproductible, capitalisé.

Les deux exemples de ce module — le tableau de bord et la conformité contractuelle — ne sont pas des démonstrations de technique. Ce sont des illustrations d'un principe : quand vous combinez le bon outil avec le bon gabarit, vous ne produisez plus une réponse. Vous produisez un actif que votre équipe peut réutiliser.

Dans le module suivant — M7 — on va faire le bilan du Niveau 2.

Ce n'est pas un module de contenu. C'est votre point de contrôle. Une évaluation de base pour vérifier que vous avez réellement intégré M4, M5, M6 — avant de passer au Niveau 3.

Le Niveau 3, c'est le niveau des power users : créer ses propres assistants, construire ses bases de connaissance, explorer les connecteurs avancés.

Le M7 est votre accès au Niveau 3. Prenez 10 minutes pour le passer — et si votre score est en dessous de 70%, revenez sur les modules concernés. Ce n'est pas une sanction : c'est une garantie que la suite sera utile."

---

## Notes de production

- **Ton** : pratique et concret — ce module est moins conceptuel que M5, plus outillé
- **Visuels** : captures d'écran ou schémas pour Projects et Artifacts — les apprenants doivent voir à quoi ça ressemble
- **Gabarits** : afficher chaque gabarit en bloc visuel distinct à l'écran avec le titre "[Gabarit — à copier]" — permettre une pause pour que les apprenants puissent les noter ou photographier
- **Exemple tableau de bord** : si possible, montrer un vrai Artifact React à l'écran — même simple, l'effet visuel est fort
- **Exemple conformité** : présenter le prompt chaining comme une méthode en 3 étapes numérotées — afficher à l'écran pendant la lecture
- **Point fort** : le tableau récapitulatif des 3 outils (Projects/Artifacts/RAG-Instructions) — à garder à l'écran 30 secondes
- **À soigner** : l'avertissement RAG — éviter de le lire comme une mise en garde anxiogène, le formuler comme une exigence de discipline
- **Lien avec M5** : le cas Marc se retrouve dans la section Artifacts (tableau des usages de la charte) — maintenir la continuité narrative
- **Transition M7** : préparer psychologiquement à l'évaluation — ton bienveillant, pas pressurisant
