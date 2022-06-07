import {NgModule} from "@angular/core";
import {CartListComponent} from "./cart-list/cart-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {AddBorderDirective} from "../addBorder.directive";
import {SharedModule} from "../shared/shared.module";
import {CartItemComponent} from "./cart-list/cart-item/cart-item.component";

@NgModule({
    declarations: [
        CartListComponent,
        CartItemComponent,
        AddBorderDirective
    ],
  imports: [
    BrowserModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    CartListComponent
  ],
  bootstrap: [CartListComponent]
})

export class CartModule {}
