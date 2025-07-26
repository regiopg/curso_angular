import { Pipe, PipeTransform } from "@angular/core";
import { Color, ColorMap } from "../interfaces/hero.interface";

@Pipe({
    name:'colorPipe'
})

export class ColorPipe implements PipeTransform{
    transform(value: 0|1|2|3, hexadecimal:boolean=false):string {
        return hexadecimal ? ColorMap[value]:Color[value]
    }
}