// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {FournisseurService} from '../../controller/service/fournisseur.service';
import {Fournisseur} from '../../controller/model/fournisseur.model';

// @ts-ignore
@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.css']
})
export class FournisseurCreateComponent implements OnInit {
  constructor(private fournisseurService: FournisseurService) { }
  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }
  ngOnInit(): void {
  }
  public save() {
    this.fournisseurService.save();
  }
  public update() {
    this.fournisseurService.update();
  }
}
