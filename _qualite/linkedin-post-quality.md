# Grille qualité — Posts LinkedIn
> Basée sur l'analyse des posts performants observés (mars 2026)
> Usage : évaluer et améliorer les variantes post-linkedin.md de chaque module

---

## Anatomie des posts qui fonctionnent

### Post 1 — Claude Code (fort reach technique)
**Structure :**
- Affirmation contre-intuitive courte (1 ligne)
- Correction immédiate ("Oubliez cette équation")
- Diagnostic du problème courant
- Framework numéroté (4 couches)
- Étapes actionnables (5 points)
- CTA structuré (like + commentaire + connexion)

### Post 2 — Gartner/MIT (fort reach décideurs)
**Structure :**
- Stat choc en ouverture ("60% des projets IA abandonnés")
- Source crédible immédiate
- Pattern observé terrain ("depuis 20 ans")
- Diagnostic en 3 éléments
- Conclusion lapidaire forte
- Sources en fin de post

**Points communs des deux :**
1. Première ligne = accroche choc (stat, affirmation contre-intuitive) — jamais une question
2. Paragraphes de 2-3 lignes maximum
3. Un seul emoji par ligne si utilisé (jamais en milieu de phrase)
4. Conclusion = vérité générale forte ("L'IA amplifie les compétences. Elle n'en crée pas.")
5. CTA clair et segmenté (pas de "cliquez ici")
6. Crédibilité terrain explicite

---

## Grille d'évaluation LinkedIn /40

| Critère | Max | Description |
|---------|-----|-------------|
| **Accroche** | 10 | |
| L1.1 Première ligne choc | 5 | Stat, affirmation contre-intuitive, ou constat terrain percutant |
| L1.2 Pas de question rhétorique | 3 | Les questions rhétoriques réduisent le reach |
| L1.3 Pas de "Je" en première ligne | 2 | Commencer par le sujet, pas par soi |
| **Corps** | 15 | |
| L2.1 Paragraphes courts (max 3 lignes) | 5 | Lisibilité mobile |
| L2.2 Un exemple ou cas concret | 5 | Ancre terrain |
| L2.3 Structure visible (liste, numérotation, ou blanc) | 5 | Scannabilité |
| **Conclusion** | 10 | |
| L3.1 Phrase de synthèse mémorable | 5 | La vérité générale que le lecteur va retenir |
| L3.2 Transition vers l'action ou la réflexion | 5 | Pas de "en conclusion..." — une vraie vérité |
| **CTA** | 5 | |
| L4.1 CTA présent et clair | 3 | Lien / commentaire / partage |
| L4.2 CTA segmenté si besoin | 2 | "PME uniquement" / "si vous développez avec Claude" |

**Seuil : 30/40 pour publication**

---

## Les 5 erreurs fréquentes dans nos variantes

### ❌ Erreur 1 — Accroche académique
Mauvais : *"Dans ce module, nous allons explorer les 4 types de prompts..."*
Bon : *"Vous utilisez l'IA depuis 6 mois. Vous avez probablement le même prompt depuis 6 mois."*

### ❌ Erreur 2 — Question rhétorique en ouverture
Mauvais : *"Saviez-vous que 80% des employés utilisent l'IA sans méthode ?"*
Bon : *"80% des employés utilisent l'IA sans méthode. C'est Gartner qui le dit."*

### ❌ Erreur 3 — Paragraphes trop longs
Mauvais : 6-8 lignes sans espace
Bon : 2-3 lignes max, espacement généreux

### ❌ Erreur 4 — Conclusion molle
Mauvais : *"J'espère que ce post vous a aidé !"*
Bon : *"L'IA amplifie les compétences. Elle n'en crée pas."* (ou une vérité du même niveau)

### ❌ Erreur 5 — Absence de crédibilité terrain
Mauvais : Affirmation générique sans ancrage
Bon : *"Voici ce que j'observe depuis 3 ans en accompagnant des PME françaises..."*

---

## Prompt de révision post LinkedIn pour Claude Code

```
Lis _qualite/linkedin-post-quality.md (grille et erreurs fréquentes).
Lis le fichier post-linkedin.md du module [Mxx].

Pour chaque variante (A, B, C) :
1. Évalue selon la grille /40
2. Identifie les erreurs fréquentes présentes
3. Propose une version améliorée si score < 30

Format de sortie :
## Variante A — Score : XX/40
Erreurs détectées : [liste]
Version améliorée : [texte]

## Variante B — ...
## Variante C — ...
```

---

## Modèles d'accroches performantes (à adapter par module)

**Style stat choc :**
*"95% des pilotes IA en PME ne passent jamais en production. Ce n'est pas la technologie qui est en cause."*

**Style affirmation contre-intuitive :**
*"L'IA ne vous fait pas gagner du temps. Mal utilisée, elle vous en fait perdre."*

**Style constat terrain :**
*"J'ai relu 50 emails produits avec l'IA cette semaine. La moitié contenait des erreurs factuelles non détectées."*

**Style rupture d'équation :**
*"IA générative = gain de productivité."*
*"Oubliez cette équation. Elle est périmée — ou plutôt, elle est incomplète."*

---

## Calendrier de publication recommandé

| Semaine | Module | Variante recommandée | Raison |
|---------|--------|---------------------|--------|
| S4 | M1 | C — Storytelling | Premier post : établir l'humain derrière la formation |
| S5 | M1 | A — Court | Relance après Aristid : message condensé |
| S6 | M2 | C — Storytelling appel d'offres | Histoire terrain = fort engagement |
| S7 | M1 | B — Carrousel | Éducatif = fort reach organique |
| S8 | M2 | B — Carrousel risques | Décideurs = bon timing pré-lancement |
| S10 | M5 | A — Court méthode | Teasing avant lancement |
| S11 | M4 | C — Storytelling directeur commercial | Avant-dernière semaine |
| S12 | — | Post de lancement dédié | Annonce go live |
