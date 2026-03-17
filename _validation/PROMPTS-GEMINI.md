# Prompts Gemini — Validation finale angles non vus
> À utiliser après NotebookLM
> Coller le plan de la formation + les prompts ci-dessous

---

## CONTEXTE À COLLER EN TÊTE (avant chaque prompt)

```
Formation IA Générative pour PME/ETI françaises — Plan complet

PUBLIC : managers et employés PME/ETI françaises, non experts en IA
POSITIONNEMENT : opérationnalisation, pas technologie
FORMAT : 3 niveaux · 11 modules · gratuit · auto-formation

N1 — Comprendre et situer (~55 min · tout employé · aucun prérequis)
  M1 — Comprendre l'IA Générative (LLM, hallucination, cut-off, implications)
  M2 — Risques et gouvernance de base (exfiltration, réputationnel, RGPD, AI Act)
  M3 — Baseline N1 : premiers réflexes (checklist 10 points, cas Nicolas)

N2 — Prompting et méthode (~1h25 · prérequis : N1 validé)
  M4 — Les 4 types de prompts (Production/Exploration/Structuration/Vérification + Agentique)
  M5 — Méthode 🟢🟡🔵🟣 en pratique (cas Marc RH, progression, erreurs fréquentes)
  M6 — Connaissance capitalisée (Projects, Artifacts, RAG, bases de connaissance)
  M7 — Baseline N2 : itérer sur ses prompts (bibliothèque → Instructions de Projet)

N3 — Configurer et déployer (~1h25 · prérequis : N2 validé · Power users)
  M8 — Configurer un assistant personnalisé (Instructions permanentes, CLAUDE.md)
  M9 — Instructions de Projet et bases de connaissance (Projets, RAG, Hooks, maintenance)
  M10 — Connecter l'IA aux outils métier — MCP (conditionnel selon public)
  M11 — Baseline N3 : gouverner un dispositif IA (gouvernance, KPI, AI Act, checklist 🟣)
```

---

## PROMPT 1 — Angle manquant vs marché 2026

```
[Coller le contexte ci-dessus]

Question : y a-t-il un sujet que TOUTES les formations IA sérieuses
de 2026 couvrent et que cette formation omet complètement ?
Être précis : nommer le sujet, expliquer pourquoi il est standard,
et indiquer dans quel module il devrait apparaître.
```

---

## PROMPT 2 — Action concrète le lendemain matin

```
[Coller le contexte ci-dessus]

Un manager de PME française vient de terminer cette formation complète
(N1 + N2 + N3). Il arrive au bureau le lendemain matin à 9h.

Quelle est la PREMIÈRE chose concrète qu'il peut faire avec ce qu'il
a appris ? Est-ce suffisamment clair dans la progression de la formation,
ou faudrait-il ajouter un guide "premiers pas opérationnels" en sortie ?
```

---

## PROMPT 3 — Contradictions avec les pratiques terrain françaises

```
[Coller le contexte ci-dessus]

Y a-t-il une contradiction entre ce que cette formation enseigne et
les pratiques réelles observées dans les PME françaises en 2026 ?
Par exemple : un conseil théoriquement correct mais difficile à appliquer
dans une PME française typique (contraintes budget, DSI débordée,
résistance culturelle au changement, RGPD strict).
```

---

## PROMPT 4 — Test du positionnement concurrentiel

```
[Coller le contexte ci-dessus]

Cette formation est gratuite et destinée aux PME françaises.
En 2026, les alternatives payantes sur ce sujet incluent :
Jedha, CentraleSupélec Exed, formations internes RH/SIRH,
prestataires de conseil IA.

Quel est l'argument différenciant le plus fort de cette formation
par rapport à ces alternatives ?
Y a-t-il un positionnement que la formation rate ou sous-exploite ?
```

---

## Notes d'utilisation

- Coller TOUJOURS le contexte avant chaque prompt (Gemini n'a pas de mémoire)
- Si Gemini propose des corrections longues, noter uniquement le principe
  et laisser Claude Code implémenter
- Les réponses alimentent _qualite/audits/validation-finale-transversale.md
