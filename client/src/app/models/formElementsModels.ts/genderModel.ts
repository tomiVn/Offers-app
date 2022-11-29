import { AbstractControl } from '@angular/forms';

export const GenderModel = {
    elementName:  'gender',
    elementLabel: 'Gender',
    elementType:  '',
    minimalLength: 0,
    values:       genderData(),
    validation:   ['', [genderValidator]],
    errors:       [genderValidatorError()]
}

function genderValidator(control: AbstractControl) {

    let value = control.value;

    if (value == null) {
        return;
    }

    let index = genderData().findIndex((i: any) => i.value == value.toString());

    if (index == -1) {

        return { genderError: true };

    }
    return null;
}

function genderData() {
    return [
        {
            value: 'undefined',
            viewValue: 'undefined'
        },
        {
            value: 'male',
            viewValue: 'male'
        },
        {
            value: 'female',
            viewValue: 'female'
        }
    ]
}

export function genderValidatorError(){
    return{
        name: 'genderError',
        message: `This value is not in the selection!`
    }
}