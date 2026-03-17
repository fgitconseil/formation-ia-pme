# Audit sémantique — M3 Premiers réflexes : Checklist Niveau 1
> Protocole : _qualite/audit-semantique-protocol.md — ADAPTÉ (checklist, pas script)
> Source auditée : content/modules/N1/M3-baseline-n1/checklist.md
> Référence principale : Prompting-final.md §1 (nature LLM) + §2 (gouvernance)
> Note d'adaptation : M3 est une checklist de réflexes professionnels, pas un script vidéo.
> L'audit vérifie : conformité des recommandations au référentiel · pas de conseil contradictoire · niveau adapté N1.
> Date : 2026-03

---

## Affirmations correctes

- **Point 1 — Clarifier son intention** : "Un LLM répond à la question posée. Une intention floue produit une réponse floue." — conforme §1 (nature probabiliste) ✅
- **Point 2 — Filtre des 3 questions** : public / identifiable / avantage concurrentiel — conforme §2 (protection des données, règle d'or exfiltration) ✅
- **Point 3 — Niveau de risque et outil adapté** : tableau sensibilité faible/moyenne/élevée — conforme §2 (distinction instances publiques vs entreprise) ✅
- **Point 4 — Itérer, ne pas répéter** : "Re-demander la même chose produit la même réponse" — exact sur la nature du LLM ✅
- **Point 5 — Exiger les sources** : "l'IA peut inventer des références avec conviction" — conforme §1 (hallucination) + "force l'IA à signaler l'absence de source" — mécanisme correct ✅
- **Point 6 — Autoriser explicitement "je ne sais pas"** : "Par défaut, un LLM produit toujours une réponse. Il ne signale pas spontanément son incertitude." — conforme §1 ✅
- **Point 7 — Ne pas ajouter de données sensibles en cours d'échange** : "La session reste ouverte et les données restent dans le contexte." — exact sur le fonctionnement du contexte conversationnel ✅
- **Point 8 — Vérifier dans une source primaire** : "L'IA peut confirmer une erreur avec la même assurance qu'une vérité." — conforme §1 (nature probabiliste) ✅
- **Point 9 — Garder la main** : "L'IA propose. L'humain décide. La responsabilité reste toujours du côté de l'émetteur." — citation quasi-littérale §5 ✅
- **Point 10 — Capitaliser** : "Un bon prompt est un actif." — conforme §6 (capitalisation 🔵) et anticipe M6 ✅
- **Mémo final** : "AVANT → PENDANT → APRÈS" — structure cohérente avec les 10 points ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Certains [outils] utilisent les conversations pour améliorer les modèles" | Point 3, colonne "LLM public acceptable" | Implicite dans le tableau — exact pour certains outils gratuits (ChatGPT free tier), mais pas universel. La note "Vérifier la politique de l'instance" (point 3) compense cette imprécision ✅ |

---

## Conformité des recommandations au référentiel

Chaque point de la checklist a été vérifié contre les sections correspondantes de Prompting-final.md :

| Point | Ancrage référentiel | Conformité |
|-------|---------------------|-----------|
| 1 — Clarifier intention | §1 (nature LLM) | ✅ |
| 2 — Filtre données | §2 (exfiltration) | ✅ |
| 3 — Bon outil / niveau risque | §2 (instances sécurisées) | ✅ |
| 4 — Itérer | §4 (méthode d'itération) | ✅ |
| 5 — Citer sources | §5 (fiabilisation) | ✅ |
| 6 — "Je ne sais pas" | §1 (limites du LLM) | ✅ |
| 7 — Pas de données en cours | §2 (gestion du contexte) | ✅ |
| 8 — Source primaire | §1 + §5 | ✅ |
| 9 — Garder la main | §5 (supervision humaine) | ✅ |
| 10 — Capitaliser | §6 (🔵 Optimiser) | ✅ |

**10/10 points conformes au référentiel.**

---

## Confusions conceptuelles détectées

### ✅ Aucune confusion détectée

La checklist est construite sur des mécanismes — pas des analogies pouvant être mal comprises. Chaque "pourquoi" est une explication fonctionnelle du comportement du LLM, non une approximation.

---

### ✅ "Source primaire" vs "re-demander à l'IA" — Distinction correcte

Point 8 : "Vérifiez dans une source officielle — **pas en redemandant à l'IA** — elle peut confirmer une erreur avec la même confiance." Cette distinction est la plus importante du bloc "Après" et elle est formulée explicitement. ✅

---

### ✅ Niveau adapté N1 — Vérifié

Aucun concept N2 ou N3 n'est présent. La checklist se limite aux réflexes fondamentaux. Les références à M6 (point 10 : bibliothèque de prompts) sont intentionnelles — elles créent un pont vers N2 sans aller trop loin.

---

## Alignement 4D Anthropic

| Compétence | Présente | Points |
|-----------|---------|--------|
| Delegation | ✅ | Point 1 : clarifier avant de déléguer |
| Description | ✅ | Points 4/5/6 : décrire précisément ce qu'on attend (itérer, citer sources, autoriser incertitude) |
| Discernment | ✅ | Points 8/9 : évaluer avant de diffuser |
| Diligence | ✅ | Points 2/3/7 : protéger les données + contrôle humain systématique |

**Alignement : 4/4 compétences — remarquable pour une checklist N1**

---

## Concepts techniques N3

Non applicable — M3 est le Baseline N1. Aucun concept technique avancé attendu ni présent. La checklist est volontairement agnostique des outils avancés (RAG, Skills, agents).

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 15 | 10/10 points conformes §1/§2/§5 ✅ · Tableau sensibilité correctement nuancé ✅ |
| Zéro confusion conceptuelle | 15 | 15 | Aucune confusion détectée ✅ · "Source primaire vs re-demander à l'IA" parfaitement distingué ✅ |
| Exemples simulés clairement marqués | 10 | 10 | Les signaux d'alerte sont des situations génériques, pas des exemples simulés présentés comme réels ✅ |
| Alignement 4D Anthropic | 5 | 5 | 4/4 compétences adressées ✅ |
| Concepts techniques N3 | 5 | 5 | Non applicable N1 → bonus ✅ |
| **Total** | **50** | **50** | |

---

## Décision

**✅ VALIDÉ SÉMANTIQUEMENT — Score 50/50**

La checklist M3 obtient le score sémantique parfait. Chaque point est mécanistiquement exact, ancré dans le référentiel et formulé pour un public N1 sans technicité. Les formulations de prompts (points 5 et 6) sont directement conformes aux gabarits de Prompting-final.md.

C'est le document de référence terrain de la formation — celui qu'un apprenant va utiliser au quotidien, indépendamment du reste du parcours.

**Aucune correction requise.**
