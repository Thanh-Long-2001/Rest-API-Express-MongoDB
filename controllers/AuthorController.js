const {Author, Course} = require('../models/model');

const authorController = {
    //Add a new author
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (err) {
            console.error(err);
        }
    },

    //Get All Author
    getAllAuthor: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (err) {
            console.error(err);
        }
    },

    //Get An Author
    getAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("courses");
            res.status(200).json(author);
        } catch (error) {
            console.error(error);
        }
    },

    //Update An Author
    updateAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id)
            await author.updateOne({ $set: req.body})
            res.status(200).json('Update Successfully');
        } catch (error) {
            console.error(error);
        }
    },

    //Delete An Author
    deleteAnAuthor: async (req, res) => {
        try {
            await Course.updateMany({author: req.params.id}, {author: null});
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully');
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = authorController;