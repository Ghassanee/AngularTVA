import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from '../controller/service/type-societe.service';
import { TypeSociete } from '../controller/model/type-societe.model';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
