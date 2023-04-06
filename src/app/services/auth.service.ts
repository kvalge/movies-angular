import {HttpClient} from "@angular/common/http";
import {UserModel} from "../pages/authentication/user.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(userModel: UserModel) {
    return this.http.post('http://localhost:8080/register', userModel)
  }
}
