# Todo App - Session 2 - Les services


### 1. Création d'un service 

Créer un service dans le dossier `shared` avec la commande :

    ng g service shared/todo-store

Un store (ou Data Store) est un service avec pour rôle de porter et gérer des données. Il se distingue d'un service classique qui lui porte la logique.

### 2. Intégrer un CRUD 

Déplacer le tableau de tâche dans le service.

Créer les fonctionnalités suivante : 
- Ajouter une tâche
- Supprimer une tâche
- Modifier une tâche

### 3. Transformer le service en Store réactif

