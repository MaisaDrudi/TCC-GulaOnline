import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EmpresasService } from './services/empresas.service';
import { AlimentosService } from './services/alimentos.service';
import { CadastroService } from './services/cadastro.service';
import { LoginsService } from './services/logins.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmpresasService,
    AlimentosService,
    CadastroService,
    LoginsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
