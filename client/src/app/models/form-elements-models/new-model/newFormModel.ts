import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS, SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED } from "src/app/utils/const";
import { patternError } from "../utils/errorsMessages";
import { FormElementFactoryFunction } from "../utils/form-element-factory";

export const newFormModel = FormElementFactoryFunction
  ('', '', '', 0, '',
    ['',
      [ ]
    ],
    [ ]
  );