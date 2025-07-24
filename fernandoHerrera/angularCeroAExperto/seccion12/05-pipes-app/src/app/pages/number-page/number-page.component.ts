import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-number-page',
    imports: [ DecimalPipe, PercentPipe, CurrencyPipe ],
    templateUrl: './number-page.component.html',
    styleUrl: './number-page.component.css'
})

export default class NumberPageComponent {

    ventasTotales = signal<number>(12_123_123.1267)
    percent = signal<number>(0.4856)

}
