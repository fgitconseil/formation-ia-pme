# Contre-validation externe — M6 Faire appel à la connaissance capitalisée — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · DeepLearning.AI · Claude Code Ultimate Guide
> Audits : M6-audit-v1.md (89/100) · M6-audit-semantique-v1.md (47/50) ✅
> Note : script court (~14 min vs cible 20 min) — extension prévue en S9

---

## NotebookLM — 3 questions ciblées

### Q1 — Terminologie "Skills" dans M6

**Verdict : ⚠️ Confusion terminologique subsistante vs référentiel v2**
Le script utilise "Skills" pour désigner des instructions réutilisables de l'interface claude.ai
→ Or le référentiel v2 réserve "Skills" à Claude Code (fichiers SKILL.md — développeurs)

**Correction terminologique exacte :**
- "Skills" → "Instructions personnalisées" ou "Instructions de Projet"
- Section 4 : présenter comme la capacité de Claude à mémoriser "préférences et méthodes"
  permanentes au sein de l'espace de travail

---

### Q2 — Distinction Projects / Artifacts / RAG

**Verdict : ✅ Clairement établie et validée par les audits**

Structure 3 piliers confirmée comme pédagogiquement cohérente :
- **Projects (L'Espace)** : "contenant" persistant — regroupe documents et historique de mission ✅
- **Artifacts (Le Format)** : "livrable" autonome — évite la prose pour un résultat directement exploitable ✅
- **RAG/Base de connaissance (La Source)** : connexion à une base documentaire métier ✅

→ Séparation claire : organisation du travail (Projects) / nature de la réponse (Artifacts) / source du savoir (RAG)
→ Aucune confusion détectée entre les 3 concepts — module solide sur ce point

---

### Q3 — Extension script (14 min → 20 min)

**2 exemples concrets suggérés par NotebookLM :**

**Exemple 1 : Analyse de conformité contractuelle (Pilier RAG + Instructions)**
- Cas : manager vérifie si un contrat prestataire respecte la charte de sécurité
- Technique : Prompt Chaining — Claude identifie les clauses sensibles (RAG),
  les compare aux Instructions du Projet, génère un rapport de risques
- Valeur PME : sécurisation juridique sans expert pour les premiers tris

**Exemple 2 : Tableau de bord de pilotage visuel (Pilier Artifacts)**
- Cas : transformer des données brutes de vente/production en outil de décision visuel
- Technique : Artifact sous forme de code React/HTML — tableau de bord interactif
  filtrables par indicateurs clés
- Valeur PME : passer d'une analyse textuelle à une vision "data" partageable en réunion

**Conseil additionnel (audit structurel) :**
→ Extraire les gabarits de prompts en blocs visuels distincts à l'écran
  pour faciliter la mémorisation

---

## Synthèse — corrections script-v2.md M6

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Remplacer "Skills" → "Instructions personnalisées / Instructions de Projet" | Audit CC + NotebookLM Q1 | 🔴 Important | 15 min |
| 2 | Ajouter exemple 1 : analyse conformité contractuelle (RAG + chaînage) | NotebookLM Q3 | 🟡 Extension durée | 20 min |
| 3 | Ajouter exemple 2 : tableau de bord Artifact (React/HTML) | NotebookLM Q3 | 🟡 Extension durée | 20 min |
| 4 | Mettre les gabarits de prompts en blocs visuels distincts | Audit structurel | 🟢 Mineur | 10 min |

**Effort total M6 : ~1h (dont 40 min pour les 2 exemples d'extension)**
**Score estimé post-corrections : 49/50 sémantique**

## Points forts confirmés
- ✅ Distinction Projects / Artifacts / RAG — claire et pédagogiquement cohérente
- ✅ Aucune confusion conceptuelle détectée
- ✅ Structure 3 piliers validée par les sources

## Décision finale M6
- [x] 🔴 Correction terminologique Skills → Instructions de Projet
- [x] ⚠️ Extension durée via 2 exemples concrets (14→20 min)
- [x] Module solide sur le fond — correction de surface principalement
