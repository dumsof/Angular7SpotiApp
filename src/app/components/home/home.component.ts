import { Component, OnInit } from '@angular/core';
/*Para importar el cliente de http y utilizar los servicios se debe importar HttpClientModule en el app.module.ts */
import { HttpClient } from '@angular/common/http';
import { pairs } from 'rxjs';
/*se  importa el archivo donde se manajeran los servicios de spotify*/
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
paises: any[] = [];
/*el constructor que esta en comentario muestra como se consume el servicio por get y
  se asigna a la variable de paises: any[]=[];*/
 /*  constructor(private http: HttpClient) {
    console.log('llamado home');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((respuesta: any[] ) => {
      this.paises = respuesta;
      console.log(respuesta);
    });
   } */

   constructor(private spotity: SpotityService) {

   }

  ngOnInit() {
  }

}
