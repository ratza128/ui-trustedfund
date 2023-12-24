import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradesComponent } from './trades/trades.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateTradeComponent } from './create-trade/create-trade.component';

const routes: Routes = [
  { path: "", component: LayoutComponent, children: [
    { path: "", component: TradesComponent},
    { path: "trades", component: TradesComponent},
    { path: "trades/create", component:CreateTradeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
