import {Component, OnInit} from '@angular/core';
import {MovieDetailsModel} from "../../pages/movies/movie-list/movie-details/movie-details.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {

  details: MovieDetailsModel;
  movieName: string = '';
  editMode: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  getMovie() {
    this.dataService.getDetailsByMovieName(this.movieName)
      .subscribe(details => {
        this.details = details;
      })
    this.editMode = true;
    this.movieName = '';
  }
}
