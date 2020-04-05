import { Injectable } from '@angular/core';
import {FactureGain} from '../model/facture-gain.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FactureGainService {
  private _factureGain: FactureGain;
  private _factureGains: Array<FactureGain>;
  private _url = 'http://localhost:8090/impot/FactureGain/';
  constructor(private http:HttpClient) { }

  get factureGain(): FactureGain {
 if (this._factureGain == null ) {
   this._factureGain = new FactureGain();
 }
  return this._factureGain;
  }

  set factureGain(value: FactureGain) {
    this._factureGain = value;
  }


  get factureGains(): Array<FactureGain> {
    if (this._factureGains == null) {
      this._factureGains = new Array<FactureGain>();
    }
    return this._factureGains;
  }

  set factureGains(value: Array<FactureGain>) {
    this._factureGains = value;
  }

  public save(){
    this.http.post<number>(this._url, this.factureGain).subscribe(
      data => { if (data > 0) {
        this.factureGains.push(this.cloneFactureGain(this.factureGain));
        this._factureGain = null;
      }
      }, error => {
        console.log('error');
      }
    );
    this.factureGain = null;
  }

  private cloneFactureGain(factureGain: FactureGain) {
    const myclone = new FactureGain();
    myclone.numeroFacture = factureGain.numeroFacture;
    myclone.nomFacture = factureGain.nomFacture;
    myclone.dateFacturation = factureGain.dateFacturation;
    myclone.datePaiement = factureGain.datePaiement;
    myclone.declarationTva = factureGain.declarationTva;
    myclone.montantTTC = factureGain.montantTTC;
    myclone.montantHT = factureGain.montantHT;
    myclone.tva = factureGain.tva;
    myclone.client = factureGain.client;
    myclone.clientCne = factureGain.clientCne;
    return myclone;
  }

  public  deleteByRef(factureGain: FactureGain) {
    this.http.delete<number>(this._url + 'reference/' + factureGain.ref).subscribe(
      data => {
        console.log('data ' + data);
        this.deleteByRefFromView(factureGain);
      }
    );
  }

  private deleteByRefFromView(factureGain: FactureGain) {
    const index = this.factureGains.findIndex(f => f.ref === factureGain.ref );
    if (index !== -1) {
      this.factureGains.splice(index, 1);
    }
  }

  public findAll() {
    this.http.get<Array<FactureGain>>(this._url).subscribe(
      data => {
        console.log('data ' + data);
        this.factureGains = data;
      }
    );
  }
}
