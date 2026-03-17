# M11 — Gouverner un dispositif IA — Guide Niveau 3
> Niveau : 🟣 N3 · Format : Guide référentiel · Durée : ~20 min autonome
> Version : v2 · Statut : BROUILLON
> Corrections v2 : AI Act Art.4 + critère Classification AI Act + template tableau de bord + souveraineté (NotebookLM)

---

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Compétences cibles | C5, C6 — Sécuriser les données, gouverner un dispositif, préparer l'industrialisation |
| Public | Référents IA · Power users ayant validé M8 et M9 |
| Prérequis | M8 — Assistant personnalisé · M9 — Projets et bases de connaissance |
| Module suivant | — (dernier module) |
| Format | Guide référentiel — à lire, compléter, conserver. Pas de vidéo. |

---

## Introduction — Ce que vous avez construit

Vous avez terminé le Niveau 3.

M8 — vous savez configurer un assistant personnalisé avec des instructions permanentes structurées, des signaux d'alerte, et un protocole de test.

M9 — vous savez alimenter cet assistant avec une base de connaissance fiable, structurée, maintenue, et auditée.

Ce guide est votre point de contrôle final.

Il ne vous apprend plus rien de nouveau sur les outils. Il vous aide à répondre à une question différente : votre dispositif IA est-il prêt à passer de l'usage individuel à l'usage organisationnel gouverné ?

C'est la question du 🟣 Industrialiser.

**Un point réglementaire avant de commencer.**

L'Article 4 de l'AI Act européen (en vigueur depuis 2025) impose aux organisations d'assurer un niveau suffisant de maîtrise de l'IA pour leur personnel — en particulier pour ceux qui utilisent ou déploient des systèmes d'IA. Cette obligation porte un nom : AI Literacy, ou alphabétisation IA.

La formation que vous venez de terminer — M1 à M11 — est précisément ce que l'Article 4 exige. En gouvernant un dispositif IA dans votre organisation, vous en êtes le garant : la formation de vos équipes n'est plus une bonne pratique, c'est une obligation légale documentable.

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
| Propriétaire de la Base de connaissance | Maintenir les documents sources · Réviser selon calendrier |

Sans rôles définis, tout le monde est responsable — ce qui signifie que personne ne l'est.

**3. Traçabilité**

Vous devez pouvoir répondre à ces questions à tout moment :

- Qui a produit cet output ?
- Quel assistant ou quel prompt a été utilisé ?
- Quelle version des Instructions de Projet était active à ce moment ?
- Une vérification humaine a-t-elle eu lieu avant diffusion ?

La traçabilité ne requiert pas un outil technique complexe. Un Registre des usages de l'IA simple (fichier partagé, wiki, tableau) suffit pour commencer.

**4. Supervision humaine**

La règle fondamentale du référentiel (Prompting-final-v2.md, section 5) :

> L'IA propose. L'humain analyse. L'humain valide. L'humain décide.

Cette règle ne s'assouplit pas au Niveau 3 — elle se formalise. La supervision humaine devient une étape explicite dans le processus, pas une recommandation.

Pour chaque cas d'usage industrialisé, définir : qui valide, selon quels critères, avant quelle diffusion.

Note réglementaire : l'AI Act (Article 22 RGPD et exigences AI Act pour les systèmes à haut risque) impose une intervention humaine formalisée pour les décisions à fort impact sur des individus. Même si votre usage n'est pas classé "haut risque", formaliser la supervision est la pratique recommandée.

**5. KPI suivis**

Sans mesure, vous ne savez pas si le dispositif fonctionne.

| Dimension | KPI exemples |
|-----------|-------------|
| Usage | Nombre de sessions · Taux d'adoption par service |
| Qualité | % d'outputs validés sans correction · Erreurs signalées |
| Risque | Incidents de confidentialité · Révisions de Base de connaissance requises |
| Adoption | % d'utilisateurs actifs · Formation réalisée |

---

## Partie 2 — Itérer sur les données et les prompts

### Le cycle d'amélioration continue

