import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn: 'root'})
export class DataService {
  movies = [];

  constructor(private http: HttpClient, private movieService: MovieService) {
  }

  getAllDetails() {
    let details = [];
    this.http.get<MovieDetailsModel[]>('http://localhost:8080/details/all')
      .pipe(map((res) => {
        for (let r of res) {
          details.push(r);
        }
      }))
      .subscribe()
    return details;
  }
}
