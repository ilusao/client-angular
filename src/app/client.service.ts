import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = "http://localhost:3000/clients"

  constructor(private Http: HttpClient) { }

  getClients(): Observable<Client[]> {
  return this.Http.get<Client[]>(this.url);
 }


 save(client : Client): Observable<Client> {
  let url = "http://localhost:3000/clients";

  return this.Http.post<Client>(this.url, client);
 }
}
