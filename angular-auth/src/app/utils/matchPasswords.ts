import { FormGroup } from "@angular/forms";

export function isPasswordsMatch(password: any, repeatPass: any) {

    return (formgroup: FormGroup) => {

      let pass   = formgroup.controls[ password ];
      let repass = formgroup.controls[ repeatPass ];

      if ( repass.errors && !repass.errors[ 'isPasswordsMatch' ] ) {
        return;
      }

      if (pass.value !== repass.value) {

        repass.setErrors({ isPasswordsMatch: false });

      } else {

        repass.setErrors(null);
      }

    };
  }


