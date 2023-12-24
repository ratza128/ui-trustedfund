import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { TradeModule } from "./trade/trade.module";


const routes: Routes = [
    { path: "", loadChildren: () => import("./trade/trade.module").then(m => TradeModule) },
    { path: "app", redirectTo: "/trades" }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }