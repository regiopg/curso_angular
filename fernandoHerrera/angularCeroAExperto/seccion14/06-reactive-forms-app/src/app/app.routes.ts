import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'reactive',
        loadChildren:()=>import('./reactive/reactive.routes').then(m=>m.ReactiveRoutes)
    },
    {
        path:'auth',
        loadChildren:()=>import('./auth/auth.routers')
    },
    {
        path:'country',
        loadChildren:()=>import('./country/country.routes')
    },
    {
        path:'**',
        redirectTo:'reactive'
    }
];
