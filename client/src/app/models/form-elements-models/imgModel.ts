import { FormElementFactoryFunction } from "./utils/form-element-factory";
import { customError } from "./utils/errorsMessages";
import { fileSizeValidator } from "./utils/validations/fileSizeValidator";
import { fileTypeValidator } from "./utils/validations/fileTypeValidation";

export const ImgModel = FormElementFactoryFunction
    ('image', 'Image', '', 0, '.jpeg,.jpg,.png',
        ['', 
            [ 
                fileTypeValidator(['image/jpeg', 'image/jpg', 'image/png']), 
                fileSizeValidator(1024 * 1024 * 1)
            ]
        ],        
        [ 
            customError('fileTypeIsNotValid', 'Image types JPG / JPEG / PNG'), 
            customError('fileSizeIsNotValid', 'Image size Limit 1MB!') 
        ]
    );