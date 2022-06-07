import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartListComponent} from "./cart/cart-list/cart-list.component";
import {ProcessOrderComponent} from "./orders/process-order/process-order.component";
import {IsCartEmptyGuard} from "./core";
import {LoginComponent} from "./ui/login/login.component";
import {PageNotFoundComponent} from "./ui/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    children: [
      {
        path: 'order',
        component: ProcessOrderComponent,
        canActivate: [IsCartEmptyGuard]
      },
      {
        path: '',
        component: CartListComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

