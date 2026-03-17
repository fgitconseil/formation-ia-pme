# Audit sémantique — M6 Capitaliser sa connaissance
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N2/M6-connaissance-capitalisee/script-v1.md
> Référence principale : Prompting-final.md §8 (Données et RAG)
> Date : 2026-03

---

## Affirmations correctes

- **Mémoire non persistante par défaut** : "comportement par défaut de l'IA : elle n'a pas de mémoire persistante entre les sessions" — conforme §1 (nature du LLM) ✅
- **Projects = contexte persistant** : instructions permanentes + documents de référence + historique — description correcte de la fonctionnalité claude.ai ✅
- **Artifacts = livrable structuré** : "objet autonome, pas une explication" — distinction claire et juste ✅
- **RAG — formulation clé** : "Le RAG garantit l'accessibilité contextuelle de vos documents. Il ne garantit pas l'exactitude." — citation quasi-littérale de Prompting-final.md §8 ✅
- **RAG — risque sources contradictoires** : "Si vos documents sont contradictoires — plusieurs versions d'une même procédure — l'IA peut mélanger les sources." — conforme §8 ✅
- **RAG — risque source obsolète** : "Si un document est obsolète, l'IA peut citer une règle qui ne s'applique plus." — conforme §8 ✅
- **Discipline 🟡 indispensable** : "plus vos données sont accessibles à l'IA, plus la vérification humaine est critique" — conforme §8 ✅
- **Skills = instructions réutilisables** : définition correcte dans le périmètre claude.ai (pas de confusion Skills/RAG) ✅
- **Tableau récapitulatif 3 outils** : Projects / Artifacts / RAG-Skills — regroupement pédagogiquement cohérent ✅
- **Exemples concrets** : communiqué PME, charte Marc, brief prestataire — tous présentés comme illustrations, non comme résultats garantis ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Un historique de conversation. Les échanges précédents restent disponibles" | Section 2, Projects | Vrai pour Projects claude.ai — mais la profondeur de l'historique accessible dépend de la longueur de contexte du modèle. Affirmation juste mais mérite la nuance "dans les limites du contexte" |
| "Vous créez le Skill une fois. Vous l'appelez en une ligne dans n'importe quelle conversation." | Section 4, Skills | Correct pour claude.ai Skills — aucun problème fonctionnel |

---

## Confusions conceptuelles détectées

### ✅ RAG ≠ Skills — Distinction correcte

Le script présente le RAG et les Skills dans la même section ("donner de la connaissance à l'IA") mais les différencie clairement :
- RAG = architecture technique, connectée à une base documentaire, recherche automatique
- Skills = ensemble d'instructions sauvegardées, appelées à la demande

Cette distinction est juste. La présentation groupée est justifiée pédagogiquement (même finalité, moyens différents).

---

### ✅ Skills claude.ai — Périmètre N2 correct

Le script utilise "Skills" pour désigner les instructions réutilisables claude.ai uniquement. À ce niveau N2, ne pas mentionner les Skills Claude Code est correct — c'est le périmètre M9/M10 (N3). Aucune confusion créée.

---

### ✅ Projects ≠ mémoire à long terme illimitée

La formulation "chaque conversation commence là où la précédente s'est arrêtée" est légèrement optimiste mais acceptable dans un contexte pédagogique N2. La nuance sur les limites de contexte est optionnelle à ce niveau.

---

### ⚠️ MINEUR — Exemple assistant RH et convention collective

**Affirmation :** "un assistant RH connecté à votre convention collective, votre règlement intérieur, vos procédures de recrutement. Quand un manager pose une question sur les congés, l'IA répond à partir de votre convention."

**Nuance à apporter :**
Le RAG sélectionne les passages pertinents — il ne garantit pas que la réponse sera juste si la convention est ambiguë ou si plusieurs articles se contredisent. La phrase suivante ("Il ne garantit pas l'exactitude") corrige partiellement, mais l'exemple lui-même crée une image de fiabilité totale.

**Décision :** Acceptable en l'état car l'avertissement suit immédiatement. Non bloquant.

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Capitaliser = déléguer mieux (Projects, Skills) |
| Description | — | Non adressée explicitement |
| Discernment | ✅ | Avertissement RAG : qualifier les sources avant de les connecter |
| Diligence | ✅ | "Nettoyez régulièrement : un Project encombré produit des réponses moins précises" |

**Alignement : 3/4 compétences → conforme**

---

## Concepts techniques N3

Non applicable — M6 est un module N2. Les concepts RAG et Skills sont présentés à un niveau d'introduction intentionnel. L'approfondissement est délégué à M9 (N3).

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 14 | RAG parfaitement aligné §8 · Formulation historique Projects légèrement idéalisée (-1) |
| Zéro confusion conceptuelle | 15 | 15 | RAG ≠ Skills ✅ · Skills périmètre N2 correct ✅ · Aucune confusion détectée |
| Exemples simulés clairement marqués | 10 | 9 | Exemples Projects et Artifacts bien présentés comme illustrations · Exemple assistant RH légèrement ambigu avant l'avertissement (-1) |
| Alignement 4D Anthropic | 5 | 4 | 3/4 compétences adressées |
| Concepts techniques N3 | 5 | 5 | Non applicable N2 → bonus ✅ |
| **Total** | **50** | **47** | |

---

## Décision

**✅ VALIDÉ SÉMANTIQUEMENT — Score 47/50**

Le script M6 est un des plus rigoureux sémantiquement de la formation. La formulation RAG est quasi-littéralement conforme à Prompting-final.md §8. La distinction RAG/Skills est propre. L'avertissement sur la discipline 🟡 est bien positionné.

**Corrections optionnelles (non bloquantes) :**

1. **🟢 [OPTIONNEL]** Après l'exemple assistant RH et convention collective, ajouter une demi-phrase : "à condition que vos sources soient à jour et cohérentes" — renforce l'avertissement qui suit
2. **🟢 [OPTIONNEL]** Préciser "dans les limites du contexte disponible" pour l'historique Projects — nuance technique optionnelle pour N2

**Effort estimé : 5 minutes si corrections jugées utiles**
