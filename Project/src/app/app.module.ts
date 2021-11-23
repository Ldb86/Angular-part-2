import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSingleComponent } from './order-single/order-single.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderContainerComponent,
    NavbarComponent,
    UserContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    UserDetailComponent
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
