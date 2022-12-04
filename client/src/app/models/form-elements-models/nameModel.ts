import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS, SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED } from "src/app/utils/const";
import { minLength, patternError, requiredField } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const NameModel = FormElementFactoryFunction
   ('name', 'Names', 'text', 3, null, 

      ['', 
        [ 
          Validators.required, 
          Validators.minLength(3), 
          Validators.pattern(NOT_VALID_CHARACTERS)
        ]
      ],

      [ 
        requiredField('Name'), 
        minLength(3), 
        patternError( SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED ) 
      ]
   )



        