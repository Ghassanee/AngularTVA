// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {FactureCharge} from '../../controller/model/facture-charge.model';
import {FactureChargeService} from '../../controller/service/facture-charge.service';

// @ts-ignore
@Component({
  selector: 'app-facture-charge-list',
  templateUrl: './facture-charge-list.component.html',
  styleUrls: ['./facture-charge-list.component.css']
})
export class FactureChargeListComponent implements OnInit {

  constructor(private factureChargeService: FactureChargeService) { }
  get factureCharges(): Array<FactureCharge> {
    return this.factureChargeService.factureCharges;
  }
  ngOnInit(): void {
    this.factureChargeService.findAll();
  }
  public  deleteByRef(factureCharge: FactureCharge) {
    this.factureChargeService.deleteByRef(factureCharge);
  }

}
