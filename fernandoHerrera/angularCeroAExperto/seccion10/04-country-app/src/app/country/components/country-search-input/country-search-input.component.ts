import { Component, input, output } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './country-search-input.component.html',
    styleUrl: './country-search-input.component.css'
})
export class CountrySearchInputComponent {
    placeholder = input('Buscar')
    value = output<string>()
}
