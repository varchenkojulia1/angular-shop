import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {SharedModule} from "../shared.module";
import {AddBorderDirective} from "../addBorder.directive";
import {CartListComponent} from "./cart-list.component";


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
