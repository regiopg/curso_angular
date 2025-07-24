import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LocaleService } from '../../services/local.service';
import { LocaleIinterface } from '../../interfaces';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html',
    styleUrl: './basic-page.component.css',
    imports:[LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe]
})

export default class BasicPageComponent {
    
    localService = inject(LocaleService)
    currentLocal = signal(inject(LOCALE_ID))

    nombreMin = signal<string>('marcos')
    nombreMay = signal<string>('MARCOS')
    nombreCompleto = signal<string>('JeSuS mArCoS')

    customDate = signal<Date>(new Date())

    tickingDateEffect = effect((onCleanUp)=>{
        const interval = setInterval(()=>{
            this.customDate.set(new Date())
        },1000)

        onCleanUp(()=>{
            clearInterval(interval)
        })
    })

    changeLocale(locale:LocaleIinterface){
        console.log({locale})
        this.localService.changeLocale(locale)
    }

}
