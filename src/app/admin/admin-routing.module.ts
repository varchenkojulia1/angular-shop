import {RouterModule, Routes} from "@angular/router";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {OrdersComponent} from "./orders/orders.component";
import {NgModule} from "@angular/core";
import {ProductListComponent} from "../products/product-list/product-list.component";
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "../core";

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'product',
        children: [
          {
            path: 'add',
            component: AddProductComponent
          },
          {
            path: 'list',
            children: [
              {
                path: ':productID',
                component: EditProductComponent
              },
              {
                path: '',
                pathMatch: 'full',
                component: ProductListComponent,
              }
            ]
          },
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        component: AdminComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
