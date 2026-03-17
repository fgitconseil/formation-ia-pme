# Audit sémantique — M11 Gouverner un dispositif IA (Guide Baseline N3)
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N3/M11-baseline-n3/guide.md
> Référence principale : Prompting-final.md §5 (supervision humaine) + §9 (agents/industrialisation) + §🟣
> Référence technique : _qualite/gaps-infographie-claude-code.md
> Date : 2026-03

---

## Affirmations correctes

- **Supervision humaine — formulation de référence** : "L'IA propose. L'humain analyse. L'humain valide. L'humain décide." — citation de Prompting-final.md §5, correctement sourcée dans le texte ✅
- **🟣 Industrialiser = système documenté, gouverné, traçable** : définition conforme §🟣 ✅
- **Gouvernance ≠ bureaucratie** : "La gouvernance n'est pas de la bureaucratie. C'est la condition pour que l'IA soit utile à grande échelle." — formulation juste et non déformatrice ✅
- **5 composants** : processus documenté · rôles définis · traçabilité · supervision humaine · KPI — liste conforme aux critères d'industrialisation du référentiel ✅
- **Rôles définis** : référent IA / utilisateur / valideur / propriétaire du Skill — répartition opérationnelle cohérente ✅
- **Traçabilité** : "Un journal de bord simple (fichier partagé, wiki, tableau) suffit" — adapté PME, sans surenchère technique ✅
- **Signaux de dégradation** : utilisateurs reformulent plus souvent, outputs corrigés davantage, contournement de l'assistant — indicateurs précurseurs valides ✅
- **Cycle d'amélioration** : amélioration des prompts (bibliothèque) + amélioration des données sources (maintenance) — deux niveaux distincts et corrects ✅
- **Checklist 10 critères 🟣** : les 10 points référencent correctement M8 (tests robustesse) et M9 (sources auditées, plan maintenance) — cohérence inter-modules ✅
- **Tableau de bord 4 dimensions** : usage · qualité · risque · adoption — cadre KPI proportionné pour PME ✅
- **"Commencez avec 2-3 indicateurs seulement"** : conseil pratique aligné avec la réalité des ressources PME ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "≥ 70% des utilisateurs formés" comme cible d'adoption | Tableau de bord Dimension 1 | Valeur cible présentée comme modèle, pas comme norme Anthropic — correct. Mentionner explicitement que ces cibles sont à adapter |
| "< 5 jours ouvrés" pour délai moyen de correction d'anomalie | Tableau de bord Dimension 2 | Valeur arbitraire présentée comme modèle — acceptable si clairement indiqué comme point de départ |

---

## Confusions conceptuelles détectées

### ✅ Usage individuel vs dispositif gouverné — Distinction centrale et correcte

Le guide structure toute son introduction sur cette distinction fondamentale :
- Dispositif non gouverné : résultats dépendent de la personne du jour
- Dispositif gouverné : résultats prévisibles, traçables, vérifiables

Cette distinction est le cœur du niveau 🟣 et elle est correctement posée.

---

### ✅ Skills d'instruction vs Skills de connaissance — Distinction maintenue

Le guide cite "Skills d'instruction" et "Skills de connaissance" dans le cycle d'amélioration (Partie 2) en cohérence avec M9. Aucune confusion avec les Skills Claude Code — hors périmètre de ce guide, ce qui est correct pour M11.

---

### ✅ Supervision humaine — Pas affaiblie au Niveau 3

Point critique : certaines formations avancées laissent entendre qu'au niveau expert, la supervision humaine est moins nécessaire. M11 fait l'inverse :

> "Cette règle ne s'assouplit pas au Niveau 3 — elle se formalise."

Formulation irréprochable, conforme §5.

---

### 🟢 MINEUR — Framework 4 couches (L1→L4) absent

**Contexte :**
`gaps-infographie-claude-code.md` identifie comme "Gap MINEUR" l'absence du framework 4 couches de l'infographie Claude Code (CLAUDE.md → Skills → Hooks → Sub-agents) dans M11.

**Évaluation :**
L'absence est justifiée pour V1 : M11 cible des référents IA PME, pas des développeurs. Le framework 4 couches est une architecture technique. Son intégration serait pertinente en tant qu'analogie organisationnelle ("un dispositif mature = 4 couches") mais reste optionnelle.

**Décision :** Non bloquant. Mentionner en S9 si M10 est intégré (IN).

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | ✅ | Gouverner = définir ce que l'on délègue, à qui, avec quelles contraintes |
| Description | — | Non adressée directement (couvert en M8/M9) |
| Discernment | ✅ | KPI + audit sources + checklist 10 critères |
| Diligence | ✅ | Supervision humaine formalisée + cycle d'amélioration continue |

**Alignement : 3/4 compétences → conforme pour un module de gouvernance**

---

## Concepts techniques N3

| Concept | Statut | Note |
|---------|--------|------|
| CLAUDE.md comme mémoire persistante | ✅ | Référencé via M8 (prérequis) |
| Hiérarchie CLAUDE.md | — | Non applicable M11 (M8) |
| Skills : distinction claude.ai vs Claude Code | — | Hors périmètre M11 — correct |
| Hooks | — | Hors périmètre M11 V1 — acceptable |
| Supervision humaine formalisée | ✅ | Composant central du guide |
| Architecture 4 couches | ❌ | Absent — gap mineur identifié, optionnel S9 |
| KPI mesurables | ✅ | Tableau de bord 4 dimensions — opérationnel |

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 15 | Citation §5 correcte · 5 composants conformes · Valeurs cibles KPI marquées "modèle" ✅ |
| Zéro confusion conceptuelle | 15 | 15 | Supervision humaine N3 non affaiblie ✅ · Skills distincts ✅ · Aucune confusion détectée |
| Exemples simulés clairement marqués | 10 | 10 | Tableau de bord et checklist présentés comme modèles ✅ · Pas d'exemples simulés de cas réels |
| Alignement 4D Anthropic | 5 | 4 | 3/4 compétences · Description non adressée (justifié pour module gouvernance) |
| Concepts techniques N3 corrects | 5 | 4 | Supervision ✅ · KPI ✅ · Architecture 4 couches absente (-1) |
| **Total** | **50** | **48** | |

---

## Décision

**✅ VALIDÉ SÉMANTIQUEMENT — Score 48/50**

Le guide M11 est sémantiquement excellent. La citation de Prompting-final.md §5 est correcte et bien placée. Les 5 composants sont conformes au référentiel. La distinction usage individuel / dispositif gouverné est précise. Le point le plus fort : la supervision humaine est renforcée au Niveau 3, pas assouplie — ce qui contrecarre un risque fréquent dans les formations avancées.

**Aucune correction bloquante.**

**Correction optionnelle S9 :**
- Si M10 est intégré (décision S4), ajouter une note sur le framework 4 couches (CLAUDE.md → Skills → Hooks → Agents) comme modèle d'architecture pour les équipes techniques avancées.
