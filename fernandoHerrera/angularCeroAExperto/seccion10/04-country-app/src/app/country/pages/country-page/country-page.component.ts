import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../components/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
    selector: 'country-page',
    templateUrl: './country-page.component.html',
    styleUrl: './country-page.component.css',
    imports: [NotFoundComponent, CountryInformationComponent]
})
export default class CountryPageComponent {
    countryService = inject(CountryService)
    countryCode = inject(ActivatedRoute).snapshot.params['code']
    countryResource = rxResource({
        request:()=>({code:this.countryCode}),
        loader:({request})=>this.countryService.searchByAlphaCode(request.code)
    });
}