# M7 — Itérer sur ses prompts — Atelier Niveau 2
> Niveau : 🟡 N2 · Format : Atelier autonome · Durée : ~20 min
> Version : v2 · Statut : BROUILLON
> Corrections v2 : Thinking + Discernement + terminologie Instructions de Projet (NotebookLM)

---

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Compétences cibles | C3, C4 — Maîtriser les types de prompts et appliquer la progression 🟢🟡🔵🟣 |
| Public | Employés ayant validé M4, M5, M6 |
| Prérequis | M4 — Les 4 types de prompts · M5 — La méthode par niveaux · M6 — Capitaliser sa connaissance |
| Module suivant | M8 — Créer son assistant personnalisé (Niveau 3) |
| Format | Atelier autonome — pas de vidéo. Lire, compléter, pratiquer. |

---

## Introduction — Ce que vous avez construit

Vous avez terminé le Niveau 2.

M4 — vous savez quel type de prompt utiliser selon votre intention : produire, explorer, structurer, vérifier.
M5 — vous savez dans quel ordre progresser : 🟢 puis 🟡 puis 🔵 — jamais à l'envers.
M6 — vous savez capitaliser : Projects, Artifacts, Instructions de Projet pour ne plus repartir de zéro.

Ce n'est pas un cours de plus. C'est votre point de contrôle.

Cet atelier a trois objectifs :

1. Construire votre bibliothèque personnelle de prompts — pour ne plus jamais improviser
2. Pratiquer l'itération structurée — améliorer un prompt en 3 cycles
3. Évaluer votre niveau — êtes-vous prêt pour le Niveau 3 ?

Prenez 20 minutes. Travaillez avec de vrais documents. Le résultat vous appartient.

---

## Partie 1 — Votre bibliothèque de prompts (8 min)

### Pourquoi une bibliothèque ?

Un prompt écrit à la volée et abandonné après usage, c'est un investissement perdu.

Un prompt sauvegardé, versionné, amélioré au fil des usages, c'est un outil professionnel.

Les équipes les plus efficaces dans l'usage de l'IA ne sont pas celles qui ont le meilleur talent pour écrire des prompts. Ce sont celles qui ont une bibliothèque de prompts éprouvés qu'elles utilisent, améliorent et partagent.

### De la bibliothèque aux Instructions de Projet

Une bibliothèque statique — un fichier texte ou un document partagé — est un bon point de départ. Mais sur claude.ai, les Instructions de Projet représentent l'évolution naturelle de cette bibliothèque.

Au lieu de copier-coller vos prompts éprouvés à chaque session, vous les intégrez une fois dans les Instructions du Project correspondant. Ils s'appliquent alors automatiquement à chaque conversation dans cet espace — sans manipulation manuelle.

C'est le passage d'une liste de référence à un contexte permanent et partageable.

Pour les équipes : un Project configuré avec les Instructions de Projet de votre organisation, c'est votre bibliothèque collective rendue active et disponible pour tous les membres du Project. Premier pas concret vers 🟣 Industrialiser.

### Le template de fiche prompt

Pour chaque prompt que vous souhaitez capitaliser, remplissez cette fiche :

```
Nom du prompt      : [Nom court et descriptif]
Type               : [Production / Exploration / Structuration / Vérification]
Niveau 🟢🟡🔵🟣    : [À quel niveau de la progression ce prompt intervient ?]
Intention          : [Ce que vous voulez obtenir en une phrase]
Gabarit            : [Le prompt lui-même — avec les champs à remplir]
Exemple d'usage    : [Un cas concret dans lequel vous l'avez utilisé]
Résultat obtenu    : [Bref : ce que l'IA a produit]
Version            : v1
Amélioration notée : [Ce que vous avez appris et qui peut améliorer ce prompt]
Intégré en Instructions de Projet : [Oui / Non / À faire]
```

### Exercice — Ficher vos 2 meilleurs prompts

