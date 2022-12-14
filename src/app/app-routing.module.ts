import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./access/login/login.component";
import { UsernewComponent } from "./access/usernew/usernew.component";
import { AbogadosComponent } from "./pages/abogados/abogados.component";
import { AdjuntarComponent } from "./pages/adjuntar/adjuntar.component";
import { EspecialidadComponent } from "./pages/especialidad/especialidad.component";

import { InicioComponent } from "./pages/inicio/inicio.component";
import { ProcesosComponent } from "./pages/procesos/procesos.component";
import { ReservarComponent } from "./pages/reservar/reservar.component";
import { TarifasComponent } from "./pages/tarifas/tarifas.component";

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'abogados', component: AbogadosComponent },
    { path: 'adjuntar', component: AdjuntarComponent },
    { path: 'especialidad', component: EspecialidadComponent },
    { path: 'procesos', component: ProcesosComponent },
    { path: 'tarifas', component: TarifasComponent },
    { path: 'reservar', component: ReservarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usernew', component: UsernewComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule {}