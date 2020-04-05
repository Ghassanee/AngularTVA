import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _client: Client;
  private _clients: Array<Client>;

  constructor() { }


  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if (this._clients == null) {
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }

  public save() {
    this.clients.push(this.cloneClientr(this.client));
    this._client = null;
  }

  private cloneClientr(client: Client) {
    const myClone = new Client();
    myClone.cin = client.cin;
    myClone.nom = client.nom;
    return myClone;
  }
}
