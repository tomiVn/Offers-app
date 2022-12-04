import { Validators } from "@angular/forms";
import { ONLY_NUMBERS } from "src/app/utils/const";
import { customError, patternError, requiredField } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";


export const PricenModel = FormElementFactoryFunction
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