# Contre-validation externe — M2 Risques et gouvernance de base — 2026-03
> Sources : Prompting-final.md v2 · About this course.pdf · DD2 Handout.pdf
> Docs Anthropic · IBM 2026 · CNIL · AI Act (chargés dans NotebookLM)
> Audits : M2-audit-v1.md (86/100) · M2-audit-semantique-v1.md (40/50)
> Note : script court (~1050 mots vs cible 2300) — script-v2 à produire en S9

---

## NotebookLM — 4 questions

### Q1 — Pertinence des 3 risques + risques manquants

**Verdict sur les 3 risques existants : ✅ Solides et pédagogiquement efficaces**
Exfiltration · Risque réputationnel · Industrialisation prématurée
→ Alignés sur compétences cibles (C2) et référentiel de formation

**2 risques majeurs absents selon AI Act + CNIL :**

1. **Classification des risques réglementaires (AI Act)**
   → L'AI Act impose des règles selon que l'IA est à "risque inacceptable" (interdite)
     ou à "haut risque" (obligations légales spécifiques ex: scan de CV)
   → Un manager doit savoir si son usage tombe dans ces catégories
   → **À ajouter** : une grille de classification simplifiée pour PME

2. **Risque de manipulation et d'usurpation (Deepfakes)**
   → La CNIL souligne l'importance de se protéger contre les "hypertrucages"
     portant atteinte à la réputation de l'entreprise ou à la vie privée des employés
   → Particulièrement pertinent pour PME (moins de ressources de détection)

---

### Q2 — État des références réglementaires en 2026

**RGPD : ✅ Références exactes**
- Protection renforcée données RH : exacte
- Droit à intervention humaine pour décisions automatisées : exact

**AI Act : ⚠️ Mises à jour 2025-2026 non reflétées dans script v1**

| Obligation | Échéance | Statut dans script |
|------------|----------|-------------------|
| **Article 4 — Maîtrise de l'IA** : programmes d'acculturation obligatoires pour le personnel | En vigueur depuis 2025 | ❌ Absent |
| **Bacs à sable réglementaires** : chaque État membre doit avoir mis en place au moins un bac à sable | 2 août 2026 | ❌ Absent |
| **Code de pratique GPAI** : fournisseurs d'IA à usage général (Claude, GPT) doivent respecter code de pratique européen strict | 2026 | ❌ Absent |

→ **Correction à apporter** : mentionner l'Article 4 AI Act (obligation d'acculturation)
  qui est directement pertinent pour une PME qui forme ses équipes — donne une légitimité
  réglementaire à la formation elle-même

---

### Q3 — Alignement "règle d'or zéro confiance" avec Anthropic

**Verdict : ✅ Parfaitement alignée**

- **Compétence "Diligence" (cadre 4D)** : vérification systématique des faits + responsabilité humaine ✅
- **Grounding / Citation des sources** : Anthropic recommande de demander à Claude de citer
  ses sources et de vérifier dans des documents primaires — car l'IA peut confirmer
  une erreur avec assurance ✅
- **Données sensibles** : recommandation de ne pas utiliser des données sensibles sur
  outils publics sans configuration "Enterprise" — conforme stratégie sécurité Anthropic ✅

→ Aucune correction nécessaire sur ce point — règle d'or validée par les sources officielles

---

### Q4 — Exactitude technique des "données d'entraînement"

**Verdict : ⚠️ Description trop catégorique — nuance à apporter**

**Ce que le script dit (implicitement) :**
Tout copier-coller dans un LLM public → données potentiellement utilisées pour l'entraînement

**Ce que la réalité 2026 impose de nuancer :**

| Type d'outil | Politique d'entraînement | Ce qu'il faut dire |
|-------------|------------------------|-------------------|
| Outils publics gratuits | Données souvent utilisées pour améliorer les modèles | ⚠️ Risque réel |
| Versions Pro/Teams (Claude, ChatGPT) | Opt-out disponible · Pour Claude Pro/Teams : entraînement sur données utilisateurs désactivé par défaut | ✅ Protégé si configuré |
| Instances Enterprise/dédiées | Politiques contractuelles de non-rétention · Données ne quittent pas l'environnement sécurisé | ✅ Garanti contractuellement |

**Reformulation recommandée :**
Au lieu de généraliser le risque d'entraînement :
> "Le risque dépend de l'outil et de la licence. Sur un outil gratuit ou non configuré,
> vos données peuvent contribuer à l'entraînement des modèles. Sur Claude Pro ou Teams,
> cet entraînement est désactivé par défaut. La première règle est de vérifier le type
> de licence de votre outil avant tout usage professionnel."

→ Incite le manager à vérifier sa licence plutôt que de fuir l'IA par peur généralisée

---

## Synthèse — corrections script-v2.md M2

| # | Correction | Source | Priorité | Effort |
|---|-----------|--------|----------|--------|
| 1 | Extension à ~2300 mots (base structurelle) | Audit CC | 🔴 Requis | 1h |
| 2 | Nuancer "données d'entraînement" selon type de licence | NotebookLM Q4 | 🔴 Critique | 15 min |
| 3 | Ajouter Article 4 AI Act (obligation acculturation — légitimise la formation) | NotebookLM Q2 | 🟡 Important | 10 min |
| 4 | Ajouter risque Deepfakes/usurpation (CNIL) | NotebookLM Q1 | 🟡 Important | 15 min |
| 5 | Ajouter grille classification AI Act simplifiée (haut risque vs standard) | NotebookLM Q1 | 🟡 Valeur ajoutée | 20 min |
| 6 | Mention bac à sable réglementaire + Code pratique GPAI (1 phrase) | NotebookLM Q2 | 🟢 Mineur | 5 min |

**Effort total M2 : ~2h (dont 1h pour extension + 30 min corrections substantielles)**
**Score estimé post-corrections : 45-47/50 sémantique**

## Points forts confirmés (à ne pas réécrire)
- ✅ Les 3 risques existants — pertinents et bien ancrés terrain
- ✅ Règle d'or zéro confiance — alignée Anthropic et cadre 4D
- ✅ Références RGPD — exactes
- ✅ Aucune confusion Skills/Projets dans le texte actuel

## Décision finale M2
- [x] 🔴 Correction critique : nuancer données d'entraînement (message contre-productif si trop catégorique)
- [x] 🔴 Extension structurelle à 2300 mots requise
- [x] ⚠️ Ajouts importants : Article 4 AI Act + risque Deepfakes
- [x] Références réglementaires à mettre à jour (2025-2026)
