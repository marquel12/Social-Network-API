import db from '../config/connection.js';
import { Users, Thoughts } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { userData, thoughtData} from './data.js';
import mongoose from 'mongoose';



export const seedDatabase = async () => {
  try {
      await db();
      // clear existing data
      await cleanDB();

      // insert seed data
      const createdUsers = await Users.insertMany(userData);
      console.log('Created users:', createdUsers);

      const createdThoughts = await Thoughts.insertMany(thoughtData);
      console.log('Created thoughts:', createdThoughts, );

      console.log('Data seeded successfully!');
       // update users with their associated thoughts
       for (let user of createdUsers) {
        const userThoughts = createdThoughts.filter(thought => thought.username === user.username);
        await Users.findByIdAndUpdate(user._id, { $set: { thoughts: userThoughts.map(th => th._id) } });
    }

    // update users with their associated friends 
    for (let user of createdUsers) {
        const userFriends = createdUsers.filter(friend => friend.username !== user.username);
        await Users.findByIdAndUpdate
        (user._id, { $set: { friends: userFriends.map(friend => friend._id) } });
    }
    
    console.log('Users updated with their thoughts!');

    // log the updated users with thoughts
    const users = await Users.find();
    const thoughts = await Thoughts.find();
    console.log('Updated users:', users);
    console.log('Thoughts:', thoughts);
} catch (err) {
    console.error(err);
} finally {
    mongoose.connection.close();
};

}

seedDatabase();

     
