const router = require('express').Router();
const { create } = require('../controllers/todoController');

router.post('/', create);

module.exports = router;