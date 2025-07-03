import { effect, Injectable, signal, WritableSignal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

const loadFromLocalStorage:()=>Array<Character>=()=>{
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters):[];
}

@Injectable({providedIn:'root'})
export class dragonballService{
    constructor(){}

    public characters:WritableSignal<Array<Character>>=signal(loadFromLocalStorage());

    public agregarHeroe:(character:Character)=>void=(character)=>{
        this.characters.update(x=>[...x,character])
    }

    saveToLocalStorage = effect(()=>{
        localStorage.setItem('characters',JSON.stringify(this.characters()))
    })
    
}