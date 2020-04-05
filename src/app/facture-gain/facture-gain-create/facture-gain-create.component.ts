import { Component, OnInit } from '@angular/core';
import {FactureGainService} from '../../controller/service/facture-gain.service';
import {FactureGain} from '../../controller/model/facture-gain.model';

@Component({
  selector: 'app-facture-gain-create',
  templateUrl: './facture-gain-create.component.html',
  styleUrls: ['./facture-gain-create.component.css']
})
export class FactureGainCreateComponent implements OnInit {

  constructor(private factureGainService: FactureGainService) { }

  ngOnInit(): void {
  }

  get factureGain(): FactureGain {
    return this.factureGainService.factureGain;
  }

  public save(){
    return this.factureGainService.save();
  }
}
