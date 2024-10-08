import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {todosComponent} from "./todos/todos.component";
import {provideHttpClient} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: todosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
