# Contre-validation externe — M5 Méthode 🟢🟡🔵🟣 — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · DeepLearning.AI · Claude Code Ultimate Guide · CNIL · AI Act
> Audits : M5-audit-v1.md (94/100) · M5-audit-semantique-v1.md (44/50)

---

## NotebookLM — 5 questions complètes

### Q0 — Confusion Skills/Projets dans M5

**Verdict : ABSENTE ✅**
Le terme "Skills" n'apparaît à aucun moment dans la narration du script v1.
Le script se concentre sur la méthode 🟢🟡🔵🟣 sans aborder les fonctionnalités de l'interface.
→ Pas de correction nécessaire sur ce point dans M5.
→ Une note dans les documents d'accompagnement suffit (déjà dans le référentiel v2).

---

### Q1 — Clarté pour un non-expert PME

**3 passages difficiles identifiés :**

1. **Définition du niveau 🟣** : décrit comme "système organisationnel + rôles + KPI"
   → Ressemble à de la gestion d'équipe classique pour un manager
   → Or référentiel v2 : ce niveau cible les architectures techniques d'agents (systèmes automatisés)
   → Confusion entre gouvernance managériale et intégration technique

2. **Comparaison "5 min vs 45 min de réunion juriste"**
   → Promotionnel et risqué — manager pourrait croire que l'IA remplace l'expert
   → Réalité : l'IA sert à préparer la réunion, identifier les questions, pas valider la conformité

3. **Exemple du rapport d'écarts présenté comme "retour réel"**
   → Manager déçu si son outil ne cite pas le RGPD avec cette précision sans paramétrage spécifique

**3 concepts nécessitant explication :**

1. **Prompt de vérification (🟡)** : comment l'IA peut savoir ce qui manque ?
   → Nécessite une "source de vérité" fournie (texte de loi) pour comparer
   → Sans source externe, risque d'inventer des manques inexistants

2. **Structurer ≠ Résumer (🟢)** : contre-intuitif pour un manager habitué aux synthèses
   → Concept : créer une "fondation propre" sans que l'IA décide seule ce qui est important

3. **Hallucination de structure (Erreur 2)** : document professionnel + contenu faux
   → "Crédibilité de surface" — trompe un manager pressé qui se fie à la mise en forme

---

### Q2 — Cohérence avec Prompting-final.md v2

**Points cohérents ✅**
- 🟢 Structurer : distinction "structurer ≠ résumer" — irréprochable
- 🟡 Fiabiliser : objectif traçabilité et vérification — conforme §5
- 🔵 Optimiser : livrable directement exploitable — conforme
- Prompts de Marc (🟢 et 🟡) : gabarits directement conformes §4 et §5

**Contradiction majeure ⚠️**
- Niveau 🟣 défini comme "rôles assignés + KPI suivis" (vision managériale)
- Référentiel v2 : §9 cible les architectures techniques (Agents automatisés), pas la gestion humaine
- Correction : reformuler 🟣 → "architecture technique automatisée (Agents)"

**Affirmations à corriger**
- "Exemple de retour réel" → [Exemple simulé — à titre illustratif]
- "5 min vs 45 min de réunion juriste" → nuancer : l'IA prépare, ne remplace pas

**Confusion Skills/Projets : ABSENTE ✅**

---

### Q3 — Alignement cadre 4D Anthropic

**Compétences adressées (4/4 pour N2)**
- ✅ Delegation : choisir le bon niveau d'intervention selon la tâche
- ✅ Description : prompts de Marc avec rôle, intention, format, contraintes
- ✅ Discernment : Erreur 2 — l'IA peut organiser parfaitement des infos incorrectes
- ✅ Diligence : règle absolue "ne jamais sauter d'étape même sous deadline"

**Manques à renforcer post-référentiel v2**
- Diligence technique (🟣) : supervision des systèmes automatisés — absent depuis correction §9
- Itération et test : progression présentée comme linéaire alors qu'Anthropic insiste
  sur "prompt engineering = science de l'itération"
  → Ajouter : tester et affiner les prompts à chaque niveau avant de passer au suivant

---

### Q4 — Points manquants vs Prompting-final.md v2

1. **Nature technique de 🟣** (manque critique post-v2)
   → Script : "rôles + KPI" → doit mentionner architectures d'agents et workflows IT

2. **Mapping interface (Projets/Instructions)** — manque N2
   → 🟢/🟡 → Chat libre · 🔵/🟣 → Projet avec Instructions personnalisées
   → Préciser où appliquer la méthode dans l'outil réel

3. **"Source de vérité" technique pour 🟡**
   → L'IA ne possède pas la loi — doit la consulter dans un fichier fourni
   → Sans cette précision, manager croit l'IA infaillible par défaut

4. **Itération et test**
   → Progression linéaire dans le script — illusion d'automaticité
   → Ajouter : évaluation empirique avant de valider le passage d'un niveau au suivant

5. **Hiérarchie mémoire CLAUDE.md** (pour transition M6)
   → Script ne mentionne pas les 3 niveaux (Global/Projet/Local)
   → Important pour "Industrialiser" sans créer de conflits d'instructions

---

### Q5 — Exemple simulé

**Statut dans script v1 :** présenté comme "Exemple de retour réel" — INCORRECT ⚠️

**Ce que disent les audits :**
- Audit sémantique : correction classée BLOQUANTE avant tournage
- L'IA ne cite pas systématiquement le RGPD avec cette précision sans instructions spécifiques

**Correction obligatoire :**
Remplacer "Exemple de retour réel" par :
> "[Exemple simulé — à titre illustratif · Le format et la précision des retours réels
> dépendent des instructions fournies à l'IA et du contexte. L'IA ne cite pas
> automatiquement les articles de loi sans qu'on lui fournisse le texte de référence.]"

---

## Synthèse complète — corrections script-v2.md M5

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Annoter rapport d'écarts [exemple simulé] | Audit CC + NotebookLM Q5 | 🔴 Bloquant | 5 min |
| 2 | Reformuler définition 🟣 : "architecture technique (Agents)" | NotebookLM Q0/Q2/Q4 | 🔴 Important | 15 min |
| 3 | Nuancer "5 min vs 45 min juriste" | NotebookLM Q1/Q2 | 🟡 Important | 5 min |
| 4 | Allouer 4 min à section 4 (3 erreurs) | Audit CC + NotebookLM Q1 | 🟡 Recommandé | 5 min |
| 5 | Ajouter mention "Source de vérité" pour 🟡 | NotebookLM Q4 | 🟡 Valeur ajoutée | 10 min |
| 6 | Ajouter mapping interface (Projets pour 🔵/🟣) dans transition M6 | NotebookLM Q4 | 🟢 Mineur | 10 min |
| 7 | Remplacer "Skills" → "Projets" dans transition M6 | Alerte transversale | 🟢 Mineur | 5 min |

**Effort total M5 : ~55 min**
**Score estimé post-corrections : 48-49/50 sémantique**

## Décision finale M5
- [x] 🔴 2 corrections bloquantes (exemple simulé + définition 🟣)
- [x] ⚠️ Corrections importantes (nuancer comparaison juriste, source de vérité)
- [x] Skills/Projets : ABSENT du script M5 — pas de correction terminologique requise
