# REF-reglementaire-consolidated.md
> Source : CNIL + Règlement européen AI Act
> Consolidation pour NotebookLM — Formation IA PME/ETI françaises
> Date de consolidation : 2026-03-17

---

## Source 1 — CNIL · Intelligence artificielle et RGPD

### Position de la CNIL sur l'IA générative

La CNIL (Commission Nationale de l'Informatique et des Libertés) a publié des recommandations spécifiques sur l'utilisation des outils d'IA générative dans un contexte professionnel. Ces recommandations s'appliquent directement aux PME/ETI françaises qui utilisent des outils comme Claude.

### Deepfakes et données personnelles

**Risques identifiés par la CNIL :**
- Création de contenus trompeurs à partir de données personnelles (deepfakes audio, vidéo, texte)
- Utilisation non consentie de données personnelles pour entraîner des modèles
- Difficulté à distinguer contenu authentique et contenu généré

**Ce que cela implique pour les entreprises :**
- Ne pas alimenter les IA avec des données personnelles sans base légale (consentement, intérêt légitime, exécution du contrat)
- Informer les personnes concernées si leurs données sont utilisées avec des outils IA
- Ne pas partager de données personnelles de clients, candidats ou employés dans des prompts envoyés à des LLMs externes

### Conformité RGPD et IA

**Audit PANAME (cadre CNIL) :**
La CNIL a développé un cadre d'audit pour évaluer la conformité des systèmes IA. Les critères incluent :
- Transparence sur l'utilisation de l'IA dans les décisions
- Droits des personnes concernées (accès, rectification, opposition)
- Minimisation des données (ne collecter que ce qui est nécessaire)
- Sécurité des données traitées par les systèmes IA

---

## Source 2 — CNIL · Droits des personnes (RGPD Chapitre III)

### Article 22 RGPD — Décisions automatisées

**Principe :**
Toute personne a le droit de ne pas faire l'objet d'une décision fondée uniquement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques la concernant ou l'affectant de manière significative.

**Ce que cela signifie en pratique pour les PME :**
- Une décision de recrutement ne peut pas être prise uniquement par une IA
- Une décision de crédit, d'assurance, ou d'accès à un service ne peut pas être entièrement automatisée
- La décision humaine finale est obligatoire pour tout effet significatif sur une personne

**Exceptions autorisées :**
L'automatisation totale est possible si la personne concernée a donné son consentement explicite, ou si c'est nécessaire à l'exécution d'un contrat.

### Droits des personnes concernées

**Droit d'accès :** Toute personne peut demander quelles données la concernant ont été traitées par un système IA.

**Droit de rectification :** Correction des données inexactes utilisées dans une décision automatisée.

**Droit d'opposition :** Une personne peut s'opposer à un traitement de ses données, y compris par des systèmes IA, sauf intérêt légitime prépondérant.

**Implications pour la formation :**
Ces droits imposent aux entreprises de maintenir une supervision humaine sur les décisions prises avec l'aide de l'IA — ce qui valide le principe de gouvernance enseigné dans M2 et M11.

---

## Source 3 — AI Act · Règlement européen sur l'IA

### Les 4 niveaux de risque

**Niveau 1 — Risque inacceptable (Interdit)**
Systèmes IA présentant une menace claire pour les droits fondamentaux :
- Notation sociale par les gouvernements
- Manipulation subliminale
- Exploitation des vulnérabilités de groupes spécifiques

**Niveau 2 — Haut risque (Réglementé)**
Systèmes IA dans des domaines critiques, soumis à des exigences strictes avant mise sur le marché :
- **RH et recrutement** : systèmes utilisés pour trier des CV, évaluer des candidats, décider des promotions
- **Services essentiels** : accès au crédit, à l'assurance, aux services publics
- **Justice** : assistance aux décisions judiciaires
- **Éducation** : systèmes d'évaluation des étudiants
- **Sécurité critique** : infrastructures, transports

**Niveau 3 — Risque limité (Obligations de transparence)**
- Les chatbots doivent informer l'utilisateur qu'il parle à une IA
- Les deepfakes doivent être identifiés comme tels

**Niveau 4 — Risque minimal (Non réglementé)**
La majorité des usages professionnels courants : aide à la rédaction, analyse de documents, génération de contenu, assistance à la décision non automatisée.

### Article 4 — Obligation de compétence en IA (AI Literacy)

**Texte de l'obligation :**
Les fournisseurs et déployeurs de systèmes IA prennent des mesures pour assurer, dans toute la mesure du possible, un niveau suffisant d'éducation aux compétences en IA de leur personnel.

**En vigueur depuis :** Février 2025

**Ce que cela implique concrètement pour les PME/ETI :**
- Obligation légale de former les employés qui utilisent des outils IA dans leur travail
- Pas de seuil de taille d'entreprise — s'applique à toutes les organisations qui déploient des systèmes IA
- La formation doit couvrir : fonctionnement des LLMs, biais, risques, bonnes pratiques, conformité
- Absence de formation = risque juridique et réglementaire

### GPAI — Modèles d'IA à usage général

**Définition :**
Les grands modèles de langage (GPT-4, Claude, Gemini...) sont classés comme GPAI (General Purpose AI). Les fournisseurs de GPAI ont des obligations spécifiques de transparence et de documentation.

**Implication pour les utilisateurs professionnels :**
Vous n'êtes pas fournisseur GPAI — vous êtes déployeur. Vos obligations sont différentes et moins lourdes, mais elles incluent l'Article 4 (formation).

### Échéances AI Act 2025-2026

| Date | Obligation |
|------|-----------|
| Février 2025 | Article 4 — AI Literacy en vigueur |
| Août 2025 | Interdictions risque inacceptable applicables |
| Août 2026 | Règles haut risque pleinement applicables |
| 2027 | Révision et mise à jour du règlement |

---

## Récapitulatif réglementaire pour la formation

| Règle | Source | Implication pour les PME | Module |
|-------|--------|--------------------------|--------|
| Pas de décision 100% automatisée | RGPD Art.22 | Validation humaine obligatoire | M2, M11 |
| Données personnelles dans prompts | RGPD + CNIL | Ne pas copier des données sensibles | M2 |
| Obligation de formation | AI Act Art.4 | Justifie la formation elle-même | M1, M11 |
| Systèmes RH = haut risque | AI Act Annexe III | Supervision obligatoire si recrutement IA | M2, M11 |
| Transparence chatbot | AI Act Art.50 | Informer les utilisateurs finaux | M2 |
| Droits d'accès et rectification | RGPD Chap.III | Traçabilité des données utilisées | M10, M11 |

*Sources : cnil.fr/fr/intelligence-artificielle, cnil.fr RGPD chapitre III, artificialintelligenceact.eu/fr*
