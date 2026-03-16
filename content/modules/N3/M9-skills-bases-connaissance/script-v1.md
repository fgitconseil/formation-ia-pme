# M9 — Skills et bases de connaissance
> Niveau : 🔵 N3 · Format : Vidéo · Durée cible : ~20 min
> Version script : v1 · Statut : BROUILLON

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
2. Qu'est-ce qu'un Skill — et ce qu'il n'est pas                   (4 min)
3. Structurer ses sources — la qualité avant la quantité           (5 min)
4. Garbage in, garbage out — le risque amplifié                    (4 min)
5. Maintenance et itération — un Skill n'est jamais terminé        (2 min)
6. Clôture + transition M10/M11                                    (3 min)
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

## 2. Qu'est-ce qu'un Skill — et ce qu'il n'est pas (4 min)

**[Slide : titre "Skills — définition précise"]**

"En M6, on a vu les Skills comme des instructions réutilisables. On va aller plus loin.

Un Skill, dans le contexte du Niveau 3, peut avoir deux formes.

**[Slide : Forme 1 — Skill d'instruction]**

La forme 1, c'est le Skill d'instruction. C'est celui du M6.

C'est un ensemble d'instructions sauvegardées qui définissent comment l'IA doit traiter un type de tâche.

Exemple : un Skill 'Compte rendu réunion' qui définit le format, les sections obligatoires, le ton, les éléments à ne jamais supprimer.

Ce Skill ne contient pas de données métier. Il contient des règles de traitement.

**[Slide : Forme 2 — Skill de connaissance]**

La forme 2, c'est le Skill de connaissance.

C'est un Skill qui embarque de la connaissance métier spécifique à votre organisation — les données, pas seulement les règles.

Exemple : un Skill 'Offres commerciales secteur industrie' qui contient vos argumentaires produits, vos grilles tarifaires anonymisées, vos réponses aux objections les plus fréquentes.

La différence : le Skill d'instruction dit à l'IA comment travailler. Le Skill de connaissance lui dit avec quoi travailler.

**[Slide : Ce qu'un Skill n'est pas]**

Un Skill n'est pas :

Une base documentaire brute. Déposer 40 fichiers dans un Skill ne le rend pas intelligent. L'IA a besoin de données structurées, pas de documents empilés.

Un substitut à la vérification humaine. Un Skill de connaissance est aussi fiable que les données qui le constituent. Si vos sources sont contradictoires, le Skill l'est aussi.

Une configuration permanente. Un Skill qui n'est pas maintenu devient une source d'erreurs — comme le problème de la base documentaire dans mon accroche.

**[Slide : comparaison — Skill d'instruction vs Skill de connaissance]**

| Dimension | Skill d'instruction | Skill de connaissance |
|-----------|---------------------|-----------------------|
| Contenu | Règles de traitement | Données métier |
| Maintenance | Rare — quand les règles changent | Régulière — quand les données changent |
| Risque principal | Règles obsolètes | Données contradictoires |
| Exemple d'usage | Format de CR uniforme | Réponses aux objections client |

Vous pouvez combiner les deux dans un même assistant. C'est souvent ce qu'on fait en pratique."

---

## 3. Structurer ses sources — la qualité avant la quantité (5 min)

**[Slide : titre "La règle d'or : une source, une vérité"]**

"Avant d'alimenter un assistant ou un Skill avec vos données, posez-vous cette question :

Pour chaque sujet dans ma base, est-ce qu'il existe exactement une version de référence — et seulement une ?

Si la réponse est non, vous n'êtes pas prêt à alimenter un Skill de connaissance.

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

La règle : votre Skill de connaissance ne contient que des documents actifs.

Principe 3 : granularité adaptée.

Ne mettez pas un document de 80 pages dans un Skill. L'IA ne peut pas le traiter entièrement — elle prendra les premières sections et négligera les suivantes.

Découpez en documents thématiques de 5 à 15 pages maximum.

Principe 4 : méta-information explicite.

Chaque document utilisé dans un Skill doit contenir en en-tête :
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

L'IA peut maintenant aller chercher exactement ce dont elle a besoin, sur le bon sujet, dans la bonne version."

---

## 4. Garbage in, garbage out — le risque amplifié (4 min)

**[Slide : titre "Garbage in, garbage out — pourquoi le risque est différent au N3"]**

"Il y a une expression en informatique : garbage in, garbage out.

Si vous donnez des données de mauvaise qualité à un système, vous obtenez des résultats de mauvaise qualité.

Ce principe s'applique partout. Mais en N3, avec un assistant connecté à une base de connaissance, il a une dimension supplémentaire.

**[Slide : le risque amplifié — 3 mécanismes]**

Mécanisme 1 : l'échelle.

Sans Skill de connaissance, une erreur dans un prompt touche une personne, une fois.

Avec un Skill de connaissance déployé pour une équipe, la même erreur dans votre base documentaire touche toutes les conversations de tous les membres de l'équipe — en continu, jusqu'à ce qu'elle soit détectée.

Mécanisme 2 : la confiance.

Une réponse produite par un assistant personnalisé dispose d'un niveau de confiance plus élevé qu'une réponse produite par une IA généraliste. Vous avez configuré cet assistant — vos collègues lui font davantage confiance.

Cette confiance accrue rend les erreurs plus dangereuses, pas moins.

Mécanisme 3 : la réponse cohérente.

L'IA produit des réponses cohérentes même à partir de données contradictoires. Elle ne dit pas 'vos données sont incohérentes'. Elle choisit — souvent sans signal d'alerte.

**[Slide : le lien avec la discipline 🟡]**

Le M5 vous a appris que le niveau 🟡 est indispensable avant de diffuser.

En N3, cette règle s'applique à vos sources, pas seulement à vos outputs.

Avant d'intégrer un document dans un Skill de connaissance, appliquez le niveau 🟡 :

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

La plupart des organisations ne sont pas prêtes à déployer un Skill de connaissance la première semaine.

Pas parce que la technologie est complexe. Parce que leur base documentaire n'est pas structurée.

C'est la bonne nouvelle : le travail de structuration que vous faites pour alimenter un Skill améliore aussi vos processus documentaires internes — indépendamment de l'IA.

Ce travail vaut dans les deux cas."

---

## 5. Maintenance et itération — un Skill n'est jamais terminé (2 min)

**[Slide : titre "Un Skill, ça s'entretient"]**

"Un dernier point souvent négligé.

Un Skill de connaissance ne se configure pas en une fois. Il vit dans le temps.

Vos procédures changent. Vos offres évoluent. Votre convention collective est renégociée. Un accord d'entreprise remplace un autre.

Si votre Skill n'est pas mis à jour, il devient progressivement inexact. Et il reste 'fiable en apparence' — parce que les réponses continuent à être cohérentes, même si elles s'éloignent de la réalité.

**[Slide : les 3 pratiques de maintenance]**

Pratique 1 : nommer un responsable par Skill.

Chaque Skill de connaissance doit avoir un propriétaire — la personne qui reçoit une alerte quand un document source est mis à jour.

Pratique 2 : programmer des révisions régulières.

Tous les 3 à 6 mois selon la fréquence de changement de vos données : vérifier que chaque document source est encore en vigueur.

Pratique 3 : traiter les anomalies signalées.

Quand un utilisateur signale une réponse bizarre ou incorrecte de l'assistant, c'est une anomalie à investiguer dans les sources — pas seulement dans la formulation du prompt."

---

## 6. Clôture + transition M10/M11 (3 min)

**[Retour caméra — ton direct]**

"Récapitulez ce que vous avez construit au Niveau 3.

M8 : vous savez configurer un assistant personnalisé avec les règles qui s'appliquent à votre contexte.

M9 : vous savez alimenter cet assistant avec une connaissance métier structurée, fiable et maintenue.

Ensemble, ces deux modules vous donnent les outils pour construire un assistant qui travaille dans votre réalité — pas dans une réalité générique.

La prochaine étape du Niveau 3 — M10 — est optionnelle et conditionnelle.

M10 couvre les MCP : les Model Context Protocols. Ce sont les connecteurs qui permettent à l'IA d'interagir directement avec vos outils existants — votre CRM, votre ERP, vos bases de données, vos systèmes internes.

C'est le niveau de l'agent IA opérationnel — celui qui ne répond plus seulement à des questions mais qui peut déclencher des actions dans vos systèmes.

Ce niveau requiert des compétences techniques et une architecture IT adaptée. Il est présenté en M10 comme une introduction, pas comme un tutoriel d'implémentation.

Si M10 n'est pas dans votre périmètre V1, passez directement à M11 — le Baseline N3.

M11 vous donnera les outils pour évaluer votre niveau de maturité global, construire votre plan de déploiement IA, et passer de l'utilisateur avancé au référent IA de votre organisation."

---

## Notes de production

- **Ton** : expert à expert — sans simplification excessive. Le public N3 a validé deux niveaux complets.
- **L'accroche** : la base documentaire qui échoue — c'est une histoire vraie que beaucoup d'organisations ont vécue ou sont en train de vivre. Jouer l'empathie, pas le 'j'avais prévenu'.
- **Visuels** : le tableau Skill d'instruction vs Skill de connaissance (section 2) — à garder à l'écran 30 secondes. C'est la distinction centrale du module.
- **Point fort** : la section 4 (garbage in, garbage out) — les 3 mécanismes du risque amplifié. C'est ce que les apprenants vont partager avec leurs équipes.
- **Lien avec M5** : le niveau 🟡 sur les sources (section 4) — rappeler que la discipline 🟡 ne s'applique pas qu'aux outputs, mais aussi aux données d'entrée.
- **À soigner** : ne pas présenter la maintenance (section 5) comme contraignante — la formuler comme ce qui transforme un projet en infrastructure.
- **Transition M10/M11** : expliquer clairement que M10 est optionnel — sans culpabiliser les apprenants qui ne vont pas jusqu'aux MCP.
