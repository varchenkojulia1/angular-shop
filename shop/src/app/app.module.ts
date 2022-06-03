import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CartModule} from "./cart/cart.module";
import {OrdersModule} from "./orders/orders.module";
import {ProductsModule} from "./products/products.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {Router} from "@angular/router";
import {MenuModule} from "./ui/menu/menu.module";
import {AdminModule} from "./admin/admin.module";
import {AdminRoutingModule} from "./admin/admin-routing.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    FirstModule,
    BrowserAnimationsModule,
    MenuModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
