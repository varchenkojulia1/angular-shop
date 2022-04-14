import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProductComponentComponent} from "./product-component/product-component.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductsServiceService} from "../core/products-service.service";

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponent
  ],
  imports: [BrowserModule],
  exports: [
    ProductListComponent
  ]
})

export class ProductsModule {}
