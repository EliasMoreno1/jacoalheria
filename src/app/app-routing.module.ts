import { CorrentesComponent } from './categorias/correntes/correntes.component';
import { PulseirasComponent } from './categorias/pulseiras/pulseiras.component';
import { PingentesComponent } from './categorias/pingentes/pingentes.component';
import { PiercingsComponent } from './categorias/piercings/piercings.component';
import { ColaresComponent } from './categorias/colares/colares.component';
import { BrincosComponent } from './categorias/brincos/brincos.component';
import { BabykidsComponent } from './categorias/babykids/babykids.component';
import { ArgolasComponent } from './categorias/argolas/argolas.component';
import { AneisComponent } from './categorias/aneis/aneis.component';
import { AliancasComponent } from './categorias/aliancas/aliancas.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent },
  {path: 'aliancas',component: AliancasComponent },
  {path: 'aneis',component: AneisComponent},
  {path: 'argolas',component: ArgolasComponent},
  {path: 'babykids',component: BabykidsComponent },
  {path: 'brincos',component: BrincosComponent },
  {path: 'colares',component: ColaresComponent },
  {path: 'piercings',component: PiercingsComponent },
  {path: 'pingentes',component: PingentesComponent },
  {path: 'pulseiras',component: PulseirasComponent },
  {path: 'correntes',component: CorrentesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
