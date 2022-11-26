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

export function fileTypeValidator() {

    return function ( control: FormControl ) {

        const file = control.value;

        if (file) {
            
            const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isTypeValid = fileTypes.some(t => t == file.type);

            if(! isTypeValid){              
                return { "isFileValid":false };
            }else {
                return null;
            } 

        };
        return null;
    }
}