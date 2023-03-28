import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {RentalsComponent} from "./pages/rentals/rentals.component";
import {SignupComponent} from "./pages/authentication/signup/signup.component";
import {LoginComponent} from "./pages/authentication/login/login.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieDetailsComponent} from "./pages/movies/movie-detail-list/movie-details/movie-details.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: "full"},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'rentals', component: RentalsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
