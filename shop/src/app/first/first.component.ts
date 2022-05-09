import {AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild} from '@angular/core';
import {ConstantService} from "../core/services/constant.service";
import {Generator, GeneratorFactory} from "../core/services/generator.factory";
import {GeneratorService} from "../core/services/generator";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: ConstantService, useValue: ConstantService },
    { provide: Generator, useFactory: GeneratorFactory(30), deps: [GeneratorService] }
  ]
})
export class FirstComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;
  public generatedString: string = this.generator;

  constructor(
    @Optional() @Inject(Generator) private generator: string,
    @Optional() @Inject(ConstantService) private constantService: any
  ) {}

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop';
  }
}
