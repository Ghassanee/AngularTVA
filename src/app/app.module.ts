import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeSocieteComponent } from './type-societe/type-societe.component';
import { CreateComponent } from './type-societe/create/create.component';
import { ListComponent } from './type-societe/list/list.component';
import { SocieteComponent } from './societe/societe.component';
import { CreateSocieteComponent } from './societe/create-societe/create-societe.component';
import { ListSocieteComponent } from './societe/list-societe/list-societe.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FactureChargeComponent } from './facture-charge/facture-charge.component';
import { FactureGainComponent } from './facture-gain/facture-gain.component';


@NgModule({
  declarations: [
    AppComponent,
    TypeSocieteComponent,
    CreateComponent,
    ListComponent,
    SocieteComponent,
    CreateSocieteComponent,
    ListSocieteComponent,
    TopBarComponent,
    FooterComponent,
    FactureChargeComponent,
    FactureGainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
