import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-country.interface";
import { catchError, delay, map, Observable, of, tap, throwError } from "rxjs";
import type { Country } from "../interfaces/country.interface";
import { CountryMapper } from "../mappers/country.mapper";

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
    providedIn:'root'
})

export class CountryService{

    private http = inject(HttpClient)
    private queryCacheCapital = new Map<string,Country[]>()
    private queryCacheCountry = new Map<string,Country[]>()
    private queryCacheRegion = new Map<string,Country[]>()

    searchByCapital( query:string ):Observable<Country[]>{
        query = query.toLowerCase();

        if(this.queryCacheCapital.has(query)){
            return of(this.queryCacheCapital.get(query)??[]);
        }

        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                tap( countries => this.queryCacheCapital.set(query,countries) ),
                catchError(error=>{
                    return throwError(()=>new Error(`No se pudo obtener países con ese query: ${query}`));
                })
            )
    }    

    searchByCountry:(query:string)=>Observable<Country[]>=(query)=>{
        query = query.toLowerCase()

        if(this.queryCacheCountry.has(query)){
            return of(this.queryCacheCountry.get(query)??[]);
        }

        return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                tap(countries=>this.queryCacheCountry.set(query,countries)),
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

    searchByRegion:(region:string)=>Observable<Country[]>=(region:string)=>{
        if(this.queryCacheRegion.has(region)){
            return of(this.queryCacheRegion.get(region)??[])
        }
        return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`)
            .pipe(
                map(CountryMapper.mapRestCountryArrayToCountryArray),
                tap(countries=>this.queryCacheRegion.set(region,countries)),
                catchError(error=>{
                    console.log(Error(error))
                    return throwError(()=>new Error(`No se obtuvieron países con esa región:${region}`))
                })
            )
    }

}