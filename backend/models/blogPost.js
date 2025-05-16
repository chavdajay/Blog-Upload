const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // ✅ Use `default: Date.now` (don't call it)
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Blog', blogSchema);
