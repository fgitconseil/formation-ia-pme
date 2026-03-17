# M3 — Exercice pratique : Le prompt risqué du collègue
> Durée : ~20 min · Format : cas complet autonome · Niveau : synthèse N1

---

## Objectif

Appliquer en situation réelle les trois axes du Niveau 1 :
comprendre les limites d'un LLM (M1), identifier et corriger les risques (M2), appliquer les bons réflexes (M3).

---

## La situation

Vous êtes manager dans une PME industrielle.
Un collègue, Nicolas, responsable commercial, vous envoie ce message ce matin :

> **Email de Nicolas**
>
> Salut,
>
> J'ai besoin d'un coup de main. Ce soir j'ai une réunion avec le client Duranton & Fils
> pour renouveler leur contrat (500k€/an). Je viens de faire tourner ce prompt sur ChatGPT
> pour préparer mes arguments :
>
> *"Tu es un expert commercial. Voici l'historique complet des commandes Duranton & Fils
> depuis 2021, leur contrat actuel (ci-joint), leur chiffre d'affaires estimé à 12M€
> et nos marges par ligne de produit. Prépare-moi une argumentation de renouvellement
> en insistant sur les 3 points forts de notre relation et les risques pour eux de changer
> de fournisseur. Mentionne leur responsable achats, M. Bernard Lacroix."*
>
> Le résultat est vraiment bien, je vais l'utiliser tel quel ce soir.
> Tu peux y jeter un œil pour confirmer que c'est bon ?
>
> Nicolas

---

## Étape 1 — Identifier les problèmes (5 min)

Lisez l'email et le prompt de Nicolas. Notez tous les problèmes que vous repérez.

Utilisez cette grille :

| Problème identifié | Type de risque | Gravité (1-3) |
|-------------------|----------------|---------------|
| | | |
| | | |
| | | |

**Pour vous aider — cherchez dans ces catégories :**
- Données clients nominatives
- Données financières confidentielles (CA client, marges internes)
- Pièces jointes avec contenu contractuel
- Contenu à vérifier avant usage direct en réunion
- Décision de délégation (est-ce la bonne tâche à confier à l'IA ?)

---

## Étape 2 — Corriger le prompt (7 min)

Réécrivez le prompt de Nicolas en appliquant les bonnes pratiques.

**Contraintes de votre version corrigée :**
- Aucune donnée nominative (ni nom de client, ni nom du responsable)
- Aucune donnée financière réelle (CA, marges)
- Instruction explicite de citation des sources fournies
- Instruction explicite "si tu ne sais pas, indique-le"
- Format de sortie clairement précisé

**Votre version corrigée :**

```
[Votre prompt ici]
```

---

## Étape 3 — Appliquer la checklist (3 min)

Passez le prompt de Nicolas (version originale) par la checklist M3.
Cochez ce qui était respecté, marquez d'une croix ce qui ne l'était pas.

**Avant de prompter**
- [ ] 1. Intention clarifiée
- [?] 2. Données vérifiées avant collage
- [?] 3. Bon outil choisi (ChatGPT public pour données commerciales confidentielles ?)

**Pendant l'interaction**
- [?] 4. Prévu d'itérer si résultat incorrect ?
- [?] 5. Sources citées dans la demande ?
- [?] 6. "Je ne sais pas" autorisé ?
- [?] 7. Pas de nouvelles données sensibles ajoutées ?

**Après la réponse**
- [?] 8. Faits critiques vérifiés dans une source primaire ?
- [?] 9. Relecture humaine avant usage en réunion ?
- [?] 10. Prompt capitalisé si résultat utile ?

**Comptez les croix : combien de points non respectés ?**

---

## Étape 4 — Rédiger votre réponse à Nicolas (5 min)

Vous devez répondre à Nicolas avant sa réunion de ce soir.
Votre réponse doit :

1. **Nommer clairement les problèmes** sans le juger — il a bien voulu bien faire
2. **Expliquer le risque concret** en une ou deux phrases (pas un cours théorique)
3. **Proposer la solution** : lui donner votre version corrigée du prompt
4. **Le rassurer** : l'IA reste utile pour cette préparation — il faut juste encadrer

**Longueur cible : 150 mots maximum**

```
[Votre réponse à Nicolas ici]
```

---

## Corrigé de référence

### Étape 1 — Problèmes à identifier

| Problème | Type | Gravité |
|----------|------|---------|
| Nom du client (Duranton & Fils) | Données client nominatives | 2 |
| Historique de commandes | Données commerciales confidentielles | 3 |
| Contrat joint | Document contractuel confidentiel | 3 |
| CA client (12M€) | Données financières client | 2 |
| Marges internes par produit | Données stratégiques confidentielles | 3 |
| Nom du responsable achats | Donnée personnelle nominative | 2 |
| "Je vais l'utiliser tel quel" | Absence de vérification humaine | 2 |
| ChatGPT public | Instance non sécurisée pour ces données | 3 |

### Étape 2 — Prompt corrigé (exemple)

```
Tu es un expert en préparation de réunions commerciales B2B.

Je dois préparer une réunion de renouvellement de contrat avec un client industriel
(secteur [à préciser], contrat en cours depuis 3 ans, volume annuel significatif).

Voici les éléments que je peux te fournir sans données nominatives :
- Les 3 points forts de la relation tels que je les perçois : [à compléter]
- Les risques de changement de fournisseur pour un client de cette taille : [à préciser]

Prépare une trame d'argumentation avec :
1. Les 3 points forts à valoriser (sans inventer d'éléments — utilise uniquement ce que j'ai fourni)
2. Les 2 risques majeurs pour le client en cas de changement
3. Les 3 questions ouvertes à poser pour détecter des objections non exprimées

Si une information te manque pour construire un argument solide, indique-le explicitement.
Cite tout élément que tu utilises depuis les données que je t'ai fournies.
```

### Étape 4 — Réponse à Nicolas (exemple)

> Salut Nicolas,
>
> Attention avant ce soir : ton prompt contient des données que tu ne peux pas envoyer dans ChatGPT public — nom du client, contrat joint, marges internes, CA. Ces informations quittent le périmètre de l'entreprise dès que tu les copies.
>
> Pas de panique, l'IA reste utile pour ta préparation. Je t'ai réécrit le prompt sans les données sensibles — tu le trouves ci-dessous. Tu remplaces les crochets avec les éléments génériques (pas les chiffres réels).
>
> Vérifie aussi les arguments produits avant de les utiliser en réunion — l'IA peut formuler des engagements que tu n'aurais pas voulus.
>
> Bonne réunion ce soir.
