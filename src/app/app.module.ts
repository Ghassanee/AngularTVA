import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';


import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FactureComponent } from './facture/facture.component';
import { FactureChargeComponent } from './facture/facture-charge/facture-charge.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,

    FooterBarComponent,

    FactureComponent,

    FactureChargeComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
