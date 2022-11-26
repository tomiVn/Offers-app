const { AUTH_PATH } = require('../config/constants');
const { guestOnly, userOnly } = require('../middlewear/guards');
const { createToken, loginService, registerUserService, getUser, updateProfile } = require('../services/authService');
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const cloudinary = require("../config/cloudinary-configuration");

const multer = require("../config/multer-configuration");

const uploadFile = multer.single('file');

const router = require('express').Router();

router.post( AUTH_PATH, trimForm, guestOnly, async (req, res) => {
   
    try {
        let { _id, name, role } = await registerUserService(req.body);

        return res.status(201).json(userInfo(_id, name, role));

    } catch (error) {

        const errors = parseErrors(error);
        
        return res.status(400).json({ message: errors });
    }

})

    .post( AUTH_PATH + '/login', trimForm, guestOnly, async (req, res) => {

        try {
            let { _id, name, role } = await loginService(req.body);

            return res.status(200).json( userInfo(_id, name, role));

        } catch (error) {

            const errors = parseErrors(error);
             
            return  res.status(400).json(errors);
        }

    })

    .get( AUTH_PATH, userOnly, async (req, res) => {

        try {
            let userId = req?.user?.id;

            let user = await getUser(userId);
            
            return res.status(200).json( user );

        } catch (error) {

            const errors = parseErrors(error);

            return res.status(400).json({ message: errors });
        }

    })

    .put( AUTH_PATH, userOnly, trimForm, async(req, res) => {

        try {
            let userId = req?.user?.id;
                             
            let user = await updateProfile(userId, req.body);
               
            return res.status( 201 ).json( { _id: user.id, name: user.name } );

        }catch( error ){
            
            let errors = parseErrors( error );
            return res.status( 400 ).json( { message: errors.message });
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