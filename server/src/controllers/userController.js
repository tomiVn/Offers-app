const router = require('express').Router();
const { AUTH_PATH } = require('../config/constants');
const { userOnly } = require('../middlewear/guards');
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const cloudinary = require("../config/cloudinary-configuration");
const multer = require("../config/multer-configuration");
const { GetUser, UpdateProfile, UpdateWatchList } = require('../services/userService');
const { PutUserToWatchedList } = require('../services/offerService');

const uploadFile = multer.single('file');

router.get( AUTH_PATH, userOnly, async (req, res) => {
   
    try {
        let userId = req?.user?.id;

        let user = await GetUser( userId );
        
        return res.status(200).json( user );

    } catch (error) {
       
        const errors = parseErrors(error);

        return res.status(400).json({ message: errors });
    }

})

.put( AUTH_PATH, userOnly, trimForm, async(req, res) => {
    
    try {
        let userId = req?.user?.id;
                         
        let user = await UpdateProfile( userId, req.body );
           
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

// .put( AUTH_PATH + '/watch-list', userOnly, trimForm, async(req, res) => {
        
//     try {
//         let userId = req?.user?.id;
                         
//         await UpdateWatchList( userId, req.body.offerId );
//         await PutUserToWatchedList( req.body.offerId, userId);
           
//         return res.status( 201 ).json( { message: 'Offer is in your list' } );

//     }catch( error ){
//         console.log(error);
        
//         let errors = parseErrors( error );
//         return res.status( 400 ).json( { message: errors.message });
//     }
// })

module.exports = router;