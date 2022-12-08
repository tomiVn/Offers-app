const { User } = require("../models.js/userModel");
const jwt = require('jsonwebtoken');

exports.RegisterUserService = ( data ) => { return User.create(data) };

exports.LoginService = async ( data ) => {

    let user = await User.findOne({ email: data.email }).select(['_id', 'name', 'password', 'role']);

    let isMatch = await user?.validatePassword(data.password);

    if (isMatch) {

        return user;
    }

    throw { message: 'Invalid @email or password!' }
};

exports.createToken = ( id, name, role ) => {

    const PAYLOAD = { id, name, role };

    const TOKEN_EXP = { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME };

    return jwt.sign(PAYLOAD, process.env.SECRET_KEY, TOKEN_EXP);
} 
