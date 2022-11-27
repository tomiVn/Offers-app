import { FormGroup } from "@angular/forms";

export function isPasswordsMatch(password: string, repeatPass: string) {

    return (formgroup: FormGroup) => {

      let pass   = formgroup.controls[ password ];
      let repass = formgroup.controls[ repeatPass ];

      if ( repass.errors && !repass.errors[ 'isPasswordsNotMatch' ] ) {
        return;
      }
       
       return pass.value !== repass.value 
                ? repass.setErrors({ 'isPasswordsNotMatch': true }) 
                : repass.setErrors( null );
    }
  }