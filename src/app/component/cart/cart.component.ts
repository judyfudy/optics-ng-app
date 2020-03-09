import {Component, OnInit} from '@angular/core';

import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAllProductsInCart().subscribe(data => this.products = data);
  }

  deleteFromCart(productId) {
    this.cartService.deleteFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getOrderAndSendEmail() {
    this.cartService.getOrderAndSendEmail();
  }
}
