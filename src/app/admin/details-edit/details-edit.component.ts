import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  @Output() editReset = new EventEmitter<boolean>();
  resetEditMode: boolean = false;


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
    } else {
      this.dataService.editDetails(this.detailsForm.value);
      this.editMode = false;
      this.editReset.emit(this.resetEditMode);
    }
    this.detailsForm.reset();
    this.details = null;
  }

  onCancel() {
    this.detailsForm.reset();
  }

  editDetails(details) {
    document.getElementById("top").scrollIntoView({behavior: 'smooth'});
    this.editMode = true;
    this.details = details;
    this.detailsForm.patchValue({
      director: details.director,
      writer: details.writer,
      stars: details.stars,
      year: details.year,
      country: details.country,
      description: details.description,
      image: details.image,
      movieName: details.movieName
    })
  }
}
