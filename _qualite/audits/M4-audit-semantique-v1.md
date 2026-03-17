# Audit sémantique — M4 Les 4 types de prompts
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N2/M4-4types-prompts/script-v1.md
> Référence principale : Prompting-final.md §7 (Les 4 types de prompts)
> Note : script court (~1450 mots) — évaluation du fond disponible, longueur déjà traitée dans M4-audit-v1.md (89/100)
> Date : 2026-03

---

## Affirmations correctes

- **4 types — Production / Exploration / Structuration / Vérification** : nomenclature conforme §7 ✅
- **Production = livrable défini** : "vous savez exactement ce que vous voulez obtenir" — conforme §7 ✅
- **Exploration = cartographier avant de décider** : "vous ne savez pas encore ce que vous voulez produire" — conforme §7 ✅
- **Structuration = organiser sans rien perdre** : "zéro perte d'information" — conforme §4 (règle 🟢) ✅
- **Vérification = contrôler selon des critères fournis** : "la valeur d'une vérification dépend entièrement des critères que vous fournissez" — formulation précise et exacte ✅
- **Gabarit production (6 champs)** : Rôle / Objectif / Contexte / Données / Format / Contraintes — conforme aux gabarits de référence ✅
- **Gabarit exploration** : inclusion de SWOT/PESTEL comme cadres optionnels — correct (ce sont des frameworks métier reconnus, pas des inventions) ✅
- **Gabarit structuration** : "Ne rien supprimer — ajouter une section 'Points à clarifier'" — conforme §4 (gabarit de structuration) ✅
- **Gabarit vérification** : "Cite les passages · Si absent, indique-le · Signale les zones d'incertitude" — conforme §5 (gabarit de vérification) ✅
- **Avertissement vérification par l'IA** : "ne remplace pas la vérification par un expert humain" — formulation exacte et importante ✅
- **Cut-off dans vérification** : "L'IA peut rater une obligation légale récente (cut-off)" — correctement intégré dans l'avertissement ✅
- **Article 22 RGPD dans exemple gabarit** : utilisé comme critère d'exemple dans un prompt simulé — correctement contextualisé, pas présenté comme résultat garanti ✅
- **Exemples simulés** : tous les exemples (manager, gabarits) présentés comme modèles d'utilisation ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Un manager qui sait distinguer ces 4 intentions obtient en moyenne un résultat utilisable dès le premier prompt. Celui qui ne les distingue pas passe en moyenne 3 tentatives." | Section 6, synthèse | Statistique comparative présentée comme un fait empirique — non sourcée. Acceptable comme ordre de grandeur pédagogique, mais à présenter comme observation terrain, pas comme mesure |
| "SWOT / PESTEL / matrice risques-impact" dans le gabarit exploration | Section 3 | Correct comme frameworks — mais SWOT et PESTEL ne sont pas expliqués dans M4. L'audit structurel M4-audit-v1.md (89/100) identifie cette absence comme correction bloquante pour script-v2.md |

---

## Confusions conceptuelles détectées

### ✅ Production ≠ Exploration — Distinction centrale, bien traitée

Le cas du manager (analyse de 3 offres) illustre exactement la confusion type. La phrase clé : "Il avait besoin d'un prompt d'exploration. Il a utilisé un prompt de production." — formulation parfaite qui ancre la distinction dans une situation réelle.

---

### ✅ Structuration ≠ résumé — Anticipée correctement

"Ce n'est pas créer. Vous lui donnez une matière brute et vous lui demandez de la mettre en ordre." La distinction est présente dès M4 en cohérence avec M5 (où elle sera approfondie comme "erreur fréquente 1"). Bonne continuité pédagogique.

---

### ✅ Vérification ≠ demande de confirmation à l'IA

L'avertissement est explicite : "Ne pas re-demander à l'IA — elle peut confirmer une erreur avec la même confiance." Cette formulation est conforme §1 (nature probabiliste du LLM) et évite la confusion fréquente entre "re-prompter pour vérifier" et "vérifier dans une source externe".

---

### ⚠️ MINEUR — SWOT et PESTEL non expliqués

**Problème :**
Le gabarit d'exploration mentionne "Cadre d'analyse : SWOT / PESTEL / matrice risques-impact" sans définir ces acronymes. Pour un public N2 (ayant validé N1), ces frameworks peuvent être inconnus.

**Correction à apporter en script-v2.md :**
Ajouter une ligne d'explication : "SWOT (forces/faiblesses/opportunités/menaces), PESTEL (environnement macro) ou demander à l'IA de proposer un cadre adapté."

**Note :** Cette correction est déjà identifiée comme bloquante dans M4-audit-v1.md (89/100). Non répété ici, simplement confirmé.

---

### ✅ Vérification par l'IA = premier filtre, pas certificat

L'avertissement "La vérification par l'IA est un premier filtre, pas un certificat de conformité" est pédagogiquement excellent et exact. Il prévient la sur-confiance dans la vérification automatisée.

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Choisir le bon type de prompt = déléguer la bonne intention |
| Description | ✅ | Les 4 gabarits = comment décrire précisément sa demande |
| Discernment | ✅ | Avertissement vérification : ne pas prendre le résultat IA comme certitude |
| Diligence | ✅ | "Systematiser la relecture humaine" implicite dans l'avertissement vérification |

**Alignement : 4/4 compétences → excellent pour un module N2**

---

## Concepts techniques N3

Non applicable — M4 est un module N2. Aucun concept technique avancé attendu. Les gabarits sont intentionnellement opérationnels, pas techniques.

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 14 | 4 types conformes §7 ✅ · Gabarits corrects ✅ · "1er prompt / 3 tentatives" non sourcé (-1) |
| Zéro confusion conceptuelle | 15 | 13 | Production ≠ Exploration ✅ · Vérification ≠ re-prompter ✅ · SWOT/PESTEL non expliqués (-2) |
| Exemples simulés clairement marqués | 10 | 10 | Tous les exemples présentés comme modèles de gabarits ✅ · Article 22 dans prompt simulé bien contextualisé ✅ |
| Alignement 4D Anthropic | 5 | 5 | 4/4 compétences adressées ✅ |
| Concepts techniques N3 | 5 | 5 | Non applicable N2 → bonus ✅ |
| **Total** | **50** | **47** | |

---

## Décision

**✅ VALIDÉ SÉMANTIQUEMENT — Score 47/50**

Le fond de M4 est excellent. Les 4 types sont définis avec précision, les gabarits sont conformes au référentiel, les distinctions critiques (production ≠ exploration, vérification ≠ re-prompter) sont bien posées. L'avertissement sur la vérification par l'IA est un des meilleurs passages sémantiques de la formation.

**Corrections à intégrer dans script-v2.md (S9) :**

1. **🟡 [RECOMMANDÉ]** Expliquer SWOT et PESTEL en une ligne dans le gabarit exploration — correction déjà identifiée dans M4-audit-v1.md comme bloquante
2. **🟢 [OPTIONNEL]** Reformuler la statistique "1er prompt vs 3 tentatives" en observation terrain : "Dans la majorité des cas, choisir le bon type dès le départ évite 2-3 allers-retours inutiles"

**Effort estimé : 10 minutes lors de la rédaction de script-v2.md**
