import { Validators } from "@angular/forms";
import { EMAIL_IS_NOT_VALID, EMAIL_REGEX } from "src/app/utils/const";
import { minLength, patternError, requiredField } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const EmailModel = FormElementFactoryFunction
  ('email', '@Email', 'email', 6, '',
    
    ['', 
      [ Validators.required, 
        Validators.minLength(6),
        Validators.pattern(EMAIL_REGEX) 
      ]
    ],
    
    [ 
      requiredField('@Email'), 
      minLength(6), 
      patternError( EMAIL_IS_NOT_VALID ) 
    ]
  );
