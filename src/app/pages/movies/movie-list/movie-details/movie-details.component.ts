import {Component, OnInit} from '@angular/core';
import {MovieDetailsModel} from "./movie-details.model";
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "../../../../services/data.service";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  details: MovieDetailsModel[];
  id = 0;

  constructor(
    private dataService: DataService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.details = this.dataService.getAllDetails();
  }

  toRental() {
    this.router.navigate(['rentals']);
  }
}
