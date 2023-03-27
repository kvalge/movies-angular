import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MovieListComponent} from "./pages/movies/movie-list/movie-list.component";
import {RentalsComponent} from "./pages/rentals/rentals.component";
import {SignupComponent} from "./pages/authentication/signup/signup.component";
import {LoginComponent} from "./pages/authentication/login/login.component";
import {MoviesComponent} from "./pages/movies/movies.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: "full"},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: RentalsComponent},
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
