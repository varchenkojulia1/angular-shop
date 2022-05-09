import { Injectable } from '@angular/core';
import {productList, ProductModel} from "@shop/utils";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  getProducts$(): Observable<ProductModel[]> {
    return of(productList);
  }
}
