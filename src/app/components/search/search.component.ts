import { Component } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotity: SpotityService) { }

  buscar(termino: string) {
    this.spotity.getArtista(termino).subscribe((datos: any) => {
      this.artistas = datos;
      console.log(datos);
    });
  }
}
