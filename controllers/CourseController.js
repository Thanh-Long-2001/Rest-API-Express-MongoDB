const {Course, Author} = require('../models/model');

const courseController = {
    // Add a new course
    addACourse: async (req, res) => {
        try {
            const newCourse = new Course(req.body)
            const savedCourse = await newCourse.save();
            if(req.body.author) {
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {courses: savedCourse._id}});
            }
            res.status(200).json(savedCourse);
        } catch (err) {
            console.error(err);
        }
    },
    // Get all courses
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.find()
            res.status(200).json(courses);
        } catch (err) {
            console.error(err);
        }
    },

    //Get A course
    getACourse: async (req, res) => {
        try {
            const course = await Course.findById(req.params.id).populate("author");
            res.status(200).json(course);
        } catch (error) {
            console.error(error);
        }
    },

    // Update a course
    updateACourse: async (req, res) => {
        try {
            const course = await Course.findById(req.params.id)
            await course.updateOne({ $set: req.body})
            res.status(200).json('Update Successfully');
        } catch (error) {
            console.error(error);
        }
    },

    // Delete a course
    deleteACourse: async (req, res) => {
        try {
            await Author.updateMany({courses: req.params.id}, {$pull: {courses: req.params.id}});
            await Course.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully');
        } catch (error) {
            console.error(error);
        }
    }
};

module.exports = courseController;
