import { Component, computed, signal, WritableSignal } from "@angular/core";
import type { Character } from "../../interfaces/character.interface";

let personajes:Array<Character> = [
    {
        id:0,
        name:'batman',
        power:1000
    }//,
    // {
    //     id:1,
    //     name:'robin',
    //     power:100
    // },
    // {
    //     id:2,
    //     name:'gordon',
    //     power:99
    // },
    // {
    //     id:3,
    //     name:'clayface',
    //     power:670
    // }
]

@Component({
    templateUrl:'dragonBall-page.component.html',
    styleUrl:'dragonBall-page.component.css'
})

export class DragonBallPageComponente{
    public characters:WritableSignal<Array<Character>>=signal(personajes);
    public clasesPoder = computed(()=>{
        return {
            'text-danger':true
        }
    })
    public nombre = signal('');
    public poder = signal(0);
    public agregarHeroe:()=>void=()=>{
        // let power:number = parseInt(this.poder())
        if(!this.nombre() || !this.poder() || this.poder()<=0)
            return
        let indice = this.characters.length;
        let nuevo:Character = {id:indice, name:this.nombre(), power:this.poder()}
        // let copia = this.characters().slice();
        // copia.push(nuevo)
        // this.characters.set(copia);
        this.characters.update(x=>[...x, nuevo])
        console.table(this.characters())
        this.resetFields()
    }
    public resetFields:()=>void=()=>{
        this.nombre.set('');
        this.poder.set(0);
    }
}