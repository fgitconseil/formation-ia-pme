# Grille d'évaluation qualité — Formation IA Générative
> Version : 1.0 · Usage : avant tout passage en statut "validé pour tournage"
> À appliquer sur chaque module · Seuil minimum : 80/100

---

## Comment utiliser cette grille

1. Pour chaque critère : attribuer le score indiqué si OK, 0 sinon
2. Score ≥ 80 → module validé pour tournage (vFinal)
3. Score 60-79 → corrections requises avant tournage
4. Score < 60 → réécriture partielle nécessaire

---

## Dimension 1 — Conformité au référentiel (25 pts)

| # | Critère | Score max | Score obtenu |
|---|---------|-----------|--------------|
| 1.1 | Le contenu est cohérent avec Prompting-final.md (section correspondante) | 10 | |
| 1.2 | Aucun fait, chiffre ou référence légale non vérifiable n'est présenté comme certain | 10 | |
| 1.3 | La compétence cible (C1-C6) est clairement adressée | 5 | |
| **Sous-total** | | **25** | |

**Comment vérifier 1.1 :** ouvrir Prompting-final.md section correspondante et comparer les points clés.
**Comment vérifier 1.2 :** chercher les mentions RGPD, AI Act, articles de loi — sont-ils marqués "exemple simulé" ou présentés comme vrais ?

---

## Dimension 2 — Qualité pédagogique (30 pts)

| # | Critère | Score max | Score obtenu |
|---|---------|-----------|--------------|
| 2.1 | L'accroche est ancrée dans une situation réelle PME (pas un cours magistral) | 10 | |
| 2.2 | Chaque concept abstrait est illustré par un exemple concret | 8 | |
| 2.3 | Les prompts cités sont copiables/utilisables directement | 7 | |
| 2.4 | La transition vers le module suivant est explicite et crée l'envie | 5 | |
| **Sous-total** | | **30** | |

**Comment vérifier 2.3 :** copier chaque prompt du module dans un LLM — produit-il quelque chose d'utile ?

---

## Dimension 3 — Ton et accessibilité (20 pts)

| # | Critère | Score max | Score obtenu |
|---|---------|-----------|--------------|
| 3.1 | Aucun terme technique non expliqué (LLM, RAG, token, etc.) | 8 | |
| 3.2 | Phrases courtes — pas de paragraphes > 4 lignes à l'oral | 7 | |
| 3.3 | Aucun anglicisme non traduit ou expliqué | 5 | |
| **Sous-total** | | **20** | |

**Liste des termes à surveiller :** LLM, RAG, token, embedding, fine-tuning, prompt injection,
hallucination (ok si expliqué), cut-off (ok si expliqué), MCP, API, artifact, skill

---

## Dimension 4 — Format et template (15 pts)

| # | Critère | Score max | Score obtenu |
|---|---------|-----------|--------------|
| 4.1 | Les 5 sections du template sont présentes et dans l'ordre | 5 | |
| 4.2 | Les métadonnées sont complètes (compétence, prérequis, module suivant) | 5 | |
| 4.3 | Les notes de production sont renseignées | 5 | |
| **Sous-total** | | **15** | |

---

## Dimension 5 — Durée et rythme (10 pts)

| # | Critère | Score max | Score obtenu |
|---|---------|-----------|--------------|
| 5.1 | Le script lu à voix haute normale dure entre 18 et 22 minutes | 7 | |
| 5.2 | Aucune section dépasse 30% du temps total (pas de déséquilibre) | 3 | |
| **Sous-total** | | **10** | |

**Comment vérifier 5.1 :** compter les mots du script · 130 mots/min à l'oral ≈ 2600 mots pour 20 min.

---

## Résultat

| Dimension | Score max | Score obtenu | % |
|-----------|-----------|--------------|---|
| 1 — Conformité référentiel | 25 | | |
| 2 — Qualité pédagogique | 30 | | |
| 3 — Ton et accessibilité | 20 | | |
| 4 — Format et template | 15 | | |
| 5 — Durée et rythme | 10 | | |
| **TOTAL** | **100** | | |

**Décision :**
- [ ] ≥ 80 → ✅ Validé pour tournage — passer à vFinal
- [ ] 60-79 → ⚠️ Corrections requises — lister ci-dessous
- [ ] < 60 → ❌ Réécriture partielle nécessaire

**Corrections à apporter :**
```
[liste ici]
```

**Évalué par :** _______________
**Date :** _______________
**Module :** _______________
