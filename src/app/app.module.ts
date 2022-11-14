import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AbogadosComponent } from './pages/abogados/abogados.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { AdjuntarComponent } from './pages/adjuntar/adjuntar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AbogadosComponent,
    EspecialidadComponent,
    ProcesosComponent,
    TarifasComponent,
    AdjuntarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
