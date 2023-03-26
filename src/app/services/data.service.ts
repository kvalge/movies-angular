import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {MovieModel} from "../pages/movies/movie.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient, private movieService: MovieService) {
  }

  getAllMovies() {
    this.http.get<MovieModel[]>('http://localhost:8080/movie')
      .pipe(map((movies) => {
        return movies;
      }))
      .subscribe(movies => {
        this.movieService.setMovies(movies);
      })
  }
}
