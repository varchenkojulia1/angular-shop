import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBorder]'
})
export class AddBorderDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') onClick(): void {
    this.render.setStyle(this.el?.nativeElement, 'border', '1px solid black')
  }

}
