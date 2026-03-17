# M1 — Comprendre l'IA Générative
> Niveau : 🟢 N1 · Format : Vidéo · Durée cible : ~20 min
> Version script : v2 · Statut : BROUILLON
> Extension v2 : ~700 → ~2300 mots · analogie stagiaire + Projets vs Skills + chiffres financiers + RAG (NotebookLM)

---

## Métadonnées

| Champ | Valeur |
|---|---|
| Compétence cible | C1 — Comprendre ce qu'est réellement un LLM |
| Public | Tout employé PME/ETI, aucun prérequis |
| Prérequis | Aucun |
| Module suivant | M2 — Risques et gouvernance de base |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche terrain        (2 min)
2. Ce qu'est un LLM        (5 min)
3. Ce que l'IA ne fait pas (4 min)
4. Les 4 implications clés (6 min)
5. Message de clôture      (3 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Vous utilisez déjà l'IA. Ou vos collègues l'utilisent pendant que vous lisez ce module.

Claude, ChatGPT, Copilot, Gemini — ces outils sont dans les entreprises depuis 2023. Pas dans les laboratoires de recherche. Dans les emails, les comptes rendus, les présentations, les analyses commerciales.

Dans une PME comme la vôtre, il y a probablement des dizaines de salariés qui ouvrent ces outils chaque semaine. Certains obtiennent des résultats remarquables. D'autres accumulent des erreurs sans savoir pourquoi.

La différence ne vient pas du talent. Elle vient de la compréhension.

La plupart des gens utilisent l'IA comme un moteur de recherche très puissant — on pose une question, on attend une réponse fiable. Et c'est là que les erreurs commencent.

Ce module va vous expliquer ce que ces outils font réellement — et surtout ce qu'ils ne font pas. Pas pour vous décourager de les utiliser. Pour vous donner les bases qui permettent de les utiliser correctement.

Parce que comprendre la différence entre ce qu'est l'IA et ce qu'on croit qu'elle est — c'est la fondation de tout ce qui suit dans cette formation."

---

## 2. Ce qu'est un LLM (5 min)

**[Slide : titre "LLM — Grand Modèle de Langage"]**

"Commençons par décortiquer le terme que vous allez entendre partout.

LLM, c'est l'acronyme anglais de Large Language Model — que l'on peut traduire par Grand Modèle de Langage. Claude, ChatGPT, Gemini — tous ces outils sont des LLM.

**[Slide simple : schéma texte → prédiction → texte]**

Qu'est-ce qu'un LLM ?

C'est un modèle statistique entraîné sur des milliards de textes : des livres, des articles, du code, des conversations, des sites web. Et à travers cet entraînement, il a appris une seule chose fondamentale : quelle suite de mots est la plus probable après ce que vous venez d'écrire.

Il ne comprend pas. Il prédit.

C'est une distinction énorme — et elle va conditionner tout ce que vous allez apprendre dans cette formation.

**[Slide : analogie du stagiaire]**

Voici l'image que j'utilise pour rendre ça concret.

Imaginez un stagiaire extrêmement cultivé. Il a lu des milliers de livres, de rapports, de manuels, d'articles. Il connaît le droit, la finance, le marketing, la gestion de projet, la communication. Il s'exprime parfaitement, en français comme en anglais.

Mais ce stagiaire arrive chez vous le premier jour sans aucun contexte sur votre entreprise. Il ne connaît pas vos clients, vos procédures internes, vos contraintes sectorielles, votre culture d'entreprise. Il ne sait même pas ce qu'on attend de lui.

Si vous lui donnez des instructions précises et un contexte clair, il va produire un travail remarquable. Si vous lui posez une question vague sans contexte, il va improviser avec ce qu'il sait — et produire quelque chose de plausible, mais peut-être pas du tout adapté à votre réalité.

L'IA générative fonctionne exactement comme ça. Elle a le savoir — elle n'a pas votre contexte. C'est vous qui devez le lui fournir.

**[Slide : hallucination — définition]**

Et parce que l'IA prédit plutôt qu'elle ne comprend, il lui arrive de produire des réponses qui semblent correctes mais ne le sont pas. On appelle ça une hallucination.

Attention au mot. Une hallucination de l'IA, ce n'est pas un mensonge. L'IA ne cherche pas à vous tromper — elle n'a pas d'intention. C'est le résultat normal de son mécanisme de prédiction : elle a produit la réponse la plus statistiquement plausible, mais cette réponse était factuellement fausse.

**[Exemple concret — slide]**

Exemple illustratif : demandez à une IA une référence juridique précise. Elle peut vous citer un article de loi avec un numéro, un intitulé, une date d'entrée en vigueur. Le tout formulé dans un style juridique parfait. Sauf que cet article n'existe pas.

*[Exemple illustratif — ce type de comportement est documenté et peut varier selon le modèle, la version, et le contexte de la demande.]*

L'IA n'a pas menti. Elle a fait ce qu'elle fait toujours : produire la réponse la plus plausible. Et une citation juridique bien formatée est très plausible statistiquement — parce qu'elle en a lu des milliers dans ses données d'entraînement.

C'est ça, une hallucination. Forme correcte, fond potentiellement faux."

---

## 3. Ce que l'IA ne fait pas (4 min)

**[Slide : 3 limites clés]**

"Maintenant qu'on sait ce que l'IA est — un moteur de prédiction textuelle — voyons ce qu'elle n'est pas. Trois limites fondamentales à garder en tête.

**[Slide : Limite 1 — pas d'accès au temps réel]**

Limite 1 : elle n'a pas accès au temps réel.

L'IA a été entraînée jusqu'à une certaine date — ce qu'on appelle sa date de coupure, ou cut-off en anglais. Tout ce qui s'est passé après cette date, elle ne le sait pas.

Ce que ça signifie concrètement : une loi votée au Parlement il y a six mois, une modification du code du travail entrée en vigueur en janvier, une nouvelle réglementation sectorielle — l'IA peut ignorer tout ça. Pire, elle peut vous donner la règle d'avant avec la même assurance qu'une règle en vigueur.

Certains outils ont un accès web pour compenser cette limite. Mais ça ne résout pas tout — ça demande au contraire plus de vigilance sur la fiabilité des sources consultées.

**[Slide : Limite 2 — ne voit pas vos fichiers]**

Limite 2 : elle ne voit pas vos documents si vous ne les lui donnez pas.

Un fichier Excel ouvert sur votre bureau, un rapport Word enregistré sur votre réseau, une base de données interne — tout ça est invisible pour l'IA. Pour qu'elle travaille avec vos données, vous devez les lui fournir explicitement.

Et là, deux précautions s'imposent. Première : attention aux données sensibles — on verra ça en détail dans le module suivant. Deuxième : si vos données sont dans un Projet claude.ai configur avec les bonnes protections, l'IA peut y accéder sans que vous ayez à copier-coller à chaque fois — c'est ce que M6 expliquera.

**[Slide : Limite 3 — pas de signal d'incertitude spontané]**

Limite 3 : elle ne sait pas signaler ce qu'elle ne sait pas.

C'est la limite la plus insidieuse.

Quand vous posez une question à un collègue et qu'il n'est pas sûr, il peut hésiter, dire 'je pense que', vous conseiller de vérifier. L'IA, par défaut, produit toujours une réponse — avec le même ton d'assurance qu'elle soit certaine ou en train d'inventer.

Elle ne va pas vous dire spontanément 'attention, je ne suis pas sûr de ça'. Ce comportement existe, mais il faut l'activer explicitement dans votre demande — on verra comment dans les modules suivants."

---

## 4. Les 4 implications clés (6 min)

**[Slide : titre "Ce que ça change dans votre travail"]**

"Maintenant qu'on comprend le mécanisme, voici ce que ça implique concrètement dans votre quotidien professionnel. Quatre implications pratiques.

**[Slide : Implication 1 — clarifier sa demande]**

Implication 1 : la qualité de votre demande détermine la qualité de la réponse.

L'IA répond à la question posée. Si la question est floue, la réponse sera floue — même si elle semble bien structurée.

Et voici le premier levier, simple mais puissant : donnez-lui un rôle. Avant de poser votre question, précisez qui vous voulez qu'elle soit dans ce contexte.

'Agis en tant que directeur financier d'une PME de 80 personnes.' 'Tu es un expert en droit du travail qui conseille des managers non juristes.' 'Tu es un chargé de communication qui rédige pour des acheteurs techniques.'

Attribuer un rôle donne à l'IA un cadre de référence — et réduit significativement les réponses génériques. C'est un des premiers réflexes que vous allez développer dans cette formation.

**[Slide : Implication 2 — vérifier les faits critiques]**

Implication 2 : certains types d'informations doivent toujours être vérifiés dans une source primaire.

Dates. Chiffres. Citations. Références réglementaires. Ce sont les zones à risque.

Un exemple concret que j'observe souvent : un manager demande à l'IA une analyse rapide de son secteur — taux de croissance, parts de marché, performances des concurrents. L'IA produit un rapport bien structuré avec des chiffres précis, des pourcentages, des comparaisons. Très convaincant.

Sauf que ces chiffres sont inventés. L'IA a produit des données financières plausibles pour un secteur qu'elle connaît mal ou pour lequel elle n'avait pas de données récentes. Et le manager les a utilisés dans une présentation stratégique.

La règle : tout chiffre, toute date, toute référence légale ou réglementaire dans un output IA doit être vérifié avant utilisation dans un contexte professionnel. L'IA est excellente pour structurer, reformuler, organiser, raisonner — elle est risquée sur les faits précis.

**[Slide : Implication 3 — garder la main]**

Implication 3 : vous restez responsable de tout ce que vous envoyez ou publiez.

L'IA propose. Vous analysez. Vous validez. Vous décidez. Ce n'est pas une délégation de responsabilité — c'est un outil d'assistance.

Cette logique — l'humain reste décisionnaire en dernier ressort — est le fil rouge de toute cette formation. Elle n'est pas négociable, même quand les résultats semblent parfaits.

**[Slide : Implication 4 — données et outils adaptés]**

Implication 4 : pour vos tâches récurrentes, utilisez les bons outils.

Deux précisions importantes pour votre pratique quotidienne.

D'abord, sur vos données : si vous avez besoin que l'IA travaille régulièrement avec vos documents internes — vos procédures, vos bases produits, votre convention collective — il existe des solutions pour ça. Dans claude.ai, les Projets permettent de charger vos documents dans un espace de travail persistant. Vous les configurez une fois, l'IA les utilise à chaque session. C'est différent des 'Skills' Claude Code — un système technique destiné aux développeurs, pas aux managers. Dans cette formation, quand on parle de capitaliser sa connaissance, on parle des Projets de l'interface web. M6 vous montrera exactement comment faire.

Ensuite, sur la confidentialité : si vous avez des données sensibles que vous devez donner à l'IA mais que vous ne voulez pas exposer, il existe une architecture qui permet ça — appelée RAG. En bref : vos documents restent dans votre environnement sécurisé, l'IA les consulte sans les absorber publiquement. On en parlera dans M6 également.

Pour l'instant, retenez l'essentiel : il y a une différence entre copier-coller vos données dans une fenêtre de chat public, et les charger dans un Projet sécurisé configuré par votre entreprise. Cette différence a des implications importantes sur la sécurité — c'est précisément l'objet de M2."

---

## 5. Message de clôture (3 min)

**[Retour caméra — ton direct]**

"Faisons le point.

Un LLM — Grand Modèle de Langage — est un moteur de prédiction statistique. Il ne comprend pas. Il prédit la suite la plus probable de votre demande.

Trois limites fondamentales : il n'a pas accès au temps réel, il ne voit pas vos fichiers si vous ne les lui donnez pas, et il ne signale pas spontanément son incertitude.

Quatre implications pour votre pratique : clarifiez vos demandes et donnez un rôle, vérifiez les faits critiques dans des sources primaires, gardez la main sur toutes vos décisions, et utilisez les outils adaptés à votre contexte.

Ce que vous venez de comprendre — mécanisme de prédiction, hallucinations, limites — c'est ce qui fait la différence entre les utilisateurs qui en tirent une valeur réelle et ceux qui accumulent les erreurs sans comprendre pourquoi.

Dans le module suivant, on va parler des risques concrets dans un contexte professionnel — et des règles simples pour les éviter. Parce que comprendre l'IA, c'est bien. Savoir quoi ne pas faire avec elle, c'est tout aussi important.

Si vous avez noté des questions sur ce que vous venez de voir, c'est le bon moment pour les écrire. Le quiz juste après va tester exactement ces notions."

---

## Notes de production

- **Ton** : pédagogique, jamais condescendant, direct
- **Rythme** : phrases courtes, pauses après chaque concept clé (surtout "Il ne comprend pas. Il prédit.")
- **Visuels** : slide LLM avec acronyme décortiqué · slide analogie stagiaire (simple, mémorable) · slide limites en 3 points · slides implications
- **Accroche mémorielle principale** : l'analogie du stagiaire — elle donne un cadre mental qui dure
- **Accroche mémorielle secondaire** : l'exemple de la citation juridique / les chiffres financiers inventés
- **À soigner** : "hallucination ≠ mensonge" — dire la phrase à voix haute lentement, laisser le silence s'installer
- **Annotation exemple juridique** : lire "[Exemple illustratif]" à voix haute ou l'afficher clairement à l'écran
- **Transition M2** : terminer sur une curiosité — "ce qu'il ne faut pas faire" — pas sur une liste
