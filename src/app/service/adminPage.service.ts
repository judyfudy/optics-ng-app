import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Product} from "../model/product";

@Injectable({providedIn: 'root'})
export class AdminPageService {

  public url: string = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }

  changeUserRole(role, id) {
      this.http.put(this.url, null,
        {params: new HttpParams().set('role', role).set('id', id)}).subscribe();
  }

  addNewProduct(product: Product) {
    return this.http.post(this.url, product);
  }
}
