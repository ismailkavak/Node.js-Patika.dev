const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create model
const postSchema = new Schema({
    post : String,
    description : String,
    dateCreated : {
        type : Date,
        default : Date.now
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;