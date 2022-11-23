import { FormControl } from "@angular/forms";

export function fileSizeValidator() {

    return function ( control: FormControl ) {

        const file = control.value;

        if (file) {

            const fileSizeTest = file.size > 1024 * 1024 * 1;
           
            if (fileSizeTest) {
               
                return { "isFileValid":false };
            }else {
               
                return null;
            } 

        };
        return null;
    }
}