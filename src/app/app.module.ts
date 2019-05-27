import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { from } from 'rxjs';


/*Importar el archivo que solo contiene las rutas y un vector con la definición
 Este esta en components/app.routes.ts, RouterModule se necesita para el vector de ruta */

import { ROUTER } from './components/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER, { useHash: true }) /* Se agrega para poder cargar las rutas. poder usar parametro useHash: true*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
