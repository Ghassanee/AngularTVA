import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { FactureChargeComponent } from './facture/facture-charge/facture-charge.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'facture',
    component : FactureComponent
  },
  {
    path: '',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
