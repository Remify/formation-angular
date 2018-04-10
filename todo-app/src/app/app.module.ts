import { HttpService } from './shared/http.service';
import { TodoStoreService } from './shared/todo-store.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpService } from './shared/http.service';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoStoreService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
