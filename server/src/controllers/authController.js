const { AUTH_PATH } = require('../config/constants');
const { guestOnly, userOnly } = require('../middlewear/guards');
const { createToken, LoginService, RegisterUserService, GetUser, UpdateProfile } = require('../services/authService');
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const cloudinary = require("../config/cloudinary-configuration");

const multer = require("../config/multer-configuration");

const uploadFile = multer.single('file');

const router = require('express').Router();

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

    .get( AUTH_PATH, userOnly, async (req, res) => {

        try {
            let userId = req?.user?.id;

            let user = await GetUser(userId);
            
            return res.status(200).json( user );

        } catch (error) {

            const errors = parseErrors(error);

            return res.status(400).json({ message: errors });
        }

    })

    .put( AUTH_PATH, userOnly, trimForm, async(req, res) => {

        try {
            let userId = req?.user?.id;
                             
            let user = await UpdateProfile(userId, req.body);
               
            return res.status( 201 ).json( { _id: user.id, name: user.name } );

        }catch( error ){
            
            let errors = parseErrors( error );
            return res.status( 400 ).json( { message: errors.message });
        }
    })

    .put( AUTH_PATH + '/avatar', userOnly, trimForm, async(req, res) => {

        uploadFile(req, res, async (error) => {

            if (error) {
                
                return res.status(400).json({ message: error.message });
            }
    
            try {
                let userId = req?.user?.id;

                const upload = await cloudinary.uploader.upload(req.file.path, { folder: req.user.id });
                                            
                let user = await UpdateProfile(userId, {avatar: upload.url});
    
                return res.status(201).json( user.avatar );
    
            } catch (err) {
                const errors = parseErrors(err);
                return res.status(400).json({ message: errors });
            }
        })
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