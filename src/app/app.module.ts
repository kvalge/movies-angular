import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {RouterLinkActive, RouterOutlet} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MovieListComponent} from './pages/movies/movie-list/movie-list.component';
import {SignupComponent} from './pages/authentication/signup/signup.component';
import {LoginComponent} from './pages/authentication/login/login.component';
import {RentalsComponent} from './pages/rentals/rentals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    SignupComponent,
    LoginComponent,
    RentalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
