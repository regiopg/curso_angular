import { Component, input } from '@angular/core';

@Component({
    selector: 'card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {

    public titulo = input.required()

}
