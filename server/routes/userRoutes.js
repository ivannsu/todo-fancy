const router = require('express').Router();
const { signin, signup, fbSignIn, checkLogin } = require('../controllers/userController');

router.get('/checklogin', checkLogin);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/signin/fb', fbSignIn);

module.exports = router;