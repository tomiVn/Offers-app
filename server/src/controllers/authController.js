const router = require('express').Router();
const { AUTH_PATH } = require('../config/constants');
const { guestOnly, userOnly } = require('../middlewear/guards');
const { createToken, LoginService, RegisterUserService,  } = require('../services/authService');
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');

router.post( AUTH_PATH, trimForm, guestOnly, async (req, res) => {
   
    try {
        let { _id, name, role } = await RegisterUserService(req.body);

        return res.status(201).json(userInfo(_id, name, role));

    } catch (error) {

        const errors = parseErrors(error);
        
        return res.status(400).json({ message: errors });
    }

    })

    .post( AUTH_PATH + '/login', trimForm, guestOnly, async (req, res) => {

        try {
            let { _id, name, role } = await LoginService(req.body);

            return res.status(200).json( userInfo(_id, name, role));

        } catch (error) {

            const errors = parseErrors(error);
             
            return  res.status(400).json(errors);
        }

    })

    .get( AUTH_PATH + '/logout', userOnly, async (req, res) => {

        try {

            return res.status(200).json({name: req.user.name});

        } catch (error) {

            const errors = parseErrors(error);
             
            return res.status(400).json(errors);
        }

    })

module.exports = router;

function userInfo(id, name, role) {

    return {
        accessToken: createToken(id, name, role)
    }
}