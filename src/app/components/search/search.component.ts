import { Component } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas: any[] = [];
  cargando: boolean;
  constructor(private spotity: SpotityService) { }
  buscar(termino: string) {
    this.cargando = true;
    this.spotity.getArtistas(termino).subscribe((datos: any) => {
      this.artistas = datos;
      this.cargando = false;
      console.log(datos);
    });
  }
}
