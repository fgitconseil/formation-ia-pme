# Audit sémantique — M2 Risques & gouvernance de l'IA
> Protocole : _qualite/audit-semantique-protocol.md
> Source auditée : content/modules/N1/M2-risques-gouvernance/script-v1.md
> Référence principale : Prompting-final.md §2 (Gouvernance et risques)
> Note : script court (~1050 mots) — évaluation du fond disponible, longueur déjà traitée dans M2-audit-v1.md (86/100)
> Date : 2026-03

---

## Affirmations correctes

- **Exfiltration = données qui quittent le périmètre de sécurité** : définition correcte et opérationnelle ✅
- **4 catégories de données à risque** : clients / RH / stratégiques / code propriétaire — classification cohérente avec les catégories RGPD et bonnes pratiques sécurité ✅
- **Données RH "particulièrement protégées par le RGPD"** : exact — les données relatives à l'emploi, salaires et évaluations entrent dans les catégories sensibles du RGPD ✅
- **Règle des 3 questions** : public / identifiable / avantage concurrentiel — filtre pratique conforme à l'esprit du RGPD ✅
- **Instance entreprise vs LLM public** : distinction correcte (politique de non-rétention) ✅
- **4 zones de risque réputationnel** : dates / chiffres / citations / engagements contractuels — liste exacte et exhaustive ✅
- **"Ne pas re-demander à l'IA pour vérifier"** : conforme §1 (l'IA peut confirmer une erreur avec la même assurance) ✅
- **Industrialisation prématurée** : "automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé" — définition précise ✅
- **Progression 🟢🟡🔵🟣 présentée ici pour la 1ère fois** : introduction correcte de la méthode en contexte de risque — conforme §4-6 ✅
- **Règle absolue** : "On ne passe pas directement de 🟢 à 🟣" — conforme §4-6 ✅
- **L'exemple appel d'offres / copie-colle** : scénario représentatif du risque terrain ✅

---

## Affirmations à vérifier

| Affirmation | Localisation | Source recommandée |
|-------------|-------------|-------------------|
| "Ce n'est pas un exemple inventé. C'est la réalité de ce que font des milliers de salariés en ce moment" | Section 1, accroche | Affirmation forte présentée comme fait empirique — vraisemblable mais non sourcée. Formuler comme "C'est le type d'incident qui arrive régulièrement" est plus rigoureux |
| "coller dans un LLM public revient à... l'inclure dans des données d'entraînement" | Section 2, code propriétaire | ⚠️ Partiellement vrai — dépend de l'outil et de la version. OpenAI utilise les données des plans gratuits pour l'entraînement, mais pas les plans Pro/Teams avec opt-out. Claude : pas d'entraînement sur les données utilisateurs par défaut. Formulation trop catégorique. |
| "Un protocole simple en 3 temps" (protocole réputationnel) | Section 3 | Présenté comme protocole établi — c'est une bonne pratique formulée pour la formation, pas une norme certifiée |

---

## Confusions conceptuelles détectées

### ⚠️ IMPORTANT — Données d'entraînement : affirmation trop catégorique

**Problème :**
"Si vous développez des outils internes, le code source est un actif stratégique. Le coller dans un LLM public revient à le partager avec l'outil et **potentiellement à l'inclure dans des données d'entraînement**."

La mention "potentiellement" est présente, mais la formulation globale laisse entendre que tout LLM public utilise vos données pour l'entraînement. C'est inexact pour plusieurs outils majeurs :
- Claude.ai (plan Pro/Teams) : pas d'entraînement sur les données utilisateurs par défaut
- ChatGPT Plus/Teams : opt-out disponible depuis 2023
- ChatGPT gratuit : oui, peut être utilisé pour l'entraînement

**Correction à apporter en script-v2.md :**
*"Pour les outils publics gratuits, vérifiez la politique de données — certains utilisent les conversations pour améliorer les modèles. Pour les versions professionnelles, consultez votre DSI : la politique peut différer."*

**Impact sur le score : -4 points**

---

### ✅ Risque réputationnel ≠ hallucination seule — Distinction correcte

Le module élargit correctement le risque réputationnel au-delà des hallucinations : dates erronées, engagements contractuels implicites, chiffres plausibles mais faux. Cette extension est conforme à §2.

---

### ✅ Industrialisation prématurée — Concept bien défini

L'exemple de l'équipe commerciale automatisant un processus non sécurisé (section 4) est pédagogiquement excellent et strictement conforme à la logique du référentiel. La jonction avec la progression 🟢🟡🔵🟣 est faite correctement : on ne passe pas de 🟢 à 🟣 directement.

---

### ✅ L'accroche "Ce n'est pas un exemple inventé" — Risque pédagogique

**Nuance :** Présenter l'accroche comme "pas inventée" alors qu'elle est construite pour le script peut créer un léger inconfort si un apprenant averti pose la question. La formulation alternative "C'est le type de situation que je vois régulièrement" est aussi impactante et plus honnête. À traiter en script-v2.md.

---

## Alignement 4D Anthropic

| Compétence | Présente | Localisation |
|-----------|---------|-------------|
| Delegation | — | Non adressée (couvert en M4/M5) |
| Description | — | Non adressée |
| Discernment | ✅ | Protocole réputationnel : identifier les zones à risque avant diffusion |
| Diligence | ✅ | 3 règles de clôture : anonymiser / relire / valider avant automatisation |

**Alignement : 2/4 compétences — cohérent pour un module gouvernance N1**

---

## Concepts techniques N3

Non applicable — M2 est un module N1. Aucun concept technique avancé attendu ni présent.

---

## Score sémantique /50

| Critère | Max | Score | Justification |
|---------|-----|-------|---------------|
| Affirmations factuelles correctes | 15 | 11 | Classification données ✅ · Progression ✅ · Données d'entraînement trop catégoriques (-3) · "Pas un exemple inventé" non sourcé (-1) |
| Zéro confusion conceptuelle | 15 | 12 | Industrialisation ✅ · Réputationnel élargi ✅ · Données d'entraînement : affirmation imprécise (-3) |
| Exemples simulés clairement marqués | 10 | 9 | Exemple appel d'offres non marqué "simulé" mais présenté comme fait réel (-1) |
| Alignement 4D Anthropic | 5 | 3 | 2/4 compétences — cohérent N1 |
| Concepts techniques N3 | 5 | 5 | Non applicable N1 → bonus ✅ |
| **Total** | **50** | **40** | |

---

## Décision

**⚠️ CORRECTIONS AVANT TOURNAGE — Score 40/50**

Le fond de M2 est globalement solide sur les risques terrain (exfiltration, réputationnel, industrialisation prématurée) et sur la progression 🟢🟡🔵🟣. Le problème principal est l'affirmation sur les données d'entraînement : trop catégorique pour un sujet qui dépend de l'outil, du plan et de la configuration.

**Corrections à intégrer dans script-v2.md (S9) :**

1. **🟡 [RECOMMANDÉ avant tournage]** Nuancer l'affirmation "données d'entraînement" : distinguer outils publics gratuits (oui pour certains), plans Pro/Teams (opt-out généralement disponible), instances entreprise (politique contractuelle spécifique)
2. **🟡 [RECOMMANDÉ]** Reformuler "Ce n'est pas un exemple inventé" → "C'est le type de situation que j'observe régulièrement" — formulation plus juste et tout aussi impactante
3. **🟢 [OPTIONNEL]** Ajouter la source requise par l'audit structurel M2-audit-v1.md : prompt de sécurisation des données (manquant du script actuel — correction bloquante structurelle)

**Effort estimé : 15-20 minutes lors de la rédaction de script-v2.md**
