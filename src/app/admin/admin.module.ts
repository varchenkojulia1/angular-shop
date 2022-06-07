import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AdminComponent} from "./admin.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {OrdersComponent} from "./orders/orders.component";
import {RouterModule} from "@angular/router";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AdminComponent, AddProductComponent, EditProductComponent, OrdersComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AdminRoutingModule,
    MatButtonModule
  ],
  exports: [AdminComponent],
})

export class AdminModule {}
