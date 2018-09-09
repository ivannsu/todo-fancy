const router = require('express').Router();
const { findByUser, create, update, remove } = require('../controllers/todoController');

router.get('/', findByUser);
router.post('/', create);
router.put('/:todoId', update);
router.delete('/:todoId', remove);

module.exports = router;