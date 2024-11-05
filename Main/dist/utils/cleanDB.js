import { Thoughts, Users } from '../models/index.js';
const cleanDB = async () => {
    try {
        await Users.deleteMany({});
        console.log('Users collection cleaned.');
        await Thoughts.deleteMany({});
        console.log('Thoughts collection cleaned.');
    }
    catch (err) {
        console.error('Error cleaning collections:', err);
        process.exit(1);
    }
};
export default cleanDB;
