# Contre-validation externe — M1 Comprendre l'IA Générative — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · DeepLearning.AI · Jedha · CNIL · AI Act
> Audits : M1-audit-v1.md (82/100) · M1-audit-semantique-v1.md (44/50)
> Note : script court (~700 mots vs cible 2300) — script-v2 à produire en S9

---

## NotebookLM — 4 questions

### Q1 — Clarté pour un non-expert PME

**3 passages difficiles identifiés :**

1. **"Modèle statistique"**
   → Notion de statistique appliquée au langage reste abstraite
   → Sans explication, le manager prête une intention ou une conscience à l'outil
   → Risque : croire que l'IA "réfléchit" vraiment

2. **"Cut-off"**
   → Anglicisme technique — même expliqué comme "date limite de connaissance"
   → Manque d'illustration concrète sur une décision de gestion
   → Exemple suggéré : "une loi de finance votée hier n'est pas connue de l'IA"

3. **"Prédire vs Comprendre"**
   → Le point le plus contre-intuitif du module
   → Un manager habitué à déléguer à des humains interprète une réponse fluide
     comme une preuve de compréhension — alors que c'est de la "plausibilité statistique"

**Termes nécessitant explication :**
- LLM : décortiquer l'acronyme (Grand Modèle de Langage)
- Hallucination : préciser que ce n'est pas un "mensonge" (pas d'intention)
  mais un résultat normal du processus statistique

---

### Q2 — Exactitude de la définition du LLM

**Verdict : ✅ Exacte et irréprochable**
"Modèle statistique qui prédit la suite la plus probable" — alignée avec Anthropic et Jedha.

**Formulations plus pédagogiques pour 2026 :**

- **"Stagiaire brillant mais sans contexte"** (recommandé par Anthropic) :
  Claude comme un stagiaire très cultivé qui ne connaît rien aux normes de l'entreprise
  et a besoin d'instructions explicites — très adapté au public PME

- **"Moteur de prédiction textuelle"** / "Moteur de complétion" / "Générateur de probabilités" :
  Désacralise l'outil sans perdre en précision

- **Image du "perroquet statistique"** (Jedha) : connue mais à utiliser avec précaution
  (connotation négative qui peut bloquer l'adoption)

→ **Recommandation** : garder la formulation actuelle + ajouter l'analogie "stagiaire"
  en complément — elle est officielle Anthropic et très adaptée au public PME

---

### Q3 — Pertinence de l'exemple hallucination (citation juridique)

**Verdict : ✅ Excellente accroche mémorielle**
Efficace car montre que l'IA respecte parfaitement la FORME (numéro, date, ton juridique)
tout en inventant le FOND.

**Exemples alternatifs ou complémentaires pour managers PME :**

- **Chiffres financiers inventés** : demander une analyse de marché → l'IA invente
  des taux de croissance précis pour un secteur de niche — très crédible en surface

- **Fausse recommandation client** : l'IA invente des témoignages clients ou des
  références de projets pour un concurrent qui n'existent pas

- **Code erroné** (pour PME avec besoins techniques) : l'IA cite une bibliothèque
  logicielle qui n'existe pas → risque de sécurité ou blocage

→ **Recommandation** : garder la citation juridique (accroche forte) + ajouter
  en complément l'exemple des chiffres financiers (plus proche du quotidien PME)

---

### Q4 — Points manquants vs Prompting-final.md v2

1. **Distinction Projets vs Skills** (manque N1 — référentiel v2)
   → Le manager doit savoir que pour ses tâches récurrentes il utilisera "Projets"
     (charger sa connaissance métier) et non les "Skills" (développeurs/CLI)
   → À intégrer dans la section "implications concrètes" du script-v2

2. **Balises XML** (recommandation Anthropic)
   → Introduction précoce des balises `<instructions>` ou `<documents>` pour
     structurer les demandes dès N1 — réduit les erreurs
   → Peut être une des "implications concrètes" de M1

3. **RAG et confidentialité**
   → Script mentionne "ne pas montrer ses fichiers" mais ne présente pas la solution :
     le RAG dans les Projets Claude permet de travailler sur ses données sans
     les exposer à l'entraînement public
   → À mentionner brièvement comme "la prochaine étape" (M6)

4. **Attribution d'un rôle**
   → Script ne mentionne pas qu'attribuer un rôle ("Agis en tant que directeur financier")
     est un premier levier de performance pour réduire les hallucinations
   → Peut être intégré dans les "implications concrètes"

5. **Démonstration Projet structuré vs chat nu**
   → NotebookLM recommande : pour atteindre 2300 mots, illustrer la différence
     entre une interface de chat "nue" et un Projet structuré avec ses propres instructions
   → Point fort pour la transition vers M6

---

## Synthèse — corrections script-v2.md M1

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Extension à ~2300 mots (base structurelle) | Audit CC | 🔴 Requis | 1h |
| 2 | Ajouter analogie "stagiaire brillant sans contexte" | NotebookLM Q2 | 🟡 Important | 10 min |
| 3 | Exemple hallucination complémentaire (chiffres financiers) | NotebookLM Q3 | 🟡 Valeur ajoutée | 10 min |
| 4 | Décortiquer "LLM" et préciser "hallucination ≠ mensonge" | NotebookLM Q1 | 🟡 Important | 10 min |
| 5 | Mention Projets vs Skills (1 phrase — référentiel v2) | NotebookLM Q4 | 🟡 Important | 10 min |
| 6 | Mention RAG comme solution de confidentialité (1 phrase) | NotebookLM Q4 | 🟢 Mineur | 5 min |
| 7 | Mention attribution de rôle comme premier levier | NotebookLM Q4 | 🟢 Mineur | 5 min |
| 8 | Illustration cut-off avec exemple loi récente | NotebookLM Q1 | 🟢 Mineur | 5 min |

**Effort total M1 : ~1h45 (dont 1h pour l'extension à 2300 mots)**
**Score estimé post-corrections : 47-48/50 sémantique**

## Décision finale M1
- [x] 🔴 Correction structurelle requise (extension à 2300 mots)
- [x] ⚠️ Enrichissements importants (analogie stagiaire, Projets vs Skills, RAG)
- [x] Aucune confusion Skills/Projets dans le texte actuel ✅
- [x] Définition LLM exacte et irréprochable ✅ — enrichir sans réécrire
