import { Routes } from "@angular/router";

export const ReactiveRoutes:Routes = [
    {
        path:'',
        children:[
            {
                path:'basic',
                title:'Basicos',
                loadComponent:()=>import('./pages/basic-page/basic-page.component')
            },
            {
                path:'dynamic',
                title:'Dinamicos',
                loadComponent:()=>import('./pages/dynamic-page/dynamic-page.component')
            },
            {
                path:'switches',
                title:'Switches',
                loadComponent:()=>import('./pages/switches-page/switches-page.component')
            },
            {
                path:'**',
                redirectTo:'basic'
            }
        ]
    }
]