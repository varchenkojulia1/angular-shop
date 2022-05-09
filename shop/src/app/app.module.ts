import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CartModule} from "./cart-list/cart.module";
import {OrdersModule} from "./orders.module";
import {ProductsModule} from "./product-list/products.module";
import {SharedModule} from "./shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    FirstModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
