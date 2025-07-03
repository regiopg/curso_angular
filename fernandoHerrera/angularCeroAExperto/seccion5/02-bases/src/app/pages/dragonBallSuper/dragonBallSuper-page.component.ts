import { Component, computed, inject, signal, WritableSignal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonBall/character-list/character-list.component";
import { DragonBallAddHeroComponent } from "../../components/dragonBall/dragon-ball-add-hero/dragon-ball-add-hero.component";
import { dragonballService } from "../../services/dragonball.service";
interface Character{
    id:number,
    name:string,
    power:number
}

// let personajes:Array<Character> = [
//     {
//         id:0,
//         name:'batman',
//         power:1000
//     },
//     {
//         id:1,
//         name:'robin',
//         power:100
//     }
// ]

@Component({
    templateUrl:'dragonBallSuper-page.component.html',
    styleUrl:'dragonBallSuper-page.component.css',
    selector:'dragonBallSuper',
    imports: [CharacterListComponent, DragonBallAddHeroComponent]
})

export class DragonBallSuperPageComponente{
    public dragonBallService = inject(dragonballService);
}