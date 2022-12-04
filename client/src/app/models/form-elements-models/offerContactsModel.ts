import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS, SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED } from "src/app/utils/const";
import { minLength, patternError } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const OfferContactModel = FormElementFactoryFunction
  ('contactInfo', 'Contacts information', '', 6, '',
    ['',
      [ 
        Validators.pattern(NOT_VALID_CHARACTERS),
        Validators.minLength(6) 
      ]
    ],
    [
      patternError( SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED ),
      minLength(6)
    ]
  );