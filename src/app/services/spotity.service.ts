import { Injectable } from '@angular/core';
/* HttpClient porder consumir servicios, HttpHeaders configurar los header la petición ejemplo agregar token*/
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*poder mapear la información que solo necesito de la llamada del servicio con map
 --se puede utilizar la propiedad map solo para filtrar los datos que se necesitan y
 retornarlos, en este caso como es una sola linea de codigo la funcion flecha no necesita return.
*/
import { map } from 'rxjs/operators';

@Injectable({
  /* automaticamente por ejecucion crea la declaracion en el proveedor y  no hay que hacer 
  la declaracion den el provider[] del archivo app.modules.ts
   providedIn: 'root' -> Forma automatica de importar servicios.
  */
  providedIn: 'root'
})
export class SpotityService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOq4EKjq7okr0yoqG4mP_UFKuhMLEa1ogyHXq0m8WgXo3EaLtUD6EXXeGF5REyxdWbMYCwNjBsCHxvWkk'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=15')
      .pipe(map(datosNecesarios => datosNecesarios['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
      .pipe(map(datosNecesarios => datosNecesarios['artists'].items));
    /*   const headers = new HttpHeaders({
        'Autorization': 'token'
      });
      return this.http.get(this.getQuery(`search?q=${termino}`), { headers })
        .pipe(map((datosNecesarios: any) => datosNecesarios['artists'].items
        )); */
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
