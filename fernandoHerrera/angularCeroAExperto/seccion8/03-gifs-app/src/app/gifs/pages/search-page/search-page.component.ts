import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
  imports: [GifsListComponent]
})
export default class SearchPageComponent {
  public gifsService = inject(GifService)
  public gifs=signal<Gif[]>([])
  onSearch( query:string){
    this.gifsService.searchgifs(query)
      .subscribe(resp=>{
        this.gifs.set(resp)
      })
  }
}
