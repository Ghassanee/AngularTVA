import { Injectable } from '@angular/core';
import { Societe } from '../model/societe.model';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {


  private soc: Societe;
  private socs: Array<Societe>;
  public get $soc(): Societe {
    return this.soc;
  }

  public set $soc(value: Societe) {
    this.soc = value;
  }

  public get $socs(): Array<Societe> {
    return this.socs;
  }

  public set $socs(value: Array<Societe>) {
    this.socs = value;
  }
  constructor() { }
}
