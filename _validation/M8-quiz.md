# Quiz — M8 Créer son assistant personnalisé
> 8 questions · Seuil de validation : 70% (6/8)
> Compétence testée : C6

---

## Instructions

Choisissez la réponse la plus juste.
Corrigé en bas de page.

---

## Question 1

Quelle est la différence principale entre une conversation ordinaire avec l'IA et un assistant avec system prompt configuré ?

A. L'assistant avec system prompt répond plus vite grâce à un modèle plus puissant
B. Dans une conversation ordinaire, vous expliquez le contexte à chaque message. L'assistant avec system prompt embarque ce contexte de façon permanente — chaque conversation commence déjà dans votre cadre de travail.
C. Le system prompt permet à l'IA d'accéder à Internet pour enrichir ses réponses
D. Il n'y a pas de différence notable — un bon prompt ponctuel fait le même travail qu'un system prompt

---

## Question 2

Vous configurez un assistant pour votre équipe commerciale. Quelle composante du system prompt est la plus critique pour éviter les réponses hors sujet ?

A. Le format de sortie par défaut
B. Le rôle
C. Le périmètre — ce que l'assistant traite et ce qu'il ne traite pas
D. Les signaux d'alerte

---

## Question 3

Votre assistant RH vient de répondre à une question sur une clause disciplinaire en donnant une interprétation définitive sans mentionner qu'une validation juridique est recommandée. Quel est le problème ?

A. Le modèle est trop ancien — mettre à jour vers la dernière version
B. La composante "signaux d'alerte" n'a pas été configurée — l'assistant aurait dû identifier que cette question nécessitait une validation humaine
C. L'assistant a bien fonctionné — donner une réponse directe est son rôle
D. Le prompt de l'utilisateur était mal formulé — le problème vient de la question, pas de l'assistant

---

## Question 4

Vous voulez tester si votre assistant respecte bien son périmètre. Vous lui posez une question qui sort complètement du domaine configuré. Que doit-il faire ?

A. Répondre de son mieux même si c'est hors périmètre — une réponse partielle est toujours meilleure qu'une absence de réponse
B. Afficher un message d'erreur et arrêter la conversation
C. Signaler qu'il est hors de son périmètre et renvoyer vers le bon référent, tel que défini dans sa configuration
D. Demander à l'utilisateur de reformuler la question pour la faire entrer dans son périmètre

---

## Question 5

Un assistant mal configuré est plus dangereux qu'un prompt ponctuel mal formulé. Pourquoi ?

A. Un assistant consomme plus de ressources informatiques
B. Un assistant mal configuré produit des erreurs à grande échelle — ses règles défaillantes s'appliquent à toutes les conversations de tous ses utilisateurs, en continu, jusqu'à correction
C. Un prompt ponctuel est toujours relu par un humain, pas un assistant
D. Les assistants ne peuvent pas être corrigés une fois déployés

---

## Question 6

Vous utilisez quotidiennement l'IA pour deux usages très différents : rédiger des propositions commerciales et analyser des contrats fournisseurs. Quelle approche est la plus adaptée ?

A. Un seul assistant avec un system prompt très large qui couvre les deux usages
B. Un prompt ponctuel très détaillé à réécrire à chaque session selon l'usage du moment
C. Deux assistants distincts — un par périmètre de travail — pour ne pas mélanger les règles et les données de référence
D. Un assistant pour les propositions commerciales et des conversations ordinaires pour les contrats

---

## Question 7

Votre assistant "Analyse de contrats" a été configuré il y a 6 mois. Depuis, la réglementation sur les sous-traitants dans votre secteur a changé. Que faites-vous ?

A. Rien — l'IA se met à jour automatiquement avec les nouvelles réglementations
B. Mettre à jour le system prompt avec les nouvelles règles et re-tester les 4 scénarios de robustesse
C. Créer un nouveau prompt ponctuel pour les nouvelles questions — garder l'ancien assistant pour les questions standard
D. Attendre que des utilisateurs remontent des erreurs avant d'intervenir

---

## Question 8

Quand est-il plus judicieux d'utiliser un prompt ponctuel qu'un assistant personnalisé ?

A. Jamais — un assistant personnalisé est toujours supérieur à un prompt ponctuel
B. Toujours — les prompts ponctuels sont plus flexibles et évitent la complexité de configuration
C. Pour des tâches one-shot ou très variables où le contexte change à chaque fois. Pour les tâches récurrentes, stables, avec des règles constantes, un assistant est justifié.
D. Uniquement pour les tâches personnelles — les usages professionnels exigent toujours un assistant

---

## Corrigé

| # | Réponse | Justification |
|---|---------|---------------|
| 1 | **B** | Le system prompt embarque le contexte de façon permanente. Sans lui, chaque conversation recommence de zéro. |
| 2 | **C** | Le périmètre définit ce que l'assistant traite et ce qu'il renvoie. Un périmètre flou produit des réponses hors sujet. |
| 3 | **B** | Les signaux d'alerte sont conçus pour déclencher une mise en garde sur les sujets à fort enjeu (disciplinaire, juridique). Sans eux, l'assistant répond sans signaler le risque. |
| 4 | **C** | Un assistant bien configuré renvoie vers le référent approprié quand il est hors périmètre — pas d'improvisation, pas de refus sec. |
| 5 | **B** | L'effet d'échelle : une règle défaillante dans un assistant touche tous les utilisateurs en continu. C'est le risque central de la configuration. |
| 6 | **C** | Deux périmètres distincts = deux assistants. Mélanger les contextes réduit la précision et crée des risques de confusion. |
| 7 | **B** | Un assistant doit être maintenu. Mettre à jour le system prompt + re-tester les 4 scénarios. L'IA ne se met pas à jour seule. |
| 8 | **C** | La règle : tâches one-shot → prompt ponctuel. Tâches récurrentes avec règles stables → assistant. La configuration doit être justifiée par l'usage. |

---

**Score ≥ 6/8 → Module validé · Passez à M9**
**Score < 6/8 → Revoir les sections system prompt (section 2) et test de robustesse (section 4)**
