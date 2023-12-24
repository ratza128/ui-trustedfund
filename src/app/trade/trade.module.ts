import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeRoutingModule } from './trade-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { TradesComponent } from './trades/trades.component';
import { SharedModule } from 'app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateTradeComponent } from './create-trade/create-trade.component';


@NgModule({
  declarations: [
    LayoutComponent, 
    TradesComponent,
    CreateTradeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    TradeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TradeModule { }
