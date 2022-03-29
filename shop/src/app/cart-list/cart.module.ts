import {NgModule} from "@angular/core";
import {CartListComponent} from "./cart-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {SharedModule} from "../shared.module";


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
