import { RegisterComponent } from './components/register/register.component';
import { HttpService } from './shared/http.service';
import { TodoStoreService } from './shared/todo-store.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';

export const routes = [
  { path: '', component: TodosComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegisterComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoStoreService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
