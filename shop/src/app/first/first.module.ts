import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FirstComponent} from "./first.component";
import {CartModule} from "../cart-list/cart.module";
import {OrdersModule} from "../orders.module";
import {ProductsModule} from "../product-list/products.module";
import {SharedModule} from "../shared.module";


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
