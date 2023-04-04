import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieDetailsModel} from "../../pages/movies/movie-list/movie-details/movie-details.model";
import {DataService} from "../../services/data.service";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit, DoCheck, OnChanges {

  movieName: string = '';
  details: MovieDetailsModel;

  constructor(private dataService: DataService, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.dataService.getDetailsByMovieName(this.movieName)
  }

  getMovie() {
/*    this.details = this.movieService.getDetails();
    console.log(this.details)*/

    this.movieName = '';
  }

  ngOnChanges(changes: SimpleChanges) {

  }
  ngDoCheck() {

  }
}
