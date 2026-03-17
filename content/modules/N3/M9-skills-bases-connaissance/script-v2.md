# M9 — Projets et bases de connaissance
> Niveau : 🔵 N3 · Format : Vidéo · Durée cible : ~20 min
> Version script : v2 · Statut : BROUILLON
> Corrections v2 : terminologie Projets/Instructions (NotebookLM) + gabarit copiable + Hooks + exemple MCP

---

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Compétence cible | C5, C6 — Sécuriser les données et alimenter un assistant avec une connaissance métier structurée |
| Public | Power users · Référents IA · Managers ayant validé M8 |
| Prérequis | M8 — Créer son assistant personnalisé |
| Module suivant | M10 — Introduction aux MCP (conditionnel) ou M11 — Baseline N3 |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche — la base documentaire interne qui n'est jamais à jour  (2 min)
2. Qu'est-ce qu'un Projet — et ce qu'il n'est pas                   (5 min)
3. Structurer ses sources — la qualité avant la quantité            (5 min)
4. Garbage in, garbage out — le risque amplifié                     (4 min)
5. Maintenance et itération — un Projet n'est jamais terminé        (2 min)
6. Clôture + transition M10/M11                                     (2 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Je vais vous décrire un problème que j'entends souvent dans les PME.

Une entreprise a passé 3 ans à documenter ses processus. Manuel qualité. Procédures opérationnelles. Fiches de poste. Guides d'intégration. Convention collective annotée. Tout est là.

Un jour, un responsable décide de connecter un assistant IA à cette documentation.

Objectif : que les managers puissent poser des questions directement à l'IA au lieu de chercher dans 40 documents.

Résultat après 3 semaines d'usage :

L'IA mélange deux versions d'une même procédure — la v2 et la v4 coexistent dans la base.
Elle cite un texte d'accord d'entreprise signé en 2019 que personne n'a mis à jour depuis.
Elle confond la procédure de validation des congés de l'équipe commerciale avec celle du service technique.

Les managers ont moins confiance dans l'IA qu'avant la mise en place de l'assistant.

Ce n'est pas un problème d'IA. C'est un problème de données.

Ce module va vous apprendre à construire une base de connaissance que l'IA peut utiliser correctement — pas juste une base documentaire que vous avez stockée quelque part."

---

## 2. Qu'est-ce qu'un Projet — et ce qu'il n'est pas (5 min)

**[Slide : titre "Les Projets claude.ai — définition précise"]**

"En M6, on a vu comment créer un espace de travail persistant dans l'interface claude.ai. On va aller plus loin.

**[Slide : point de démarcation]**

Avant tout, une précision importante.

Ce que nous configurons ici dans l'interface claude.ai s'appelle des Projets. Ne les confondez pas avec les 'Skills' de Claude Code — des fichiers techniques pour développeurs utilisant le terminal. Ce module traite exclusivement des Projets de l'interface web. Si vous entendez 'Skills' dans un contexte technique ou développeur, c'est un système entièrement différent.

**[Slide : Forme 1 — Instructions de Projet]**

Un Projet, dans le contexte du Niveau 3, peut embarquer deux types de contenu.

La première forme, ce sont les Instructions de Projet.

Ce sont les règles sauvegardées dans votre Projet qui définissent comment l'IA doit traiter un type de tâche.

Exemple : des Instructions de Projet 'Compte rendu réunion' qui définissent le format, les sections obligatoires, le ton, les éléments à ne jamais supprimer.

Ces instructions ne contiennent pas de données métier. Elles contiennent des règles de traitement.

**[Slide : gabarit Instructions de Projet — copiable]**

Pour rédiger des Instructions de Projet efficaces, utilisez ce gabarit à 5 champs :

```
Rôle :            [Qui est l'IA dans ce contexte — son expertise, son positionnement]
Contexte :        [Pour quelle organisation, quelle équipe, quel périmètre métier]
Périmètre :       [Ce que l'IA peut et ne peut pas traiter dans ce Projet]
Format de sortie :[Structure, longueur, ton attendus pour chaque réponse]
Contraintes :     [Ce qui est interdit, les données sensibles à ne jamais citer, les formulations à éviter]
```

Plus ces champs sont précis, moins l'IA doit interpréter — et moins elle se trompe.

**[Slide : Forme 2 — Base de connaissance du Projet]**

La deuxième configuration, c'est la Base de connaissance du Projet.

C'est votre Projet enrichi avec des données métier spécifiques à votre organisation — pas seulement des règles de traitement, mais les données elles-mêmes.

Exemple : une Base de connaissance 'Offres commerciales secteur industrie' qui contient vos argumentaires produits, vos grilles tarifaires anonymisées, vos réponses aux objections les plus fréquentes.

La distinction fondamentale : les Instructions de Projet disent à l'IA comment travailler. La Base de connaissance du Projet lui dit avec quoi travailler.

**[Slide : Ce qu'un Projet n'est pas]**

Un Projet n'est pas :

Une base documentaire brute. Déposer 40 fichiers dans un Projet ne le rend pas intelligent. L'IA a besoin de données structurées, pas de documents empilés.

Un substitut à la vérification humaine. Une Base de connaissance est aussi fiable que les données qui la constituent. Si vos sources sont contradictoires, le Projet l'est aussi.

Une configuration permanente. Un Projet qui n'est pas maintenu devient une source d'erreurs — exactement comme dans mon accroche.

**[Slide : tableau comparatif]**

| Dimension | Instructions de Projet | Base de connaissance du Projet |
|-----------|------------------------|-------------------------------|
| Contenu | Règles de traitement | Données métier |
| Maintenance | Rare — quand les règles changent | Régulière — quand les données changent |
| Risque principal | Règles obsolètes | Données contradictoires |
| Exemple d'usage | Format de CR uniforme | Réponses aux objections client |

Vous pouvez combiner les deux dans un même assistant. C'est souvent ce qu'on fait en pratique.

**[Slide : pour aller plus loin — les Hooks]**

Une dernière notion à connaître pour votre culture N3 — les Hooks.

Les Instructions de Projet que vous venez de configurer sont des conseils : l'IA les respecte dans la grande majorité des cas, mais elle peut les nuancer selon le contexte.

Au-delà des Projets — la mémoire, des conseils — il existe un niveau supérieur de contrôle : les Hooks. Ce sont des garde-fous déterministes qui s'exécutent automatiquement avant ou après chaque action de l'IA. Là où une Instruction peut être nuancée, un Hook est absolu. C'est la différence entre le Conseil et la Loi.

Ce niveau relève des équipes IT et de Claude Code. Pour un référent IA, l'essentiel est de savoir que ce mécanisme existe — et de le solliciter quand une règle doit être inviolable."

---

## 3. Structurer ses sources — la qualité avant la quantité (5 min)

**[Slide : titre "La règle d'or : une source, une vérité"]**

"Avant d'alimenter un assistant ou un Projet avec vos données, posez-vous cette question :

Pour chaque sujet dans ma base, est-ce qu'il existe exactement une version de référence — et seulement une ?

Si la réponse est non, vous n'êtes pas prêt à alimenter une Base de connaissance du Projet.

**[Slide : le problème des versions multiples]**

Le problème le plus courant dans les bases documentaires des PME : les versions multiples non hiérarchisées.

Votre procédure de traitement des réclamations clients a été rédigée en 2021. Mise à jour en 2023. Adaptée par le service commercial en 2024 sans supprimer la version 2023.

L'IA ne sait pas quelle version fait foi. Elle peut en mélanger deux — et vous produire une réponse cohérente, bien formulée, et partiellement fausse.

La discipline : une procédure = un fichier actif + les versions archivées clairement séparées.

**[Slide : les 4 principes de structuration des sources]**

Quatre principes pour structurer une base utilisable par l'IA.

Principe 1 : nommage sans ambiguïté.

Chaque document doit avoir un nom qui dit ce qu'il est, pour qui, et quand.

Format recommandé : `[sujet]-[périmètre]-v[version]-[AAAA-MM].md`

Exemples :
- `conges-payes-service-commercial-v3-2025-01.md` ✅
- `procedure-conges-v3.docx` ❌ (quel service ? quelle date ?)

Principe 2 : séparation actifs / archivés.

Un document actif est celui qui fait foi aujourd'hui.
Un document archivé est conservé pour traçabilité mais jamais utilisé comme référence.

La règle : votre Base de connaissance ne contient que des documents actifs.

Principe 3 : granularité adaptée.

Ne mettez pas un document de 80 pages dans un Projet. L'IA ne peut pas le traiter entièrement — elle prendra les premières sections et négligera les suivantes.

Découpez en documents thématiques de 5 à 15 pages maximum.

Principe 4 : méta-information explicite.

Chaque document utilisé dans un Projet doit contenir en en-tête :
- Le périmètre d'application (quel service, quel cas)
- La date de dernière mise à jour
- Le responsable de la mise à jour

**[Slide : exemple — avant / après structuration]**

Avant structuration : 'Procédure RH — tout.pdf' (85 pages, dernière modif 2022, pas de version)

Après structuration :
```
rh-onboarding-tous-services-v4-2025-02.md
rh-conges-payés-cdi-v3-2025-01.md
rh-télétravail-accord-2024-06.md
rh-formation-plan-annuel-v2-2025-03.md
```

*[Exemple illustratif — la structure et les noms de fichiers sont donnés à titre de modèle. Adaptez selon votre réalité documentaire.]*

L'IA peut maintenant aller chercher exactement ce dont elle a besoin, sur le bon sujet, dans la bonne version."

---

## 4. Garbage in, garbage out — le risque amplifié (4 min)

**[Slide : titre "Garbage in, garbage out — pourquoi le risque est différent au N3"]**

"Il y a une expression en informatique : garbage in, garbage out — ce qu'on pourrait traduire par : données de mauvaise qualité en entrée, résultats de mauvaise qualité en sortie.

Ce principe s'applique partout. Mais en N3, avec un assistant connecté à une Base de connaissance, il a une dimension supplémentaire.

**[Slide : le risque amplifié — 3 mécanismes]**

Mécanisme 1 : l'échelle.

Sans Base de connaissance, une erreur dans un prompt touche une personne, une fois.

Avec une Base de connaissance du Projet déployée pour une équipe, la même erreur dans votre base documentaire touche toutes les conversations de tous les membres de l'équipe — en continu, jusqu'à ce qu'elle soit détectée.

Mécanisme 2 : la confiance.

Une réponse produite par un assistant personnalisé dispose d'un niveau de confiance plus élevé qu'une réponse produite par une IA généraliste. Vous avez configuré cet assistant — vos collègues lui font davantage confiance.

Cette confiance accrue rend les erreurs plus dangereuses, pas moins.

Mécanisme 3 : la réponse cohérente.

L'IA produit des réponses cohérentes même à partir de données contradictoires. Elle ne dit pas 'vos données sont incohérentes'. Elle choisit — souvent sans signal d'alerte.

**[Slide : le lien avec la discipline 🟡]**

Le M5 vous a appris que le niveau 🟡 est indispensable avant de diffuser.

En N3, cette règle s'applique à vos sources, pas seulement à vos outputs.

Avant d'intégrer un document dans une Base de connaissance, appliquez le niveau 🟡 :

```
Vérifie ce document :
- Y a-t-il des affirmations sans date de mise à jour ?
- Y a-t-il des références à d'autres documents ou versions ?
- Y a-t-il des sections qui semblent contradictoires ?
- Identifie toute zone d'ambiguïté ou d'interprétation possible
```

Ce n'est pas un luxe. C'est la condition pour que votre assistant soit fiable.

**[Pause — ton direct à caméra]**

Je vais être direct.

La plupart des organisations ne sont pas prêtes à déployer une Base de connaissance la première semaine.

Pas parce que la technologie est complexe. Parce que leur base documentaire n'est pas structurée.

C'est la bonne nouvelle : le travail de structuration que vous faites pour alimenter un Projet améliore aussi vos processus documentaires internes — indépendamment de l'IA.

Et une précision importante : même des données bien structurées ne suffisent pas à garantir des réponses parfaites. L'IA peut mal interpréter une source correcte si le contexte est saturé, si deux documents se chevauchent partiellement, ou si la question pose un problème d'interprétation que le document ne tranche pas. Les données sont nécessaires — elles ne sont pas suffisantes. La vérification humaine reste indispensable sur les outputs critiques."

---

## 5. Maintenance et itération — un Projet n'est jamais terminé (2 min)

**[Slide : titre "Un Projet, ça s'entretient"]**

"Un dernier point souvent négligé.

Une Base de connaissance ne se configure pas en une fois. Elle vit dans le temps.

Vos procédures changent. Vos offres évoluent. Votre convention collective est renégociée. Un accord d'entreprise remplace un autre.

Si votre Base de connaissance n'est pas mise à jour, elle devient progressivement inexacte. Et elle reste 'fiable en apparence' — parce que les réponses continuent à être cohérentes, même si elles s'éloignent de la réalité.

**[Slide : les 3 pratiques de maintenance]**

Pratique 1 : nommer un responsable par Projet.

Chaque Base de connaissance doit avoir un propriétaire — la personne qui reçoit une alerte quand un document source est mis à jour.

Pratique 2 : programmer des révisions régulières.

Tous les 3 à 6 mois selon la fréquence de changement de vos données : vérifier que chaque document source est encore en vigueur.

Pratique 3 : traiter les anomalies signalées.

Quand un utilisateur signale une réponse bizarre ou incorrecte de l'assistant, c'est une anomalie à investiguer dans les sources — pas seulement dans la formulation du prompt.

**[Slide : technique — Gestion active du contexte]**

Pratique 4 : gérer activement le contexte lors des sessions longues.

Lors de sessions longues sur une Base de connaissance dense, l'IA peut perdre le fil de vos Instructions de Projet. Technique recommandée : toutes les 10 à 15 échanges, demandez : 'Résume les instructions de ce Projet et ce que tu as traité jusqu'ici.'

Cela recentre l'IA sans perdre le travail effectué. C'est la différence entre un assistant qui dérive et un assistant qui maintient le cap."

---

## 6. Clôture + transition M10/M11 (2 min)

**[Retour caméra — ton direct]**

"Récapitulez ce que vous avez construit au Niveau 3.

M8 : vous savez configurer un assistant personnalisé avec les règles qui s'appliquent à votre contexte.

M9 : vous savez alimenter cet assistant avec une connaissance métier structurée, fiable et maintenue.

Ensemble, ces deux modules vous donnent les outils pour construire un assistant qui travaille dans votre réalité — pas dans une réalité générique.

La prochaine étape du Niveau 3 — M10 — est optionnelle et conditionnelle.

M10 couvre les MCP : les Model Context Protocols. Ce sont les connecteurs qui permettent à l'IA d'interagir directement avec vos outils existants. Concrètement, un MCP permet à Claude de lire vos données dans Salesforce ou d'écrire un ticket dans Jira sans copier-coller. Ce sont vos systèmes qui deviennent les sources de données de l'IA.

Ce niveau requiert des compétences techniques et une architecture IT adaptée. En tant que manager ou référent IA, votre rôle est celui du prescripteur de besoins : vous définissez ce dont votre équipe a besoin, les cas d'usage à couvrir, les systèmes à connecter. C'est votre service IT ou votre prestataire technique qui construit l'intégration. M10 vous donne le vocabulaire et les critères pour piloter cette conversation — pas pour faire l'implémentation vous-même.

Si M10 n'est pas dans votre périmètre V1, passez directement à M11 — le Baseline N3.

M11 vous donnera les outils pour évaluer votre niveau de maturité global, construire votre plan de déploiement IA, et passer de l'utilisateur avancé au référent IA de votre organisation."

---

## Notes de production

- **Ton** : expert à expert — sans simplification excessive. Le public N3 a validé deux niveaux complets.
- **Terminologie v2** : "Projets" et "Instructions de Projet" remplacent "Skills" partout — cohérence avec l'interface claude.ai
- **L'accroche** : la base documentaire qui échoue — jouer l'empathie, pas le 'j'avais prévenu'
- **Visuels** : le tableau Instructions vs Base de connaissance (section 2) + le gabarit 5 champs à l'écran 30 secondes
- **Point fort** : la section 4 (garbage in, garbage out) — les 3 mécanismes du risque amplifié
- **Hooks** : mentionner brièvement, ne pas développer — c'est une notion de culture N3, pas un mode opératoire
- **Transition M10** : insister sur le rôle prescripteur du manager — clarifier que M10 ≠ tutoriel d'implémentation
- **À soigner** : la section 5 (maintenance) — la formuler comme ce qui transforme un projet en infrastructure, pas comme une contrainte
