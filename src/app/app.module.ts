import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AbogadosComponent } from './pages/abogados/abogados.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { AdjuntarComponent } from './pages/adjuntar/adjuntar.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { LoginComponent } from './access/login/login.component';
import { UsernewComponent } from './access/usernew/usernew.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AbogadosComponent,
    EspecialidadComponent,
    ProcesosComponent,
    TarifasComponent,
    AdjuntarComponent,
    ReservarComponent,
    LoginComponent,
    UsernewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
