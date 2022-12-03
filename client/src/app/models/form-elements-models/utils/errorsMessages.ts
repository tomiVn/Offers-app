export function requiredField(name: string) {
    return {
        name: 'required',
        message: name + ' is required!'
    }
}

export function minLength(number: number) {
    return {
        name: 'minlength',
        message: `Min length ${number} characters!`
    }
}

export function maxLength(number: number) {
    return {
        name: 'maxlength',
        message: `Max length ${number} characters!`
    }
}

export function patternError(patternMessage: string){
    return {
        name: 'pattern',
        message: `${patternMessage}`
    } 
}

export function customError(nameError: string, messageError: string){
    return {
        name: nameError,
        message: messageError
    }
}
