import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../model/product";


@Injectable({providedIn: 'root'})
export class ProductService {

  public url: string = 'http://localhost:8080/product/all/';
  public deleteUrl: string = 'http://localhost:8080/product';

  constructor(private http: HttpClient) {
  }

  getAllProductByType(productTypeId): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + productTypeId);
  }

  deleteProduct(productId) {
    return this.http.delete(this.deleteUrl,
      {params: new HttpParams().set('productId', productId)}).subscribe();
  }

}
