const authorController = require('../controllers/AuthorController')

const router = require('express').Router()

router.post('/', authorController.addAuthor);
router.get('/', authorController.getAllAuthor);
router.get('/:id', authorController.getAnAuthor);
router.put('/:id', authorController.updateAnAuthor);
router.delete('/:id', authorController.deleteAnAuthor);

module.exports = router;