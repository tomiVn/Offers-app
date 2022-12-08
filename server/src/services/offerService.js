const { Offer } = require("../models.js/offerModel");


exports.PostNewOffer = ( data ) => Offer.create( data );

exports.GetOffersOnSpecificDay = ( date ) => {
    
  return Offer.find({}).where({ fromDate: { $lte: date},  untilDate: { $gte: date }})  
}

exports.GetOfferById = ( id ) => Offer.findById( id ).populate('creator', ['name']);

exports.PutUserToWatchedList = ( offerId, userId ) => 
  Offer.updateOne( { "_id": offerId, "watchedList": { "$ne": userId }}, { "$push": { watchedList: { "_id": userId } } } );