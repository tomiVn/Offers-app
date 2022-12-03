
export function FormFactoryFunction(
    elementName: string, 
    elementLabel: string, 
    elementType: string,
    minimalLength: number,
    data: any,
    validation: any,
    errors: any){ 
    
    return {
        elementName,
        elementLabel,
        elementType,
        minimalLength, 
        data,
        validation,
        errors,
    }
}