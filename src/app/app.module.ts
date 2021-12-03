import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AliancasComponent } from './categorias/aliancas/aliancas.component';
import { AneisComponent } from './categorias/aneis/aneis.component';
import { ArgolasComponent } from './categorias/argolas/argolas.component';
import { BabykidsComponent } from './categorias/babykids/babykids.component';
import { BrincosComponent } from './categorias/brincos/brincos.component';
import { ColaresComponent } from './categorias/colares/colares.component';
import { CorrentesComponent } from './categorias/correntes/correntes.component';
import { PiercingsComponent } from './categorias/piercings/piercings.component';
import { PingentesComponent } from './categorias/pingentes/pingentes.component';
import { PulseirasComponent } from './categorias/pulseiras/pulseiras.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    AliancasComponent,
    AneisComponent,
    ArgolasComponent,
    BabykidsComponent,
    BrincosComponent,
    ColaresComponent,
    CorrentesComponent,
    PiercingsComponent,
    PingentesComponent,
    PulseirasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
