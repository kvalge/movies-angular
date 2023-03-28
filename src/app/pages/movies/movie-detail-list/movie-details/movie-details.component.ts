import { Component, OnInit } from '@angular/core';
import {MovieDetailsModel} from "../movie-details.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  detail: MovieDetailsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
