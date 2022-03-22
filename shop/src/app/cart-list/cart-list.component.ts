import { Component, OnInit } from '@angular/core';
import { CartService } from "../core/cart.service";
import { ProductModel } from "@shop/utils";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public cardList?: ProductModel[];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cardList = this.cartService.getCart();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }
}
