import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../controller/service/client.service";
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {Client} from "../../controller/model/client.model";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  get client(): Client {
    return this.clientService.client;
  }

  public save() {
    this.clientService.save();
  }
}
