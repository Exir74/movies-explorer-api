const router = require('express').Router();
const { getCurrentUser, updateUserInfo } = require('../controllers/userControls');
const { updateUserInfoValidation } = require('../middlewares/userValidator');

router.get('/users/me', getCurrentUser);
router.patch('/users/me', updateUserInfoValidation, updateUserInfo);

module.exports = router;
