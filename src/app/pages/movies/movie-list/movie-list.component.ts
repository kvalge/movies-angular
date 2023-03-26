import { Component, OnInit } from '@angular/core';

import {MovieModel} from "../movie.model";
import {MovieService} from "../../../services/movie.service";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: MovieModel[];

  constructor(private movieService: MovieService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  getAllMovies() {
    this.dataService.getAllMovies();
    this.movies = this.movieService.getMovies();
  }
}
