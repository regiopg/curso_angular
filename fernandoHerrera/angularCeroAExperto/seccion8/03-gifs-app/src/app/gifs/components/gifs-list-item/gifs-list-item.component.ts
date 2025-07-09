import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  templateUrl: './gifs-list-item.component.html',
  styleUrl: './gifs-list-item.component.css'
})
export class GifsListItemComponent {
    public imagen = input.required<string>();
}
