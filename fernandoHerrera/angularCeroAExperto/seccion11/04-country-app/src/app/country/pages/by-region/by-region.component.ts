import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam:string):Region{
    queryParam = queryParam.toLowerCase()
    const validRegion:Record<string,Region>={
        'africa':'Africa',
        'americas':'Americas',
        'asia':'Asia',
        'europe':'Europe',
        'oceania':'Oceania',
        'antarctic':'Antarctic'
    }
    return validRegion[queryParam]??'Americas'
}

@Component({
    selector: 'by-region',
    imports: [CountryListComponent],
    templateUrl: './by-region.component.html',
    styleUrl: './by-region.component.css'
})
export default class ByRegionComponent {
    countryService = inject(CountryService)
    activatedRoute = inject(ActivatedRoute)
    router = inject(Router)
    queryParam = this.activatedRoute.snapshot.queryParamMap.get('region')??''
    public regions: Region[] = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ];    
    public regionSeleccionada=linkedSignal<Region>(()=>validateQueryParam(this.queryParam));

    countryResource = rxResource({
        request:()=>({region:this.regionSeleccionada()}),
        loader:({request})=>{

            this.router.navigate(['country/by-region'],{
                queryParams:{
                    region:request.region
                }
            })

            return this.countryService.searchByRegion(request.region)
        }
    })

}
