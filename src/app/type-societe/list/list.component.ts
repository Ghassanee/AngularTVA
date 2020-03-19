import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private typeSocieteService: TypeSocieteService) { }

  ngOnInit(): void {
  }
  public get typeSocs(): Array<TypeSociete> {
    return this.typeSocieteService.typeSocs;
  }

}
