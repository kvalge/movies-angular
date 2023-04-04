import {Component, DoCheck, OnInit} from '@angular/core';
import {MovieDetailsModel} from "./movie-details.model";
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "../../../../services/data.service";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, DoCheck {

  details: MovieDetailsModel;

  constructor(
    private dataService: DataService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) {
    this.details = this.movieService.getDetails();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getDetailsById(id);
    this.details = this.movieService.getDetails();
    this.details = null;
  }

  ngDoCheck() {
    this.details = this.movieService.getDetails();
  }

  toRental() {
    this.router.navigate(['rentals']);
  }
}
