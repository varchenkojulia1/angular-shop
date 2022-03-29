import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from "../core/products-service.service";
import { ProductModel } from "@shop/utils";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  public productList: ProductModel[] = [];

  constructor(
    public productsService: ProductsServiceService
  ) {}

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

  addToCart($event: ProductModel): void {
    console.log({event: $event})
  }
}
