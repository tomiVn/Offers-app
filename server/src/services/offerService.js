const { Offer } = require("../models.js/offerModel");


exports.createOffer = ( data ) => Offer.create( data );