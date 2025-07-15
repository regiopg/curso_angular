import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'

@Component({
    selector: 'app-by-capital-page',
    imports: [CountrySearchInputComponent, CountryListComponent],
    templateUrl: './by-capital-page.component.html',
    styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

    countryService = inject(CountryService)
    query = signal('')

    countryResource = rxResource({
        request:()=>({query:this.query()}),
        loader:({request})=>{
            if(!request.query) return of([]);
            return this.countryService.searchByCapital(request.query)
        }
    })

    // countryResource = resource({
    //     request:()=>({query:this.query()}),
    //     loader:async({request})=>{
    //         if(!request.query)return []
    //         return await firstValueFrom(
    //             this.countryService.searchByCapital(request.query)
    //         )
    //     }
    // })

    // isLoading = signal<boolean>(false)
    // isError = signal<string|null>(null)
    // countries = signal<Country[]>([])

    // onSearch(value:string){
    //     if(this.isLoading())return
    //     this.isLoading.set(true)
    //     this.isError.set(null)
    //     this.countryService.searchByCapital(value)
    //         .subscribe({
    //             next:countries=>{
    //                 this.countries.set(countries)
    //             },
    //             complete:()=>{
    //                 this.isLoading.set(false)
    //             },
    //             error:(error)=>{
    //                 this.countries.set([])
    //                 this.isError.set(error)
    //             }
    //         })
    // }

}
