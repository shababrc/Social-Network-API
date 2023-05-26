const { Thought, Application } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  
  // Update a thought 
  updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {$set: req.body}, {new: true}
        )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(thought)
      )
  },
  
  // Delete a thought and associated apps
  deleteThought(req, res) {
    Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
        {$delete: req.body}, {new: true})
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(thought)
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
  },

    // Create a reaction for a thought
    addReaction(req, res) {
        const { thoughtId } = req.params;
        const { reactionId } = req.body;
    
        Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: reactionId } },
          { new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json({ message: 'Reaction created!' })
          )
          .catch((err) => res.status(500).json(err));
      },
    
      // Delete a reaction from a thought
      removeReaction(req, res) {
        const { thoughtId, reactionId } = req.params;
    
        Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $pull: { reactions: reactionId } }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json({ message: 'Reaction deleted!' })
          )
          .catch((err) => res.status(500).json(err));
      }
};