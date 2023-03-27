import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {MovieModel} from "../pages/movies/movie.model";

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAllMovies() {
    let movies = [];
    this.http.get<MovieModel[]>('http://localhost:8080/movie')
      .pipe(map((res) => {
        for (let r of res) {
          movies.push(r);
        }
      }))
      .subscribe()
    return movies;
  }

  /*  getAllMovies() {
      this.http.get<MovieModel[]>('http://localhost:8080/movie')
        .pipe(map((movies) => {
          return movies;
        }))
        .subscribe(movies => {
          this.movieService.setMovies(movies);
        })
    }*/
}
