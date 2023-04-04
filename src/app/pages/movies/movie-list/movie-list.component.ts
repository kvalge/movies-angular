import {Component, OnInit} from '@angular/core';

import {DataService} from "../../../services/data.service";
import {MovieDetailsModel} from "./movie-details/movie-details.model";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  allDetails: MovieDetailsModel[];

  constructor(private dataService: DataService, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.allDetails = this.dataService.getAllDetails();
  }

  onSelect(details) {
    this.movieService.setDetails(details);
  }
}
