import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, Signal, WritableSignal } from "@angular/core";

@Component({
    templateUrl:'./hero-page.component.html',
    imports:[ UpperCasePipe ]
})

export class HeroPageComponent{
    public name = signal('IronMan')
    public age:WritableSignal<number>=signal(45);
    
    constructor(){
        
    }

    heroDescription = computed(()=>{
        const description = `${this.name()} - ${this.age()}`
        return description;
    })
    
    cambiarMayusculas = computed(()=>{
        return this.getHeroDescription().toUpperCase();
    })

    getHeroDescription:()=>string=()=>{
        return `Heroe:${this.name()} Edad: ${this.age()}`;
    }

    changeHero:()=>void=()=>{
        this.name.set('Spiderman');
        this.age.set(22)
    }

    resetForm:()=>void=()=>{
        this.name.update(x=>x='IronMan');
        this.age.update(x=>x=45)
    }


    cambiarEdad:()=>void=()=>{
        this.age.update(x=>x=60)
    }
}