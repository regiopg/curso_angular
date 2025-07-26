import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'creadorPipe'
})

export class CreadorPipe implements PipeTransform{
    transform(value: 0|1):'DC'|'Marvel' {
        return value===0?'DC':'Marvel'
    }
}