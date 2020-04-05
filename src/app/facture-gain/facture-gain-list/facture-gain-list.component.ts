import { Component, OnInit } from '@angular/core';
import {FactureGainService} from '../../controller/service/facture-gain.service';
import {FactureGain} from '../../controller/model/facture-gain.model';

@Component({
  selector: 'app-facture-gain-list',
  templateUrl: './facture-gain-list.component.html',
  styleUrls: ['./facture-gain-list.component.css']
})
export class FactureGainListComponent implements OnInit {

  constructor(private factureGainService: FactureGainService) { }

  ngOnInit(): void {
  }

  get factureGains(): Array<FactureGain> {
    return this.factureGainService.factureGains;
  }

  public  deleteByRef(factureGain: FactureGain) {
    this.factureGainService.deleteByRef(factureGain);
  }
}
