import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Poder consumir servicios rest http*/
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { from } from 'rxjs';


/*Importar el archivo que solo contiene las rutas y un vector con la definición
 Este esta en components/app.routes.ts, RouterModule se necesita para el vector de ruta */

import { ROUTER } from './components/app.routes';
/*se importa el archivo que contiene los servicios para poderlos utilizar*/
import { SpotityService } from './services/spotity.service';
/*pipes le da formato a los caracteres y permite realizar validaciones */
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER, { useHash: true }) /* Se agrega para poder cargar las rutas. poder usar parametro useHash: true*/
  ],
  providers: [
    SpotityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
