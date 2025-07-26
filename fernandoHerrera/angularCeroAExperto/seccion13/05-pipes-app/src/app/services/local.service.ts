import { Injectable, signal } from "@angular/core";
import { LocaleIinterface } from "../interfaces";

@Injectable({providedIn:'root'})
export class LocaleService{

    private currentLocal = signal<LocaleIinterface>('fr')

    constructor(){
        this.currentLocal.set(
            localStorage.getItem('locale') as LocaleIinterface ?? 'es'
        )
    }

    get getLocale(){
        return this.currentLocal()
    }

    changeLocale(locale:LocaleIinterface){
        localStorage.setItem('locale',locale)
        this.currentLocal.set(locale)
        window.location.reload()
    }

}