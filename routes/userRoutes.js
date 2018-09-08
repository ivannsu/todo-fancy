const router = require('express').Router();
const { signup } = require('../controllers/userController');

// router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;