import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OrderByPipe} from "./pipe/order-by.pipe";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HighlightDirective} from "./highlight.directive";

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
