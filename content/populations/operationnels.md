# Fiche population — Opérationnels

> Profil : managers de proximité, chefs d'équipe, responsables opérationnels terrain
> Niveau de départ recommandé : N1
> Mise à jour : 2026-03

---

## 3 cas d'usage prioritaires

### 1. Rédaction de comptes rendus et rapports d'activité

**Contexte** : transformer des notes de réunion ou des observations terrain
en documents lisibles, structurés, prêts à partager avec la hiérarchie.

**Prompt type** :
```
Voici mes notes brutes de [réunion / visite terrain / bilan hebdo] :
[coller les notes — sans données client nominatives]

Rédige un compte rendu en [X] paragraphes avec :
- Contexte (2 phrases)
- Points discutés / observations clés (bullet points)
- Décisions prises / actions engagées (avec responsable et délai si mentionnés)
- Points en suspens ou à remonter

Ton : factuel, concis, sans reformulation excessive.
Longueur : [1 page max / libre].
```

---

### 2. Construction de checklists et procédures opérationnelles

**Contexte** : standardiser des pratiques, créer des guides pour les nouveaux entrants,
formaliser des bonnes pratiques qui restaient dans les têtes.

**Prompt type** :
```
Je dois créer une checklist / procédure pour [tâche opérationnelle].
Contexte : [décrire le processus, les acteurs, les contraintes].

Génère :
1. Une checklist de [X] étapes max, ordonnée chronologiquement
2. Pour chaque étape : action à faire + critère de validation (comment je sais que c'est fait)
3. Les 3 erreurs les plus fréquentes sur cette procédure et comment les éviter

Format : checklist avec cases à cocher, utilisable directement sur le terrain.
```

---

### 3. Préparation et animation de briefings d'équipe

**Contexte** : préparer un point d'équipe hebdomadaire, un brief avant chantier,
une réunion de coordination — gagner en clarté et en efficacité.

**Prompt type** :
```
Je dois animer un briefing de [durée] avec mon équipe de [X] personnes.
Sujets à aborder : [liste].
Objectif de la réunion : [décision à prendre / information à passer / problème à résoudre].

Aide-moi à structurer le briefing :
1. Ordre du jour en [X] points avec temps alloué
2. Pour le point le plus délicat [préciser] : 2 formulations pour l'introduire sans créer de tension
3. Question de clôture pour vérifier que le message est passé

Format : déroulé minute par minute.
```

---

## 2 risques spécifiques

### Risque 1 — Usage non sécurisé sur des appareils partagés ou en mobilité

Les opérationnels travaillent souvent en mobilité, sur des appareils
partagés, avec des connexions non sécurisées. L'usage de l'IA dans ces conditions
expose les informations saisies (données clients, planning, informations internes).

**Règle pratique** :
- Ne pas utiliser l'IA sur un wifi public sans VPN
- Se déconnecter de l'outil IA après chaque session sur appareil partagé
- Ne jamais saisir de données clients nominatives (noms, coordonnées, contrats)
  dans un LLM public, même pour rédiger un email

---

### Risque 2 — Sur-confiance et absence de vérification terrain

L'IA génère des réponses confiantes et bien rédigées, même quand elles sont fausses.
Un opérationnel pressé peut prendre pour argent comptant une procédure
générée par IA sans la confronter à la réalité terrain.

**Antidote** : traiter les outputs IA comme un *premier jet à valider*, pas comme une vérité.
Toujours confronter les procédures, checklists et instructions générées par IA
avec un expert terrain ou la documentation officielle avant de les appliquer.
La règle simple : "l'IA propose, l'humain dispose."

---

## Module de départ recommandé

**→ M1 — Comprendre l'IA Générative**

Les opérationnels ont souvent peu de temps et peu de contexte sur l'IA.
M1 est conçu pour répondre à la question "mais concrètement, ça sert à quoi
pour quelqu'un comme moi ?" — avec des exemples métier immédiatement reconnaissables.

Après M1, les opérationnels peuvent commencer à utiliser l'IA
dès la semaine suivante sur leurs cas d'usage les plus chronophages
(comptes rendus, emails, checklists).

Ensuite : **M4** (4 types de prompts) pour structurer un usage autonome et efficace.
