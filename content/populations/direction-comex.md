# Fiche population — Direction / COMEX

> Profil : Dirigeants, DG, membres du comité de direction
> Niveau de départ recommandé : N1
> Mise à jour : 2026-03

---

## 3 cas d'usage prioritaires

### 1. Synthèse de documents longs et aide à la décision

**Contexte** : rapports d'audit, analyses marché, board decks de 50 pages — lire vite, décider mieux.

**Prompt type** :
```
Tu es un analyste stratégique senior.
Lis ce document [coller le texte ou joindre le fichier].
Produis une synthèse en 3 parties :
1. Les 3 points clés que je dois retenir (une phrase chacun)
2. Les 2 risques ou signaux faibles à surveiller
3. La décision ou question que ce document appelle

Format : bullet points, pas de jargon, lecture < 2 min.
```

---

### 2. Préparation de prises de parole et présentations stratégiques

**Contexte** : discours d'ouverture, communication CODIR, présentation investisseurs.

**Prompt type** :
```
Je dois présenter [sujet] à [audience : CODIR / investisseurs / managers].
Durée : [X] minutes. Ton attendu : [direct / inspirant / rassurant].

Propose-moi :
- Une accroche d'ouverture forte (pas de question rhétorique)
- 3 messages clés avec une illustration concrète chacun
- Une clôture mémorable avec un appel à l'action

Ce que je veux que l'audience retienne en quittant la salle : [préciser].
```

---

### 3. Analyse de scénarios et stress-test de décisions

**Contexte** : tester une décision avant de la prendre, identifier les angles morts.

**Prompt type** :
```
Je vais prendre la décision suivante : [décrire la décision].
Contexte : [taille entreprise, secteur, enjeu].

Joue le rôle d'un conseiller de direction exigeant.
1. Quels sont les 3 arguments les plus solides pour cette décision ?
2. Quels sont les 3 arguments les plus solides contre ?
3. Quelles informations manquantes rendraient cette décision plus sûre ?
4. Quel scénario adverse ne suis-je probablement pas en train d'anticiper ?

Sois direct. Ne cherche pas à me conforter.
```

---

## 2 risques spécifiques

### Risque 1 — Fuite de données stratégiques confidentielles

Les membres de direction manipulent des informations hautement sensibles :
plans stratégiques, données financières non publiées, informations M&A,
projets de réorganisation, données personnelles de dirigeants.

**Règle absolue** : ne jamais coller dans un LLM public des données qui ne peuvent
pas être rendues publiques. Utiliser uniquement des instances sécurisées
(Claude for Enterprise avec politique de non-rétention des données).

Vérifier avec la DSI que l'instance utilisée est conforme RGPD
et qu'elle ne sert pas à l'entraînement des modèles.

---

### Risque 2 — Biais de confirmation et sycophancy

Les LLM ont tendance à valider les hypothèses de l'utilisateur.
Un dirigeant qui demande "confirme que cette stratégie est bonne"
obtiendra une réponse bienveillante, pas un vrai contre-examen.

**Antidote** : toujours formuler les prompts de décision en demandant
explicitement les arguments *contre*, les angles morts, les risques.
Utiliser le prompt type n°3 ci-dessus systématiquement.

---

## Module de départ recommandé

**→ M1 — Comprendre l'IA Générative**

Avant tout usage, comprendre ce que l'IA fait vraiment
(et ce qu'elle ne fait pas) est la condition d'un usage éclairé.
Un dirigeant qui comprend les LLM peut fixer des règles d'usage
pertinentes pour son organisation — et éviter les erreurs
qui viendraient de la sur-confiance ou de la méfiance aveugle.

Ensuite : **M2** (risques & gouvernance) pour définir la politique IA de l'organisation.
