import { Component, OnInit } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';
/*con la importacion de  ActivatedRoute se obtiene el parametro de la url 
cuando se llama esta pagina
*/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  cargando: boolean;
  constructor(private router: ActivatedRoute, private spotity: SpotityService) {
    /*para obtener el query string de la url parametro id*/
    this.router.params.subscribe(parametro => {
      this.getArtista(parametro['id']);
      this.getTopTracks(parametro['id']);
    });
  }

  getArtista(id: string) {
    this.cargando = true;
    this.spotity.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.cargando = false;
    });
  }

  getTopTracks(id: string) {
    this.spotity.getTopTracks(id).subscribe(track => {
      console.log('Top Track');
      this.topTracks = track;
      console.log(this.topTracks);
    });
  }

}
