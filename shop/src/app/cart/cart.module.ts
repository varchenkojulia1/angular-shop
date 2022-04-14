import {NgModule} from "@angular/core";
import {CartListComponent} from "./cart-list/cart-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {CartItemComponent} from "./cart-list/cart-item/cart-item.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ],
  bootstrap: [CartListComponent]
})

export class CartModule {}
