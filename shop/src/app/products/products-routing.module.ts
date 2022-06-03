import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'product-list',
    children: [
      {
        path: ':productID',
        component: ProductViewComponent,
      },
      {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [ProductViewComponent, ProductListComponent];
}
