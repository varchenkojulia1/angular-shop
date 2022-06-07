import {Injectable} from "@angular/core";
import {genID} from "./gen-id.generator";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  generate(n: number): string {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( ; n > 0; n-- ) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }
  getNewID(): number {
    return genID()
  }
}
