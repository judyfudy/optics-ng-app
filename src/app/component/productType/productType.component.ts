import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../model/productType";
import {ProductTypeService} from "../../service/productType.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productType',
  templateUrl: './productType.component.html',
  styleUrls: ['./productType.component.css']
})
export class ProductTypeComponent implements OnInit {

  productTypes: ProductType[];

  constructor(private router: Router, private productService: ProductTypeService) {
  }

  ngOnInit(): void {
    this.productService.getAllProductTypes().subscribe(data => this.productTypes = data);
  }

  onSelect(productType) {
    this.router.navigate(['/productType', productType.id]);
  }
}
