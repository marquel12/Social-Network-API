import User from '../models/Users.js';
import { Request, Response } from 'express';

  export const getUsers = async(_req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const getSingleUser = async(req: Request, res: Response) => {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
         res.status(404).json({ message: 'No user with that ID' });
      } else {
        res.json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // create a new user
  export const createUser = async(req: Request, res: Response) => {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

    // update a user by id
    export const updateUserById = async(req: Request, res: Response) => {
      try {
        const updatedUser = await User.findOneAndUpdate( { _id: req
            .params.userId  }, req.body , { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'No user with this ID!' });
            return;
            }
        res.json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // delete a user by id
    export const deleteUserById = async(req: Request, res: Response) => {
      try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
        if (!deletedUser) {
          res.status(404).json({ message: 'No user with this ID!' });
          return;
        }
        res.json(deletedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    }

    // add a new friend to a user's friend list
    export const addNewFriend = async(req: Request, res: Response) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
            );
        if (!updatedUser) {
            res.status(404).json({message:'Friend not added'})
            return;
        }
        res.json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    // delete a friend from a user's friend list
    export const deleteFriend = async(req: Request, res: Response) => {
      try {
        const updateUser = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
            );
        if (!updateUser) {
            res.status(404).json({message:'Friend not deleted'})
            return;
        }
        res.json(updateUser);
        }
        catch (err) {
            res.status(500).json(err);
        }   
    }
    
    

      