import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";


@Injectable({providedIn: 'root'})
export class ProductService {

  public url: string = 'http://localhost:8080/product/all/';

  constructor(private http: HttpClient) {
  }

  getAllProductByType(productTypeId): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + productTypeId);
  }

}