Un dispositif IA stabilisé n'est pas un dispositif figé. C'est un dispositif qui s'améliore de façon structurée.

La boucle d'amélioration s'applique à deux niveaux :

**Niveau 1 — Amélioration des Instructions de Projet**

Vos Instructions de Projet s'améliorent au fil des retours utilisateurs.
- Documenter ce qui fonctionne → bibliothèque de prompts versionnée
- Documenter ce qui échoue → corrections versionnées
- Partager les améliorations → capitalisation collective

**Niveau 2 — Amélioration des Bases de connaissance**

Vos Bases de connaissance se dégradent si les sources ne sont pas maintenues.
- Révisions planifiées (calendrier défini en M9)
- Révisions déclenchées sur événement (changement réglementaire, incident)
- Audit documentaire sur les sources nouvelles avant intégration

### Les signaux de dégradation — à surveiller

Un dispositif se dégrade avant que les erreurs deviennent visibles. Ces signaux précèdent les incidents :

- Les utilisateurs reformulent leurs questions plus souvent qu'avant
- Les outputs nécessitent davantage de corrections manuelles
- Les utilisateurs contournent l'assistant pour des tâches qu'il couvrait avant
- Le référent IA reçoit plus de questions sur des sujets normalement couverts

Quand ces signaux apparaissent : déclencher un audit de la Base de connaissance et une révision des Instructions de Projet.

### Souveraineté numérique et choix des outils

Pour les PME/ETI françaises, le choix de l'outil n'est pas neutre.

Lors de l'audit des sources et des outils de votre dispositif, évaluez :

- **Hébergement des données** : vos données sont-elles traitées sur des serveurs en Europe ? Les instances Enterprise de Claude, les offres Microsoft Azure France, ou les modèles open source hébergés localement (Mistral AI, LLaMA sur infrastructure française) offrent des garanties de souveraineté différentes.
- **Conformité RGPD** : votre contrat avec le fournisseur IA prévoit-il une politique de non-rétention des données ? Pour les données RH, financières, ou contractuelles, c'est une exigence — pas une option.
- **Portabilité** : si vous changez d'outil, vos Instructions de Projet, vos Bases de connaissance, et vos processus documentés sont-ils exportables ?

La règle de base : vérifiez la politique de traitement des données de votre outil avant de l'intégrer dans un dispositif permanent. Ce que vous avez configuré en M8-M9 ne vaut que si l'infrastructure sous-jacente respecte vos obligations réglementaires.

### Quand mettre à jour les Instructions et la Base de connaissance

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

### Les 11 critères

- [ ] **1. Processus documenté** — Le workflow IA de ce cas d'usage est écrit et accessible à tous les utilisateurs concernés. Un nouveau collaborateur peut l'appliquer en 30 minutes.

- [ ] **2. Rôles définis** — Chaque rôle (référent, utilisateur, valideur, propriétaire de la Base de connaissance) est nommé et a accepté sa responsabilité.

- [ ] **3. Traçabilité activée** — Il existe un moyen de savoir qui a produit quel output, avec quel outil, à quelle date.

- [ ] **4. Supervision humaine formalisée** — Une étape de validation humaine est définie dans le processus avant toute diffusion externe ou toute décision à fort impact.

- [ ] **5. Sources auditées** — Chaque document dans la Base de connaissance a passé la grille d'audit (M9, Exercice 1). Aucune source contradictoire ou obsolète n'est dans la base active.

- [ ] **6. Tests de robustesse réalisés** — L'assistant a passé les 4 ou 5 scénarios de test (M8, Exercice 2). Les résultats sont documentés dans la fiche de référence.

- [ ] **7. Plan de maintenance actif** — Il existe un calendrier de révision des sources + un propriétaire désigné pour chaque Base de connaissance.

- [ ] **8. KPI définis** — Au moins 2-3 indicateurs de suivi sont définis. Quelqu'un est responsable de les consulter à fréquence régulière.

- [ ] **9. Formation utilisateurs réalisée** — Les utilisateurs du dispositif savent ce que l'assistant fait, ce qu'il ne fait pas, et qui contacter en cas d'incident. La formation est documentée (obligation AI Act Article 4).

