// @ts-ignore
import { Injectable } from '@angular/core';
import {Fournisseur} from '../model/Fournisseur.model';
// @ts-ignore
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _fournisseur: Fournisseur;

  private _fournisseurs: Array<Fournisseur>;
  private _url = 'http://localhost:8090/impot/fournisseur/';
  constructor(private http: HttpClient){ }
  get fournisseurs(): Array<Fournisseur> {
    if (this._fournisseurs == null) {
      this._fournisseurs = new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }
  get fournisseur(): Fournisseur  {
    if (this._fournisseur == null) {
      this._fournisseur = new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  private cloneFournisseur(fournisseur: Fournisseur) {
    const myclone = new Fournisseur();
    myclone.cin = fournisseur.cin;
    myclone.nom = fournisseur.nom;
    myclone.prenom = fournisseur.prenom;
    return myclone;
  }
  public save() {
    this.http.post<number>(this._url, this.fournisseur).subscribe(
      data => { if (data > 0) {
        this.fournisseurs.push(this.cloneFournisseur(this.fournisseur));
        this._fournisseur = null;
      }
      }, error => {
        console.log('error');
      }
    );
  }

  public  deleteByCin(fournisseur: Fournisseur) {
    this.http.delete<number>(this._url + 'delete/' + fournisseur.cin).subscribe(
      data => {
        console.log('data ' + data);
        this.deleteByCinFromView(fournisseur);
      }
    );
  }
  public deleteByCinFromView(fournisseur: Fournisseur) {
    const index = this.fournisseurs.findIndex(n => n.cin === fournisseur.cin );
    if (index !== -1) {
      this.fournisseurs.splice(index, 1);
    }
  }

  public findAll() {
    this.http.get<Array<Fournisseur>>(this._url).subscribe(
      data => {
        console.log('data ' + data);
        this.fournisseurs = data;
      }
    );
  }
  public update() {
    this.http.post<number>(this._url + 'upd/', this.fournisseur).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('error');
      }
    );
  }
}
