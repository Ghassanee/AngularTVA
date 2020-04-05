import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SocieteComponent } from './societe/societe.component';
import { DeclarationTVAComponent } from './declaration-tva/declaration-tva.component';
import { EmployeComponent } from './employe/employe.component';
import {DeclarationIsComponent} from "./declaration-is/declaration-is.component";
import {TauxDeIsComponent} from "./taux-de-is/taux-de-is.component";
import {DeclarationIRComponent} from "./declaration-ir/declaration-ir.component";
import {TauxDeIRComponent} from "./taux-de-ir/taux-de-ir.component";
import { AppComponent } from './app.component';
import { TypeSocieteComponent } from './type-societe/type-societe.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { HowtoComponent } from './howto/howto.component';
import { FactureChargeComponent } from './facture-charge/facture-charge.component';


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

  },
  {
    path: 'DeclarationIs',
    component: DeclarationIsComponent
  },
  {
    path: 'TauxDeIs',
    component: TauxDeIsComponent
  },
  {
    path: 'DeclarationIR',
    component: DeclarationIRComponent
  },
  {
    path: 'TauxDeIR',
    component: TauxDeIRComponent
  },
  {
    path: 'Societe',
    component: SocieteComponent
  },
{
  path: 'createTypeSociete',
  component: TypeSocieteComponent
},{
  path:'',
  component : AcceuilComponent
},{
  path:'factureChargeDetaills',
  component : FactureChargeComponent
},{
  path:'HowTo',
  component : HowtoComponent
}

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
