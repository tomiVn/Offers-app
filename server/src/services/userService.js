const { User } = require("../models.js/userModel");

exports.GetUser = ( userId ) => User.findById( userId )
.select( ['_id', 'avatar', 'name', 'gender', 'born', 'email', 'dialCode', 'phone', 'updatedAt', 'posts'] );

exports.UpdateProfile = async ( userId, data ) => { 
    return await User.findByIdAndUpdate( userId , data, { runValidators: true }) 
};

exports.PutNewOfferToUserWatchList = async ( userId, offerId ) => { 
    return await User.updateOne( { "_id": userId}, { "$push": { createdOffers: { "_id": offerId } } }) 
};

exports.UpdateWatchList = async ( userId, offerId) => {
    return await User.updateOne( { "_id": userId, "watchOfferList": { "$ne": offerId }}, { "$push": { watchOfferList: { "_id": offerId } } }) 
}