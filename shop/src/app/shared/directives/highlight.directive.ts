import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class') className!: string;

  @HostListener('mouseenter', ['$event']) onMouseEnter(): void {
    this.className = 'active';
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(): void {
    this.className = '';
  }
}
