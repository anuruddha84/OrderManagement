
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderListComponent } from './order/order-list.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    OrderListComponent,
  ],
  imports: [
    SharedModule,
    ProductModule,
    AppRoutingModule, // Note: Route should be last in the list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
