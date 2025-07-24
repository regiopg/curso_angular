import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Cliente } from '../../interfaces';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const cliente1:Cliente={
    address:'Río Nazas # 234',
    age:43,
    gender:'male',
    name:'Marcos Piña'
}

const cliente2:Cliente={
    address:'Río Nazas # 234',
    age:41,
    gender:'female',
    name:'Fabiola Espinoza'
}

@Component({
    selector: 'app-uncommon-page',
    imports: [
        AsyncPipe,
        CardComponent, 
        I18nPluralPipe, 
        I18nSelectPipe, 
        JsonPipe, 
        KeyValuePipe,
        SlicePipe, 
        TitleCasePipe, 
        UpperCasePipe
    ],
    templateUrl: './uncommon-page.component.html',
    styleUrl: './uncommon-page.component.css'
})
export default class UncommonPageComponent {
    
    cliente = signal<Cliente>(cliente1)

    clientes = signal<Array<string>>([
        'Marcos',
        'Fabiola',
        'Fabián',
        'Javier',
        'Francisco',
        'Petra',
        'Andrea',
        'Elvira'
    ])

    mapaInvitacion:Record<string,string>={
        'male':'invitarlo',
        'female':'invitarla'
    }

    mapaPluralCLientes= signal({
        '=0':'no tenemos clientes esperando',
        '=1':'tenemos un cliente esperando',
        '=2':'tenemos dos clientes esperando',
        other:'tenemos # clientes esperando'
    })

    cambiarCliente:()=>void=()=>{
        
        if(this.cliente() === cliente1){
            this.cliente.set(cliente2)
            return
        }

        this.cliente.set(cliente1)
    }

    borrarCliente:()=>void=()=>{
        this.clientes.update(lista=>lista.slice(1))
    }

    profile = {
        name:'Marcos',
        age:40,
        address:'Monterrey, Nuevo León'
    }

    promiseValue:Promise<string> = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject('Tenemos un error')
            resolve('Tenemos data en la promesa')
            console.log('Promesa finalizada')
        },3500);
    })

    myObservable = interval(2000).pipe(
        map((value)=>value+1),
        tap((value)=> console.log('tap:', value))
    )

}
