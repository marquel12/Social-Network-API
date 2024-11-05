import User from '../models/Users.js';
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find()
            .select("-__v");
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .select("-__v");
        if (!user) {
            res.status(404).json({ message: 'No user with that ID' });
        }
        else {
            res.json(user);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// create a new user
export const createUser = async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// update a user by id
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.userId }, // find user by id
        { $set: req.body }, // update user data
        { new: true }); // return updated user data
        if (!updatedUser) {
            res.status(404).json({ message: 'No user with this ID!' });
            return;
        }
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a user by id
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
        if (!deletedUser) {
            res.status(404).json({ message: 'No user with this ID!' });
            return;
        }
        res.json(deletedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// add a new friend to a user's friend list and return the updated user data which should be friends for both users
export const addNewFriend = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'Friend not added' });
            return;
        }
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a friend from a user's friend list
export const deleteFriend = async (req, res) => {
    try {
        const updateUser = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, // remove friendId from friends array
        { new: true });
        if (!updateUser) {
            res.status(404).json({ message: 'Friend not deleted' });
            return;
        }
        res.json(updateUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
