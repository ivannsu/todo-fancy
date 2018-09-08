const router = require('express').Router();
const { signin, signup, checkLogin } = require('../controllers/userController');

router.get('/checklogin', checkLogin);
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;