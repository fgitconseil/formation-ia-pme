# M11 — Gouverner un dispositif IA — Guide Niveau 3
> Niveau : 🟣 N3 · Format : Guide référentiel · Durée : ~20 min autonome
> Version : v1 · Statut : BROUILLON

---

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Compétences cibles | C5, C6 — Sécuriser les données, gouverner un dispositif, préparer l'industrialisation |
| Public | Référents IA · Power users ayant validé M8 et M9 |
| Prérequis | M8 — Assistant personnalisé · M9 — Skills et bases de connaissance |
| Module suivant | — (dernier module) |
| Format | Guide référentiel — à lire, compléter, conserver. Pas de vidéo. |

---

## Introduction — Ce que vous avez construit

Vous avez terminé le Niveau 3.

M8 — vous savez configurer un assistant personnalisé avec un system prompt structuré, des signaux d'alerte, et un protocole de test.

M9 — vous savez alimenter cet assistant avec une base de connaissance fiable, structurée, maintenue, et auditée.

Ce guide est votre point de contrôle final.

Il ne vous apprend plus rien de nouveau sur les outils. Il vous aide à répondre à une question différente : votre dispositif IA est-il prêt à passer de l'usage individuel à l'usage organisationnel gouverné ?

C'est la question du 🟣 Industrialiser.

---

## Partie 1 — Les composants d'un dispositif gouverné

### Ce que signifie "gouverner" un dispositif IA

Un dispositif non gouverné produit des résultats qui dépendent de la personne qui l'utilise ce jour-là.

Un dispositif gouverné produit des résultats prévisibles, traçables, vérifiables — indépendamment de qui l'utilise, quand, et dans quel contexte.

La gouvernance n'est pas de la bureaucratie. C'est la condition pour que l'IA soit utile à grande échelle.

### Les 5 composants

**1. Processus documenté**

Votre workflow IA doit être écrit, pas mémorisé.

Qui soumet quoi. Quel type de prompt pour quelle tâche. Quelles données peuvent être fournies. Quelle vérification est obligatoire avant diffusion. Qui valide en dernier ressort.

Un processus documenté peut être transmis à un collaborateur entrant en 30 minutes.

**2. Rôles définis**

Qui fait quoi dans le dispositif :

| Rôle | Responsabilités |
|------|-----------------|
| Référent IA | Configurer et maintenir les assistants · Former les utilisateurs · Traiter les incidents |
| Utilisateur | Utiliser selon le processus · Remonter les anomalies |
| Valideur | Vérifier les outputs avant diffusion externe |
| Propriétaire du Skill | Maintenir les données sources · Réviser selon calendrier |

Sans rôles définis, tout le monde est responsable — ce qui signifie que personne ne l'est.

**3. Traçabilité**

Vous devez pouvoir répondre à ces questions à tout moment :

- Qui a produit cet output ?
- Quel assistant ou quel prompt a été utilisé ?
- Quelle version du Skill était active à ce moment ?
- Une vérification humaine a-t-elle eu lieu avant diffusion ?

La traçabilité ne requiert pas un outil technique complexe. Un journal de bord simple (fichier partagé, wiki, tableau) suffit pour commencer.

**4. Supervision humaine**

La règle fondamentale du référentiel (Prompting-final.md, section 5) :

> L'IA propose. L'humain analyse. L'humain valide. L'humain décide.

Cette règle ne s'assouplit pas au Niveau 3 — elle se formalise. La supervision humaine devient un étape explicite dans le processus, pas une recommandation.

Pour chaque cas d'usage industrialisé, définir : qui valide, selon quels critères, avant quelle diffusion.

**5. KPI suivis**

Sans mesure, vous ne savez pas si le dispositif fonctionne.

| Dimension | KPI exemples |
|-----------|-------------|
| Usage | Nombre de sessions · Taux d'adoption par service |
| Qualité | % d'outputs validés sans correction · Erreurs signalées |
| Risque | Incidents de confidentialité · Corrections de Skill requises |
| Adoption | % d'utilisateurs actifs · Formation réalisée |

---

## Partie 2 — Itérer sur les données et les prompts

### Le cycle d'amélioration continue

Un dispositif IA stabilisé n'est pas un dispositif figé. C'est un dispositif qui s'améliore de façon structurée.

La boucle d'amélioration s'applique à deux niveaux :

**Niveau 1 — Amélioration des prompts**

Vos prompts et vos Skills d'instruction s'améliorent au fil des retours utilisateurs.
- Documenter ce qui fonctionne → bibliothèque de prompts
- Documenter ce qui échoue → corrections versionnées
- Partager les améliorations → capitalisation collective

**Niveau 2 — Amélioration des données sources**

Vos Skills de connaissance se dégradent si les sources ne sont pas maintenues.
- Révisions planifiées (calendrier défini en M9)
- Révisions déclenchées sur événement (changement réglementaire, incident)
- Audit documentaire sur les sources nouvelles avant intégration

### Les signaux de dégradation — à surveiller

Un dispositif se dégrade avant que les erreurs deviennent visibles. Ces signaux précèdent les incidents :

- Les utilisateurs reformulent leurs questions plus souvent qu'avant
- Les outputs nécessitent davantage de corrections manuelles
- Les utilisateurs contournent l'assistant pour des tâches qu'il couvrait avant
- Le référent IA reçoit plus de questions sur des sujets normalement couverts

