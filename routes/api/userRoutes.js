const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend

} = require('../../controllers/userController');

// // /api/users get all user
// router.route('/').get(getUsers);

// /api/users post a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId get a single user by it's id
router.route('/:userId').get(getSingleUser);

// /api/users/:userId update a single user by it's id
router.route('/:userId').put(updateUser);

// /api/users/:userId/ deletes a user by it's id
router.route('/:userId').delete(deleteUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends').delete(removeFriend);

module.exports = router;