Identifiez les 2 prompts que vous avez le plus utilisés depuis M4.

Si vous n'en avez pas encore utilisé régulièrement, choisissez 2 gabarits du cours (M4 ou M5) et complétez leur fiche avec un exemple hypothétique de votre activité.

**Fiche prompt 1**

| Champ | Votre contenu |
|-------|--------------|
| Nom du prompt | |
| Type (M4) | |
| Niveau 🟢🟡🔵🟣 | |
| Intention | |
| Gabarit | |
| Exemple d'usage | |
| Résultat obtenu | |
| Amélioration notée | |
| Intégré en Instructions de Projet | |

**Fiche prompt 2**

| Champ | Votre contenu |
|-------|--------------|
| Nom du prompt | |
| Type (M4) | |
| Niveau 🟢🟡🔵🟣 | |
| Intention | |
| Gabarit | |
| Exemple d'usage | |
| Résultat obtenu | |
| Amélioration notée | |
| Intégré en Instructions de Projet | |

---

## Partie 2 — Exercice d'itération en 3 cycles (8 min)

### Pourquoi itérer ?

Un bon prompt est rarement bon dès la première version.

Le niveau 🔵 (Optimiser) n'est pas une qualité que vous obtenez en formulant parfaitement votre demande dès le départ. C'est le résultat d'une boucle d'amélioration structurée.

Chaque cycle vous apprend quelque chose que vous ne pouviez pas savoir avant.

### Les 3 critères d'amélioration

À chaque cycle, posez-vous ces 3 questions :

**Cycle 1 → Clarté de l'intention**
- Le résultat correspond-il à ce que je voulais obtenir ?
- Si non : l'intention était-elle assez précise dans le prompt ?

**Cycle 2 → Qualité du contexte**
- L'IA avait-elle toutes les informations nécessaires ?
- Ai-je fourni le rôle, le public cible, les contraintes de format ?

**Cycle 3 → Niveau de la méthode**
- Ai-je utilisé le bon type de prompt (M4) ?
- Ai-je appliqué le bon niveau 🟢🟡🔵 (M5) ?
- Ai-je demandé à l'IA de penser étape par étape avant de répondre — et de critiquer son propre plan avant de donner sa réponse finale ?

Ce troisième point est souvent le levier le plus puissant. Formulation concrète à ajouter dans vos prompts d'analyse ou de vérification :

> "Avant de répondre, expose ton raisonnement, puis critique-le avant de donner ta réponse finale."

Cette instruction active ce qu'on appelle le Chain of Thought — l'IA décompose sa réflexion, détecte ses propres incohérences, et produit une réponse plus robuste. C'est particulièrement efficace sur les tâches d'exploration et de vérification (M4).

### Exercice

**Étape 1 — Choisir votre point de départ**

Prenez un livrable réel que vous devez produire prochainement.
Ou utilisez ce cas : "Je dois préparer le compte rendu de ma dernière réunion d'équipe."

**Étape 2 — Cycle 1 : première version**

Rédigez votre prompt spontanément, sans vous appuyer sur les gabarits. Envoyez-le.

Notez : ___ / 3 critères satisfaits

**Étape 3 — Cycle 2 : améliorer l'intention et le contexte**

Reprenez votre prompt. Appliquez le gabarit de structuration ou de production du M4.
Ajoutez le rôle, le public, le format attendu.
Envoyez et comparez.

Notez : ___ / 3 critères satisfaits

**Étape 4 — Cycle 3 : appliquer la méthode 🟢→🟡 + thinking**

Vérifiez que vous êtes au bon niveau. Si vous avez commencé à 🟡 sans avoir fait 🟢, reprenez dans l'ordre.
Ajoutez la formulation "Avant de répondre, expose ton raisonnement, puis critique-le."
Envoyez la version finale.

Notez : ___ / 3 critères satisfaits

**Bilan du cycle**

