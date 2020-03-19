import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';
import {SocieteService} from '../../controller/service/societe.service';
import {Societe} from '../../controller/model/societe.model';

@Component({
  selector: 'app-create-societe',
  templateUrl: './create-societe.component.html',
  styleUrls: ['./create-societe.component.css']
})
export class CreateSocieteComponent implements OnInit {

  constructor(private TypeService: TypeSocieteService, private societeService: SocieteService) { }

  ngOnInit(): void {
  }
public save(societe: Societe) {
    this.societeService.save(societe);
}
  public deleteByRef(societe: Societe) {
    this.societeService.deleteByRef(societe);
  }
  public deleteByRefFromView(societe: Societe) {
    this.societeService.deleteByRefFromView(societe);
  }

    get soc(): Societe {
    return this.societeService.soc;
  }

  public get typeSocs(): Array<TypeSociete> {
    return this.TypeService.typeSocs;
  }
}
