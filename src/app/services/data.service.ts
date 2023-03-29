import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn: 'root'})
export class DataService {

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

  getDetailsById(id) {
    let movieDetails: MovieDetailsModel = null;
    this.http.get<MovieDetailsModel>('http://localhost:8080/details/' + id)
      .pipe(map((details) => {
        movieDetails = {...details};
      }))
      .subscribe(details => {
      })
    console.log("data3: " + movieDetails);
    return movieDetails;
  }
}
