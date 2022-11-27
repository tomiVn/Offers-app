import { emailPattern, maxLength, minLength, numbersPattern, passwordsMatch, requiredField, specialCharactersPattern } from "../utils/errorsMessages";

export function nameModel(){
  return{
      elementName: 'name',
     elementLabel: 'Names',
      elementType: 'text', 
           errors: [ requiredField('Name'), minLength(3), specialCharactersPattern('< >') ]
  }  
}

export function passwordModel(){
  return{
     elementName: 'password',
    elementLabel: 'Password',
     elementType: 'password',
          errors: [ requiredField('Password'), minLength(4), specialCharactersPattern('< >') ]
  }  
}

export function emailModel(){
  return{
    elementName: 'email',
   elementLabel: '@Email',
    elementType: 'email',
         errors: [ requiredField('@Email'), minLength(6), emailPattern('@Email') ]
  }        
}

export function repeatPasswordModel(){ 
  return{
     elementName: 'repeatPass',
    elementLabel: 'Repeat password',
     elementType: 'password',
          errors: [ requiredField('Repeat-password'), passwordsMatch() ]
  }        
}

export function phoneModel(){
  return{
      elementName: 'phone',
     elementLabel: 'Phone',
      elementType: 'number', 
           errors: [ requiredField('Phone'), minLength(6), maxLength(12), numbersPattern() ]
  }  
}