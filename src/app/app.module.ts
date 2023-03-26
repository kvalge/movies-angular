import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MovieListComponent} from './pages/movies/movie-list/movie-list.component';
import {SignupComponent} from './pages/authentication/signup/signup.component';
import {LoginComponent} from './pages/authentication/login/login.component';
import {RentalsComponent} from './pages/rentals/rentals.component';
import {MovieService} from "./services/movie.service";
import {DataService} from "./services/data.service";

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
    RouterOutlet,
    HttpClientModule
  ],
  providers: [MovieService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
