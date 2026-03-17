# CHANGELOG — M10 Connecter l'IA à vos outils métier — Introduction au MCP

## v1 — 2026-03 · BROUILLON

> **⚠️ Module conditionnel V1 — décision d'inclusion post-Aristid S4**
>
> Si inclus V1 : prêt pour tournage après validation terrain
> Si repoussé V2 : déjà produit, aucun travail supplémentaire nécessaire

### Fichiers créés

- `script-v1.md` — Script vidéo ~20 min : avertissement Power users/IT · MCP analogie USB-C · architecture 5 composants · cas concret assistant RH + SIRH · 4 responsabilités gouvernance
- `quiz.md` — 8 QCM + corrigé · seuil 70% · couvre : définition MCP · rôle Serveur/Client/Tool/Resource · gouvernance humaine obligatoire · MCP vs API
- `exercice.md` — 3 exercices pratiques : cartographie connecteurs prioritaires · cahier des charges IT · règles de gouvernance
- `post-linkedin.md` — 3 variantes : A (court) · B (carrousel 5 slides) · C (storytelling référent IA débordé)

### Décisions pédagogiques

- **Public élargi** : Power users + Référents IA + Équipes IT — avertissement intro différencié (managers N1/N2 = observateurs, pas opérateurs)
- **Analogie USB-C** : accroche mémorielle principale du module — universalité du standard MCP
- **Architecture 5 composants** : Serveur · Client · Tools · Resources · Permissions — présentés dans l'ordre de compréhension, pas de déploiement
- **Cas concret SIRH** : seul cas détaillé — suffisant pour comprendre l'articulation des composants
- **4 responsabilités non délégables** : décisions humaines · logs · tests robustesse · rollback — fil conducteur gouvernance
- **Exercice 2** : cahier des charges IT — livrable directement réutilisable par les référents IA dans leur organisation

### Cohérence avec le référentiel

- Suite directe de M9 (Projets et bases de connaissance) — MCP = couche de connexion temps réel au-dessus des bases documentaires M9
- Transition vers M11 (gouvernance dans la durée) — M10 pose les composants, M11 les gouverne
- Progression 🟣 : industrialisation via connexion aux systèmes = niveau d'engagement maximal de la formation
- Terminologie alignée référentiel v2 : "Instructions de Projet" (pas "Skills"), "Bases de connaissance", "Projets claude.ai"

### Contenu script v1

- Section 0 Avertissement (2 min) : différenciation Power users/IT vs managers observateurs
- Section 1 Accroche (2 min) : le référent IA débordé de 4 demandes de connexion simultanées
- Section 2 MCP (5 min) : définition · analogie USB-C · avant/après · exemples Salesforce/Jira/SQL · ce que MCP n'est pas
- Section 3 Architecture (8 min) : 5 composants détaillés + cas concret PME assistant RH/SIRH
- Section 4 Gouvernance (3 min) : 4 responsabilités non délégables (décisions humaines · logs · tests · rollback)
- Section 5 Clôture (2 min) : récapitulatif M8+M9+M10 + transition M11

### Statut

- Script : BROUILLON · conditionnel inclusion V1
- Quiz : PRÊT
- Exercice : PRÊT
- Post LinkedIn : PRÊT

### À faire si module inclus V1

- Valider la durée à la relecture orale (cible 18-22 min)
- Confirmer avec IT si les exemples de serveurs MCP mentionnés (Salesforce, Jira) sont pertinents pour le public Aristid
- Mise à jour CLAUDE.md (M10 → ✅)

---

## Convention de versioning

| Version | Signification |
|---------|---------------|
| v1 | Brouillon initial |
| v2 | Post-feedback Aristid |
| v3 | Post-beta test |
| vFinal | Validé pour production vidéo |
