import { FormControl } from "@angular/forms";

export function fileTypeValidator(fileTypesArray: string[]) {

    return function (control: FormControl) {

        const file = control.value;

        if (file) {

            const isTypeValid = fileTypesArray.some(t => t == file.type);

            if (!isTypeValid) {
                return { "fileTypeIsNotValid": true };
            } else {
                return null;
            }

        };
        return null;
    }
}