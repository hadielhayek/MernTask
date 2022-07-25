const { Schema, model } = require('mongoose')

const postSchema = new Schema({

    title: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true

    },
    author: {
        type: String,
        required:true

    },
   

},)
const post = model("post", postSchema);
module.exports = post;
