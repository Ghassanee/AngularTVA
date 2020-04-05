// @ts-ignore
import { Injectable } from '@angular/core';
import {FactureCharge} from '../model/facture-charge.model';
// @ts-ignore
import {HttpClient} from '@angular/common/http';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class FactureChargeService {
  private _factureCharge: FactureCharge;
  private _factureCharges: Array<FactureCharge>;
  private _url = 'http://localhost:8090/impot/FactureCharge/';

  constructor(private http: HttpClient) {
  }

  get factureCharges(): Array<FactureCharge> {
    if (this._factureCharges == null) {
      this._factureCharges = new Array<FactureCharge>();
    }
    return this._factureCharges;
  }

  set factureCharges(value: Array<FactureCharge>) {
    this._factureCharges = value;
  }

  get factureCharge(): FactureCharge {
    if (this._factureCharge == null) {
      this._factureCharge = new FactureCharge();
    }
    return this._factureCharge;
  }

  set factureChargeService(value: FactureCharge) {
    this._factureCharge = value;
  }

  public save() {
    this.http.post<number>(this._url, this.factureCharge).subscribe(
      data => {
        if (data > 0) {
          this.factureCharges.push(this.cloneFactureCharge(this.factureCharge));
          this._factureCharge = null;
        }
      }, error => {
        console.log('error');
      }
    );
  }

  public deleteByRef(factureCharge: FactureCharge) {
    this.http.delete<number>(this._url + 'ref/' + factureCharge.ref).subscribe(
      data => {
        console.log('data ' + data);
        this.deleteByRefFromView(factureCharge);
      }
    );
  }

  public deleteByRefFromView(factureCharge: FactureCharge) {
    const index = this.factureCharges.findIndex(f => f.ref === factureCharge.ref);
    if (index !== -1) {
      this.factureCharges.splice(index, 1);
    }
  }

  public findAll() {
    this.http.get<Array<FactureCharge>>(this._url).subscribe(
      data => {
        console.log('data ' + data);
        this.factureCharges = data;
      }
    );
  }

  private cloneFactureCharge(factureCharge: FactureCharge) {
    const myclone = new FactureCharge();
    myclone.ref = factureCharge.ref;
    myclone.fournisseurCin = factureCharge.fournisseurCin;
    myclone.societeRef = factureCharge.societeRef;
    myclone.tva = factureCharge.tva;
    myclone.montantTTC = factureCharge.montantTTC;
    myclone.montantHT = factureCharge.montantHT;
    myclone.numeroFacture = factureCharge.numeroFacture;
    myclone.declarationRef = factureCharge.declarationRef;
    myclone.datePaiement = factureCharge.datePaiement;
    myclone.dateFacturation = factureCharge.dateFacturation;
    myclone.nomFacture = factureCharge.nomFacture;
    return myclone;
  }

  public update() {
    this.http.post<number>(this._url + 'upd/', this.factureCharge).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('error');
      }
    );
  }
}
