import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import { Country } from "../interfaces/country.interface";

@Injectable({providedIn:'root'})
export class CountryService{
    
    private url:string = 'https://restcountries.com/v3.1'///region/americas?fields=cca3,name,borders';
    private http:HttpClient = inject(HttpClient)

    private _regions:string[]=['Africa','Americas','Asia','Europe','Oceania'];

    get regions():string[]{
        return [...this._regions]
    }

    getCountriesByRegion(region:String):Observable<Country[]>{
        if(!region) return of([]);
        const url:string = `${this.url}/region/${region}?fields=cca3,name,borders`;
        return this.http.get<Country[]>(url)
    }

    getCountryByAlphaCode(alphaCode:string):Observable<Country>{
        // if(!alphaCode) return of(null)
        const url:string = `${this.url}/alpha/${alphaCode}?fields=cca3,name,borders`;
        return this.http.get<Country>(url)
    }

    getCountryNamesByNamesArray(countriesCodes:string[]):Observable<Country[]>{
        if(!countriesCodes || countriesCodes.length<1) return of([]);
        const countriesRequest:Observable<Country>[] = [];
        countriesCodes.forEach(countryCode=>{
            const request = this.getCountryByAlphaCode(countryCode);
            countriesRequest.push(request);
        })

        return combineLatest(countriesRequest);
    }

}