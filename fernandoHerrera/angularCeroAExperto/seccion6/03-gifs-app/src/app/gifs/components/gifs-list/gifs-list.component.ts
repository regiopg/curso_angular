import { Component, input } from '@angular/core';
import { GifsListItemComponent } from "../gifs-list-item/gifs-list-item.component";

@Component({
  selector: 'gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css',
  imports: [GifsListItemComponent]
})
export class GifsListComponent {
    imagenes = input.required<Array<string>>();
}
