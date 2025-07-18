import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './country-search-input.component.html',
    styleUrl: './country-search-input.component.css'
})
export class CountrySearchInputComponent {
    initialValue = input<string>('')
    placeholder = input('Buscar')
    value = output<string>()
    inputValue = linkedSignal<string>(()=>this.initialValue()??'')
    debounceTime = input(300)
    debounceEffect = effect((onCleanup)=>{
        const value = this.inputValue()
        const timeout = setTimeout(()=>{
            this.value.emit(value)
        },this.debounceTime())
        onCleanup(()=>{
            clearTimeout(timeout)
        })
    })
}
