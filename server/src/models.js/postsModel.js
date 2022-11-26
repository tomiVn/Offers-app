const { Schema, model, default: mongoose } = require('mongoose');

const postModel = new Schema({

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

        creator: {
           type: mongoose.Types.ObjectId,
            ref: 'User'
        },

          likes: [{
           type: mongoose.Types.ObjectId,
            ref: 'User'
        }]
});

postModel.pre( ['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'], function ( next ) {

      const data = this.getUpdate();  
});

postModel.set('timestamps', true);//To have 

exports.Post = model('Post', postModel);