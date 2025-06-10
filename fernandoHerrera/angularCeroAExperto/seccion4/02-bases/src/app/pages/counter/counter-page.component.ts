import { Component, signal, WritableSignal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.component.html'
})

export class CounterPageComponent{
    public counter:number=10
    public counterSignal:WritableSignal<number> = signal(10)
    public modificarContador:(paso:number)=>void = (paso)=>{
        this.counter += paso
        this.counterSignal.update(value=>value+paso)
    }

    public restablecerContador:()=>void=()=>{
        this.counter=10;
        this.counterSignal.set(10)
    }
}