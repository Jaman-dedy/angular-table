import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICommerce } from '../types';
import { environment } from '../../environment'


@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  httpClient = inject(HttpClient);
  constructor() { }

  getCommerce(size: number) {
    return this.httpClient.get<ICommerce[]>(`${environment.apiUrl}/beers?size=${size}`)
  }
}
