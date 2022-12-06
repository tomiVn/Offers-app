const { Offer } = require("../models.js/offerModel");


exports.PostNewOffer = ( data ) => Offer.create( data );

exports.GetOffersOnSpecificDay = ( date ) => {
    
  return Offer.find( {} ).where( 
        { fromDate: { $gte: date } }, 
        { untilDate: { $lte: date} } 
    );   
}