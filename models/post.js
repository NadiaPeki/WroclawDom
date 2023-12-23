const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId, // Используем ObjectId
        auto: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    imageUrl: [{
        type: String,
        required: true,
    }],
    text: {
        type: String,
        required: true,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
