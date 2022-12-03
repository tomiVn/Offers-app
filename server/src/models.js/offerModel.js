const { Schema, model, default: mongoose } = require('mongoose');

const offerModel = new Schema({

            title: {
            type: String, 
        required: [ true, 'Title is Required!'],
       minLength: [ 3, 'Title min length 3 characters!']
    },

           image: {
            type: String, 
    },

     description: { 
            type: String
    },

           price: { 
            type: Number,
             min: [0, 'Minimal price 0!']
    },

        fromDate: { 
            type: Date,
         
    },

        untilDate: { 
            type: Date,        
    },

        creator: {
           type: mongoose.Types.ObjectId,
            ref: 'User'
    },

          likes: [{
           type: mongoose.Types.ObjectId,
            ref: 'User'
        }]
});

offerModel.pre( ['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'], function ( next ) {

      const data = this.getUpdate();  
});

offerModel.set('timestamps', true);//To have 

exports.Offer = model('Offer', offerModel);