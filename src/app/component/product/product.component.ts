import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product";
import {ProductType} from "../../model/productType";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products : Product[];
  public authenticatedStatus: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getAllProductByType(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(data => this.products = data);
  }

  addToCart(productId) {
    this.cartService.addToCart(productId);
  }

  isAuthenticated() {
    const token: string = localStorage.getItem('accessToken');
    return token !== null;
  }

}
