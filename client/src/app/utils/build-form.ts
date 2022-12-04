import { IFormModel } from "../models/interfaces/formElementsInterface"


export function buildFormFunction ( ModelsData: { [s: string]: IFormModel }) { 

    return  Object.values( ModelsData ).reduce((obj: any, model: IFormModel) =>
            Object.assign(obj, { [model.elementName]: model.validation }), {})
}





