const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

// the api/thought endpoint

// get all thoughts
router.route("/").get(getAllThought).post(createThought);

// get, put, delete thought by id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// add a reaction by id
router.route("/:thoughtId/reactions").post(addReaction);

// remove reaction by id
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;