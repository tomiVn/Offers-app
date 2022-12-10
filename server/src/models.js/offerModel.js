const { Schema, model, default: mongoose } = require('mongoose');

const offerModel = new Schema({

            title: {
            type: String, 
        required: [ true, 'Title is Required!'],
       minLength: [ 3, 'Title min length 3 characters!']
    },

           image: {
            type: String, 
         default: 'https://res.cloudinary.com/duyubdgsj/image/upload/v1670590742/assets/no-image-available_hga1ag.jpg',
    },

     description: { 
            type: String
    },

     contactInfo: {
            type: String,
    //     required: [ true, 'Contact information is required'],
    //    minLength: [ 6, 'Contact information must be min 6 characters!']
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

    watchedList: [{
           type: mongoose.Types.ObjectId,
            ref: 'User'
    }]

});

// offerModel.pre( ['save','updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'], function ( next ) {

//       if(this.fromDate){
//         this.fromDate.setHours(1);
//         next();
//       }
//       next();
// });

offerModel.set('timestamps', true);//To have 

exports.Offer = model('Offer', offerModel);