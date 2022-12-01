import { fileSizeValidator, fileTypeValidator } from "src/app/utils/validations/imageValidation";

export const ImageModel = {
    validation: ['', [ fileSizeValidator(), fileTypeValidator() ]]
}