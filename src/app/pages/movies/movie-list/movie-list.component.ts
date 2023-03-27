import {Component, OnInit} from '@angular/core';

import {MovieModel} from "../movie.model";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: MovieModel[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.movies = this.dataService.getAllMovies();
  }
}
