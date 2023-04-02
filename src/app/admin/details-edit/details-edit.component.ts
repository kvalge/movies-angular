import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieModel} from "../../pages/movies/movie.model";
import {DataService} from "../../services/data.service";
import {MovieDetailsModel} from "../../pages/movies/movie-list/movie-details/movie-details.model";

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.css']
})
export class DetailsEditComponent implements OnInit {

  detailsForm: FormGroup;
  details: MovieDetailsModel;
  editMode: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      director: new FormControl(null, Validators.required),
      writer: new FormControl(null, Validators.required),
      stars: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      movieName: new FormControl(null, Validators.required)
    });
  }

  submitDetails() {
    if (!this.editMode) {
      this.dataService.addDetails(this.detailsForm.value);
    }
    this.detailsForm.reset();
    this.details = null;
  }

  onCancel() {
    this.detailsForm.reset();
  }

}
