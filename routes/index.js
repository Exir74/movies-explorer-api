const router = require('express').Router();
const userRouter = require('./userRoutes');
const movieRouter = require('./movieRoutes');
const notFoundErrorHandler = require('../errors/notFoundErrorHandler');
const { createUser, login, logout } = require('../controllers/userControls');
const auth = require('../middlewares/auth');
const { userValidation } = require('../middlewares/userValidator');

router.post('/signin', userValidation, login);
router.post('/signup', userValidation, createUser);

router.use(auth);

router.use(userRouter);
router.use(movieRouter);
router.get('/signout', logout);
router.use(notFoundErrorHandler);

module.exports = router;
