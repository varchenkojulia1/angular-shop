import { Injectable } from '@angular/core';
import { CardItemModel, cartList } from "@shop/utils";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: CardItemModel[] = cartList;

  get totalCost(): number {
    return this.getTotalCost();
  }
  get totalQuantity(): number {
    return this.getTotalQuantity();
  }
  get isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }
  getProducts(): CardItemModel[] {
    return this.cartProducts
  }
  addProduct(product: CardItemModel): CardItemModel[] {
    this.cartProducts = [ ...this.getProducts(), { ...product, quantity: product.quantity ?? 1 } ];
    return this.cartProducts;
  }
  getTotalCost(): number {
    return this.cartProducts.reduce((cost: number, item: CardItemModel) => cost + (item.price * item.quantity), 0)
  }
  getTotalQuantity(): number {
    return this.cartProducts.reduce((quantity: number, item: CardItemModel) => quantity + item.quantity, 0)
  }
  increaseCartQuantity(id: number): CardItemModel[] {
    this.cartProducts =  this.cartProducts.map((item: CardItemModel) => {
      if (item.id === id) {
        item.quantity++
      }

      return { ...item };
    })
    return this.cartProducts;
  }
 decreaseCartQuantity(id: number): CardItemModel[] {
   this.cartProducts =  this.cartProducts.map((item: CardItemModel) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity--
      }

      return { ...item };
    })
   return this.cartProducts;
  }
  removeProduct(cardList: CardItemModel[], id: number): CardItemModel[] {
    this.cartProducts = this.cartProducts.filter((item: CardItemModel) => item.id !== id);
    return this.cartProducts
  }
  removeAllProducts(): void {
    this.cartProducts = [];
  }
}
