import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderSingleComponent } from './order/order-single/order-single.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserSingleComponent } from './user/user-single/user-single.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderContainerComponent,
    NavbarComponent,
    UserContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    UserDetailComponent,
    UserListComponent,
    UserSingleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