La qualité a-t-elle progressé à chaque cycle ? ___
Quel critère a eu le plus d'impact sur la qualité du résultat ? ___
La demande de raisonnement explicite (Cycle 3) a-t-elle changé la qualité ? ___

---

## Partie 3 — Checklist de passage au Niveau 3 (4 min)

### Ce que le Niveau 3 requiert

Le Niveau 3, c'est le niveau des power users et des référents IA.
Il couvre la création d'assistants personnalisés (M8), les bases de connaissance et Instructions de Projet avancées (M9), et l'introduction aux connecteurs et agents (M10).

Ces modules supposent que les bases N2 sont solides. Sans elles, le Niveau 3 crée plus de risques qu'il n'en résout.

Cochez honnêtement chaque point.

### Les 9 points de la checklist

- [ ] **1. Types de prompts** — Je sais distinguer spontanément un prompt de production d'un prompt d'exploration, de structuration, de vérification. Je n'ai pas besoin de relire M4 pour faire la différence.

- [ ] **2. Niveau 🟢 appliqué** — J'ai utilisé au moins une fois un prompt de structuration avec l'instruction "Ne supprime aucune information + section Points à clarifier" sur un vrai document.

- [ ] **3. Niveau 🟡 appliqué** — J'ai utilisé au moins une fois un prompt de vérification avec citations explicites et signalement des absences sur un contenu sensible.

- [ ] **4. Progression respectée** — Je ne saute pas le niveau 🟡 même sous pression de deadline. Je comprends pourquoi c'est une barrière de sécurité, pas une case à cocher.

- [ ] **5. Project configuré** — J'ai créé au moins un Project pour un périmètre de travail réel. Il contient des Instructions de Projet et au moins un document de référence.

- [ ] **6. Artifact demandé** — J'ai obtenu au moins un Artifact directement exploitable sans retraitement manuel (tableau, checklist, document formaté).

- [ ] **7. Bibliothèque démarrée** — J'ai au moins 2 prompts fichés dans ma bibliothèque personnelle avec gabarit et exemple d'usage.

- [ ] **8. Itération pratiquée** — J'ai amélioré au moins un prompt sur au moins 2 cycles en utilisant les critères de la Partie 2 de cet atelier.

- [ ] **9. Discernement de délégation** — Je sais identifier quelles tâches bénéficient d'un assistant permanent (Instructions de Projet, M8) vs quelles tâches se traitent mieux en conversation ponctuelle sans configuration préalable.

### Lecture du résultat

**9/9 coché** → Vous êtes prêt pour le Niveau 3. Passez à M8.

**7-8/9 coché** → Vous êtes prêt avec une vigilance à maintenir. Notez les 1-2 points non cochés et revenez les cocher après vos prochaines séances de travail.

**6/9 ou moins** → Revenez sur les modules correspondant aux points non cochés avant de passer au Niveau 3. Ce n'est pas une sanction : le Niveau 3 amplifie les acquis N2. Si les bases manquent, l'amplification est celle des erreurs.

---

## Notes pour le formateur / référent IA

- Cet atelier se fait en autonomie — prévoir 20-25 min en session individuelle ou en binôme
- La Partie 2 (itération) est la plus formatrice — insister pour que les apprenants travaillent sur de vrais documents, pas des exemples fictifs
- **Cycle 3 / Thinking** : si possible, montrer côte à côte une réponse sans la formulation "expose ton raisonnement" et une avec — l'écart est souvent saisissant sur les prompts d'analyse complexe
- La checklist Partie 3 est auto-évaluée — elle est un outil de conscience, pas un examen. L'honnêteté est plus utile que le score parfait.
- **Point 9 / Discernement** : encourager les apprenants à donner 1 exemple concret de chaque côté (tâche → assistant permanent / tâche → conversation ponctuelle) avant de cocher
- Les fiches prompt Partie 1 peuvent être partagées en équipe et chargées dans les Instructions de Projet d'un Project partagé — c'est le premier pas concret vers 🟣 (Industrialiser)
