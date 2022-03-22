import { Component, Input } from '@angular/core';
import { ProductModel } from "@shop/utils";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  @Input() public list: ProductModel[] = [];

  onAddToCart(): void {
    console.log('item is addet to cart')
  }
}
