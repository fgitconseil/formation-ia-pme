# Commande Claude Code — Consolidation sources de référence pour NotebookLM
# À lancer après que _validation/ est peuplé (44 fichiers présents)

## Contexte

NotebookLM a une limite de 50 sources.
_validation/ contient 44 fichiers (scripts + quiz + exercices + posts).
Il faut donc réduire les 20 sources web actuelles à 5 fichiers consolidés
en fetchant le contenu réel de chaque URL.

---

## TÂCHE — Créer 4 fichiers de référence consolidés dans _validation/

Pour chaque fichier : fetcher chaque URL listée, extraire les points clés
pertinents pour valider une formation IA générative pour PME françaises,
et structurer le résultat avec attribution de source.

Format de chaque section dans le fichier consolidé :

```
## Source : [Titre de la page]
> URL : [url]
> Fetchée le : 2026-03

### Points clés retenus
- [point 1]
- [point 2]
...
```

---

### FICHIER 1 : _validation/REF-anthropic-officiel-consolidated.md
Titre : "Sources Anthropic officielles — consolidé"

URLs à fetcher :
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices
- https://www.anthropic.com/news/prompt-engineering-for-business-performance
- https://github.com/anthropics/prompt-eng-interactive-tutorial

Points à extraire prioritairement :
- Cadre 4D : Delegation · Description · Discernment · Diligence
- Techniques recommandées : few-shot · CoT · role assignment · XML tags
- Best practices Claude 4.x
- Exemples business

---

### FICHIER 2 : _validation/REF-claude-produit-consolidated.md
Titre : "Fonctionnalités produit Claude — consolidé"

URLs à fetcher :
- https://support.claude.ai/hc/en-us/articles/27140011905inkl (What are projects?)
  → alternative si 404 : https://support.claude.com/en/articles/9517075-getting-started-with-claude
- https://code.claude.com/docs/en/skills (Extend Claude with skills)
- https://deepwiki.com/FlorianBruniaux/claude-code-ultimate-guide/4.1-claude.md-files-and-memory-hierarchy
- https://modelcontextprotocol.io/introduction

Points à extraire prioritairement :
- Projects claude.ai : définition, Instructions de Projet, Knowledge (RAG)
- Skills Claude Code : fichiers SKILL.md, distinction avec Projects
- Hiérarchie CLAUDE.md : Global / Project / Local
- Hooks PreToolUse / PostToolUse
- MCP : Serveur · Client · Tools · Resources

---

### FICHIER 3 : _validation/REF-reglementaire-consolidated.md
Titre : "Cadre réglementaire IA France/Europe 2026 — consolidé"

URLs à fetcher :
- https://www.cnil.fr/fr/intelligence-artificielle
- https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3
- https://artificialintelligenceact.eu/fr/

Points à extraire prioritairement :
- Recommandations CNIL pour l'IA en entreprise
- Article 22 RGPD : décisions automatisées
- AI Act : pyramide des risques (inacceptable / haut risque / limité / minimal)
- Article 4 AI Act : obligation d'alphabétisation IA (en vigueur 2025)
- Systèmes à haut risque : exemples concrets PME
- GPAI : obligations fournisseurs (Claude, GPT)
- Échéances 2025-2026

---

### FICHIER 4 : _validation/REF-marche-externe-consolidated.md
Titre : "Références marché prompt engineering 2026 — consolidé"

URLs à fetcher :
- https://www.ibm.com/think/prompt-engineering
- https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/
- https://github.com/ThamJiaHe/claude-prompt-engineering-guide
- https://www.jedha.co/formations/formation-prompt-engineer
- https://exed.centralesupelec.fr/formation/prompt-engineering-maitrisez-les-meilleures-techniques-de-prompting-2/
- https://www.fun-mooc.fr

Points à extraire prioritairement :
- IBM : context engineering · RAG · techniques avancées 2026
- DeepLearning.AI : 2 principes fondamentaux (clarté + itération)
- ThamJiaHe : techniques avancées Claude 4.x
- Jedha/CentraleSupélec : référentiel certifiant français
  (TORCEEF · Chain-of-Thought · niveau académique FR)
- FUN MOOC : périmètre N1 de référence public FR

---

## Gestion des erreurs de fetch

Si une URL retourne 404 ou accès refusé :
- Indiquer clairement dans le fichier : "⚠️ URL inaccessible — contenu depuis mémoire d'entraînement"
- Rédiger quand même les points clés connus de cette source
- Ne pas bloquer la tâche

## Vérification finale

Lister _validation/ et confirmer :
- 44 fichiers M1-M11 (scripts/quiz/exercices/posts) ✅
- 4 fichiers REF-*-consolidated.md ✅
- Total : 48 fichiers → NotebookLM : 48 + Prompting-final-v2.md = 49 sources ✅

Commit : "feat(validation): 4 fichiers REF consolidés depuis URLs réelles (NotebookLM)"
