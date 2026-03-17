# Audit sémantique — M1 Comprendre l'IA Générative
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N1/M1-comprendre-llm/script-v1.md
> Référence principale : Prompting-final.md §1 (Nature du LLM, limites, règle d'or)
> Note : script court (~700 mots) — évaluation du fond disponible, longueur déjà traitée dans M1-audit-v1.md (82/100)
> Date : 2026-03

---

## Affirmations correctes

- **LLM = prédiction, pas compréhension** : "Il a appris une seule chose : quelle suite de mots est la plus probable" — conforme §1, formulation exacte ✅
- **Il ne comprend pas. Il prédit.** — dichotomie centrale du §1, posée sans ambiguïté ✅
- **Hallucination = invente avec conviction** : "L'IA invente avec conviction" — formulation pédagogique correcte, ne laisse pas entendre une intention malveillante ✅
- **Hallucination ≠ erreur volontaire** : implicite dans la formulation — "elle a fait ce qu'elle fait toujours : produire la réponse la plus plausible" ✅
- **Cut-off** : "L'IA a une date limite de connaissance" — correct, et nuancé sur l'accès web ✅
- **Cut-off ≠ ignorance totale** : "ça ne résout pas tout — ça ajoute même de la vigilance" — nuance correcte ✅
- **L'IA ne voit pas vos fichiers si vous ne les montrez pas** — techniquement exact ✅
- **L'IA n'a pas de signal spontané d'incertitude** — conforme §1 (limite du modèle statistique) ✅
- **Règle d'or** : "L'IA propose. Vous analysez. Vous validez. Vous décidez." — conforme §5, formulée dès M1 comme fil rouge ✅
- **Exemple citation juridique** : "cet article n'existe pas — L'IA n'a pas menti. Elle a fait ce qu'elle fait toujours" — formulation exacte sur la nature du phénomène ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Exemple réel : demandez à l'IA une référence juridique précise." | Section 2 | Présenté comme "exemple réel" mais construit pour le script — à marquer [exemple illustratif] pour cohérence avec le protocole |
| "80% des utilisateurs ignorent [le mécanisme de prédiction]" | Section 5, clôture | Stat présentée comme fait — non sourcée · Acceptable pédagogiquement comme ordre de grandeur, mais sans source vérifiable |

---

## Confusions conceptuelles détectées

### ✅ Hallucination ≠ erreur volontaire — Bien traitée

Le script évite soigneusement de formuler l'hallucination comme une "erreur" de l'IA ou un "mensonge". La formulation "L'IA n'a pas menti. Elle a fait ce qu'elle fait toujours" est irréprochable et anticipe l'erreur de perception la plus fréquente en N1.

---

### ✅ Cut-off ≠ ignorance totale — Nuance présente

"Certains outils ont un accès web. Mais ça ne résout pas tout — ça ajoute même de la vigilance." Cette nuance évite deux erreurs symétriques : croire que l'IA sans accès web est totalement ignorante du présent, ou croire que l'accès web la rend fiable sur l'actualité.

---

### ⚠️ MINEUR — "Exemple réel" pour la citation juridique

**Problème :**
Le script introduit "Exemple réel : demandez à l'IA une référence juridique précise. Elle va vous citer un article de loi..." — mais il s'agit d'un exemple construit pour illustrer le propos. L'annotation "réel" peut laisser entendre que l'exemple a été vécu et documenté.

**Impact :** Minime à ce stade (module N1, public non-expert). Mais en cohérence avec le protocole, mieux vaut "Exemple : demandez à l'IA..." sans "réel".

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Implication 1 : clarifier sa demande = choisir ce qu'on délègue et comment |
| Description | — | Non adressée (couvert en M4) |
| Discernment | — | Non adressée directement (couvert en M2/M3) |
| Diligence | ✅ | Implication 2 : vérifier les faits critiques · Implication 3 : garder la main |

**Alignement : 2/4 compétences — cohérent pour un module d'introduction N1**

---

## Concepts techniques N3

Non applicable — M1 est le module d'entrée N1, public sans prérequis. Aucun concept technique avancé attendu.

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 13 | LLM/prédiction/cut-off corrects ✅ · "exemple réel" non marqué simulé (-1) · "80%" non sourcé (-1) |
| Zéro confusion conceptuelle | 15 | 15 | Hallucination ≠ mensonge ✅ · Cut-off nuancé ✅ · Aucune confusion détectée |
| Exemples simulés clairement marqués | 10 | 8 | "Exemple réel" de citation juridique non marqué [illustratif] (-2) |
| Alignement 4D Anthropic | 5 | 3 | 2/4 compétences — cohérent pour module introductif N1 |
| Concepts techniques N3 | 5 | 5 | Non applicable N1 → bonus ✅ |
| **Total** | **50** | **44** | |

---

## Décision

**⚠️ QUELQUES IMPRÉCISIONS — Score 44/50 · Corrections mineures avant tournage**

Le fond de M1 est sémantiquement sain. Les formulations sur la nature du LLM, les hallucinations et la règle d'or sont précises et conformes au référentiel. Le module installe correctement les bases conceptuelles sans technicité excessive.

**Corrections avant tournage :**

1. **🟡 [RECOMMANDÉ]** Changer "Exemple réel" en "Exemple" ou "Exemple illustratif" pour la citation juridique (section 2)
2. **🟢 [OPTIONNEL]** Remplacer "80% des utilisateurs ignorent" par une formulation sans statistique : "La grande majorité des utilisateurs..." ou "Ce que la plupart des utilisateurs ignorent..."

**Note :** Ces corrections s'appliquent au script-v2.md prévu en S9 (extension à ~2300 mots). L'extension devra également ajouter des exemples concrets sur chaque implication (M1-audit-v1.md — correction bloquante).

**Effort estimé : 5 minutes lors de la rédaction de script-v2.md**
