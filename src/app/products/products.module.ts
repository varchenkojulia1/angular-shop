import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProductComponentComponent} from "./product-component/product-component.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductsRoutingModule.components
  ],
  imports: [BrowserModule, ProductsRoutingModule, MatButtonModule],
  exports: [ProductListComponent]
})

export class ProductsModule {}
