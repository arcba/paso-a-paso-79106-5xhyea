import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//  profe si comenta linea5 funciona /
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliaComponent } from './articulos-familia/articulos-familia.component';
import { MockArticulosFamiliaService } from './services/mock-articulos-familia.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { MockArticulosServiciosService } from './services/mock-articulos-servicios.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliaComponent },
      { path: 'articulos', component: ArticulosComponent }]),
    // NgbModule.forRoot( )
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    MenuComponent,
    ArticulosComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    MockArticulosFamiliaService,
    ArticulosFamiliasService,
    { provide: APP_BASE_HREF, useValue: '/' },
    MockArticulosServiciosService
  ]
})
export class AppModule {}
