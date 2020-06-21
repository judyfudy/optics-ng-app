import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products : Product[];
  public authenticatedStatus: boolean;
  isAdmin: boolean;

  constructor(private route: ActivatedRoute,private router : Router, private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getAllProductByType(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(data =>  {
        this.products = data;
        this.ngOnInit();
      });
    this.isAdmin = this.getSubFromJwt();
  }

  addToCart(productId) {
    this.cartService.addToCart(productId);
  }

  isAuthenticated() {
    const token: string = localStorage.getItem('accessToken');
    return token !== null;
  }

  getSubFromJwt():boolean {
    var token = localStorage.getItem("accessToken");
    var decodedToken = jwt_decode(token);
    var admin = decodedToken['sub'];

    return admin === 'ADMIN';
  }

  deleteProduct(productId) {
    this.productService.deleteProduct(productId);
  }

}
