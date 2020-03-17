import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';

@Component({
  selector: 'app-create-societe',
  templateUrl: './create-societe.component.html',
  styleUrls: ['./create-societe.component.css']
})
export class CreateSocieteComponent implements OnInit {

  constructor(private TypeService : TypeSocieteService) { }

  ngOnInit(): void {
  }
  public get $typeSocs(): Array<TypeSociete> {
    return this.TypeService.$typeSocs;
  }
}
