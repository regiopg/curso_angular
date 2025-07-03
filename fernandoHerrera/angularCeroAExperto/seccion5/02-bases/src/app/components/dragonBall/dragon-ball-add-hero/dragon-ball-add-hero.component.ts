import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragon-ball-add-hero',
  templateUrl: './dragon-ball-add-hero.component.html',
  styleUrl: './dragon-ball-add-hero.component.css'
})
export class DragonBallAddHeroComponent {
    public nombre = signal('');
    public poder = signal(0)
    
    newCharacter = output<Character>();

    public agregarHeroe:()=>void=()=>{
        if(!this.nombre() || !this.poder() || this.poder()<=0)
            return
        let nuevo:Character = {
            id:Math.floor(Math.random()*1000),
            name:this.nombre(),
            power:this.poder()
        }
        this.newCharacter.emit(nuevo)
        this.resetFields()
    }

    public resetFields:()=>void=()=>{
        this.nombre.set('');
        this.poder.set(0);
    }
}
