import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [ RouterModule ],
  exports: [
    PageNotFoundComponent,
    MenuComponent,
    LoginComponent,
  ]
})
export class UiModule { }
