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

2. Créez un champ input qui modifie la propriété `title` à l'aide de la directive `ngModel` 

    Voir [documentation](https://angular.io/tutorial/toh-pt1#edit-the-hero)

    **Quel comportement pouvons nous apercevoir ?**

3. Créez le layout de votre todo-app dans `app.component.html`

    Le layout devra être centré autour d'un champ input et d'une liste de texte.
