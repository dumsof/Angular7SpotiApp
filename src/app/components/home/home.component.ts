import { Component, OnInit } from '@angular/core';
/*Para importar el cliente de http y utilizar los servicios se debe importar HttpClientModule en el app.module.ts */
import { HttpClient } from '@angular/common/http';
import { pairs } from 'rxjs';
/*se  importa el archivo donde se manajeran los servicios de spotify*/
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  cargando: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotity: SpotityService) {
    this.cargando = true;
    this.error = false;
    /*se realiza el suscribe en este punto par determinar cuando finaliza y mostrar un cargando.*/
    this.spotity.getNewReleases().subscribe((datos: any) => {
      this.nuevasCanciones = datos;
      this.cargando = false;
      console.log(datos);
    }, (errorServicio) => {
      this.cargando = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }
}

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
