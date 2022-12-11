const { Offer } = require("../models.js/offerModel");

exports.PostNewOffer = ( data ) => Offer.create( data );

exports.GetOffersOnSpecificDay = ( date ) => {
    
  return Offer.find({}).where({ fromDate: { $lte: date},  untilDate: { $gte: date }})  
}

exports.GetOfferById = ( id ) => Offer.findById( id ).populate('creator', ['_id','name']);

//Todo
exports.PutUserToWatchedList = ( offerId, userId ) => 
  Offer.updateOne( 
    { "_id": offerId, "watchedList": { "$ne": userId }}, 
    { "$push": { watchedList: { "_id": userId } } } 
  );

exports.DeleteData = async( offerId, _id ) => 
  await Offer.findOneAndDelete( { _id: offerId } );

exports.UpdateOffer = ( formData, userId ) => 
  Offer.findOneAndUpdate( { _id: formData._id, creator: userId }, formData );

exports.GetOfferUsers = ( offerId ) => 
  Offer.findById( offerId ).select(['creator', 'watchedList'])
  .populate('creator', ['_id'])
  .populate('watchedList', ['_id']);

exports.RemoveUserFromWatchedList = async ( offerId, _id ) => {
  await Offer.findByIdAndUpdate( offerId, { $pull: { watchedList: { $in: [ _id ] } } })
}