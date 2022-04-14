import { Injectable } from '@angular/core';
import { CardItemModel, cartList } from "@shop/utils";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCart(): CardItemModel[] {
    return cartList;
  }

  getTotalCost(list: CardItemModel[] = this.getCart()): number {
    return list.reduce((cost: number, item: CardItemModel) => cost + (item.price * item.quantity), 0)
  }
  getTotalQuantity(list: CardItemModel[] = this.getCart()): number {
    return list.reduce((quantity: number, item: CardItemModel) => quantity + item.quantity, 0)
  }
}
