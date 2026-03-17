# M5 — Exercice pratique : Faire progresser votre document de 🟢 à 🟡
> Durée : ~25 min · Format : cas complet autonome avec vos documents réels

---

## Objectif

Appliquer la méthode 🟢🟡 sur un document réel de votre travail.
Vous allez vivre exactement ce que Marc a vécu — avec votre propre matière.

---

## Préparez votre matière

**Choisissez un document de départ** parmi ces exemples :

| Type de document | Exemple concret |
|-----------------|-----------------|
| Notes de réunion | CR d'une réunion stratégique ou d'équipe récente |
| Contenu brut | Notes d'une interview, retours clients, feedback terrain |
| Draft existant | Une procédure ou un guide interne en cours de rédaction |
| Email long | Un email complexe avec plusieurs décisions imbriquées |

**Prérequis** : le document doit contenir de la matière réelle — pas un exercice fictif.
Anonymisez les données sensibles si nécessaire (noms, chiffres contractuels).

---

## Étape 1 — Appliquer 🟢 Structurer (10 min)

**Ce que vous faites :**
Copiez votre document dans l'IA et envoyez ce prompt exact :

```
Transforme ce contenu en plan hiérarchique Markdown.
Ne supprime aucune information.
Identifie les points ambigus ou contradictoires.
Ajoute une section "Points à clarifier" à la fin.
```

**Ce que vous observez :**
- Le résultat couvre-t-il 100% du contenu original ?
- Quelle information a failli être perdue ?
- La section "Points à clarifier" contient-elle des questions pertinentes ?

**Critère de passage vers 🟡 :**
- [ ] Toutes les informations sont présentes
- [ ] La structure est logique et navigable
- [ ] Les ambiguïtés ont été signalées (pas résolues arbitrairement)

Si ces 3 critères sont remplis, vous êtes au niveau 🟢. Passez à l'étape 2.
Si le résultat a perdu des informations, relancez avec : *"Tu as omis [préciser]. Réintègre ces éléments sans modifier le reste."*

---

## Étape 2 — Appliquer 🟡 Fiabiliser (10 min)

**Ce que vous faites :**
Vous avez maintenant un plan structuré. Identifiez le document de référence qui doit le valider.

| Votre document | Document de référence à utiliser |
|---------------|----------------------------------|
| Notes sur une procédure | La procédure officielle existante |
| Notes d'une réunion juridique | Le texte réglementaire concerné |
| Brief projet | Le cahier des charges initial |
| Compte rendu client | La proposition commerciale signée |

**Si vous n'avez pas de document de référence disponible :**
Utilisez cette instruction alternative :
```
Vérifie ce plan selon les bonnes pratiques standard de [votre domaine].
Pour chaque section : identifie ce qui pourrait être incomplet ou risqué.
Cite précisément les éléments qui te permettent d'évaluer.
Si tu n'as pas d'information certaine, indique-le explicitement.
```

**Le prompt 🟡 à envoyer (avec document de référence) :**

```
Vérifie si ce plan respecte le document de référence joint.
- Si une obligation ou un point important manque, indique-le
- Cite les passages exacts du document de référence utilisés
- Si une information n'est pas présente dans la référence, dis-le explicitement
- N'effectue aucune hypothèse implicite
```

**Ce que vous observez :**
- Combien d'écarts l'IA a-t-elle identifiés ?
- Sont-ils pertinents ? En aviez-vous manqué ?
- L'IA a-t-elle cité ses sources ou deviné ?

**Critère de passage vers 🔵 :**
- [ ] Les sources sont citées (pas devinées)
- [ ] Les absences sont signalées (pas comblées arbitrairement)
- [ ] Vous avez validé les écarts avec un expert humain si nécessaire

---

## Étape 3 — Bilan de progression (5 min)

Remplissez ce tableau :

| Critère | 🟢 Structurer | 🟡 Fiabiliser |
|---------|--------------|--------------|
| Objectif atteint ? | | |
| Temps passé | | |
| Ce que l'IA a bien fait | | |
| Ce que l'IA a manqué | | |
| Ce que vous avez ajouté manuellement | | |

**Questions de réflexion :**

1. Où était la valeur ajoutée de l'IA — dans 🟢 ou dans 🟡 ?
2. Auriez-vous obtenu le même résultat en partant directement d'un prompt de production ?
3. Combien de points de la section "Points à clarifier" de 🟢 avez-vous retrouvés dans le rapport 🟡 ?

---

## Note sur la suite

Votre document est maintenant structuré et fiabilisé.

L'étape suivante serait 🔵 : transformer ce document validé en outil directement exploitable.
C'est l'objet du Module 6 — où vous apprendrez comment capitaliser ce travail
pour ne pas recommencer à chaque nouvelle conversation.
