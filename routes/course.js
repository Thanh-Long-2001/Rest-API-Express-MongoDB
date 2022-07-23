const courseController = require('../controllers/CourseController');

const router = require('express').Router();

//Add a course
router.post('/', courseController.addACourse);
//Get all courses
router.get('/', courseController.getAllCourses);
//Get a course
router.get('/:id', courseController.getACourse);
//Update a course
router.put('/:id', courseController.updateACourse);
//Delete a course
router.delete('/:id', courseController.deleteACourse);

module.exports = router;