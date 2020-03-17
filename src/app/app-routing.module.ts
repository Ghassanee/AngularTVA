import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { FactureChargeComponent } from './facture-charge/facture-charge.component';
import { FactureGainComponent } from './facture-gain/facture-gain.component';
import { SocieteComponent } from './societe/societe.component';
const routes: Routes = [
  {
    path: "factureCharge",
    component: FactureChargeComponent
  },
  {
    path:"factureGain",
    component : FactureGainComponent

  },
  {
    path:"societe",
    component : SocieteComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
