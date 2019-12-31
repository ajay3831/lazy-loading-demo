import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component'
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  { 
    path: 'customers-list', 
    // component: CustomersComponent
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  }, 
  { 
    path: 'orders', 
    // component: OrdersComponent
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
