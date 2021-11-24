import { UserContainerComponent } from './user/user-container/user-container.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UserContainerComponent},
  { path: 'orders', component: OrderContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
