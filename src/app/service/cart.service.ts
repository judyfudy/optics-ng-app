import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({providedIn: 'root'})
export class CartService {

  public getUrl: string = 'http://localhost:8080/cart/all';
  public postUrl: string = 'http://localhost:8080/cart';
  public clearUrl: string = 'http://localhost:8080/cart/clear';
  public orderUrl: string = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {
  }

  getAllProductsInCart() {
    return this.http.get<Product[]>(this.getUrl);
  }

  addToCart(productId) {
    this.http.post(this.postUrl, null,
      {params: new HttpParams().set('productId', productId)}).subscribe();
  }

  deleteFromCart(productId) {
    this.http.delete(this.postUrl,
      {params: new HttpParams().set('productId', productId)}).subscribe();
  }

  clearCart() {
    this.http.delete(this.clearUrl).subscribe();
  }

  getOrderAndSendEmail() {
    this.http.post(this.orderUrl, null).subscribe();
  }
}
