# M2 — Risques & gouvernance de l'IA
> Niveau : 🟢 N1 · Format : Vidéo · Durée cible : ~20 min
> Version script : v1 · Statut : BROUILLON

---

## Métadonnées

| Champ | Valeur |
|---|---|
| Compétences cibles | C2 — Identifier et gérer les 3 risques majeurs · C5 — Sécuriser les données en contexte professionnel |
| Public | Tout employé PME/ETI, avoir complété M1 |
| Prérequis | M1 — Comprendre l'IA Générative |
| Module suivant | M3 — Évaluation de base Niveau 1 |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche terrain            (2 min)
2. Risque 1 — Exfiltration     (5 min)
3. Risque 2 — Réputationnel    (4 min)
4. Risque 3 — Industrialisation prématurée (6 min)
5. Message de clôture          (3 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Je vais vous raconter quelque chose qui arrive tous les jours dans des entreprises françaises.

Un manager reçoit une demande urgente. Il doit rédiger une réponse à un appel d'offres pour demain matin. Il est 18h. Il copie-colle l'intégralité du cahier des charges dans ChatGPT — avec les noms des clients, les volumes commandés, les prix actuels.

Il obtient une réponse excellente. Proposition envoyée. Appel d'offres gagné.

Sauf que ce soir-là, il a transmis des données commerciales confidentielles à un serveur américain. Sans le savoir. Sans en parler à personne. Sans mesurer les conséquences.

Ce n'est pas un exemple inventé. C'est la réalité de ce que font des milliers de salariés en ce moment, dans des PME qui n'ont pas encore posé les règles.

Ce module est fait pour que vous ne soyez pas dans cette situation — et pour que vous puissiez poser les bonnes règles dans votre organisation."

---

## 2. Risque 1 — Exfiltration de données (5 min)

**[Slide : titre « Risque 1 — Exfiltration »]**

"Le premier risque, c'est l'exfiltration de données.

Exfiltration, ça veut dire : des informations confidentielles de votre entreprise qui quittent votre périmètre de sécurité pour atterrir dans un système externe.

Avec l'IA, ça se passe de façon invisible. Vous n'avez pas l'impression d'envoyer un fichier à quelqu'un. Vous posez juste une question. Mais ce que vous collez dans la fenêtre de chat, vous le transmettez à un serveur.

**[Slide : liste des données à risque]**

Quelles données sont concernées ?

Première catégorie : les données clients.
Noms, coordonnées, historiques d'achat, contrats, prix négociés. Tout ce qui identifie un client ou décrit votre relation commerciale avec lui.

Deuxième catégorie : les données RH.
Salaires, évaluations, situations personnelles, projets de réorganisation. Ce sont des données particulièrement protégées par le RGPD.

Troisième catégorie : les données stratégiques.
Plans de développement, analyses concurrentielles, projets de rachat, données financières non publiées.

Quatrième catégorie : le code propriétaire.
Si vous développez des outils internes, le code source est un actif stratégique. Le coller dans un LLM public revient à le partager avec l'outil et potentiellement à l'inclure dans des données d'entraînement.

**[Slide : règle des 3 questions]**

La règle pratique, c'est de se poser trois questions avant de coller quoi que ce soit :

Première question : est-ce que cette information peut être rendue publique ?

Deuxième question : est-ce qu'elle concerne des personnes identifiables ?

Troisième question : est-ce qu'elle représente un avantage concurrentiel pour mon entreprise ?

Si vous répondez non à la première, ou oui à l'une des deux suivantes — vous ne collez pas. Vous anonymisez d'abord, ou vous n'utilisez pas l'IA pour cette tâche.

**[Slide : instances sécurisées vs outils publics]**

Une précision importante pour les entreprises qui ont déployé des outils IA internes.

Il existe une différence fondamentale entre ChatGPT public et une instance Claude Enterprise ou Microsoft Copilot configurée par votre DSI avec une politique de non-rétention.

Dans les outils publics, vos données peuvent être utilisées pour améliorer les modèles. Dans une instance entreprise correctement configurée, ce n'est pas le cas.

La règle : si vous ne savez pas quelle instance vous utilisez et quelle est sa politique de données — posez la question à votre DSI avant d'utiliser l'outil avec des données sensibles."

---

## 3. Risque 2 — Risque réputationnel (4 min)

**[Slide : titre « Risque 2 — Réputationnel »]**

"Le deuxième risque est plus subtil. C'est le risque réputationnel.

On en a eu un aperçu dans le M1 avec les hallucinations. Mais là, on parle des conséquences concrètes quand une erreur de l'IA sort du bureau et arrive chez un client, dans un document officiel, ou dans une communication publique.

**[Slide : 4 zones de risque réputationnel]**

Quatre types d'informations sont particulièrement risquées dans les outputs IA :

Les dates. L'IA peut confondre des années, des délais légaux, des dates d'entrée en vigueur. Une date erronée dans un contrat ou une réponse client peut créer un engagement que vous n'avez pas voulu.

Les chiffres. Pourcentages, statistiques de marché, données financières. L'IA peut générer des chiffres plausibles qui sont faux. Si vous les publiez dans une présentation ou un rapport, votre crédibilité est exposée.

Les citations et références. On en a parlé pour les articles de loi. Ça vaut aussi pour les normes techniques, les réglementations sectorielles, les décisions de jurisprudence.

Les engagements contractuels. Si vous utilisez l'IA pour rédiger des emails clients ou des propositions commerciales, relisez chaque engagement. L'IA peut formuler des garanties ou des conditions que vous n'offrez pas.

**[Slide : protocole de vérification en 3 temps]**

Comment éviter ce risque ?

Un protocole simple en 3 temps.

Premier temps : identifier les zones sensibles dans le texte généré. Encerclez mentalement tout chiffre, toute date, toute référence normative, tout engagement.

Deuxième temps : vérifier chaque zone dans une source primaire. Pas en redemandant à l'IA — elle peut confirmer une erreur avec la même confiance. Allez à la source : site officiel, texte de loi, document contractuel.

Troisième temps : systématiser la relecture humaine avant tout envoi externe. Jamais un output IA ne part chez un client, un partenaire ou une administration sans être passé sous des yeux humains.

Ce protocole n'est pas lourd. Il prend 5 minutes sur un email. Mais il protège votre crédibilité."

---

## 4. Risque 3 — Industrialisation prématurée (6 min)

**[Slide : titre « Risque 3 — Industrialisation prématurée »]**

"Le troisième risque est le plus insidieux. Et c'est celui que les entreprises découvrent le plus tard.

L'industrialisation prématurée, c'est automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé.

Je vais vous donner un exemple concret.

Une équipe commerciale utilise l'IA pour rédiger des propositions clients. Ça marche bien. Les commerciaux sont satisfaits. Quelqu'un décide d'automatiser : désormais, un script génère automatiquement les propositions la nuit et les envoie aux clients le matin.

Sauf que personne n'avait remarqué que l'IA confondait régulièrement deux offres tarifaires. À faible volume, l'erreur était corrigée par le commercial avant l'envoi. Automatisée, elle part chez 200 clients.

**[Slide : la progression 🟢🟡🔵🟣]**

C'est pour éviter ça que la formation s'appuie sur une progression en 4 niveaux.

🟢 Structurer : vous organisez votre matière avec l'IA. Vous vérifiez que rien n'est perdu.

🟡 Fiabiliser : vous rendez chaque affirmation vérifiable. Vous contrôlez les sources, les chiffres, les engagements.

🔵 Optimiser : vous transformez le contenu validé en outil directement exploitable par votre équipe.

🟣 Industrialiser : vous intégrez l'outil dans un processus organisationnel, avec des rôles définis, des métriques, une supervision.

La règle absolue : on ne passe pas directement de 🟢 à 🟣. On ne saute pas les étapes.

**[Slide : les 3 questions avant d'automatiser]**

Avant d'automatiser quoi que ce soit avec l'IA, posez-vous trois questions :

Est-ce que ce contenu a été validé humainement pendant au moins un mois ?

Est-ce que les erreurs ont été identifiées et corrigées avant automatisation ?

Est-ce qu'il y a une supervision humaine dans le process — pas juste à la fin, mais en cours de route ?

Si vous répondez non à l'une de ces trois questions, vous n'êtes pas prêt à automatiser.

**[Slide : la règle fondamentale]**

La règle fondamentale, c'est celle-ci : on ne transforme jamais un brouillon non fiabilisé en processus automatisé.

Ça paraît évident dit comme ça. Mais sous la pression des résultats et de l'enthousiasme pour l'IA, c'est exactement ce qui arrive dans la majorité des entreprises qui se brûlent avec l'IA."

---

## 5. Message de clôture (3 min)

**[Retour caméra — ton direct]**

"Trois risques. Trois règles.

Règle 1 : avant de coller dans un LLM, posez la question : est-ce que cette information peut être rendue publique ? Si non, anonymisez ou n'utilisez pas.

Règle 2 : avant de publier ou d'envoyer un output IA, une paire d'yeux humains relit les zones à risque — dates, chiffres, références, engagements.

Règle 3 : avant d'automatiser, vérifiez que le contenu a été validé et que la supervision humaine est maintenue dans le processus.

Ces trois règles ne ralentissent pas l'usage de l'IA. Elles permettent de l'accélérer en toute confiance.

L'entreprise qui pose ces règles tôt va plus vite que celle qui les découvre à travers une erreur coûteuse.

Le module suivant — M3 — est votre évaluation de base pour le Niveau 1. C'est le moment de vérifier que les concepts de M1 et M2 sont bien intégrés avant de passer à la méthode.

Si vous avez noté des questions pendant ce module, c'est le bon moment pour les écrire. Le quiz qui suit couvre exactement les notions que vous venez de voir."

---

## Notes de production

- **Ton** : grave sur le risque 1 (c'est réel et sous-estimé), factuel sur les protocoles, positif en clôture
- **Rythme** : les 3 règles en clôture doivent être dites lentement, une par une
- **Visuels** : 1 slide par risque avec le titre, 1 slide par règle pratique — 8 slides max
- **Accroche mémorielle** : l'histoire d'ouverture (copie-colle de l'appel d'offres) — à soigner particulièrement
- **À éviter** : moraliser, faire peur inutilement — rester dans le registre opérationnel
- **Point fort** : la progression 🟢🟡🔵🟣 est introduite ici pour la première fois — la présenter comme un cadre positif, pas une contrainte
