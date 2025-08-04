import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
    selector: 'app-register-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule,
    ],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css'
})
export default class RegisterPageComponent {
 
    private fb = inject(FormBuilder);
    public formUtils = FormUtils;

    public myForm : FormGroup = this.fb.group({
        name:['',[Validators.required, Validators.pattern(FormUtils.namePattern)]],
        email:['',[Validators.required, Validators.pattern(FormUtils.emailPattern)],[FormUtils.checkingServerResponse]],
        username:['',[Validators.required,Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern),FormUtils.notRegiopg]],
        password:['',[Validators.required, Validators.minLength(6)]],
        password2:['',[Validators.required]]
    },{
        validators:[
            FormUtils.isFieldOneEqualToFieldTwo('password', 'password2')
        ]
    })

    // isFieldOneEqualToFieldTwo(field:string, field2:string){
    //     return(formGroup:AbstractControl)=>{
    //         const campo1 = formGroup.get(field)?.value;
    //         const campo2 = formGroup.get(field2)?.value;
    //         return campo1 === campo2 ? null : {passwordNotEqual:true, password:campo1, confirmacion:campo2}
    //     }
    // }

    onSubmit(){
        this.myForm.markAllAsTouched();
        console.log(this.myForm);
    }

}