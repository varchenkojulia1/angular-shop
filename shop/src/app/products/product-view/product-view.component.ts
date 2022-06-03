import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {ProductsServiceService} from "../../core/products-service.service";
import {AVAILABILITY, ProductModel} from "@shop/utils";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Output() public onBuy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  selectedProduct!: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsServiceService,
    private router: Router,
  ) {}
  get showItem(): boolean {
    return !!this.selectedProduct ;
  }
  get availabilityText(): string {
    return this.selectedProduct.isAvailable ? AVAILABILITY.IS_AVAILABLE : AVAILABILITY.NOT_AVAILABLE;
  }
  ngOnInit() {
    const observer = {
      next: (product: ProductModel) => {
        this.selectedProduct = {...product}
      },
      error: (err: any) => console.log(err)
    };

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productService.getProductById$(Number(params.get('productID')!))),
    ).subscribe(observer)
  }

  onClick(): void {
    this.onBuy.emit(this.selectedProduct);
    // will be added action for adding to cart item
  }
  goBack(): void {
    this.router.navigate(['../'])
  }
}
