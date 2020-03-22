import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FactureChargeComponent } from './facture-charge/facture-charge.component';
import { FactureGainComponent } from './facture-gain/facture-gain.component';
import { SocieteComponent } from './societe/societe.component';
import { CreateSocieteComponent } from './societe/create-societe/create-societe.component';
import {DeclarationIRComponent} from './declaration-ir/declaration-ir.component';
import {DeclarationTVAComponent} from './declaration-tva/declaration-tva.component';
import {TauxDeIRComponent} from './taux-de-ir/taux-de-ir.component';

const routes: Routes = [
  {
    path: 'FactureCharge',
    component: FactureChargeComponent
  },
  {
    path: 'FactureGain',
    component : FactureGainComponent

  },
  {
    path: 'Societe',
    component : SocieteComponent

  },

  {
    path : 'CreateSocieteComponent',
    component: CreateSocieteComponent
  },
  {
    path : 'DeclarationIR',
    component: DeclarationIRComponent
  },
  {
    path: 'DeclarationTVA',
    component: DeclarationTVAComponent
  },
  {
    path: 'TauxDeIR',
    component: TauxDeIRComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
