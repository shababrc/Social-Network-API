const { User, Application } = require('../models');

const userController = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  
  // Update a user and associated apps
  updateUser(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        {$set: req.body}, {new: true}
        )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(user)
      )
  },
  
//   Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete(
        { _id: req.params.userId },
        {$delete: req.body}, {new: true})
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(user)
      )
  },

   // Add a new friend to a user's friend list
   addFriend(req, res) {
    const { userId, friendId } = req.params;
    User.findByIdAndUpdate(userId, { $push: { friends: friendId } })
      .then(() => res.json({ message: 'Friend added successfully!' }))
      .catch((err) => res.status(500).json(err));
  },
  
  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    const { userId, friendId } = req.params;
    User.findByIdAndUpdate(userId, { $pull: { friends: friendId } })
      .then(() => res.json({ message: 'Friend removed successfully!' }))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;