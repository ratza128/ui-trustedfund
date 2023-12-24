import { Component, OnInit} from '@angular/core';
import { TradeService } from "../trade.service";

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
})
export class TradesComponent implements OnInit{

  tradeList: any = []

  constructor(private tradeService: TradeService){

  }

  ngOnInit(): void {
    console.log("Ajung");
    this.getTradesForUi();
  }


  getTradesForUi()
  {
    this.tradeService.getTrades().subscribe(response =>
      {
        console.log(response);
        this.tradeList = response;
      })
  }

}
