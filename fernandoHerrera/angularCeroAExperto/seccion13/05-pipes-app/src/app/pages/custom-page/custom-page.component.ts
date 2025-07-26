import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heros.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { TitleCasePipe } from '@angular/common';
import { CreadorPipe } from '../../pipes/creado.pipe';
import { HeroSortByPipe } from '../../pipes/heroSortBy.pipe';
import { HeroFilterPipe } from '../../pipes/heroFilter.pipe';

@Component({
    selector: 'app-custom-page',
    imports: [ToggleCasePipe, CanFlyPipe, ColorPipe, TitleCasePipe, CreadorPipe, HeroSortByPipe, HeroFilterPipe],
    templateUrl: './custom-page.component.html',
    styleUrl: './custom-page.component.css'
})
export default class CustomPageComponent {
    
    name = signal<string>('Marcos Piña');
    mayuscula = signal<boolean>(true);
    heroes = signal<Hero[]>(heroes)
    sortBy = signal<keyof Hero |null>(null)
    search = signal<string>('')
}