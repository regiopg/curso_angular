import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'by-region',
  imports: [CountryListComponent],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export default class ByRegionComponent {

}
