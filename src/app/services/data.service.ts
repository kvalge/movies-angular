import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";
import {MovieModel} from "../pages/movies/movie.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient, private movieService: MovieService) {
  }

  addNewMovie(movie: MovieModel) {
    this.http.post('http://localhost:8080/movie/new', movie)
      .subscribe();
  }

  addDetails(details: MovieDetailsModel) {
    this.http.post('http://localhost:8080/details/new', details)
      .subscribe();
  }

  getAllDetails() {
    let details = [];
    this.http.get<MovieDetailsModel[]>('http://localhost:8080/details/all',
      {
        headers: new HttpHeaders({'Custom-Header': 'Header'})
      })
      .pipe(map((res) => {
        for (let r of res) {
          details.push(r);
        }
      }))
      .subscribe()
    return details;
  }

  getDetailsById(id: number) {
    this.http.get<MovieDetailsModel>('http://localhost:8080/details/id?id=' + id)
      .pipe(map((details) => {
        return details;
      }))
      .subscribe(details => {
        this.movieService.setDetails(details);
      });
  }

  getDetailsByMovieName(movieName: string) {
    return this.http.get<MovieDetailsModel>('http://localhost:8080/details/name?movieName=' + movieName)
      .pipe(map((details) => {
        return details;
      }))
  }

  editDetails(request: MovieDetailsModel) {
    this.http.put('http://localhost:8080/details', request)
      .subscribe();
  }
}
