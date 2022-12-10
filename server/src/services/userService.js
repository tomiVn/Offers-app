const { User } = require("../models.js/userModel");

exports.GetUser = ( userId ) => User.findById( userId )
.select( ['_id', 'avatar', 'name', 'gender', 'born', 
          'email', 'dialCode', 'phone', 'updatedAt', 'createdOffers', 'watchOfferList'] )
          .populate(['createdOffers', 'watchOfferList']);

exports.UpdateProfile = async ( userId, data ) => { 
    return await User.findByIdAndUpdate( userId , data, { runValidators: true }) 
};

exports.PushNewOfferToUserCreatedList = async ( userId, offerId ) => { 
    return await User.updateOne( { "_id": userId}, { "$push": { createdOffers: { "_id": offerId } } }) 
};

exports.PutNewOfferToUserWatchList = async ( userId, offerId ) => { 
    return await User.updateOne( { "_id": userId}, { "$push": { createdOffers: { "_id": offerId } } }) 
};

exports.UpdateWatchList = async ( userId, offerId) => {
    return await User.updateOne( { "_id": userId, "watchOfferList": { "$ne": offerId }}, { "$push": { watchOfferList: { "_id": offerId } } }) 
}

exports.RemoveOfferFromUserWatchList = async( usersListArray, _id) => {

    for(let userId of usersListArray){
        await  User.findByIdAndUpdate( userId._id.toString() , 
            { $pull: { watchOfferList: { $in: [ _id ] } } })
    }
}

exports.RemoveOfferFromUserCreator = async ( userId, _id ) => {
    await  User.findByIdAndUpdate( userId , 
        { $pull: { createdOffers: { $in: [ _id ] } } })
}