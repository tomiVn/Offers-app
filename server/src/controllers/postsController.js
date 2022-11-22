const router = require('express').Router();
const { guestOnly, userOnly } = require('../middlewear/guards');
const cloudinary = require("../config/cloudinary-configuration");
const multer = require("../config/multer-configuration");
const { parseErrors } = require('../utils/parseErrors');

const uploadFile = multer.single('file');

router.post('/posts', userOnly, async (req, res) => {

    uploadFile(req, res, async (error) => {

        if (error) {
            
            return res.status(400).json({ message: error.message });
        }

        try {

            const upload = await cloudinary.uploader.upload(req.file.path, { folder: 'assets' });
            return res.status(201).json({ message: 'Successfully created' });

        } catch (err) {
            const errors = parseErrors(err);
            return res.status(400).json({ message: errors });
        }
    })
})

module.exports = router;