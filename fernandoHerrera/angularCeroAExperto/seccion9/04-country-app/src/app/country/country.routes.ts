import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";

export const CountryRoutes: Routes = [
    {
        path:'',
        component:CountryLayoutComponent, 
        children:[
            {
                path:'by-capital',
                component:ByCapitalPageComponent
            },
            {
                path:'by-country',
                loadComponent:()=>import('./pages/by-country/by-country.component')
            },
            {
                path:'by-region',
                loadComponent:()=>import('./pages/by-region/by-region.component')
            },
            {
                path:'by/:nombrePais',
                loadComponent:()=>import('./pages/country-page/country-page.component')
            },
            {
                path:'**',
                redirectTo:'by-capital'
            }
        ]
    }
];

export default CountryRoutes