const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts post a new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId get a single thought by it's id
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId update a single thought by it's id
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId/ deletes a thought by it's id
router.route('/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions add reaction to a single thought by it's id
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions remove reaction to a single thought by it's id
router.route('/:thoughtId/reactions/').delete(removeReaction);

module.exports = router;