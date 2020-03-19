import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from '../controller/service/type-societe.service';
import { TypeSociete } from '../controller/model/type-societe.model';
import {Societe} from '../controller/model/societe.model';
import {SocieteService} from '../controller/service/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {


  constructor(private societeService: SocieteService ) { }

  public deleteByRef(societe: Societe) {
    this.societeService.deleteByRef(societe);
  }
  public deleteByRefFromView(societe: Societe) {
    this.societeService.deleteByRefFromView(societe);
  }
public  findByRef(societe: Societe) {
    this.societeService.findByRef(societe);
}
public findAll() {
    this.societeService.findAll();
}
  ngOnInit(): void {
  }
  get socs(): Array<Societe> {
    return this.societeService.socs;
  }
  get soc(): Societe {
    return this.societeService.soc;
  }

}
