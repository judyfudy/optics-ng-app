import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {User} from "../model/user";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  signInUrl: string = 'http://localhost:8080/authenticate';
  signUpUrl: string = 'http://localhost:8080/signup';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.signInUrl, {username, password})
      .pipe(map(jwt => {
        // login successful if there's a jwt token in the response
        if (jwt) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('accessToken', `${jwt.accessToken}`);
          localStorage.setItem('refreshToken', `${jwt.refreshToken}`);
        }

        return jwt;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    let url = location.href.replace(location.origin, "");

    if (location.href.substring(23,29) !== "authenticate"){
      window.location.href = "/authenticate?returnUrl=" + url;
    }
  }

  register(user: User) {
    return this.http.post(this.signUpUrl, user);
  }
}
