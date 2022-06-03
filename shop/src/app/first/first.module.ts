import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FirstComponent} from "./first.component";
import {CartModule} from "../cart/cart.module";
import {OrdersModule} from "../orders/orders.module";
import {ProductsModule} from "../products/products.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModule { }
