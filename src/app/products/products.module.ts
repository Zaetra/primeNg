
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    UncommonPageComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
