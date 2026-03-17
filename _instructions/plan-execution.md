# Plan d'exécution — Sprint 12 semaines
> Formation IA Générative · Démarré : 2026-03
> Mise à jour : lire _journal/ pour l'état réel en cours de sprint

---

## Vue d'ensemble

| Phase | Semaines | Focus | Livrable clé |
|-------|----------|-------|--------------|
| Fondation | S1 | Infra + pipeline | Repo git + site Astro |
| Contenu N1 | S2–S3 | M2, M3 | N1 complet |
| Pilote terrain | S4 | Aristid + feedback | Deck + synthèse |
| Contenu N2 | S5–S6 | M4, M5, M6, M7 | N2 complet |
| Contenu N3 | S7–S8 | M8, M9, M10(?) | N3 complet |
| Intégration | S9 | M11 + quiz JSON + **relecture orale** | Contenu prêt tournage |
| Site final | S10 | Site production-ready | Site complet |
| Validation | S11 | Beta test + révisions | Contenu stabilisé |
| Lancement | S12 | Go live | D1 en ligne |

---

## Détail semaine par semaine

---

### S1 — Fondation technique
> Objectif : tout ce qui est infrastructure, jamais à refaire

**Tâches**
- [ ] `git init` + premier commit + push GitHub
- [ ] Créer `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages)
- [ ] Initialiser Astro dans `/site` avec une page index + 11 pages modules
- [ ] Configurer `package.json` pour le déploiement GitHub Pages
- [ ] Coder le quiz d'orientation en JS vanilla (6 questions, 5 profils en output)
- [ ] Vérifier que le pipeline Markdown → pages fonctionne sur M1

**Critère de fin de semaine**
✅ Le site se déploie automatiquement à chaque push sur main
✅ La page M1 est accessible en ligne avec le contenu du script

**Post LinkedIn associé**
Aucun — semaine infra, pas de publication

---

### S2 — Module M2 complet
> Objectif : livrer le deuxième module du Niveau 1

**Tâches**
- [ ] Relire Prompting-final.md section 2 (gouvernance et risques)
- [ ] Rédiger / valider script-v1.md M2 (relecture à voix haute < 22 min ?)
- [ ] Rédiger quiz.md M2 (8 questions + corrigé)
- [ ] Rédiger exercice.md M2 (3 exercices pratiques)
- [ ] Rédiger post-linkedin.md M2 (3 variantes)
- [ ] Créer CHANGELOG.md M2
- [ ] Intégrer M2 dans le site Astro

**Critère de fin de semaine**
✅ Les 5 fichiers M2 sont créés et dans le repo
✅ La page M2 est accessible sur le site

**Post LinkedIn associé**
Aucun (pas encore en ligne) — préparer variante A M2 pour S6

---

### S3 — Module M3 (Baseline N1)
> Objectif : finaliser le Niveau 1

**Tâches**
- [ ] Créer l'exercice de synthèse M3 (auto-évaluation N1)
- [ ] Créer le quiz bilan N1 (10 questions sur C1 + C2)
- [ ] Créer post-linkedin.md M3
- [ ] Créer CHANGELOG.md M3
- [ ] Intégrer M3 dans le site
- [ ] Générer quiz.json pour M1, M2, M3 (format compatible JS site)
- [ ] Test de navigation complète N1 sur le site

**Critère de fin de semaine**
✅ Le parcours N1 complet est navigable sur le site
✅ Les quiz JSON M1-M3 sont générés et fonctionnels

**Post LinkedIn associé**
Aucun — préparation de la session Aristid

---

### S4 — Pilote Aristid + feedback
> Objectif : valider le contenu sur un public réel avant de finaliser N2-N3

**Tâches**
- [ ] Préparer le deck Aristid (20 slides, basé sur N1 + aperçu N2)
- [ ] Créer livrables/presentation-aristid/deck-aristid-v1.md
- [ ] Conduire la session pilote (en présentiel ou visio)
- [ ] Noter les feedbacks terrain dans _journal/2026-W[XX].md (section Feedbacks)
- [ ] Synthétiser feedbacks dans livrables/presentation-aristid/synthese-feedback-aristid.md
- [ ] Décider M10 in/out en V1 (mettre la décision dans decisions.md)
- [ ] Identifier révisions prioritaires pour M1 et M2 si nécessaires

**Critère de fin de semaine**
✅ Deck Aristid livré et session tenue
✅ Décision M10 documentée dans decisions.md
✅ Liste des révisions M1/M2 priorisées

**Post LinkedIn associé**
Publier Variante C de M1 (storytelling) — première publication de la série

---

### S5 — Modules M4 + M5
> Objectif : couvrir les 2 premiers modules de N2

**Tâches M4 — Les 4 types de prompts**
- [ ] Relire Prompting-final.md section 7 (les 4 types)
- [ ] Rédiger script-v1.md M4 (~20 min)
- [ ] Rédiger quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md M4

**Tâches M5 — La méthode par niveaux**
- [ ] Relire Prompting-final.md sections 4–6 (progression 🟢🟡🔵🟣)
- [ ] Rédiger script-v1.md M5 (~20 min)
- [ ] Rédiger quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md M5

**Tâches communes**
- [ ] Intégrer M4 et M5 dans le site Astro
- [ ] Réviser M1/M2 si feedbacks Aristid l'imposent (créer v2)

**Critère de fin de semaine**
✅ 5 fichiers M4 + 5 fichiers M5 créés
✅ Révisions post-Aristid documentées dans les CHANGELOG

**Post LinkedIn associé**
Publier Variante A de M1 (court) — relancer la visibilité après S4

---

### S6 — Modules M6 + M7
> Objectif : finaliser le Niveau 2

**Tâches M6 — Capitaliser sa connaissance**
- [ ] Relire Prompting-final.md section 8 (données et RAG) + analyse Skilljar (Projects/Artifacts)
- [ ] Rédiger script-v1.md M6 (inclure Projects + Artifacts — gap Skilljar)
- [ ] Rédiger quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md M6

**Tâches M7 — Baseline N2**
- [ ] Créer exercice de synthèse M7 (mise en situation réelle)
- [ ] Créer quiz bilan N2 (10 questions sur C3 + C4)
- [ ] Rédiger post-linkedin.md, CHANGELOG.md M7
- [ ] Générer quiz.json pour M4, M5, M6, M7

**Tâches communes**
- [ ] Intégrer M6 et M7 dans le site
- [ ] Test navigation complète N2

**Critère de fin de semaine**
✅ Le parcours N2 complet est navigable sur le site
✅ Les quiz JSON M4-M7 sont fonctionnels

**Post LinkedIn associé**
Publier Variante C de M2 (storytelling) — histoire appel d'offres

---

### S7 — Modules M8 + M9
> Objectif : démarrer le Niveau 3

**Tâches M8 — Créer son assistant personnalisé**
- [ ] Relire docs.claude.ai (configuration assistants) + Claude 101 section 3
- [ ] Rédiger script-v1.md M8 (~20 min)
- [ ] Rédiger quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md M8

**Tâches M9 — Skills & bases de connaissance**
- [ ] Relire Prompting-final.md section 8 + Introduction to Agent Skills (Skilljar)
- [ ] Rédiger script-v1.md M9 (~20 min)
- [ ] Rédiger quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md M9

**Tâches communes**
- [ ] Intégrer M8 et M9 dans le site
- [ ] Lancer pipeline Markdown → pages Astro pour tous les modules existants

**Critère de fin de semaine**
✅ 5 fichiers M8 + 5 fichiers M9 créés
✅ Pipeline Markdown → pages Astro opérationnel sur tous les modules

**Post LinkedIn associé**
Publier Variante B de M1 (carrousel) — éducatif, forte portée organique

---

### S8 — M10 (conditionnel) + Livre blanc
> Objectif : finaliser N3 et produire D3

**Tâches M10 — Introduction aux MCP (si décision S4 = IN)**
- [ ] Relire Prompting-final.md section 9 + docs MCP officiels
- [ ] Rédiger script-v1.md M10, quiz.md, exercice.md, post-linkedin.md, CHANGELOG.md
- [ ] ⚠️ Si décision S4 = OUT : créer placeholder M10 avec note "V2"

**Tâches Livre blanc (D3)**
- [ ] Lire tous les script-vFinal.md (ou v1 si pas encore final) dans content/modules/
- [ ] Compiler livrables/livre-blanc/livre-blanc-v1.md (8 000-10 000 mots)
- [ ] Structure : Introduction + Partie 1 (N1) + Partie 2 (N2) + Partie 3 (N3) + Conclusion
- [ ] Écrire script Pandoc pour générer le PDF

**Critère de fin de semaine**
✅ Décision M10 exécutée (fichiers créés ou placeholder posé)
✅ livre-blanc-v1.md compilé et PDF généré via Pandoc

**Post LinkedIn associé**
Publier Variante B de M2 (carrousel) — "3 risques que votre équipe prend cette semaine"

---

### S9 — M11 + quiz JSON + session relecture orale
> Objectif : clore le contenu et valider tous les scripts pour le tournage

**Tâches M11 — Baseline N3**
- [ ] Créer exercice de synthèse M11 (plan de déploiement IA — projet final)
- [ ] Créer quiz bilan N3 + quiz final formation (15 questions)
- [ ] Rédiger post-linkedin.md, CHANGELOG.md M11
- [ ] Intégrer M11 dans le site

**Tâches quiz JSON**
- [ ] Générer quiz.json pour M8, M9, M10, M11
- [ ] Vérifier la cohérence de tous les quiz JSON (format uniforme)
- [ ] Tester le quiz d'orientation sur 5 profils différents

**🎙️ SESSION RELECTURE ORALE — Bloquer une demi-journée**
> Niveau 2 du protocole qualité · ~3h · À faire en une seule session
> Grille : _qualite/protocole-qualite.md · Résultats : _qualite/audits/

Lire chaque script à voix haute, dans l'ordre, en se chronométrant.
8 scripts vidéo × ~20 min = ~2h40 de lecture + 20 min de notes = ~3h total.

- [ ] M1 — lire à voix haute · noter durée réelle · signaler les passages qui butent
- [ ] M2 — idem
- [ ] M4 — idem
- [ ] M5 — idem (⚠️ section 4 dense à 3 min — surveiller)
- [ ] M6 — idem
- [ ] M8 — idem
- [ ] M9 — idem
- [ ] M10 — idem (si IN)
- [ ] Pour chaque module : remplir la fiche dans _qualite/audits/[Mxx]-relecture.md
- [ ] Scripts hors seuil (< 18 min ou > 22 min) → créer v2 immédiatement

**Ce qu'on note pendant la relecture :**
```
[ ] Passages où tu butes → à reformuler
[ ] Passages qui sonnent "trop écrit" → à réécrire en oral
[ ] Durée réelle chronométrée : ___ min
[ ] L'accroche te parle-t-elle si tu es le manager de l'histoire ?
[ ] Références légales à marquer [exemple simulé] si ce n'est pas fait
```

**Critère de fin de semaine**
✅ Tous les 11 modules ont leurs fichiers complets
✅ Tous les quiz JSON sont générés et validés
✅ Session relecture orale complète — tous les scripts à statut VALIDÉ RELECTURE
✅ Scripts hors durée → v2 créées

**Post LinkedIn associé**
Aucun — semaine d'intégration et relecture, pas de publication

---

### S10 — Site complet + SEO + quiz orientation
> Objectif : site production-ready

**Tâches site**
- [ ] Finaliser la page d'accueil avec quiz d'orientation (5 profils → recommandation)
- [ ] Vérifier toutes les pages modules (contenu, quiz, liens entre modules)
- [ ] Ajouter page "À propos / Formateur"
- [ ] Ajouter section "Ressources complémentaires" (lien Claude 101, AI Fluency)
- [ ] SEO de base : meta title, description, Open Graph pour chaque page
- [ ] Test complet de navigation desktop + mobile
- [ ] Vérifier le workflow GitHub Actions (build propre, pas d'erreur)

**Critère de fin de semaine**
✅ Toutes les pages passent un audit Lighthouse > 80
✅ Le quiz d'orientation fonctionne sur mobile
✅ Le workflow deploy.yml tourne sans erreur

**Post LinkedIn associé**
Publier Variante A de M5 (méthode par niveaux) — teasing avant lancement

---

### S11 — Beta test + révisions finales
> Objectif : valider le contenu sur des utilisateurs réels avant go live

**Tâches**
- [ ] Identifier 3–5 bêta-testeurs (profils variés : direction, RH, commercial, opérationnel)
- [ ] Leur donner accès au site (en preview ou URL directe)
- [ ] Collecter les feedbacks (formulaire ou entretien rapide)
- [ ] Prioriser les révisions (BLOQUANT vs NORMAL)
- [ ] Appliquer les révisions prioritaires (créer v2 des scripts si nécessaire)
- [ ] Mettre à jour le tableau d'avancement dans CLAUDE.md
- [ ] Préparer le post de lancement (annonce de mise en ligne)

**Critère de fin de semaine**
✅ Feedbacks beta collectés et traités
✅ Aucun bug BLOQUANT sur le site
✅ Post de lancement rédigé et prêt

**Post LinkedIn associé**
Publier Variante C de M4 (storytelling) — avant-dernière semaine avant lancement

---

### S12 — Lancement
> Objectif : D1 en ligne, D3 disponible, visibilité LinkedIn

**Tâches**
- [ ] Merge final sur main + deploy de production
- [ ] Vérifier le site en live (toutes les pages, tous les quiz)
- [ ] Mettre le lien dans la bio LinkedIn
- [ ] Publier le post de lancement (post spécial — pas une variante de module)
- [ ] Envoyer l'URL à Aristid et aux contacts pilotes
- [ ] Rendre le livre blanc PDF téléchargeable sur le site
- [ ] Créer le tag git `v1.0.0` + push
- [ ] Écrire le bilan de sprint dans _journal/

**Critère de fin de semaine**
✅ Le site est accessible publiquement
✅ Au moins 3 posts LinkedIn publiés pendant le sprint (M1 × 2, M2 × 1)
✅ Livre blanc PDF téléchargeable
✅ Tag v1.0.0 posé sur le repo

**Post LinkedIn associé**
Post de lancement dédié — annoncer la mise en ligne de la formation

---

## Tableau de suivi posts LinkedIn

| Semaine | Post publié | Variante | Module |
|---------|-------------|----------|--------|
| S4 | ✅ à planifier | C — Storytelling | M1 |
| S5 | ✅ à planifier | A — Court | M1 |
| S6 | ✅ à planifier | C — Storytelling | M2 |
| S7 | ✅ à planifier | B — Carrousel | M1 |
| S8 | ✅ à planifier | B — Carrousel | M2 |
| S10 | ✅ à planifier | A — Court | M5 |
| S11 | ✅ à planifier | C — Storytelling | M4 |
| S12 | ✅ à planifier | Post lancement | — |

**Objectif : 8 posts minimum sur 12 semaines, un rythme de 1 par semaine à partir de S4.**

---

## Indicateurs de succès (S12)

| KPI | Cible V1 |
|-----|----------|
| Modules en ligne | 11 (10 si M10 coupé) |
| Quiz JSON fonctionnels | 8 minimum |
| Vidéos tournées | 6 minimum (M1, M2, M4, M5, M8, M9) |
| Livre blanc PDF | 1 version téléchargeable |
| Posts LinkedIn publiés | 8 minimum |
| Bêta-testeurs ayant terminé N1 | 3 minimum |
| Scripts validés relecture orale | 8/8 avant tournage |
