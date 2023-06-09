import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MovieListComponent} from './pages/movies/movie-list/movie-list.component';
import {SignupComponent} from './pages/authentication/signup/signup.component';
import {LoginComponent} from './pages/authentication/login/login.component';
import {RentalsComponent} from './pages/rentals/rentals.component';
import {MovieService} from "./services/movie.service";
import {DataService} from "./services/data.service";
import { MoviesComponent } from './pages/movies/movies.component';
import {AuthService} from "./services/auth.service";
import { MovieDetailsComponent } from './pages/movies/movie-list/movie-details/movie-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {AuthGuardService} from "./services/auth-guard.service";
import {GuardService} from "./services/guard.service";
import { AdminComponent } from './admin/admin.component';
import { MovieEditComponent } from './admin/movie-edit/movie-edit.component';
import { DetailsEditComponent } from './admin/details-edit/details-edit.component';
import { DetailsItemComponent } from './admin/details-item/details-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    SignupComponent,
    LoginComponent,
    RentalsComponent,
    MoviesComponent,
    MovieDetailsComponent,
    ErrorPageComponent,
    AdminComponent,
    MovieEditComponent,
    DetailsEditComponent,
    DetailsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MovieService, DataService, AuthService, AuthGuardService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
