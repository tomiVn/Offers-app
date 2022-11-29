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

export function emailPattern(name: string) {
    return {
        name: 'pattern',
        message: `${name} is not valid!`
    }
}

export function specialCharactersPattern(characters: string) {
    return {
        name: 'pattern',
        message: `Special characters ${characters} are not allowed!`

    }
}
//isPasswordsMatch
export function passwordsMatch(){    
    return {
        name: 'isPasswordsNotMatch',
        message: 'Passwords not match!'
    }
}

export function numbersPattern(){
    return{
        name: 'pattern',
        message: `Only numbers are allowed!`
    }
}



