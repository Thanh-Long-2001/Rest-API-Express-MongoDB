const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]

});

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
});

let Course = mongoose.model('Course', courseSchema);
let Author = mongoose.model('Author', authorSchema);
module.exports = {Author, Course};