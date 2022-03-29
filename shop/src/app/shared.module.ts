import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HighlightDirective} from "./highlight.directive";

@NgModule({
  declarations: [HighlightDirective],
  imports: [
    BrowserModule
  ],
  exports: [
    HighlightDirective
  ]
})

export class SharedModule {}