Quand ces signaux apparaissent : déclencher un audit de la base documentaire et une révision des instructions.

### Quand refaire un Skill

| Déclencheur | Action |
|-------------|--------|
| Changement réglementaire dans le domaine | Révision des sources + re-test complet |
| Nouvelle version d'un document source clé | Mise à jour + archivage de l'ancienne version |
| Incident signalé par un utilisateur | Identifier la source → corriger → re-tester |
| Révision planifiée (calendrier) | Audit grille complète → valider ou mettre à jour |
| Évolution de l'organisation (restructuration) | Réviser le périmètre + les rôles définis |

---

## Partie 3 — Checklist de passage vers 🟣 Industrialiser

Cochez honnêtement chaque point.

### Les 10 critères

- [ ] **1. Processus documenté** — Le workflow IA de ce cas d'usage est écrit et accessible à tous les utilisateurs concernés. Un nouveau collaborateur peut l'appliquer en 30 minutes.

- [ ] **2. Rôles définis** — Chaque rôle (référent, utilisateur, valideur, propriétaire du Skill) est nommé et a accepté sa responsabilité.

- [ ] **3. Traçabilité activée** — Il existe un moyen de savoir qui a produit quel output, avec quel outil, à quelle date.

- [ ] **4. Supervision humaine formalisée** — Une étape de validation humaine est définie dans le processus avant toute diffusion externe ou toute décision à fort impact.

- [ ] **5. Sources auditées** — Chaque document dans le Skill de connaissance a passé la grille d'audit (M9, Exercice 1). Aucune source contradictoire ou obsolète n'est dans le Skill actif.

- [ ] **6. Tests de robustesse réalisés** — L'assistant a passé les 4 ou 5 scénarios de test (M8, Exercice 2). Les résultats sont documentés dans la fiche de référence.

- [ ] **7. Plan de maintenance actif** — Il existe un calendrier de révision des sources + un propriétaire désigné pour chaque Skill.

- [ ] **8. KPI définis** — Au moins 2-3 indicateurs de suivi sont définis. Quelqu'un est responsable de les consulter à fréquence régulière.

- [ ] **9. Formation utilisateurs réalisée** — Les utilisateurs du dispositif savent ce que l'assistant fait, ce qu'il ne fait pas, et qui contacter en cas d'incident.

- [ ] **10. Cycles 🟢🟡🔵 validés** — Le cas d'usage a été appliqué avec la méthode complète au moins 3 fois avant d'être industrialisé. Aucune première version n'a été industrialisée directement.

### Lecture du résultat

**10/10 coché** → Votre dispositif est prêt pour 🟣. Passez à la Partie 4 pour construire votre tableau de bord.

**7-9/10 coché** → Quasiment prêt. Identifiez les points manquants et planifiez leur réalisation avant déploiement élargi.

**5-6/10 coché** → Dispositif en construction. Priorité aux points non cochés avant d'élargir l'usage à de nouveaux utilisateurs.

**< 5/10 coché** → Restez en usage restreint (individuel ou petit groupe maîtrisé). L'industrialisation à ce stade amplifie les risques non traités.

---

## Partie 4 — Tableau de bord de pilotage (modèle)

Un tableau de bord simple, consultable régulièrement, suffit pour les PME.

### Modèle en 4 dimensions

**Dimension 1 — Usage**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| Nombre de sessions IA / semaine | Hebdomadaire | Référent IA | Progression constante |
| Taux d'adoption par service (% utilisateurs actifs) | Mensuel | Référent IA | ≥ 70% des utilisateurs formés |
| Nouveaux cas d'usage identifiés | Trimestriel | Référent IA | ≥ 1 par trimestre |

**Dimension 2 — Qualité**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| % d'outputs utilisés sans correction majeure | Mensuel | Valideur | ≥ 80% |
| Erreurs signalées par les utilisateurs | En continu | Référent IA | 0 erreur critique non traitée |
| Délai moyen de correction d'anomalie | Mensuel | Propriétaire Skill | < 5 jours ouvrés |

**Dimension 3 — Risque**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| Incidents de confidentialité signalés | En continu | Référent IA | 0 |
| Skills révisés dans les délais planifiés | Trimestriel | Propriétaire Skill | 100% |
| Documents sources avec version obsolète détectée | Trimestriel | Propriétaire Skill | 0 |

**Dimension 4 — Adoption**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| % d'utilisateurs formés | Mensuel | Référent IA | 100% avant déploiement |
| Questions "hors périmètre" reçues par le référent IA | Mensuel | Référent IA | Tendance baissière |
| Satisfaction utilisateurs (auto-évaluation) | Trimestriel | Référent IA | Progression |

### Conseil d'implémentation

Commencez avec 2-3 indicateurs seulement. Un tableau de bord non consulté est inutile — mieux vaut 3 indicateurs suivis qu'un tableau de 20 colonnes abandonné après 2 semaines.

Consultez le tableau en réunion équipe une fois par mois. 10 minutes suffisent.

---

## Notes pour le référent IA

Ce guide est l'outil de référence de votre rôle.

Conservez-le. Partagez-le avec les prochains référents IA de votre organisation.

Le Niveau 3 ne se termine pas avec ce guide — il commence.

Ce que vous avez construit avec la formation est un capital méthodologique. La prochaine étape est de le transmettre, de l'enrichir avec vos retours terrain, et de le faire évoluer avec votre organisation.

C'est ça, 🟣 Industrialiser.
