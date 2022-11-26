const { Post } = require("../models.js/postsModel");

exports.createPost = ( data ) => Post.create( data )