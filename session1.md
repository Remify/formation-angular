# Todo App - Session 1 Les composants

## Installation

    npm install -g @angular/cli

Créer un projet Angular avec [Angular CLI](https://github.com/angular/angular-cli)

    ng new todo-app

Regarder l'oganisation du projet :

* [readme.md](./todo-app/readme.md)
* [package.json](./todo-app/package.json)
* le dossier `src/app`

## Premiers composants

Pour chaque instruction ci dessous, un commit avec le code à produire est disponible dans l'historique des commits ou sur [Github](https://github.com/Remify/formation-angular/commits/master).

### 1. `app.component.ts` & `app.component.html`

* Quel est la balise de AppComponent ?
* Où est appelé AppComponent ?

    Voir aussi : https://angular.io/guide/architecture

### 2. Créer un champ input qui modifie la propriété `title` à l'aide de la directive `ngModel` 

Voir la [documentation](https://angular.io/tutorial/toh-pt1#edit-the-hero)

- Quel comportement pouvons nous apercevoir ?

### 3. Créer le layout de votre todo-app dans `app.component.html`

Comme sur http://todomvc.com/examples/angular2/. 

    Le layout devra encapsuler un champ input et une liste de texte autour d'un div centré.

### 4. Afin de faciliter le travail sur les interfaces, ajoutons bootstrap !

Installer les dépendances Bootstrap et font-awesome.

    npm install --save  bootstrap font-awesome

Ajouter les styles bootstrap et font-awesome au projet dans `./angular-cli.json`

    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.min.css"
      ],

Nous sommes maintenant prêt à développer des composants !

### 5. Création d'un composant todo 

Nous allons créer un composant qui va servir de représentation pour 1 tâche todo. Ce composants se trouvera dans un dossier `components`.
Pour créer le composant à l'aide de la CLI :

    ng g c components/todo

Ajoutez le composant `TodoComponent` à `AppComponent` en utilisant l'appel par balise dans `app-component.html`.

### 6. Créer une classe typescript représentant une tâche.

Pour générer la class Todo.ts dans le dossier models avec la CLI :

    ng g class models/todo

Ajoutez à la classe Todo les propriétés `title` et `completed`.

    export class Todo {
        completed: Boolean;
        title: string;
        
        constructor(title: String) {
            this.completed = false;
            this.title = title.trim();
        }
    }


### 7. Modifier `TodoComponent` pour qu'il représente une tâche 

A l'aide du decorateur `@Input()` passez un object `Todo` de `AppComponent`  à `TodoComponent`

    import { Input } from '@angular/core';
    ...
    @Input() task: Todo;

Créer une tâche dans AppComponent et passez la à `TodoComponent`.

Faites en sorte que le template de `TodoComponent` affiche l'état d'une tâche (propriétés completed & title)

### 8. Afficher une liste de TodoComponent

Dans AppComponent, créez une liste de Todo.

     todos: Todo[] = [
         new Todo('Faire les courses'),
         new Todo('Allez au coiffeur')
     ];

Afficher une liste de composants TodoComponent à l'aide de la balise `*ngFor`

### 9. Gérer un compteur de tâches restantes

Faire un double binding ( `[(ngModel)]` ) entre la propriété `completed` et une checkbox.

Supprimer la liste à puce. 

Ajouter ce code à la fin de AppComponent :


    <pre>
      {{ todos | json }}
    </pre>

**Que se passe-t-il ? Que pouvez vous en déduire ?**

### 10. Intégrez les fonctionnalités pour Ajouter et Supprimer une tâche en utilisant des évènements. 

Indices : @Output(), (keyup), (click)
    
