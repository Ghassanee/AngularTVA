// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {FactureCharge} from '../../controller/model/facture-charge.model';
import { FactureChargeService } from 'src/app/controller/service/facture-charge.service';

// @ts-ignore
@Component({
  selector: 'app-facture-charge-create',
  templateUrl: './facture-charge-create.component.html',
  styleUrls: ['./facture-charge-create.component.css']
})
export class FactureChargeCreateComponent implements OnInit {

  constructor(private factureChargeService: FactureChargeService) { }
  get factureCharge(): FactureCharge {
    return this.factureChargeService.factureCharge;
  }
  ngOnInit(): void {
  }
  public save() {
    this.factureChargeService.save();
  }
  public update() {
    this.factureChargeService.update();
  }

}
