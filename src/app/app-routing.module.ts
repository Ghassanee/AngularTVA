import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { FactureChargeComponent } from './facture/factureF/factureF.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SocieteComponent } from './societe/societe.component';
import { DeclarationTVAComponent } from './declaration-tva/declaration-tva.component';
import { EmployeComponent } from './employe/employe.component';


const routes: Routes = [
  {
    path: 'choixDeImpot',
    component : AuthentificationComponent
  },
  {
    path: 'one',
    component : HomeComponent
  },
  {
    path: 'choix',
    component : LoginComponent
  },
 {
    path: 'createNew',
    component : SocieteComponent

  },{
    path: 'declarationTva',
    component : DeclarationTVAComponent

  },{
    path: 'createEmployes',
    component : EmployeComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
