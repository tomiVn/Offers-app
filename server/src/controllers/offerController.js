const router = require('express').Router();
const {  userOnly } = require('../middlewear/guards');
const cloudinary = require("../config/cloudinary-configuration");
const multer = require("../config/multer-configuration");
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const { OFFER_PATH } = require('../config/constants');
const { createOffer } = require('../services/offerService');
const { updateProfile } = require('../services/authService');

const uploadFile = multer.single('file');

router.post( OFFER_PATH, userOnly, trimForm, async (req, res) => {

    uploadFile(req, res, async (error) => {
        if (error) {
            
            return res.status(400).json({ message: error.message });
        }
       console.log(req.body);
       
        try {
            const userId = req.user.id;
            const upload = await cloudinary.uploader.upload(req.file.path, { folder: userId });
                      
            let newOffer = await createOffer({
                ...req.body, image: upload.url, creator: userId
            });
          
            await updateProfile( userId, { "$push": { createdOffers: { "_id": newOffer._id } } });

            return res.status(201).json({ message: 'Successfully created' });

        } catch (err) {
            const errors = parseErrors(err);
            return res.status(400).json({ message: errors });
        }
    })
})

module.exports = router;