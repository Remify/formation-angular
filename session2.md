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

### 6. Création d'un service Http

Créer un service pour faire les requêtes http avec la commande :

    ng g service shared/http

Puis ajouter le service nouvellement créé à AppModule

    ...
    providers: [TodoStoreService, HttpService],
    ...

Ajouter HttpClient à notre service :

    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class HttpService {

        constructor(private http: HttpClient) {
        }

    }

Et HttpModule à AppModule

    ...
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    ...

### 7. Premières requêtes

Créez une fonction qui **retourne** une requête `get` à l'adresse du serveur :


    getTodos() {
        return this.http.get(URL_SERVEUR)
    }

Appelez getTodos dans le constructeur de StoreService et à l'aide de la méthode `subscribe`, executez la requête :

    this.todoService.getTodos().subscribe((res: Todo[]) => {
      console.log('todos', res);
      this.todos.next(res);
    });
  }

### 8. Intégration du CRUD

Dans HttpService, créez les 4 méthodes :

    get
    post
    put
    delete

Puis modifier StoreService pour intégrer les méthodes :
 
    add()
    delete()
    update()
    clearCompleted()
    completeAll()
    uncompleteAll()
