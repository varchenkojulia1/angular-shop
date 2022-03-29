import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductModel } from "@shop/utils";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  @Input() public list: ProductModel[] = [];

  @Output() public addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onAddToCart(product: ProductModel): void {
    this.addToCart.emit(product);
  }
}
