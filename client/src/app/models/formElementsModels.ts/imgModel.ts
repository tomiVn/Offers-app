import { AbstractControl, FormControl } from "@angular/forms";

export const ImgModel = {
    elementName:  'image',
    elementLabel: 'Image',
    elementType:  '',
    minimalLength: 0,
    values:       '.jpeg,.jpg,.png',
    validation:   ['', [fileTypeValidator(), fileSizeValidator()]],
    errors:       [fileTypeError(), fileSizeError()]
}

function fileSizeValidator() {
     
    return function ( control: AbstractControl ) {

        const file = control.value;
               
        if (file) {

            const fileSizeTest = file.size > 1024 * 1024 * 1;
           
            if (fileSizeTest) {              
                return { "fileSizeIsNotValid": true };
            }else {               
                return null;
            } 

        };
        return null;
    }
}

function fileTypeValidator() {

    return function ( control: FormControl ) {

        const file = control.value;
         
        if (file) {
            
            const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isTypeValid = fileTypes.some(t => t == file.type);

            if(! isTypeValid){              
                return { "fileTypeIsNotValid": true };
            }else {
                return null;
            } 

        };
        return null;
    }
}

function fileSizeError(){
    return{
        name: 'fileSizeIsNotValid',
        message: `Image size Limit 1MB!`
    }
}

function fileTypeError(){
    return{
        name: 'fileTypeIsNotValid',
        message: `Image types JPG / JPEG / PNG!`
    }
}