- [ ] **10. Cycles 🟢🟡🔵 validés** — Le cas d'usage a été appliqué avec la méthode complète au moins 3 fois avant d'être industrialisé. Aucune première version n'a été industrialisée directement.

- [ ] **11. Classification AI Act vérifiée** — Le cas d'usage a été évalué selon les catégories de risque AI Act (risque inacceptable / haut risque / risque limité / risque minimal). Si l'usage tombe dans la catégorie "haut risque" (décisions RH, accès à des services, évaluation de personnes), les obligations spécifiques ont été identifiées et un avis juridique a été demandé avant déploiement élargi.

### Lecture du résultat

**11/11 coché** → Votre dispositif est prêt pour 🟣. Passez à la Partie 4 pour construire votre tableau de bord.

**8-10/11 coché** → Quasiment prêt. Identifiez les points manquants et planifiez leur réalisation avant déploiement élargi.

**5-7/11 coché** → Dispositif en construction. Priorité aux points non cochés avant d'élargir l'usage à de nouveaux utilisateurs.

**< 5/11 coché** → Restez en usage restreint (individuel ou petit groupe maîtrisé). L'industrialisation à ce stade amplifie les risques non traités.

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
| Délai moyen de correction d'anomalie | Mensuel | Propriétaire Base | < 5 jours ouvrés |

**Dimension 3 — Risque**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| Incidents de confidentialité signalés | En continu | Référent IA | 0 |
| Bases de connaissance révisées dans les délais planifiés | Trimestriel | Propriétaire Base | 100% |
| Documents sources avec version obsolète détectée | Trimestriel | Propriétaire Base | 0 |

**Dimension 4 — Adoption**

| Indicateur | Fréquence | Responsable | Valeur cible |
|------------|-----------|-------------|--------------|
| % d'utilisateurs formés (AI Literacy Art. 4) | Mensuel | Référent IA | 100% avant déploiement |
| Questions "hors périmètre" reçues par le référent IA | Mensuel | Référent IA | Tendance baissière |
| Satisfaction utilisateurs (auto-évaluation) | Trimestriel | Référent IA | Progression |

### Template Excel / Google Sheets — implémentation concrète

Voici la structure à reproduire dans votre outil tableur. Créez 4 onglets ou un tableau unique avec les colonnes suivantes :

**Structure des colonnes (à copier dans chaque onglet)**

| Colonne | Contenu |
|---------|---------|
| A — Indicateur | Nom de l'indicateur (libellé court) |
| B — Dimension | Usage / Qualité / Risque / Adoption |
| C — Fréquence | Hebdo / Mensuel / Trimestriel / Continu |
| D — Responsable | Nom ou rôle de la personne qui renseigne |
| E — Valeur cible | Seuil ou tendance attendue |
| F — Valeur [Mois N] | Valeur mesurée ce mois |
| G — Valeur [Mois N-1] | Valeur du mois précédent (comparaison) |
| H — Statut | ✅ OK / ⚠️ À surveiller / 🔴 Action requise |
| I — Action corrective | Si statut ⚠️ ou 🔴 : action prévue + responsable + échéance |

**Règle de mise en forme conditionnelle (Google Sheets / Excel)**

- Colonne H = "🔴 Action requise" → fond rouge automatique
- Colonne H = "⚠️ À surveiller" → fond orange automatique
- Colonne H = "✅ OK" → fond vert automatique

**Routine de mise à jour**

1. Désigner une personne responsable de la mise à jour mensuelle (généralement le Référent IA)
2. Bloquer 30 minutes en fin de mois pour renseigner les colonnes F + H + I
3. Partager le tableau en lecture avec les rôles concernés (valideur, propriétaire des Bases)
4. Revoir en réunion mensuelle : 10 minutes suffisent si le tableau est à jour

**Conseil d'implémentation**

Commencez avec 2-3 indicateurs seulement. Un tableau de bord non consulté est inutile — mieux vaut 3 indicateurs suivis qu'un tableau de 20 colonnes abandonné après 2 semaines.

---

## Notes pour le référent IA

