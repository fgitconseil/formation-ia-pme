## NOTE DE MISE À JOUR — URLs problématiques dans NotebookLM
> Ajout : 2026-03 · Suite aux tests réels de chargement

### Règle générale : TOUTES les URLs anthropic.skilljar.com échouent

NotebookLM ne peut pas accéder aux pages Skilljar — elles nécessitent une authentification.
**Ne pas essayer d'ajouter des URLs skilljar.com dans NotebookLM.**

### Autres URLs qui ne fonctionnent pas

| Type | Exemple | Raison |
|------|---------|--------|
| Toutes URLs `*.skilljar.com` | `anthropic.skilljar.com/claude-101` | Authentification requise |
| URLs avec ancre `#fragment` | `cnil.fr/...#Article22` | NotebookLM ne gère pas les fragments |

### Substitutions validées

| URL Skilljar ❌ | Remplacement ✅ |
|----------------|----------------|
| `skilljar/ai-fluency-framework-foundations` | Uploader `_qualite/About this course.pdf` |
| `skilljar/ai-fluency-for-educators` | Couvert par `DD2 Handout_Before-After Example-OCR.pdf` |
| `skilljar/introduction-to-agent-skills` | `https://code.claude.com/docs/en/skills` |
| `skilljar/introduction-to-model-context-protocol` | `https://modelcontextprotocol.io/introduction` |
| `skilljar/claude-101` | `https://support.claude.com/en/articles/9517075-getting-started-with-claude` |
| `cnil.fr/.../chapitre3#Article22` | `https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3` |

### Sources NotebookLM validées (20 sources opérationnelles)

Fichiers locaux (uploadés) :
- About this course.pdf ✅
- DD2 Handout_Before-After Example-OCR.pdf ✅
- Prompting-final.md ✅

URLs fonctionnelles :
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview ✅
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices ✅
- https://www.anthropic.com/news/prompt-engineering-for-business-performance ✅
- https://github.com/anthropics/prompt-eng-interactive-tutorial ✅
- https://code.claude.com/docs/en/skills ✅ (remplace skilljar/agent-skills)
- https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/ ✅
- https://www.ibm.com/think/prompt-engineering ✅
- https://github.com/ThamJiaHe/claude-prompt-engineering-guide ✅
- https://deepwiki.com/FlorianBruniaux/claude-code-ultimate-guide/4.1-claude.md-files-and-memory-hierarchy ✅
- https://www.jedha.co/formations/formation-prompt-engineer ✅
- https://exed.centralesupelec.fr/formation/prompt-engineering-maitrisez-les-meilleures-techniques-de-prompting-2/ ✅
- https://www.fun-mooc.fr ✅
- https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3 ✅ (sans ancre)
- https://artificialintelligenceact.eu/fr/ ✅
- https://www.cnil.fr/fr/intelligence-artificielle ✅
