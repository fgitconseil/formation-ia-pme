# M2 — Risques & gouvernance de l'IA
> Niveau : 🟢 N1 · Format : Vidéo · Durée cible : ~20 min
> Version script : v2 · Statut : BROUILLON
> Corrections v2 : données entraînement nuancées + AI Act Art.4 + Deepfakes + grille classification (NotebookLM)

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
1. Accroche terrain                        (2 min)
2. Risque 1 — Exfiltration de données      (5 min)
3. Risque 2 — Réputationnel et usurpation  (4 min)
4. Risque 3 — Industrialisation prématurée (6 min)
5. Message de clôture                      (3 min)
```

---

## 1. Accroche terrain (2 min)

**[À caméra — ton direct, pas de slides]**

"Je vais vous raconter quelque chose qui arrive régulièrement dans des entreprises françaises.

Un manager reçoit une demande urgente. Il doit rédiger une réponse à un appel d'offres pour demain matin. Il est 18h. Il copie-colle l'intégralité du cahier des charges dans ChatGPT — avec les noms des clients, les volumes commandés, les prix actuels.

Il obtient une réponse excellente. Proposition envoyée. Appel d'offres gagné.

Sauf que ce soir-là, il a transmis des données commerciales confidentielles à un serveur externe. Sans le savoir. Sans en parler à personne. Sans mesurer les conséquences.

Ce n'est pas un cas isolé. C'est le type de situation que j'observe régulièrement dans des PME qui n'ont pas encore posé les règles de base sur l'usage de l'IA.

Ce module est fait pour que vous ne soyez pas dans cette situation — et pour que vous puissiez poser les bonnes règles dans votre organisation.

On va voir ensemble les trois risques principaux, comment les identifier, et les règles simples pour les gérer. Pas pour vous décourager d'utiliser l'IA — mais pour vous permettre de l'utiliser avec confiance."

---

## 2. Risque 1 — Exfiltration de données (5 min)

**[Slide : titre « Risque 1 — Exfiltration »]**

"Le premier risque, c'est l'exfiltration de données.

Exfiltration, ça veut dire : des informations confidentielles de votre entreprise qui quittent votre périmètre de sécurité pour atterrir dans un système externe.

Avec l'IA, ça se passe de façon invisible. Vous n'avez pas l'impression d'envoyer un fichier à quelqu'un. Vous posez juste une question. Mais ce que vous collez dans la fenêtre de chat, vous le transmettez à un serveur.

**[Slide : les 4 catégories de données à risque]**

Quelles données sont concernées ?

Première catégorie : les données clients. Noms, coordonnées, historiques d'achat, contrats, prix négociés. Tout ce qui identifie un client ou décrit votre relation commerciale avec lui.

Deuxième catégorie : les données RH. Salaires, évaluations, situations personnelles, projets de réorganisation. Ce sont des données particulièrement protégées par le RGPD — toute fuite peut engager la responsabilité de l'entreprise.

Troisième catégorie : les données stratégiques. Plans de développement, analyses concurrentielles, projets de rachat, données financières non publiées.

Quatrième catégorie : le code propriétaire. Si vous développez des outils internes, le code source est un actif stratégique.

**[Slide : règle des 3 questions]**

La règle pratique pour évaluer ce que vous pouvez ou non coller, c'est de vous poser trois questions avant chaque usage :

Première question : est-ce que cette information peut être rendue publique sans conséquence pour l'entreprise ?

Deuxième question : est-ce qu'elle concerne des personnes identifiables ?

Troisième question : est-ce qu'elle représente un avantage concurrentiel ou une information stratégique ?

Si vous répondez non à la première, ou oui à l'une des deux suivantes — vous n'utilisez pas l'IA publique pour cette tâche. Vous anonymisez d'abord, ou vous attendez d'être sur un outil sécurisé.

**[Slide : les 3 niveaux de protection selon l'outil]**

Et c'est ici qu'il faut nuancer quelque chose d'important — parce qu'il y a une idée reçue répandue.

Beaucoup de gens pensent que n'importe quel outil IA peut utiliser leurs données pour entraîner les modèles. Ce n'est pas aussi simple. Il y a trois niveaux très différents.

Niveau 1 — les outils publics gratuits. Sur ces outils, vos données peuvent effectivement être utilisées pour améliorer les modèles. C'est le niveau de risque le plus élevé pour des données professionnelles.

Niveau 2 — les versions Pro ou Teams. Sur Claude Pro ou Teams, l'entraînement sur les données des utilisateurs est désactivé par défaut. Sur ChatGPT Plus ou Teams, un opt-out est disponible. Ces outils offrent une protection sensiblement meilleure — à condition d'avoir vérifié les paramètres de votre compte.

Niveau 3 — les instances Enterprise. Ici, les politiques de non-rétention sont garanties contractuellement. Vos données ne quittent pas l'environnement sécurisé configuré par votre organisation.

La règle de base : vérifiez le type de licence de votre outil avant tout usage avec des données professionnelles. Si vous ne savez pas quelle instance vous utilisez et quelle est sa politique — posez la question à votre DSI ou prestataire IT avant d'utiliser l'outil avec des données sensibles. Ce n'est pas une question technique, c'est une question de responsabilité."

---

## 3. Risque 2 — Réputationnel et usurpation (4 min)

**[Slide : titre « Risque 2 — Réputation et usurpation »]**

"Le deuxième risque est double. C'est le risque réputationnel — que vous avez probablement déjà envisagé — et le risque d'usurpation, souvent sous-estimé par les PME.

**[Slide : 4 zones de risque réputationnel]**

Commençons par les erreurs dans vos outputs.

On a vu en M1 que l'IA peut halluciner. Les conséquences concrètes quand une erreur sort de votre bureau :

Les dates. L'IA peut confondre des années, des délais légaux, des dates d'entrée en vigueur. Une date erronée dans un contrat ou une proposition commerciale peut créer un engagement involontaire.

Les chiffres. Statistiques, pourcentages, données financières. L'IA peut générer des données plausibles mais fausses. Si vous les publiez dans un rapport ou une présentation stratégique, votre crédibilité est exposée.

Les citations et références légales. Vous en avez eu un exemple en M1 avec la citation juridique inventée. Ça vaut aussi pour les normes techniques et les réglementations sectorielles.

Les engagements contractuels. Si vous utilisez l'IA pour rédiger des emails clients ou des propositions, relisez chaque engagement. L'IA peut formuler des garanties ou des conditions que vous n'offrez pas réellement.

**[Slide : Risque d'usurpation — Deepfakes]**

Le second volet — les deepfakes — monte en puissance depuis 2024.

Les hypertrucages, ou deepfakes, permettent aujourd'hui de recréer la voix ou l'image d'une personne de façon convaincante. La CNIL alerte sur ce risque en croissance pour les entreprises, y compris les PME.

Ce que ça signifie concrètement : un fraudeur peut générer un faux message vocal de votre PDG demandant un virement urgent. Il peut créer une vidéo ou un enregistrement semblant provenir d'un dirigeant pour manipuler un employé, un client ou un partenaire. Il peut usurper l'identité de votre marque dans une campagne externe.

Ce n'est plus de la science-fiction. C'est une technique disponible et utilisée.

Deux réflexes de base : établir un protocole de vérification pour toute demande urgente inhabituelle hors des canaux normaux — même si elle semble provenir d'un dirigeant. Et sensibiliser vos équipes à ce risque avant qu'elles en soient victimes.

**[Slide : protocole de vérification en 3 temps]**

Pour le risque réputationnel classique, voici un protocole simple :

Premier temps : identifier les zones sensibles dans le texte généré — tout chiffre, toute date, toute référence normative, tout engagement.

Deuxième temps : vérifier chaque zone dans une source primaire. Pas en redemandant à l'IA — elle peut confirmer une erreur avec la même assurance. Allez à la source : site officiel, texte de loi, document contractuel.

Troisième temps : relecture humaine systématique avant tout envoi externe. Jamais un output IA ne part chez un client, un partenaire ou une administration sans passer sous des yeux humains."

---

## 4. Risque 3 — Industrialisation prématurée (6 min)

**[Slide : titre « Risque 3 — Industrialisation prématurée »]**

"Le troisième risque est le plus insidieux. C'est celui que les entreprises découvrent le plus tard, souvent après un incident coûteux.

L'industrialisation prématurée, c'est automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé.

**[Slide : exemple concret]**

Voici le scénario type.

Une équipe commerciale utilise l'IA pour rédiger des propositions clients. Ça fonctionne bien. Les commerciaux sont satisfaits. Un responsable décide d'automatiser : désormais, un script génère les propositions la nuit et les envoie aux clients le matin.

Sauf que personne n'avait remarqué que l'IA confondait régulièrement deux offres tarifaires. À faible volume, l'erreur était corrigée par le commercial avant l'envoi. Automatisée, elle part chez deux cents clients.

C'est pour éviter ça que la formation s'appuie sur une progression en 4 niveaux.

**[Slide : la progression 🟢🟡🔵🟣]**

🟢 Structurer : vous organisez votre matière avec l'IA. Vous vérifiez que rien n'est perdu.

🟡 Fiabiliser : vous rendez chaque affirmation vérifiable. Vous contrôlez les sources, les chiffres, les engagements.

🔵 Optimiser : vous transformez le contenu validé en outil directement exploitable par votre équipe.

🟣 Industrialiser : vous intégrez l'outil dans un système automatisé, avec des rôles définis, des métriques, une supervision — et un support technique dédié.

La règle absolue : on ne passe pas directement de 🟢 à 🟣. On ne saute pas les étapes.

**[Slide : les 3 questions avant d'automatiser]**

Avant d'automatiser quoi que ce soit avec l'IA, posez-vous ces trois questions :

Est-ce que ce contenu a été validé humainement pendant au moins un mois, sur suffisamment d'exemples ?

Est-ce que les erreurs ont été identifiées et corrigées avant automatisation ?

Est-ce qu'il y a une supervision humaine dans le processus — pas seulement à la fin, mais en cours de route ?

Si vous répondez non à l'une de ces trois questions, vous n'êtes pas prêt à automatiser.

**[Slide : l'AI Act et votre organisation]**

Un point de contexte réglementaire important.

L'AI Act — le règlement européen sur l'intelligence artificielle — est entré en application progressive depuis 2024. Son Article 4 impose aux organisations d'assurer un niveau suffisant de maîtrise de l'IA pour leur personnel, en particulier pour ceux qui utilisent ou déploient des systèmes d'IA.

Ce que ça signifie concrètement pour votre entreprise : former vos équipes à l'usage responsable de l'IA n'est plus seulement une bonne pratique. Pour de nombreuses organisations, c'est une obligation légale. Cette formation est précisément ce que l'Article 4 exige.

**[Slide : grille de classification simplifiée — votre usage est-il à haut risque ?]**

L'AI Act distingue les usages selon leur niveau de risque. Pour qu'un manager puisse évaluer rapidement la nature de son usage, voici trois questions d'auto-évaluation.

Question 1 : votre usage de l'IA a-t-il un impact direct sur des décisions concernant des personnes — recrutement, évaluation, accès à des services, crédit, assurance ?

Question 2 : votre usage concerne-t-il des domaines classés à haut risque par l'AI Act — santé, justice, ressources humaines, infrastructure critique, éducation ?

Question 3 : des décisions partiellement ou totalement automatisées produisent-elles des effets juridiques ou significatifs sur des individus ?

Si vous répondez oui à l'une de ces questions, votre usage entre dans la catégorie 'à haut risque' au sens de l'AI Act. Cela implique des obligations spécifiques : évaluation de conformité, documentation, supervision humaine formalisée. Consultez votre service juridique ou un expert avant de déployer à grande échelle.

Si vous répondez non aux trois, vous êtes probablement dans un usage standard — ce qui ne dispense pas des règles de base de ce module, mais n'implique pas d'obligations réglementaires particulières."

---

## 5. Message de clôture (3 min)

**[Retour caméra — ton direct]**

"Trois risques. Trois règles essentielles.

Règle 1 : avant de coller dans un LLM, posez la question — cette information peut-elle être rendue publique sans conséquence ? Et vérifiez quel outil vous utilisez et sa politique de données. Gratuit public, Pro/Teams, ou Enterprise : ce n'est pas la même chose.

Règle 2 : avant de publier ou d'envoyer un output IA, une paire d'yeux humains relit les zones à risque — dates, chiffres, références, engagements. Et pour les communications inhabituelles urgentes, vérifiez par un canal indépendant que la source est bien celle qu'elle prétend être.

Règle 3 : avant d'automatiser, vérifiez que le contenu a été validé et que la supervision humaine est maintenue dans le processus.

Ces trois règles ne ralentissent pas votre usage de l'IA. Elles permettent de l'accélérer en toute confiance — et d'être en conformité avec les exigences croissantes de l'AI Act.

L'entreprise qui pose ces règles tôt va plus vite que celle qui les découvre à travers une erreur coûteuse.

Le module suivant — M3 — est votre point de contrôle pour le Niveau 1. Ce n'est pas un examen. C'est une vérification que les réflexes de base sont bien intégrés avant de passer à la méthode.

Si vous avez noté des questions pendant ce module, c'est le bon moment pour les écrire. Le quiz qui suit couvre exactement les notions que vous venez de voir."

---

## Notes de production

- **Ton** : grave sur le risque 1 (c'est réel et sous-estimé), factuel sur les protocoles, positif en clôture
- **Rythme** : les 3 règles en clôture se disent lentement, une par une — créer le moment mémorable
- **Visuels** : 1 slide par risque avec le titre · tableau 3 niveaux de protection (outils gratuits / Pro-Teams / Enterprise) · slide grille AI Act 3 questions
- **Accroche mémorielle** : l'histoire d'ouverture (copie-colle de l'appel d'offres) — à soigner particulièrement
- **Deepfakes** : présenter le risque sobrement, sans panique — 2 réflexes pratiques suffisent
- **AI Act** : mentionner l'Article 4 avec légèreté positive ("cette formation est ce que la loi exige") — ne pas en faire un exposé juridique
- **Grille classification** : 3 questions courtes — les afficher à l'écran, les lire une par une avec le temps de répondre
- **À éviter** : moraliser, faire peur inutilement — rester dans le registre opérationnel et des bonnes pratiques
- **Transition M3** : préparer à l'évaluation comme un outil, pas comme un test de pression
