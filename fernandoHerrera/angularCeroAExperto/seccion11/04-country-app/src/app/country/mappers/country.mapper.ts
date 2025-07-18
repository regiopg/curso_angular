import type { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-country.interface";

export class CountryMapper{

    public static mapRestCountryToCountry:(restCountry:RESTCountry)=>Country=({name:{common:name},capital,population, flag, flags:{svg:flagSVG}, cca2, translations:{spa:{common:nombre}},region,subregion})=>{
        return {
            capital:Array.isArray(capital) && capital.length>0?capital[0]:'',
            cca2,
            flag,
            flagSVG,
            name,
            nombre,
            population,
            region,
            subregion
        }
    }

    public static mapRestCountryArrayToCountryArray:(original:RESTCountry[])=>Country[]=(original)=>{
        return original.map(this.mapRestCountryToCountry)
    }

}