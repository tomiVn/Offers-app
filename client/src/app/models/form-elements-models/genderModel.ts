import { AbstractControl } from '@angular/forms';
import { customError } from './utils/errorsMessages';
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const GenderModel = FormElementFactoryFunction
    ('gender', 'Gender', '', 0, genderData(), 

        ['', [ genderValidator ] ], 

        [ customError('genderError', 'This value is not in the selection!') ]
    );

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