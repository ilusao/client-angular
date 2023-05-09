import { subscribeOn } from 'rxjs';
import { Client } from '../client';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-angular',
  templateUrl: './client-angular.component.html',
  styleUrls: ['./client-angular.component.css']
})
export class ClientAngularComponent implements OnInit {

  clients : Client[] = [];

  constructor (private clientService: ClientService){}
  ngOnInit(): void{
     this.loadClients();
  }
  loadClients(){
    this.clientService.getClients().subscribe(
      {
        next: (data: Client[]) => this.clients = data,
        error: (msg: string) => console.log("erro ao chamar o endpont" + msg)

      }
    )
  }







save(){
   this.clientService.save(this.formGroupClient.value);subscribe(
    {
      next: data => {
        this.clients.push(data);
        this.formGroupClient.reset();
      }
    }
   )
}

}
