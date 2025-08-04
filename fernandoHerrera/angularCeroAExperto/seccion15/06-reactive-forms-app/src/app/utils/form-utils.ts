import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

    async function sleep(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(true)
            },2500)       
        })
    }

export class FormUtils{

    static namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
    static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';    

    static getTextErrors(errors:ValidationErrors){
        for(const key of Object.keys(errors)){
            switch(key){
                case 'required':
                    return 'Este campo es requerido'
                case 'minlength':
                    return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`
                case 'min':
                    return `Debe tener un valor mínimo de ${ errors['min'].min }`
                case 'email':
                    return 'Formato de correo invalido'
                case 'pattern':
                    if(errors['pattern'].requiredPattern===FormUtils.emailPattern){
                        return 'El correo electrónico no es correcto'
                    }
                    if(errors['pattern'].requiredPattern===FormUtils.namePattern){
                        return 'Nombre con formato incorrecto'
                    }
                    return 'Formato incorrecto'
                case 'emailTaken':
                    return 'Correo ya registrado'
                case 'usuarioInvalido':
                    return 'Usuario no valido'
                default:
                    return `Error de validación no controlado: ${key}`
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

    static isFieldOneEqualToFieldTwo(field:string, field2:string){
        return(formGroup:AbstractControl)=>{
            const campo1 = formGroup.get(field)?.value;
            const campo2 = formGroup.get(field2)?.value;
            return campo1 === campo2 ? null : {passwordNotEqual:true, password:campo1, confirmacion:campo2}
        }
    }

    static async checkingServerResponse(control:AbstractControl):Promise<ValidationErrors|null>{
        const formValue = control.value;
        await sleep()
        if(formValue==='regioinge@gmail.com'){
            return{
                emailTaken:true,
                valorActual:formValue
            }
        }
        return null;
    }

    static notRegiopg(control:AbstractControl):ValidationErrors | null {
        return control.value === 'regiopg' ? {usuarioInvalido:true,usuario:control.value}:null;
    }

}