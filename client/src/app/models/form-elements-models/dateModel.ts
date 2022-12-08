import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const DateModel = FormElementFactoryFunction
('date', 'Date', 'date', 0, '', ['', []], []);

    const FromDate = Object.assign(() => {}, DateModel);   
        FromDate.setElementName('fromDate');
        FromDate.setElementLabel('Valid from Date');        
export const FromDateModel = FromDate;

    const UntilDate = Object.assign(() => {}, DateModel);
        UntilDate.setElementName('untilDate');
        UntilDate.setElementLabel('Until date');
export const UntilDateModel = UntilDate;             
