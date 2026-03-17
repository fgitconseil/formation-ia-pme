# Validation finale transversale — 2026-03
> Session NotebookLM + Gemini — formation complète M1→M11
> Sources NotebookLM : 49 (44 fichiers + 4 REF consolidés + Prompting-final-v2.md)
> Protocole : _qualite/protocole-validation-finale-transversale.md

---

## NotebookLM — 5 prompts

### PROMPT 1 — Scripts : alignement avec le référentiel réel

M1  : ✅ Aligné
M2  : ✅ Aligné
M3  : ✅ Aligné
M4  : ✅ Aligné
M5  : ⚠️ Manque la précision que l'usage des outils Search AUGMENTE l'exigence de vérification 🟡 (§1.1)
M6  : ✅ Aligné
M7  : ✅ Aligné
M8  : ✅ Aligné
M9  : ⚠️ Doit intégrer la technique "Gestion active du contexte" (§5.8) pour éviter la dérive lors de sessions denses
M10 : ✅ Aligné
M11 : ⚠️ Doit adopter la terminologie officielle "Registre des usages de l'IA" (§10.6) au lieu de "Journal de bord"

**Top 3 corrections avant relecture orale :**
1. Renforcement niveau 🟡 (M5) : Search augmente la responsabilité de vérification, ne la réduit pas
2. Context Window Management (M9) : technique résumé intermédiaire §5.8 — levier fiabilité N3
3. Terminologie AI Act (M11) : "Registre des usages de l'IA" = terme standard réglementaire (§10.6)

---

### PROMPT 2 — Quiz : exactitude des bonnes réponses

M1-quiz  : ✅ Toutes correctes
M2-quiz  : ✅ Toutes correctes
M3-quiz  : ✅ Toutes correctes
M4-quiz  : ✅ Toutes correctes
M5-quiz  : ✅ Toutes correctes
M6-quiz  : ⚠️ Q1/Q5 : utilisait "Skill" → corrigé commit f38c453 ✅
M7-quiz  : ✅ Toutes correctes
M8-quiz  : ✅ Toutes correctes
M9-quiz  : ⚠️ "Skill" systématique → corrigé commit f38c453 ✅
M10-quiz : ✅ Toutes correctes
M11-quiz : ⚠️ "Skill" résiduel Q2/Q4/Q7/Q10 → corrigé commit 3be3030 ✅

---

### PROMPT 3 — Cohérence transversale M1→M11

**Q1 — Incohérences vocabulaire (3 principales)**
1. "Instructions permanentes" (M8) vs "Instructions de Projet" (M9/M11) → no-op confirmé par CC (déjà cohérents)
2. "RAG" (M1) vs "Base de connaissance" (M9) → M1 : mention RAG trop technique pour N1 · harmoniser en V2
3. "Skill" résiduel M11 → corrigé commit 3be3030 ✅

**Q2 — Sauts de progression identifiés**
- M9→M10 : rupture brutale — assumé (M10 conditionnel + avertissement N3)
- M1 : distinction Projets/Skills trop tôt → simplifier en V2
- M6 : Prompt Chaining avant M4 → mineur, M4 vu avant M6

**Q3 — Redondances traitées**
- Filtre 3 questions M2/M3 → corrigé commit 3be3030 ✅
- Cut-off M1/M2 → corrigé commit 3be3030 ✅
- Préambule "infrastructure partagée" M8/M10 → corrigé commit 3be3030 ✅

---

### PROMPT 4 — Exercices et posts LinkedIn

**Q1 — 2 scénarios ajustés**
- M1 Exercice 2 (test cut-off) : note Search ajoutée ✅
- M10 Exercice 2 (rollback 10 min) : reformulé pour PME → corrigé commit 3be3030 ✅

**Q2 — Posts : aucune affirmation inexacte ✅**

**Q3 — Terminologie résiduelle**
- M8/M6 posts : no-op confirmé (déjà corrects selon CC)
- M11 exercices "Skill" résiduel → corrigé commit 3be3030 ✅

---

### PROMPT 5 — Validation M3

**VERDICT : VALIDÉ SANS RÉSERVE ✅**
- Cohérence M1/M2 : remarquable
- Exercice cas Nicolas : parfaitement calibré N1
- Posts LinkedIn : cohérents baseline N1
- Scores 97/100 + 50/50 justifiés

---

## Gemini — 4 prompts

### PROMPT 1 — Angle manquant vs marché 2026

**2 angles identifiés — les deux → Roadmap V2**

**Angle 1 : Multimodalité native (image, audio, vidéo)**
- En 2026, les modèles "Omni" voient et écoutent en temps réel
- Cas PME concrets : maintenance (filmer une panne) · retail (analyser une gondole) · réunions (sentiment audio)
- Gemini suggère : Module 5bis "Prompting Multimodal" + approfondir en M10
- **Décision : V2** — scope trop large pour un sprint 3 mois · sujet en évolution rapide
  · tester la demande terrain via Aristid avant d'investir

**Angle 2 : Souveraineté numérique / LLM Open-Source**
- Mistral · Scaleway · OVH · hébergement France · données ultra-sensibles
- Pertinent pour le public N3 Power Users face à l'AI Act
- M11 mentionne déjà la souveraineté (commit 3be3030) — suffisant pour V1
- **Décision : enrichir M11 en V2** avec une section dédiée alternatives souveraines

---

### PROMPT 2 — Action concrète le lendemain matin

