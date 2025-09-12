import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages:string[])=>{
    console.log(`${messages[0]} %c${ messages.slice(1).join(', ') } `, 'color:#bada55')
}

@Component({
    selector: 'app-home-page',
    imports: [
        TitleComponent
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export default class HomePageComponent {
    
    propiedadTradicional = 'Marcos Piña'
    propiedadSignal = signal<string>('Marcos Piña')

    constructor(){
        console.log('constructor llamado')
    }

    cambiarTradicional(){
        this.propiedadTradicional = 'Jesús Piña'
    }

    cambiarSenial(){
        this.propiedadSignal.set('Jesús Piña')
    }

    efectoBasico = effect((onCleanup)=>{
        log('effect', 'efecto básico cuando carga y cada que cambia')
        onCleanup(()=>{
            log('onCleanup', 'Se llama cuando se destruye')
        })
    })

    ngOnInit(){
        log(
            'ngOnInit',
            "Runs once after Angular has initialized all the component's inputs."
        )
    }	

    ngOnChanges(){
    log(
        "ngOnChanges",
        "Runs every time the component's inputs have changed."
    )
}	

    ngDoCheck(){
        log(
            "ngDoCheck",
            "Runs every time this component is checked for changes."
        )
    }	

    ngAfterContentInit(){
        log(
            "ngAfterContentInit",
            "Runs once after the component's content has been initialized."
        )
    }	
    
    ngAfterContentChecked(){
        log(
            "ngAfterContentChecked",
            "Runs every time this component content has been checked for changes."
        )
    }	

    ngAfterViewInit(){
        log(
            'ngAfterViewInit',
            "Runs once after the component's view has been initialized."
        )
    }	


    ngAfterViewChecked(){
        log(
            "ngAfterViewChecked",
            "Runs every time the component's view has been checked for changes."
        )
    }

    ngOnDestroy(){
        log('onDestroy',
            'Destruye al desmontar'
        )
    }

    afeterNextRenderFunction = afterNextRender(()=>{
        log('afterNextRender', 'Runs once the next time that all components have been rendered to the DOM.')
    })

    afterRenderFunction = afterRender(()=>{
        log('afterRender','Runs once before the component is destroyed.')
    })

    

}
