// Post model using mongoose is here
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

module.exports = mongoose.model('Post', postSchema); //name must be in uppercase the first letter!

// What we are exporting is a constructor function which allows us to instantiate objects