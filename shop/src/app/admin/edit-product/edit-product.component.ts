import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(private router: Router) {}
  goBack(): void {
    this.router.navigate(['admin', 'product', 'list'])
  }
}
