const router = require("express").Router();
const {getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend} = require("../../controllers/user-controller");

// the api/user endpoint

// get all users
router.route("/").get(getAllUsers).post(createUser);

// get users by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// create friends by id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;