import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'trending-page',
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
  imports: [GifsListComponent]
})
export default class TrendingPageComponent {
    gifsService = inject(GifService)
}
