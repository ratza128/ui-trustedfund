import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  
  serverURL = environment.serverUrl;

  constructor(private httpClient: HttpClient) 
  {

  }

  getTrades()
  {
    
    return this.httpClient.get(`${this.serverURL}/trade`);
  }
}
