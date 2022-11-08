const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const emailValidator = require("email-validator");
const { SAULT_ROUNDS } = require('../config/constants');

const uModel = new Schema({

            name: {
            type: String, 
        required: [ true, 'Name is Required!']
    },

           email: {
            type: String, 
        required: [ true, 'Email is Required!'], 
          unique: true,
        validate: { validator: emailValidator.validate, message: 'Email is not valid!' }
    },

        password: { type: String, minLength: [4, 'Password min length 4!'] },
            role: { type: String, enum: ['user', 'admin'], default : 'user',  message: 'Not valid role'},
        dialCode: { type: String, require: [true, 'Countrie code is required'] },
           phone: { type: String, required: [ true, 'Phone number is required'] }
});

uModel.virtual('repeatPass')
    .get(function () {
        return this._repeatPass;
    })
    .set(function (value) {
        this._repeatPass = value;
    });

uModel.pre('validate', function (next) {
    if (this.password !== this.repeatPass) {
        this.invalidate('repeatPass', 'Passwords not match!');
    }
    next();
});

uModel.pre('save', function (next) {

    bcrypt.hash(this.password, SAULT_ROUNDS)
        .then(result => {
            this.password = result
            next();
        });
});

uModel.pre( ['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'], function ( next ) {

      const data = this.getUpdate();
      
      if(data.password !== data.repeatPass){

        this.invalidate('repeatPass', 'Passwords not match!');

        next();
      }  
      
      bcrypt.hash(data.password, SAULT_ROUNDS)
        .then(result => {
            data.password = result;
            
            next();
        });
        
});

uModel.index({ email: 1 }, { collation: { locale: 'en', strength: 2 } });

uModel.method('validatePassword', function (password) {

    return bcrypt.compare(password, this.password);
});

uModel.set('timestamps', true);//To have 

exports.User = model('User', uModel);
