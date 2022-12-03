
export function FormFactoryFunction(
    elementName:   string, 
    elementLabel:  string, 
    elementType:   string,
    minimalLength: number,
    data:          any,
    validation:    any,
    errors:        any
    ){    
    return {
        elementName,
        elementLabel,
        elementType,
        minimalLength, 
        data,
        validation,
        errors,
        setElementName: function (elementName : string) {
        return this.elementName = elementName;
        },
        setElementLabel (elementLabel : string) {
        return this.elementLabel = elementLabel;
        }
    }
}