import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  get serverUrl(){
    return environment.serverUrl;
  }
}
