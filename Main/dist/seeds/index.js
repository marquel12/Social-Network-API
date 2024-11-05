import db from '../config/connection.js';
import { Users, Thoughts } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { userData, thoughtData } from './data.js';
export const seedDatabase = async () => {
    try {
        await db();
        // clear existing data
        await cleanDB();
        // insert seed data
        const createdUsers = await Users.insertMany(userData);
        console.log('Created users:', createdUsers);
        const createdThoughts = await Thoughts.insertMany(thoughtData);
        console.log('Created thoughts:', createdThoughts);
        console.log('Data seeded successfully!');
        if (!createdThoughts) {
            console.log('No thoughts created!');
            process.exit(1);
        }
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1); // exits the process
    }
};
