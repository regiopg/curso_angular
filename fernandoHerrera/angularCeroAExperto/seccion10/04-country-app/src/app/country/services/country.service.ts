import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-country.interface";
import { catchError, delay, map, Observable, throwError } from "rxjs";
import type { Country } from "../interfaces/country.interface";
import { CountryMapper } from "../mappers/country.mapper";

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
    providedIn:'root'
})

export class CountryService{

    private http = inject(HttpClient)

    searchByCapital( query:string ):Observable<Country[]>{
        query = query.toLowerCase();
        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                catchError(error=>{
                    return throwError(()=>new Error(`No se pudo obtener países con ese query: ${query}`));
                })
            )
    }    

    searchByCountry:(query:string)=>Observable<Country[]>=(query)=>{
        query = query.toLowerCase()
        return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                delay(1000),
                catchError(error=>{
                    return throwError(()=>new Error(`No se obtuvieron países con nombre parecido a: ${query}`))
                })
            )
    }
    
    searchByAlphaCode(query:string){
        query = query.toLowerCase();
        return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${query}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                map(contries=>contries.at(0)),
                catchError(error=>{
                    return throwError(()=>new Error(`No se obtuvieron países con eses código: ${query}`))
                })
            )
    }

}