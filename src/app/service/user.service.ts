import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {
  }

  getAuthenticatedUserInfo(): Observable<User> {
    return this.http.get<User>(this.url);
  }
}
