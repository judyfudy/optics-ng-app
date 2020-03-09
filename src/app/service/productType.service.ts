import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../model/productType";


@Injectable({providedIn: 'root'})
export class ProductTypeService {

  public url: string = 'http://localhost:8080/productType/all';

  constructor(private http: HttpClient) {
  }

  getAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.url);
  }

}
