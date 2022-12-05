import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const DateModel = FormElementFactoryFunction
('date', 'Date', '', 0, '', ['', []], []);

    const FromDate = Object.assign(() => {}, DateModel);   
        DateModel.setElementName('fromDate');
        DateModel.setElementLabel('Valid from Date');        
export const FromDateModel = FromDate;

    const UntilDate = Object.assign(() => {}, DateModel);
        UntilDate.setElementName('untilDate');
        UntilDate.setElementLabel('Until date');
export const UntilDateModel = UntilDate;             
