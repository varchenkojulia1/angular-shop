import {GeneratorService} from "./generator";
import {InjectionToken} from "@angular/core";

export function GeneratorFactory (n: number) {
  return function (service: GeneratorService): string {
    return service.generate(n)
  }
}

export const Generator = new InjectionToken<string>('Generator');
