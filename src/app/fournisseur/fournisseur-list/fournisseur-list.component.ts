// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Fournisseur} from '../../controller/model/fournisseur.model';
import {FournisseurService} from '../../controller/service/fournisseur.service';

// @ts-ignore
@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService) { }
  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }
  ngOnInit(): void {
    this.fournisseurService.findAll();
  }
  public  deleteByCin(fournisseur: Fournisseur) {
    this.fournisseurService.deleteByCin(fournisseur);
  }

}
