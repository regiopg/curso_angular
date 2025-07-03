import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { NotFound404 } from './pages/notFound-404/notFound-404.component';
import { DragonBallPageComponente } from './pages/dragonBall/dragonBall-page.component';
import { DragonBallSuperPageComponente } from './pages/dragonBallSuper/dragonBallSuper-page.component';

export const routes: Routes = [
    {
        path:'',
        component:CounterPageComponent
    },
    {
        path:'hero',
        component:HeroPageComponent
    },
    {
        path:'dragonBall',
        component:DragonBallPageComponente
    },
    {
        path:'dragonBallSuper',
        component:DragonBallSuperPageComponente
    },
    {
        path:'**',
        redirectTo:''
        // component:NotFound404
    }
];
