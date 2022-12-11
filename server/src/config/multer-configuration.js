const multer = require('multer');

module.exports = multer({
    storage: multer.diskStorage({}),

    limits: {
        fileSize: 1024 * 1024 * 1
    },

    fileFilter: (req, file, cb) => {
        // check mimeType and extension names
        const fileTypes = ['image/jpeg', 'image/png'];
        const extention = file.originalname.split('.').pop().toLocaleLowerCase();
        const isValidFormat = ['jpeg', 'jpg', 'png'].some( f => f == extention);
        
        const mimeType =  fileTypes.some(t => t == file.mimetype);
        
        if (mimeType && isValidFormat) {

            cb(null, true);

        } else {

            return cb(new Error('Invalid file type'), false);
        }
    }
});