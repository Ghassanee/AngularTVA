import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TypeSocieteComponent } from "./type-societe/type-societe.component";
import { CreateComponent } from "./type-societe/create/create.component";
import { ListComponent } from "./type-societe/list/list.component";
import { SocieteComponent } from "./societe/societe.component";
import { CreateSocieteComponent } from "./societe/create-societe/create-societe.component";
import { ListSocieteComponent } from "./societe/list-societe/list-societe.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DeclarationIRComponent } from "./declaration-ir/declaration-ir.component";
import { DeclarationTVAComponent } from "./declaration-tva/declaration-tva.component";
import { TauxDeIRComponent } from "./taux-de-ir/taux-de-ir.component";
import { FooterBarComponent } from "./footer-bar/footer-bar.component";
import { LoginComponent } from "./login/login.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { EmployeComponent } from "./employe/employe.component";
import { DeclarationIsComponent } from "./declaration-is/declaration-is.component";
import { TauxDeIsComponent } from "./taux-de-is/taux-de-is.component";
import { FactureChargeComponent } from "./facture-charge/facture-charge.component";
import { FactureChargeListComponent } from "./facture-charge/facture-charge-list/facture-charge-list.component";
import { FactureChargeCreateComponent } from "./facture-charge/facture-charge-create/facture-charge-create.component";
import { ClientComponent } from "./client/client.component";
import { ClientCreateComponent } from "./client/client-create/client-create.component";
import { ClientListComponent } from "./client/client-list/client-list.component";
import { FactureGainComponent } from './facture-gain/facture-gain.component';
import { FactureGainListComponent } from './facture-gain/facture-gain-list/facture-gain-list.component';
import { FactureGainCreateComponent } from './facture-gain/facture-gain-create/facture-gain-create.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HowtoComponent } from './howto/howto.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeSocieteComponent,
    CreateComponent,
    FactureGainComponent,
    FactureGainListComponent,
    FactureGainCreateComponent,
    ListComponent,
    SocieteComponent,
    CreateSocieteComponent,
    ListSocieteComponent,
    TopBarComponent,
    FooterBarComponent,
    ClientComponent,
    ClientCreateComponent,
    ClientListComponent,
    DeclarationIRComponent,
    DeclarationTVAComponent,
    TauxDeIRComponent,
    DeclarationIsComponent,
    TauxDeIsComponent,

    FactureChargeComponent,

    HomeComponent,
    FactureChargeListComponent,
    FactureChargeCreateComponent,

    LoginComponent,

    AuthentificationComponent,

    EmployeComponent,

    AcceuilComponent,

    HowtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
