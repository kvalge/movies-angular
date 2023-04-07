import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onLogin() {
    this.authService.login(this.userForm.value)
      .subscribe({
        next: (data) => console.log('data', data),
        error: (err) => {
          this.error = err.message;
        },
        complete: () => this.router.navigate(['movies'])
      });
    this.userForm.reset();
  }

  closeError() {
    this.error = null;
  }
}
