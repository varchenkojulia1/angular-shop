import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
}
