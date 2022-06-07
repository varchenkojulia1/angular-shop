import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HighlightDirective} from "./directives/highlight.directive";
import {OrderByPipe} from "../pipe/order-by.pipe";

@NgModule({
  declarations: [HighlightDirective, OrderByPipe],
  imports: [
    BrowserModule
  ],
  exports: [
    HighlightDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {}
