import { Component } from '@angular/core';
import { ReactiveRoutes } from '../../../reactive/reactive.routes';
import { MenuItem } from '../../../interfaces/menu-item.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

const reactiveItems = ReactiveRoutes[0].children ?? [];

@Component({
    selector: 'side-menu',
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
    
    reactiveMenu: MenuItem[] = reactiveItems
        .filter(x=>x.path!=='**')
        .map(x=>({
            route:`reactive/${x.path}`,
            title:`${x.title}`
        }));

    authMenu:MenuItem[]=[
        {
            title:'Registro',
            route:'./auth'
        }
    ]

    countryMenu:MenuItem[]=[
        {
            title:'Países',
            route:'./country'
        }
    ] 

}