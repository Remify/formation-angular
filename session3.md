# Todo App - Session 3 - Routes and Formulaires

### 1. Mise en place 

Créer un composant appelé RegisterComponent qui va accueillir un formulaire d'inscription

    ng g c components/register

Créer un composant appelé TodosComponent qui va accueillir la page actuelle.

    ng g c components/todos

### 2. Configuration pour la gestion des routes

Voir documentation : https://angular.io/guide/router

Création des routes :

    export const routes = [
        { path: '', component: TodosComponent },
        { path: 'register', component: RegisterComponent }
    ]

Dans AppModule, appelez les routes
    
    imports: [
        ...
        RouterModule.forRoot(routes),
        ...
    ],

Dans AppComponent template, ajouter 

    <router-outlet></router-outlet>

### 3. Migration vers TodosComponent

Migrer la liste de Todos dans TodosComponent

### 4. Créer un menu

Dans AppComponent template en bas de page, créer un menu :

    <div>
        <a routerLink="">Home</a> - 
        <a routerLink="register">Créer un compte</a>
    </div>

### 5. Création du formulaire d'inscription