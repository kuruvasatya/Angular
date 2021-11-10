import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class UsersValidators{
    static canNotContainSpace(control: AbstractControl): ValidationErrors | null {
        if(control.value.indexOf(' ')>=0)
            return {canNotContainSpace : true};
        return null;
    }

}