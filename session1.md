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

1. `app.component.ts` & `app.component.html`

* Quel est la balise de AppComponent ?
* Où est appelé AppComponent ?

    Voir aussi : https://angular.io/guide/architecture

2. Créez un champ input qui modifie la propriété `title` à l'aide de la directive `ngModel` 

    Voir [documentation](https://angular.io/tutorial/toh-pt1#edit-the-hero)

    **Quel comportement pouvons nous apercevoir ?**

3. Créez le layout de votre todo-app dans `app.component.html`

    Le layout devra être centré autour d'un champ input et d'une liste de texte.

4. Afin de faciliter le travail sur les interfaces, ajoutons bootstrap !

Installer les dépendances Bootstrap et font-awesome.

    npm install --save  bootstrap font-awesome

Ajouter les styles bootstrap et font-awesome au projet dans `./angular-cli.json`

    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.min.css"
      ],

Nous sommes maintenant prêt à créer nos composants todo !

5. Créez un composant todo 

Nous allons créer un composant qui va servir de représentation pour 1 tâche todo. Ce composants se trouvera dans un dossier `components`.

    ng g c components/todo

- Ajoutez le composant `TodoComponent` à `AppComponent` avec sa balise.

6. Créez la classe représentant une tâche.

Pour générer la class Todo.ts dans le dossier models avec la CLI :

    ng g class models/todo

Ajoutez à la classe Todo les propriétés `title` et `completed`.

7. Modifiez `TodoComponent` pour qu'il représente une tâche 

A l'aide du decorateur `@Input()` passez une tâche *Todo* à `TodoComponent`

    @Input() task: Todo;

Créer une tâche dans AppComponent et passez la à `TodoComponent`.

Faites en sorte que `TodoComponent` affiche l'état d'une tâche (completed & title)

8. Afficher une liste de TodoComponent

Dans AppComponent, créez une liste de Todo.

Afficher une liste de composants TodoComponent à l'aide de la balise `*ngFor`
<!-- Todo pipes  -->