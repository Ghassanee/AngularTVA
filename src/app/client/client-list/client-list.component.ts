import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../controller/service/client.service";
import {Client} from "../../controller/model/client.model";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  get clients(): Array<Client> {
    return this.clientService.clients;
  }


}
