
import { FormFactoryFunction } from "../utils/form-factory-function";

export const OfferValidFromDateModel = FormFactoryFunction
('fromDate', 'From date', '', 0, null, ['', []], []);

export const OfferValidUntilDateModel = FormFactoryFunction
('untilDate', 'Until date', '', 0, null, ['', []], []);

function futureDateError(date: Date){
    return{
        name: 'futureDateError',
        message: `Please select date until ${date}`
    }
  }
  
  function pastDateError(date: Date){
    return{
        name: 'pastDateError',
        message: `Please select date until ${date}`
    }
  }
