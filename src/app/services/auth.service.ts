import {HttpClient} from "@angular/common/http";
import {UserModel} from "../pages/authentication/user.model";
import {Injectable} from "@angular/core";
import {LoginModel} from "../pages/authentication/login/login.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(userModel: UserModel) {
    return this.http.post('http://localhost:8080/register', userModel)
  }

  login(loginModel: LoginModel) {
    return this.http.post('http://localhost:8080/login', loginModel)
  }
}
