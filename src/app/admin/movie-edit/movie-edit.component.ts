import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {MovieModel} from "../../pages/movies/movie.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movieForm: FormGroup;
  movie: MovieModel;
  editMode: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      categoryName: new FormControl(null, Validators.required)
    });
  }

  submitMovie() {
    if (!this.editMode) {
      this.dataService.addNewMovie(this.movieForm.value);
    }
    this.movieForm.reset();
    this.movie = null;
  }

  onCancel() {
    this.movieForm.reset();
  }
}
