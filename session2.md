# Todo App - Session 2 - Les services


### 1. Création d'un service 

Créer un service qui va service de Data Store dans le dossier `shared` avec la commande :

    ng g service shared/todo-store

Un store (ou Data Store) est un service avec pour rôle de porter et gérer des données. Il se distingue d'un service classique qui porte seulement de la logique.

### 2. Intégrer un CRUD 

Déplacer le tableau de tâche dans le service puis intégrez les fonctionnalités suivante : 
- Ajouter une tâche
- Supprimer une tâche
- Modifier une tâche

### 3. Injection de dépendance 

Partagez la liste de tâche avec le composant AppComponent et appelez les méthodes CRUD du service.


Afin de supprimer la mutabilités de notre liste (attention aux effets de bords), nous allons supprimer le passage de référence.

3 méthodes pour supprimer le passage de référence en Javascript :
- ESNext : Spread Operator avec la syntaxe `{... todos}`
- ES6 : `Object.assign(todos)`
- Deep copy : `JSON.parse(JSON.stringify(todos))`

Problème : Comment récupérer les nouvelles valeurs ?

### 4. Transformer le service en Store réactif

A l'aide de la bibliothèque RxJS, nous allons transformer notre Store en `store réactif`. 

Pour rendre `todos: Todo[]` reactif à l'aide du pattern observer :

    todos: Subject<Todo[]> = new Subject();

Voir aussi la classe `BehaviorSubject`

### 5. Ecrire dans le localStorage

Enregistrer chaque changement dans le localStorage.