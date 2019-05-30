import { Injectable } from '@angular/core';
/* HttpClient porder consumir servicios, HttpHeaders configurar los header la petición ejemplo agregar token*/
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  /* automaticamente por ejecucion crea la declaracion en el proveedor y  no hay que hacer 
  la declaracion den el provider[] del archivo app.modules.ts
   providedIn: 'root' -> Forma automatica de importar servicios.
  */
  providedIn: 'root'
})
export class SpotityService {
  RUTA: string = 'https://accounts.spotify.com/api/token/';
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Autorization': 'token'
    });
    return this.http.get(this.RUTA, { headers });
  }
}
/*
Ruta para obtener el token de spoty
https://accounts.spotify.com/api/token

informacion que necesita la petición
Body x-www-form-urlencoded

grand_type:client_credentials
client_id:d6b55734aa3f4b49af89ae8023b6c69e
client_secret:4659ca881ead4eed81c45197f071db34

*/
