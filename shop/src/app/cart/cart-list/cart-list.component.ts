import {Component, OnInit} from '@angular/core';
import { CartService } from "./../../core/cart.service";
import {CardItemModel, ProductModel} from "@shop/utils";
import {FormControl} from "@angular/forms";
import {CartService} from "../core/cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cardList!: CardItemModel[];
  totalCost: number = 0;
  totalQuantity: number = 0;
  selected!: any;
  sortOptions: any[] = [
    { value: 'nameAsc', isAsc: true, text: 'In alphabet order', key: 'name'},
    { value: 'nameDsc', isAsc: false, text: 'In reversed alphabet order', key: 'name'},
    { value: 'priceAsc', isAsc: true, text: 'Ascending order price', key: 'price'},
    { value: 'priceDsc', isAsc: false, text: 'Descending order price', key: 'price'},
    { value: 'quantityAsc', isAsc: true, text: 'Ascending order quantity', key: 'quantity'},
    { value: 'quantityDsc', isAsc: false, text: 'Descending order quantity', key: 'quantity'},
  ];
  optionControl: FormControl = new FormControl('')

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cardList = this.cartService.cartProducts;
    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }

  increaseQuantity($event: CardItemModel): void {
    this.cardList = this.cartService.increaseCartQuantity($event.id);

    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  decreaseQuantity($event: CardItemModel): void {
    this.cardList = this.cartService.decreaseCartQuantity($event.id);

    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  deleteItem($event: CardItemModel): void {
    this.cardList = this.cartService.removeProduct(this.cardList, $event.id)
  }

  selectionChange($event: any): void {
    this.selected = this.sortOptions.find((item: any) => item.value === $event.value);
    console.log({selected: this.selected, sortOptions: this.sortOptions, $event})
  }
}
