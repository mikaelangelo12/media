import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ApiService<any> {

  constructor(
    override readonly httpClient: HttpClient
  ) {
    super(httpClient);
    super.setEndpoint('users')
  }
}
