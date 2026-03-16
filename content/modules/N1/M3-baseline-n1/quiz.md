# M3 — Quiz de validation Niveau 1 : Accès au Niveau 2
> 8 questions · Seuil de validation : 70% (6/8) · Débloque : N2 (M4 à M7)
> Ce quiz croise M1, M2 et M3 — questions de synthèse, pas de redite

---

## Questions

**Q1.** Un manager identifie une tâche répétitive qui prenait 2h par semaine. Avec l'IA, il obtient un résultat correct depuis 3 semaines. Il décide d'automatiser complètement. Quel point de la checklist a-t-il oublié ?
- A) Clarifier son intention avant de prompter
- B) Autoriser l'IA à dire "je ne sais pas"
- C) Vérifier que le contenu a été validé suffisamment longtemps avant d'automatiser
- D) Capitaliser les prompts qui fonctionnent

> **Bonne réponse : C**
> *3 semaines de bons résultats ne suffisent pas à valider un contenu avant automatisation. Le risque d'industrialisation prématurée (M2) est le piège classique des premiers succès.*

---

**Q2.** Un collègue vous envoie ce prompt qu'il compte utiliser : "Analyse ce contrat client et dis-moi les clauses à risque [contrat joint en PDF avec noms et montants réels]". Quel est le risque principal ?
- A) Le format PDF ne sera pas lu correctement par l'IA
- B) L'IA va simplifier les clauses sans les comprendre
- C) Des données client nominatives et contractuelles vont être transmises à un serveur externe
- D) L'IA ne peut pas analyser des documents juridiques

> **Bonne réponse : C**
> *Le contrat contient des données clients sensibles. L'envoyer dans un LLM public constitue une exfiltration. La bonne approche : anonymiser les noms et montants, ou utiliser une instance entreprise sécurisée.*

---

**Q3.** Vous obtenez une réponse de l'IA qui semble bien structurée mais ne correspond pas à ce que vous vouliez. La meilleure action est :
- A) Envoyer exactement la même demande une deuxième fois
- B) Ajouter "Sois plus précis" à la suite
- C) Reformuler en précisant ce qui manquait dans la réponse et le format exact attendu
- D) Changer d'outil IA

> **Bonne réponse : C**
> *Répéter ne produit pas d'amélioration. Itérer, c'est recadrer la demande — préciser ce qui manquait, le format, le public cible ou le niveau de détail attendu.*

---

**Q4.** Parmi ces 4 situations, laquelle ne nécessite PAS de vérification dans une source primaire avant utilisation ?
- A) L'IA vous donne le chiffre de croissance du secteur en 2024
- B) L'IA rédige un email de bienvenue en style décontracté sans fait précis
- C) L'IA cite un article de la loi RGPD avec son numéro
- D) L'IA mentionne la date d'entrée en vigueur d'une norme ISO

> **Bonne réponse : B**
> *Un email de style sans contenu factuel précis ne présente pas de risque réputationnel lié aux faits. En revanche, tout chiffre, date, référence légale ou normative doit être vérifié dans une source primaire.*

---

**Q5.** Quelle instruction dans un prompt permet de réduire le risque d'hallucination sur des faits précis ?
- A) "Réponds uniquement avec des informations certifiées"
- B) "Vérifie tes sources avant de répondre"
- C) "Si tu n'as pas d'information certaine sur ce point, dis-le explicitement plutôt que d'estimer"
- D) "Ne produis que des réponses courtes"

> **Bonne réponse : C**
> *Autoriser explicitement "je ne sais pas" est la seule instruction qui modifie réellement le comportement du LLM. Les formulations "certifié" ou "vérifie tes sources" sont interprétées de façon vague.*

---

**Q6.** Après avoir utilisé l'IA pour rédiger une réponse à un client, vous devez :
- A) L'envoyer directement — l'IA a été formée pour être professionnelle
- B) La relire pour vérifier dates, chiffres, engagements et la valider avant envoi
- C) La faire vérifier par l'IA une deuxième fois pour confirmation
- D) L'envoyer, puis la corriger si le client signale une erreur

> **Bonne réponse : B**
> *La relecture humaine avant envoi est non négociable. La responsabilité reste celle de l'émetteur. L'IA peut écrire de façon excellente tout en contenant des engagements erronés.*

---

**Q7.** Un collaborateur a obtenu un excellent résultat avec un prompt complexe pour produire une synthèse de réunion. Il ne note pas le prompt. Le lendemain, il essaie de retrouver le même résultat. Ce comportement :
- A) Est normal — les bons prompts viennent naturellement avec la pratique
- B) Est une perte de valeur : un bon prompt est un actif à capitaliser
- C) N'a pas d'importance si l'IA mémorise l'historique
- D) Est justifié si la réunion était une exception

> **Bonne réponse : B**
> *Capitaliser les prompts efficaces est le point 10 de la checklist. Un bon prompt est un actif professionnel réutilisable. Ne pas le noter équivaut à ne pas sauvegarder un document utile.*

---

**Q8.** Vous utilisez l'IA pour rédiger une note interne et décidez au fil de la session d'y intégrer des données de la réunion (chiffres, noms de projets sensibles). La bonne pratique est :
- A) Continuer — vous êtes déjà dans la session, les données restent locales
- B) Arrêter, ouvrir une nouvelle session sur une instance sécurisée, recommencer avec les données sensibles
- C) Masquer les données sensibles dans une police blanche avant de coller
- D) Envoyer d'abord sans les données, puis modifier localement après

> **Bonne réponse : B**
> *Les données ajoutées en cours de session s'intègrent au contexte transmis. La règle : chaque session avec données sensibles commence sur une instance sécurisée, pas à mi-chemin d'une session générique.*

---

## Corrigé synthétique

| Q | Réponse | Concept croisé |
|---|---------|---------------|
| 1 | C | Industrialisation prématurée (M2) + checklist point 8 |
| 2 | C | Exfiltration de données (M2) + checklist point 2 |
| 3 | C | Itération (M3) + qualité de la demande (M1) |
| 4 | B | Zones de risque réputationnel (M2) + vérification (M1) |
| 5 | C | Hallucination (M1) + sécurisation (M3) |
| 6 | B | Risque réputationnel (M2) + responsabilité humaine (M1) |
| 7 | B | Capitalisation (M3) |
| 8 | B | Exfiltration (M2) + données en session (M3) |

**Seuil : 6/8 minimum pour accéder au Niveau 2**
**Score < 6/8 : reprendre les points marqués ❌ avant de continuer**
