import {Component, OnInit} from '@angular/core';
import { CartService } from "../core/cart.service";
import {CardItemModel, ProductModel} from "@shop/utils";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cardList!: CardItemModel[];
  totalCost: number = 0;
  totalQuantity: number = 0;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cardList = this.cartService.getCart();
    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }

  increaseQuantity($event: CardItemModel): void {
    this.cardList = this.cardList?.map((item: CardItemModel) => {
      if (item.id === $event.id) {
        item.quantity++
      }

      return { ...item };
    })

    this.totalCost = this.cartService.getTotalCost(this.cardList);
    this.totalQuantity = this.cartService.getTotalQuantity(this.cardList);
  }

  decreaseQuantity($event: CardItemModel): void {
    this.cardList = this.cardList?.map((item: CardItemModel) => {
      if (item.id === $event.id && item.quantity > 0) {
        item.quantity--
      }

      return { ...item };
    })

    this.totalCost = this.cartService.getTotalCost(this.cardList);
    this.totalQuantity = this.cartService.getTotalQuantity(this.cardList);
  }

  deleteItem($event: CardItemModel): void {
    this.cardList = this.cardList?.filter((item: CardItemModel) => {

      return item.id !== $event.id
    })
  }
}
