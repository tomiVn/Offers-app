const { AUTH_PATH } = require('../config/constants');
const { guestOnly, userOnly } = require('../middlewear/guards');
const { createToken, loginService, registerUserService, getUser, updateProfile } = require('../services/authService');
const { parseErrors } = require('../utils/parseErrors');

const router = require('express').Router();

router.post( AUTH_PATH, guestOnly, async (req, res) => {

    try {
        let { _id, name, role } = await registerUserService(req.body);

        res.status(201).json(userInfo(_id, name, role));

    } catch (error) {

        const errors = parseErrors(error);

        res.status(400).json({ message: errors });
    }

})

    .post( AUTH_PATH + '/login', guestOnly, async (req, res) => {

        try {
            let { _id, name, role } = await loginService(req.body);

            res.status(200).json(userInfo(_id, name, role));

        } catch (error) {

            const errors = parseErrors(error);
             
            res.status(400).json(errors);
        }

    })

    .get( AUTH_PATH, userOnly, async (req, res) => {

        try {
            let userId = req?.user?.id;

            let user = await getUser(userId);

            return res.status(200).json( user );

        } catch (error) {

            const errors = parseErrors(error);

            res.status(400).json({ message: errors });
        }

    })

    .put( AUTH_PATH, userOnly, async (req, res) => {

        try {
            let userId = req?.user?.id;
            let data = req.body;
            
            let user = await updateProfile(userId, data);
            return res.status( 201 ).json( { user });

        }catch( error ){

            let errors = parseErrors( error );
            return res.status( 400 ).json( { message: errors.message });
        }
        
    })


module.exports = router;

function userInfo(id, name, role) {

    return {
        accessToken: createToken(id, name, role)
    }
}