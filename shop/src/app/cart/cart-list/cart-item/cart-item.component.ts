import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardItemModel} from "@shop/utils";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CardItemModel;

  @Output() onQuantityIncrease: EventEmitter<CardItemModel> = new EventEmitter<CardItemModel>();
  @Output() onQuantityDecrease: EventEmitter<CardItemModel> = new EventEmitter<CardItemModel>();
  @Output() onDeleteItem: EventEmitter<CardItemModel> = new EventEmitter<CardItemModel>();

  increaseQuantity(): void {
    this.onQuantityIncrease.emit(this.item);
  }

  decreaseQuantity(): void {
    this.onQuantityDecrease.emit(this.item);
  }

  deleteItem(): void {
    this.onDeleteItem.emit(this.item);
  }
}
