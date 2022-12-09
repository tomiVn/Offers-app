const router = require('express').Router();
const {  userOnly } = require('../middlewear/guards');
const cloudinary = require("../config/cloudinary-configuration");
const multer = require("../config/multer-configuration");
const { parseErrors } = require('../utils/parseErrors');
const { trimForm } = require('../utils/trimForm');
const { OFFER_PATH } = require('../config/constants');
const { PostNewOffer, GetOffersOnSpecificDay, GetOfferById, PutUserToWatchedList, DeleteData } = require('../services/offerService');
const { PutNewOffer, UpdateWatchList } = require('../services/userService');

const uploadFile = multer.single('file');

router.post( OFFER_PATH, userOnly, trimForm, async (req, res) => {

    uploadFile(req, res, async (error) => {
        if (error) {
            
            return res.status(400).json({ message: error.message });
        }
       
        try {
            const userId = req.user.id;
            const upload = await cloudinary.uploader.upload(req.file.path, { folder: userId });
                            
            let newOffer = await PostNewOffer({
                ...req.body, image: upload.url, creator: userId
            });
            console.log(newOffer);
            await PutNewOffer( userId, newOffer._id );


            return res.status(201).json({ _id: newOffer._id });

        } catch (err) {
            console.log(err);
            
            const errors = parseErrors(err);
            return res.status(400).json({ message: errors });
        }
    })
})

.get( OFFER_PATH, async( req, res) => {

   try{
    
    let data = await GetData( req.query );
    
    return res.status(200).json( data );

   }catch( error ){

   }    
})

.delete( OFFER_PATH, async( req, res) => {

    try{
     
     await DeleteData( req.query.offerId, req.user._id );
     
     return res.status(200).json( {message: 'Successfully deleted offer.'} );
 
    }catch( error ){
 
    }    
 })

.put( OFFER_PATH + '/watch-list', userOnly, trimForm, async(req, res) => {
        
    try {
        let userId = req?.user?.id;
                         
        await UpdateWatchList( userId, req.body.offerId );
        await PutUserToWatchedList( req.body.offerId, userId);
           
        return res.status( 201 ).json( { message: 'Offer is in your list' } );

    }catch( error ){
        console.log(error);
        
        let errors = parseErrors( error );
        return res.status( 400 ).json( { message: errors.message });
    }
})

module.exports = router;

function GetData( query ) {

    if(query.date){
        return GetOffersOnSpecificDay(new Date( query.date ) );
    }else if( query.offerId ){
        return GetOfferById( query.offerId )
    }
}