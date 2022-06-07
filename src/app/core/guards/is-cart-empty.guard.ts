import {CanActivate} from "@angular/router";
import {CartService} from "../cart.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {
  constructor(
    private cartService: CartService
  ) {}
  canActivate(): boolean {
    return !this.cartService.isEmptyCart;
  }
}
