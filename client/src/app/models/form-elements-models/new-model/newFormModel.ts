import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS, SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED } from "src/app/utils/const";
import { patternError } from "../utils/errorsMessages";
import { FormFactoryFunction } from "../utils/form-factory-function";

export const DescriptionModel = FormFactoryFunction
  ('', '', '', 0, '',
    ['',
      [ 
        Validators.pattern(NOT_VALID_CHARACTERS) 
      ]
    ],
    [
      patternError( SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED )
    ]
  );