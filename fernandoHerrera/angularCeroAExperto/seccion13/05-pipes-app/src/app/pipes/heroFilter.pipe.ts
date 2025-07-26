import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
    name:'heroFilter'
})

export class HeroFilterPipe implements PipeTransform{
    transform(value: Hero[], search:string):Hero[] {
        if(!search)
            return value
        return value.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
    }
}