import { NgForm } from "@angular/forms";

export function FormDataAppend( form: NgForm){
    let formData = new FormData();

    Object.entries( form ).forEach(([ key, value ]) => { 
        formData.append( key, value ) } );
        
    return formData;
}