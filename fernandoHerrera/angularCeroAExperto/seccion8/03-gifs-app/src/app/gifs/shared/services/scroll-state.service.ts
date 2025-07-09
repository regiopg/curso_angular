import { Injectable, signal } from "@angular/core";

@Injectable({providedIn:'root'})
export class ScrollStateService{
    constructor(){}
    trendingScrollState = signal<number>(0)
}