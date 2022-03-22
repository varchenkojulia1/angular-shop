import { Injectable } from '@angular/core';
import { cartList, ProductModel } from "@shop/utils";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCart(): ProductModel[] {
    return cartList
  }
}
