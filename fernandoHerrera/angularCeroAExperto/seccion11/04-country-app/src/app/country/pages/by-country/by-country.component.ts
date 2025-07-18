import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'by-country',
    imports: [CountrySearchInputComponent, CountryListComponent],
    templateUrl: './by-country.component.html',
    styleUrl: './by-country.component.css'
})
export default class ByCountryComponent {
    countryService = inject(CountryService)
    activatedRoute = inject(ActivatedRoute)
    router = inject(Router)
    queryParam = this.activatedRoute.snapshot.queryParamMap.get('query')??''
    query = linkedSignal(()=>this.queryParam)

    countryResource = rxResource({
        request:()=>({query:this.query()}),
        loader: ({request})=>{
            if(!request.query) return of([])
            this.router.navigate(['/country/by-country'],{
                queryParams:{
                    query:request.query
                }
        })
            return this.countryService.searchByCountry(request.query)
        }
    })    

    // countryResource = resource({
    //     request:()=>({query:this.query()}),
    //     loader:async ({request})=>{
    //         if(!request.query) return []
    //         return await firstValueFrom(
    //             this.countryService.searchByCountry(request.query)
    //         )
    //     }
    // })
}
