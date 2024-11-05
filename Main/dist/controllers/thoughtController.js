import Thought from '../models/Thoughts.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find().populate('reactions');
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId }).populate('reactions')
            .select('-__v');
        if (!thought) {
            res.status(404).json({ message: 'No thought with that ID' });
        }
        else {
            res.json(thought);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// create a new thought
export const createThought = async (req, res) => {
    try {
        const dbThoughtData = await Thought.create(req.body);
        res.json(dbThoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// update a thought by id
export const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought with this ID!' });
            return; // exit the function
        }
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a thought by id
export const deleteThought = async (req, res) => {
    try {
        const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!deletedThought) {
            res.status(404).json({ message: 'No thought with this ID!' });
            return;
        }
        res.json(deletedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// add a reaction to a thought
export const addReaction = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought with this ID!' });
            return;
        }
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a reaction from a thought
export const deleteReaction = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, //find the thought by its id
        { $pull: { reactions: { reactionId: req.params.reactionId } } }, //delete the reaction by its id
        { runValidators: true, new: true } //return the updated thought
        );
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought with this ID!' });
            return;
        }
        res.json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
