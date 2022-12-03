import { Validators } from "@angular/forms";
import { ONLY_NUMBERS } from "src/app/utils/const";
import { customError, patternError, requiredField } from "./utils/errorsMessages";
import { FormFactoryFunction } from "./utils/form-factory-function";


export const PricenModel = FormFactoryFunction
  ('price', 'Price', 'number', 0, '',
    ['',
      [ 
        Validators.required, 
        Validators.min(0), 
        Validators.pattern("^[0-9.]*$")
      ]
    ],
    [ 
      requiredField('Price'), 
      patternError( ONLY_NUMBERS ), 
      customError('min', `Min price 0!`)
    ]
  )