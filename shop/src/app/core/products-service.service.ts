import { Injectable } from '@angular/core';
import {productList, ProductModel} from "@shop/utils";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  getProducts(): ProductModel[] {
    return productList;
  }
}
