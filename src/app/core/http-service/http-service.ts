import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor() {}

  get endpointCharacters() {
    return `${this.apiUrl}/character`;
  }
}