**Diagnostic Gemini : formation encore un peu théorique sur le J+1**

Risque identifié : le manager repart avec une "tête bien pleine" mais crée
un Projet Claude à 9h05 au lieu d'appliquer le N3 → usage N1 qui gâche le potentiel

**Proposition : "Kit de Survie J+1" en sortie de M11**
Structure suggérée (pas un nouveau module — un guide d'une page) :
1. Règle des 30 minutes : tâche complexe assistée chaque matin
2. Template "Zéro Friction" : modèle 1 page pour définir son premier Projet métier
3. Checklist de capture : noter les tâches répétitives → futurs Instructions de Projet

**Décision : intégrer en V1 dans M11 comme section "Plan d'action 30 jours"**
→ Effort estimé : 30 min Claude Code · haute valeur · différenciant fort
→ Ajouter au backlog corrections V1 après relecture orale

---

### PROMPT 3 — Contradictions avec pratiques terrain françaises

**3 frictions réelles identifiées — toutes documentées, aucune bloquante**

1. **RAG manuel (M9)** : maintenance des bases de connaissance chronophage
   → PME : le projet meurt en 3 semaines si l'IA n'aspire pas seule
   → Réponse formation : M9 couvre déjà la maintenance et les responsables par Projet
   → Action V1 : ajouter 1 phrase "Le RAG fonctionne si quelqu'un en est responsable"

2. **M10 "DSI verrouillée"** : MCP suppose des outils modernes avec API ouverte
   → Beaucoup de PME ont des ERP vieux de 10 ans sans connecteurs
   → Réponse formation : M10 est conditionnel V1, avertissement N3 en intro
   → Action V2 : ajouter "Option B Copier-Coller structuré Markdown" pour vieux logiciels

3. **Anonymisation systématique (M2)** : frein à l'adoption si manuel
   → Réponse formation : M2 enseigne la distinction public/Pro/Enterprise
     · l'anonymisation n'est requise que sur outils publics gratuits
   → Pas d'action requise — déjà couvert par la nuance données d'entraînement v2

**Option B "Mode dégradé" suggérée par Gemini → V2**
- "Copier-Coller structuré Markdown" pour vieux logiciels (M10)
- "Charte IA simplifiée 1 page" pour lever blocages internes (M11)

---

### PROMPT 4 — Positionnement concurrentiel

**Argument différenciant principal validé par Gemini :**
> "L'Artisan de l'IA — méthode d'indépendance, pas diplôme ni outil"

**VS Jedha/CentraleSupélec :** trop académiques/techniques → notre force = immédiateté
**VS Conseil/SIRH :** solutions clés en main coûteuses → notre force = clés du camion
Argument choc : "Ne dépensez pas 15 000€ en conseil pour un chatbot que vos équipes
configurent elles-mêmes en 3h via M8."

**2 angles sous-exploités identifiés → V2**

1. **"Small Data" PME** : Excel mal rempli + comptes-rendus manuscrits
   → L'IA comme "nettoyeur de chaos" spécifique aux petites structures

2. **Libération du burn-out managers** : vendre de la "libération de temps de cerveau"
   → "Recommencer à faire votre vrai métier plutôt que de l'administratif"

**Module 0 "Business Case PME" suggéré par Gemini → V2**
- ROI de la formation : calculer les heures économisées
- Argument : "prouver la valeur du gratuit" pour valider le temps des employés

---

## Synthèse globale — état post-toutes-corrections

### Corrections NotebookLM — toutes traitées ✅

| # | Module | Correction | Commit | Statut |
|---|--------|-----------|--------|--------|
| 1 | M5 | Search AUGMENTE l'exigence 🟡 | 3be3030 | ✅ |
| 2 | M9 | Gestion active contexte §5.8 | 3be3030 | ✅ |
| 3 | M11 | "Registre des usages de l'IA" | 3be3030 | ✅ |
| 4 | M11 | "Skill" résiduel quiz + exercice | 3be3030 | ✅ |
| 5 | M8/M6 | posts terminologie | no-op ✅ | déjà corrects |
| 6 | M3 | Filtre M2 renvoi court | 3be3030 | ✅ |
| 7 | M10 | rollback → PME | 3be3030 | ✅ |
| 8 | M10 | préambule renvoi M8 | 3be3030 | ✅ |

### Actions V1 post-relecture orale (Gemini)

| # | Action | Module | Effort |
|---|--------|--------|--------|
| 1 | Kit de survie J+1 / Plan 30 jours | M11 section bonus | 30 min CC |
| 2 | "Le RAG fonctionne si quelqu'un en est responsable" | M9 — 1 phrase | 5 min CC |

### Roadmap V2 (Gemini)

- Multimodalité native (image, audio, vidéo) — M5bis ou M4 enrichi
- Souveraineté numérique — section dédiée M11
- Option B "Mode dégradé" (Copier-Coller Markdown) — M10
- Charte IA simplifiée 1 page — M11 bonus
- Module 0 "Business Case PME" / ROI formation
- "Small Data PME" + "libération burn-out" — angle LinkedIn + Aristid
- RAG automatique (aspiration autonome) vs maintenance manuelle

---

## Décision finale

- [x] ✅ Toutes les corrections NotebookLM appliquées (commits f38c453 + 3be3030)
- [x] ✅ Gemini : 2 actions V1 mineures identifiées (Kit J+1 + phrase RAG)
- [x] ✅ Prêt pour relecture orale après 2 actions V1
- [x] Roadmap V2 complète et documentée
