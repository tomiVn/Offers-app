import { AbstractControl } from "@angular/forms";

export function fileSizeValidator(fileSizeLimit: number) {

    return function (control: AbstractControl) {

        const file = control.value;

        if (file) {

            const fileSizeTest = file.size > fileSizeLimit;

            if (fileSizeTest) {
                return { "fileSizeIsNotValid": true };
            } else {
                return null;
            }

        };
        return null;
    }
}