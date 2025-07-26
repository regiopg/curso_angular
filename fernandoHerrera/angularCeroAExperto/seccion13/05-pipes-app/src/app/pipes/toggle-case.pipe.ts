import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'toggleCase'
})

export class ToggleCasePipe implements PipeTransform{
    transform(value: string, modidificar:boolean=true):string {
        return modidificar ? value.toUpperCase() : value.toLowerCase()
    }
}