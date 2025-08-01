import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils{

    static getTextErrors(errors:ValidationErrors){
        for(const key of Object.keys(errors)){
            switch(key){
                case 'required':
                    return 'Este campo es requerido'
                case 'minlength':
                    return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`
                case 'min':
                    return `Debe tener un valor mínimo de ${ errors['min'].min }`
            }
        }
        return null
    }

    static isValidField( form:FormGroup, nombreCampo:string):boolean|null{
        return !!form.controls[nombreCampo].errors && form.controls[nombreCampo].touched;

    }

    static getFieldError(form:FormGroup, nombreCampo:string):string|null{
        if(!form.controls[nombreCampo]) return null;
        const errors = form.controls[nombreCampo].errors??{};
        return FormUtils.getTextErrors(errors)
    }

    static isValidFieldInArray(formArray:FormArray, index:number){
        return(
            formArray.controls[index].errors && formArray.controls[index].touched
        )
    }

    static getFieldErrorInArray(formArray: FormArray, index: number):string|null{
        if(formArray.controls.length===0) return null;
        const errors = formArray.controls[index].errors ?? {};
        return FormUtils.getTextErrors(errors)
    }

}