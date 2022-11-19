import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX } from 'src/environments/environment';
import { isPasswordsMatch } from '../utils/matchPasswords';
import { countryCodeValidator } from '../utils/validateCountryCode';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

      nameValidation = ['', 
       [ Validators.required, 
         Validators.minLength(3)
        ]
      ];

      emailValidation = ['', 
       [ Validators.required,
         Validators.minLength(6),
         Validators.pattern(EMAIL_REGEX)
        ]
      ];

      passwordValidation = ['', 
       [ Validators.required,
         Validators.minLength(4)
        ]
      ];

      repeatPassValidation = ['', 
        [ Validators.required ]
      ];
      
      dialCodeValidation = ['', 
        [ Validators.required, 
          countryCodeValidator 
        ]
      ];

      phoneValidation = ['', 
        [ Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ];

      dateValidation = ['',
        [ Validators.required]]

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {
    return this.fb.group({      
      name: this.nameValidation,                                        
      email: this.emailValidation,
      password: this.passwordValidation,
      repeatPass: this.repeatPassValidation,
      dialCode: this.dialCodeValidation,
      phone: this.phoneValidation,
    },
    {
      validators: isPasswordsMatch('password', 'repeatPass')
    });
  }

  getLogIn(){
    return this.fb.group({
      email: this.emailValidation,
      password: this.passwordValidation,
    });
  }

  getDateArange(){
    return this.fb.group({
      firstDay: this.dateValidation,
      lastDay: this.dateValidation,
    });
  }
}
