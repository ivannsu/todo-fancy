const router = require('express').Router();
const { findAll, create } = require('../controllers/todoController');

router.get('/', findAll);
router.post('/', create);

module.exports = router;