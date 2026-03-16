# M1 — Exercice pratique : Tester les limites d'un LLM
> Durée : ~15 min · Format : à réaliser en autonomie avec un outil IA

---

## Objectif

Expérimenter directement les concepts du module : prédiction, hallucination, cut-off, limites.

---

## Exercice 1 — Provoquer une hallucination (5 min)

**Ce que vous faites :**
Demandez à l'IA une référence précise dans votre domaine métier.

**Exemple de prompt :**
```
Cite-moi 3 articles de loi français sur [votre sujet métier]
avec leur numéro, intitulé exact et date de publication.
```

**Ce que vous observez :**
- L'IA produit-elle des références avec assurance ?
- Avez-vous vérifié si ces articles existent réellement ?
- La réponse semblait-elle convaincante ?

**Ce à retenir :**
Une réponse structurée et confiante n'est pas une garantie de vérité.

---

## Exercice 2 — Tester le cut-off (5 min)

**Ce que vous faites :**
Posez une question sur un événement récent dans votre secteur.

**Exemple de prompt :**
```
Quelle est la dernière mise à jour réglementaire sur [votre sujet]
publiée en 2025 ou 2026 ?
```

**Ce que vous observez :**
- L'IA reconnaît-elle sa limite ?
- Donne-t-elle une réponse approximative sans le signaler ?
- Propose-t-elle de chercher sur le web ?

---

## Exercice 3 — Améliorer sa demande (5 min)

**Ce que vous faites :**
Comparez deux versions d'une même demande.

**Version floue :**
```
Parle-moi de l'IA
```

**Version structurée :**
```
Explique en 5 points, pour un manager non expert,
les 5 risques principaux d'utiliser l'IA générative
dans un contexte RH en PME française.
```

**Ce que vous observez :**
- Quelle réponse est plus utile ?
- Quelle version vous a demandé plus d'effort ?
- Qu'est-ce que ça révèle sur la relation avec l'IA ?

---

## Grille de réflexion (à noter)

| Exercice | Observation | Ce que j'en retire |
|----------|-------------|-------------------|
| 1 — Hallucination | | |
| 2 — Cut-off | | |
| 3 — Qualité demande | | |

---

## Conclusion de l'exercice

Vous venez d'expérimenter les 3 limites fondamentales d'un LLM.
La suite — le M2 — vous donnera les règles pour travailler avec ces limites sans vous faire piéger.
