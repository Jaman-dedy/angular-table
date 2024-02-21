import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICommerce } from '../types';


@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  httpClient = inject(HttpClient);
  constructor() { }

  getCommerce() {
    return this.httpClient.get<ICommerce[]>('https://random-data-api.com/api/v2/beers?size=100')
  }
}
