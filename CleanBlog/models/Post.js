const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create model
const postSchema = new Schema({
    title : String,
    detail : String,
    dateCreated : {
        type : Date,
        default : Date.now
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;