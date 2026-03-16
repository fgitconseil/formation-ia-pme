# Fiche population — Commercial / Marketing

> Profil : directeurs commerciaux, account managers, chargés marketing, content managers
> Niveau de départ recommandé : N1 → N2 rapide
> Mise à jour : 2026-03

---

## 3 cas d'usage prioritaires

### 1. Rédaction d'emails commerciaux et propositions clients

**Contexte** : accélérer la production de emails de prospection, relances,
réponses à appels d'offres, propositions commerciales personnalisées.

**Prompt type** :
```
Tu es un commercial B2B expérimenté dans le secteur [secteur].
Je dois envoyer un email de [type : relance / premier contact / réponse à objection]
à [titre du contact] chez [type d'entreprise].

Contexte : [ce que je sais de leur situation / besoin / problème actuel].
Notre offre : [décrire brièvement].

Rédige un email :
- Objet accrocheur (non promotionnel)
- Corps en 3 paragraphes max (situation → valeur → next step)
- Appel à l'action clair et non-intrusif
- Ton : [professionnel / chaleureux / direct]
- Longueur : < 150 mots
```

---

### 2. Création de contenus marketing multicanal

**Contexte** : posts LinkedIn, newsletters, fiches produit, présentations salons —
produire plus vite sans perdre en qualité ni en cohérence de ton.

**Prompt type** :
```
Je dois créer du contenu marketing sur [sujet / offre / événement].
Cible : [persona : ex. DSI de PME industrielle].
Objectif : [notoriété / génération de leads / fidélisation].

Génère 3 variantes pour LinkedIn :
- Variante courte (300 caractères) : message percutant
- Variante carrousel (5 slides, 1 idée / slide) : pédagogique
- Variante storytelling (900 caractères) : situation → problème → solution → preuve

Contraintes :
- Pas d'émoji en début de phrase
- Pas de question rhétorique en première ligne
- Terminer par un CTA qui invite à commenter ou partager
- Ton [expert terrain / accessible / inspirant]
```

---

### 3. Préparation aux objections et simulations client

**Contexte** : préparer un rendez-vous commercial difficile,
s'entraîner à répondre aux objections les plus fréquentes,
répéter un pitch avec un interlocuteur exigeant.

**Prompt type** :
```
Je dois pitcher [offre] à [type d'interlocuteur] demain.
Ses 3 objections probables sont : [lister ou demander à l'IA de les trouver].

Joue le rôle d'un prospect sceptique mais ouvert.
Pour chaque objection :
1. Formule l'objection telle qu'il la dirait réellement (ton direct)
2. Propose la meilleure réponse que je pourrais donner
3. Indique ce que je ne devrais surtout pas dire

Après les objections, donne-moi 2 questions ouvertes pour relancer le dialogue.
```

---

## 2 risques spécifiques

### Risque 1 — Dilution de l'identité de marque et ton générique

L'IA génère du contenu fluide mais souvent interchangeable.
Sans cadrage fort, les textes produits ressemblent à tout le monde
et n'ont pas la voix distinctive de la marque ou du commercial.

**Antidote** : toujours fournir en contexte 2-3 exemples du ton souhaité
("voici comment on écrit chez nous"), préciser les mots à éviter,
et relire en se posant la question : "est-ce que ça sonne comme nous ?"

---

### Risque 2 — Inexactitudes sur les offres, prix et engagements

L'IA hallucine. Elle peut générer des chiffres, des caractéristiques produit
ou des engagements contractuels crédibles mais faux.
Dans un email client, une fiche technique ou une proposition,
une erreur factuelle peut avoir des conséquences commerciales et légales.

**Antidote** : ne jamais laisser l'IA rédiger des éléments factuels
sans les lui fournir explicitement en input.
Toujours relire les outputs commerciaux avant envoi,
particulièrement les chiffres, dates, noms de produits et engagements.

---

## Module de départ recommandé

**→ M4 — Les 4 types de prompts**

Le profil commercial/marketing génère immédiatement de la valeur
avec les prompts de *génération* (rédaction) et de *transformation* (reformulation, adaptation de ton).
M4 donne le cadre pour exploiter ces deux types dès la première semaine.

Ensuite : **M6** (capitalisation) pour construire une bibliothèque
de prompts commerciaux réutilisables par toute l'équipe.
