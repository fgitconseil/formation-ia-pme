# Audit sémantique — M5 La méthode par niveaux
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N2/M5-methode-niveaux/script-v1.md
> Référence principale : Prompting-final.md §4-6 (progression 🟢🟡🔵🟣) + §10 (cas Marc RH)
> Date : 2026-03

---

## Affirmations correctes

- **Définition 🟢 Structurer** : "réorganiser 100% de la matière brute sans en perdre un seul élément" — conforme §4 (structuration = zéro perte, pas résumé) ✅
- **Définition 🟡 Fiabiliser** : "rendre le contenu vérifiable — chaque affirmation sensible traçable" — conforme §5 ✅
- **Définition 🔵 Optimiser** : "transformer le contenu fiabilisé en outil directement exploitable" — conforme §6 ✅
- **Définition 🟣 Industrialiser** : "intégrer dans un système organisationnel gouverné, traçable, mesurable" — conforme §9/🟣 ✅
- **Règle absolue** : "On ne saute pas d'étape. Jamais." — fil directeur du référentiel ✅
- **Erreur 1 — structurer ≠ résumer** : distinction explicite et correcte ✅
- **Erreur 2 — sauter 🟡** : "L'IA peut organiser parfaitement des informations incorrectes" — affirmation exacte sur la nature LLM ✅
- **RGPD Article 22** : droit de recours, intervention humaine, exprimer son point de vue, contester la décision — références conformes au texte réglementaire ✅
- **Prompt 🟢 de Marc** : gabarit correct (structuration + "ne supprime aucune information" + section "Points à clarifier") — conforme au prompt type §4 ✅
- **Prompt 🟡 de Marc** : citations de passages + signalement des absences + "N'effectue aucune hypothèse implicite" — conforme au prompt de vérification §5 ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Marc vient d'obtenir en 5 minutes ce qu'un juriste lui aurait dit en 45 minutes de réunion" | Section 3, clôture 🟡 | Affirmation comparative — formulation promotionnelle. Acceptable pédagogiquement si encadrée ("pour identifier les questions, pas pour remplacer la réunion") — à surveiller pour ne pas créer une attente déraisonnable |
| "Exemple de retour réel" (rapport d'écarts) | Section 3, slide rapport d'écarts | ⚠️ L'annotation dit "Exemple de retour réel" mais il s'agit d'un exemple simulé dans le script — à marquer explicitement [exemple simulé] |

---

## Confusions conceptuelles détectées

### ✅ Structurer ≠ résumer — Distinction irréprochable

C'est le point le plus contre-intuitif de la méthode. Le script le pose 3 fois : dans la définition de 🟢, dans la règle absolue, et dans l'Erreur 1. La répétition est volontaire et pédagogiquement efficace.

---

### ✅ LLM = prédiction, pas vérité — Pas de confusion

Erreur 2 : "L'IA peut organiser parfaitement des informations incorrectes." Cette formulation est exacte sur la nature du LLM sans tomber dans le registre anxiogène ou technique.

---

### ⚠️ MINEUR — Rapport d'écarts présenté comme "exemple de retour réel"

**Problème :**
La note de slide dit "Exemple de retour réel" mais le rapport d'écarts (RGPD Article 22) est un exemple simulé construit pour le script. Deux risques :
1. L'apprenant pourrait croire que l'IA produit systématiquement ce niveau de précision
2. En cas de vérification, la formulation "retour réel" est techniquement inexacte

**Correction :**
Remplacer "Exemple de retour réel" par "Exemple de réponse simulée" ou simplement supprimer cette note de slide.

**Impact sur le score : -3 points**

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Savoir quel niveau de la progression choisir pour chaque tâche |
| Description | ✅ | Les 2 prompts de Marc sont des exemples de description précise (rôle, intention, format, contraintes) |
| Discernment | ✅ | Erreur 2 : ne pas diffuser un livrable 🟢 non vérifié — évaluer avant d'utiliser |
| Diligence | ✅ | Règle absolue : ne jamais sauter 🟡 même sous pression deadline |

**Alignement : 4/4 compétences → excellent**

---

## Concepts techniques N3

Non applicable — M5 est un module N2. Aucun concept technique N3 attendu.

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 13 | RGPD Art.22 correct · Progression conforme §4-6 · "5 min vs 45 min juriste" légèrement promotionnel (-2) |
| Zéro confusion conceptuelle | 15 | 13 | "Exemple de retour réel" = exemple simulé non marqué (-2) · Toutes autres distinctions correctes |
| Exemples simulés clairement marqués | 10 | 8 | Rapport d'écarts Marc non marqué [simulé] malgré annotation "retour réel" (-2) |
| Alignement 4D Anthropic | 5 | 5 | 4/4 compétences adressées ✅ |
| Concepts techniques N3 | 5 | 5 | Non applicable N2 → bonus automatique ✅ |
| **Total** | **50** | **44** | |

---

## Décision

**⚠️ QUELQUES IMPRÉCISIONS — Score 44/50 · Corrections avant tournage**

Le script M5 est sémantiquement solide. La progression 🟢🟡🔵🟣 est présentée avec exactitude, les définitions sont fidèles au référentiel, et les prompts de Marc sont des modèles directement conformes aux gabarits de Prompting-final.md.

**Corrections avant tournage :**

1. **🟡 [RECOMMANDÉ]** Remplacer "Exemple de retour réel" par "Exemple simulé" pour le rapport d'écarts RGPD — annotation dans la note de slide uniquement, pas dans le texte lu
2. **🟢 [OPTIONNEL]** Nuancer "5 minutes vs 45 minutes de réunion juriste" : l'IA identifie les questions, elle ne remplace pas le juriste — une phrase suffit ("pour préparer la réunion, pas la remplacer")

**Effort estimé : 10 minutes**
