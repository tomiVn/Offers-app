
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
        },
        setElementType (elementType : string) {
            return this.elementType = elementType;
        },
        setMinimalLength (minimalLength : number) {
            return this.minimalLength = minimalLength;
        },
        setData (data : number) {
            return this.data = data;
        },
        setValidation: function(func: any){
            return this.validation[1].push(func);
        },
        setErrors: function(func: any){
            return this.errors.push(func);
        }
    }
}