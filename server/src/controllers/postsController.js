const router = require('express').Router();
const { guestOnly, userOnly } = require('../middlewear/guards');
const cloudinary = require("../config/cloudinary-configuration");
const multer = require("../config/multer-configuration");
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const { POSTS_PATH } = require('../config/constants');
const { createPost } = require('../services/postService');

const uploadFile = multer.single('file');

router.post( POSTS_PATH, userOnly, trimForm, async (req, res) => {

    uploadFile(req, res, async (error) => {
       console.log('111111111');
       
        if (error) {
            
            return res.status(400).json({ message: error.message });
        }

        try {

            const upload = await cloudinary.uploader.upload(req.file.path, { folder: req.user.id });
            
            await createPost({
                  title: req.body.title, 
                  image: upload.url,
            description: req.body.description,
                creator: req.user.id,
            });

            return res.status(201).json({ message: 'Successfully created' });

        } catch (err) {
            const errors = parseErrors(err);
            return res.status(400).json({ message: errors });
        }
    })
})

.get(POSTS_PATH, (req, res) => {
    return res.status(200).json({ message: 'sqfdgfhgeh' });
})

module.exports = router;