Ce guide est l'outil de référence de votre rôle.

Conservez-le. Partagez-le avec les prochains référents IA de votre organisation.

Le Niveau 3 ne se termine pas avec ce guide — il commence.

Ce que vous avez construit avec la formation est un capital méthodologique. La prochaine étape est de le transmettre, de l'enrichir avec vos retours terrain, et de le faire évoluer avec votre organisation.

C'est ça, 🟣 Industrialiser.

### Aller plus loin — Architecture technique (optionnel)

Pour les organisations qui utilisent Claude dans des environnements techniques avec un support IT dédié, il existe un framework de maturité à 4 couches qui structure l'évolution d'un dispositif :

**Couche 1 — Instructions permanentes** : les règles de comportement de l'assistant (M8). C'est votre point de départ.

**Couche 2 — Bases de connaissance** : les documents sources métier connectés à l'assistant (M9). C'est la connaissance que vous lui donnez.

**Couche 3 — Hooks** : des déclencheurs automatiques qui activent des règles à des moments précis du workflow (nécessite un support IT / Claude Code). C'est la loi, pas le conseil.

**Couche 4 — Sous-agents** : des agents IA qui orchestrent des tâches complexes en autonomie (M10, conditionnel). C'est la délégation totale — avec supervision humaine formalisée.

En PME, les couches 1 et 2 couvrent 90% des besoins opérationnels. Les couches 3 et 4 sont le territoire des équipes IT et des référents avancés. Ne commencez pas par le bas — construisez de haut en bas, couche par couche.

---

## Plan d'action 30 jours — Kit de survie J+1

Ce guide vous a donné le cadre. Voici comment démarrer concrètement dès demain.

### 1. La règle des 30 minutes

Chaque matin, avant de traiter vos emails, identifiez une tâche complexe de votre journée et traitez-la avec l'assistance de l'IA.

Pas une tâche simple. Une tâche qui vous coûte habituellement 1 à 2 heures : une synthèse de réunion difficile, la préparation d'un entretien, la rédaction d'un document structuré.

Au bout de 30 jours, vous aurez identifié vos 5 cas d'usage les plus rentables — ceux qui méritent d'être industrialisés.

### 2. Template "Zéro Friction" — Votre premier Projet métier en 1 page

Utilisez ce modèle pour définir votre premier Projet dans l'interface claude.ai :

```
NOM DU PROJET : ___________
Cas d'usage principal : ___________

INSTRUCTIONS DE PROJET (gabarit 5 champs) :
  Rôle :             ___________
  Contexte :         ___________
  Périmètre :        ___________
  Format de sortie : ___________
  Contraintes :      ___________

BASE DE CONNAISSANCE (si applicable) :
  Document 1 : ___________ · Version : ___ · Responsable : ___
  Document 2 : ___________ · Version : ___ · Responsable : ___
  Document 3 : ___________ · Version : ___ · Responsable : ___

PREMIER TEST :
  Question de référence 1 : ___________
  Question de référence 2 : ___________
  Résultat attendu : ___________
```

Règle : si vous ne pouvez pas remplir ce modèle en 20 minutes, le Projet n'est pas encore suffisamment défini. Affinez le périmètre avant de configurer.

### 3. Checklist de capture — vos futurs Instructions de Projet

Cette semaine, notez chaque fois que vous :

- [ ] Répondez à une question qu'on vous pose régulièrement → candidat Instructions de Projet
- [ ] Reformatez un document selon un modèle récurrent → candidat Instructions de Projet
- [ ] Cherchez un document interne que vous devriez avoir sous la main → candidat Base de connaissance
- [ ] Expliquez à un nouveau collègue comment fonctionne un processus → candidat Base de connaissance
- [ ] Passez plus de 30 minutes sur une tâche de mise en forme → candidat 🔵 Optimiser

Au bout de 7 jours, vous aurez votre backlog naturel de cas d'usage — classés par fréquence et par effort.

**Règle de priorité** : commencez par le cas d'usage qui combine fréquence maximale et sensibilité minimale des données. C'est votre Projet pilote.
