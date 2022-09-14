const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema ({
    username: String,
    pfp: String,
    img: String,
    description: String,
})

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;