import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {DataService} from "../../../services/data.service";
import {MovieDetailsModel} from "./movie-details/movie-details.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  details: MovieDetailsModel[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.details = this.dataService.getAllDetails();
  }
}
