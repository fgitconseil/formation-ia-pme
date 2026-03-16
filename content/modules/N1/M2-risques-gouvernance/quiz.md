# M2 — Quiz : Risques & gouvernance de l'IA
> 8 questions · Seuil de validation : 70% (6/8) · Débloque : M3

---

## Questions

**Q1.** Un manager copie-colle un contrat client dans ChatGPT public pour en extraire les dates clés. Ce comportement est :
- A) Acceptable — l'IA ne stocke pas les données
- B) Acceptable — si c'est pour usage interne uniquement
- C) Risqué — il vient de transmettre des données client à un serveur externe
- D) Interdit uniquement si le contrat est marqué "confidentiel"

> **Bonne réponse : C**
> *Dès qu'une information est copiée dans un LLM public, elle quitte le périmètre de l'entreprise. Le niveau de confidentialité affiché sur le document n'y change rien.*

---

**Q2.** Quelles données sont formellement à risque si soumises à un LLM public ? (une seule réponse inclut toutes les bonnes catégories)
- A) Données clients, données RH, informations stratégiques
- B) Données clients uniquement
- C) Données publiquement accessibles sur le site web de l'entreprise
- D) Toutes les données sauf les données financières

> **Bonne réponse : A**
> *Les trois catégories sont à risque : données clients (RGPD), données RH (particulièrement protégées), informations stratégiques (avantage concurrentiel).*

---

**Q3.** L'IA vous produit un texte avec une référence à "l'article 42 de la loi du 12 mars 2023". Que faites-vous ?
- A) Vous l'utilisez — l'IA ne cite que des sources réelles
- B) Vous vérifiez cet article dans le texte officiel avant tout usage
- C) Vous demandez à l'IA de confirmer que cet article existe
- D) Vous l'utilisez si l'IA indique un niveau de confiance élevé

> **Bonne réponse : B**
> *La vérification se fait dans une source primaire, pas en re-demandant à l'IA. L'IA peut confirmer une erreur avec la même confiance qu'une information correcte.*

---

**Q4.** Dans un output IA, quelles zones méritent une vérification humaine systématique ?
- A) Uniquement les parties rédigées en langage juridique
- B) Les conclusions finales seulement
- C) Dates, chiffres, citations, références réglementaires, engagements
- D) Seulement si l'IA a averti d'une incertitude

> **Bonne réponse : C**
> *Ces cinq catégories constituent les zones à risque réputationnel — à vérifier dans une source primaire avant tout envoi ou publication externe.*

---

**Q5.** Une équipe commerciale utilise l'IA pour rédiger des emails clients depuis 2 semaines avec de bons résultats. Elle décide d'automatiser complètement l'envoi. C'est :
- A) Une bonne décision — si ça marche bien, autant l'automatiser
- B) Prématuré — le contenu n'a pas été suffisamment validé et supervisé
- C) Acceptable si un manager relit 10% des emails au hasard
- D) Acceptable si l'IA est un modèle premium

> **Bonne réponse : B**
> *Deux semaines n'est pas suffisant pour valider un contenu avant automatisation. Les erreurs non détectées vont se propager à grande échelle.*

---

**Q6.** Quelle est la progression correcte avant d'industrialiser un usage IA ?
- A) 🟢 Structurer → 🟣 Industrialiser directement si les résultats sont bons
- B) 🟢 Structurer → 🟡 Fiabiliser → 🔵 Optimiser → 🟣 Industrialiser
- C) 🟡 Fiabiliser → 🟢 Structurer → 🟣 Industrialiser
- D) L'ordre n'a pas d'importance, l'essentiel est d'arriver à 🟣

> **Bonne réponse : B**
> *La progression 🟢🟡🔵🟣 est une barrière de sécurité organisationnelle. Aucun passage direct de 🟢 à 🟣 n'est acceptable.*

---

**Q7.** Quelle est la différence entre un outil comme ChatGPT public et une instance Claude Enterprise configurée par la DSI ?
- A) Aucune différence — les deux envoient les données aux mêmes serveurs
- B) L'instance entreprise peut avoir une politique de non-rétention des données
- C) L'instance entreprise est moins performante mais plus sécurisée
- D) La différence ne concerne que les données techniques, pas les données métier

> **Bonne réponse : B**
> *Une instance enterprise correctement configurée peut inclure une politique de non-rétention : les données ne servent pas à l'entraînement des modèles. Vérifier avec la DSI.*

---

**Q8.** La règle fondamentale du Risque 3 est :
- A) Ne jamais utiliser l'IA pour des tâches répétitives
- B) Toujours garder un humain dans la boucle de validation finale
- C) Ne jamais transformer un brouillon non fiabilisé en processus automatisé
- D) Automatiser uniquement les tâches à faible valeur ajoutée

> **Bonne réponse : C**
> *Un contenu doit d'abord être structuré (🟢), fiabilisé (🟡), optimisé (🔵) avant d'entrer dans un processus automatisé (🟣).*

---

## Corrigé synthétique

| Q | Réponse | Concept clé |
|---|---------|-------------|
| 1 | C | Exfiltration involontaire |
| 2 | A | Catégories de données à risque |
| 3 | B | Vérification source primaire |
| 4 | C | Zones réputationnelles à risque |
| 5 | B | Industrialisation prématurée |
| 6 | B | Progression 🟢🟡🔵🟣 |
| 7 | B | Instance publique vs entreprise |
| 8 | C | Règle fondamentale de gouvernance |

**Seuil : 6/8 minimum pour passer au M3**
