import { ObjectId } from 'mongodb';
const userData = [{
        id: new ObjectId(),
        username: 'dreamTech1',
        email: 'dreamtech@gmail.com',
        thoughts: [],
        friends: [],
        createdAt: new Date()
    },
    {
        id: new ObjectId(),
        username: 'bigDreams12',
        email: 'bigdreamsintech@gmail.com',
        thoughts: [],
        friends: [],
        createdAt: new Date()
    },
    {
        id: new ObjectId(),
        username: 'marktech',
        email: 'markintech@gmail.com',
        thoughts: [],
        friends: [],
        createdAt: new Date()
    },
    {
        id: new ObjectId(),
        username: 'saraloves',
        email: 'sarah@gmail.com',
        thoughts: [],
        friends: [],
        createdAt: new Date()
    },
    {
        id: new ObjectId(),
        username: 'thetechguy',
        email: 'steven12@gmail.com',
        thoughts: [],
        friends: [],
        createdAt: new Date()
    },
];
const thoughtData = [{
        id: new ObjectId(),
        thoughtText: 'I love coding',
        username: 'dreamTech1',
        createdAt: new Date(),
        reactions: []
    },
    {
        id: new ObjectId(),
        thoughtText: 'new tech is amazing',
        username: 'bigDreams12',
        createdAt: new Date(),
        reactions: []
    },
    {
        id: new ObjectId(),
        thoughtText: 'I am learning a lot about coding',
        username: 'marktech',
        createdAt: new Date(),
        reactions: []
    },
    {
        id: new ObjectId(),
        thoughtText: 'I am a tech specialist',
        username: 'saraloves',
        createdAt: new Date(),
        reactions: []
    },
    {
        id: new ObjectId(),
        thoughtText: 'I am a tech guy who loves coding',
        username: 'thetechguy',
        createdAt: new Date(),
        reactions: []
    },
];
// get a random item given an array
export const getRandom = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};
// get a random user
export const getRandomUser = () => getRandom(userData); //this function will return a random user from the userData array of object to 
// add random friends to a user
export const addRandomFriends = (user, numFriends) => {
    for (let i = 0; i < numFriends; i++) {
        const randomUser = getRandomUser();
        if (randomUser._id !== user._id && !user.friends.includes(randomUser._id)) { //if the random user is not the same as the user and the user does not already have the random user as a friend
            user.friends.push(randomUser._id); //add the random user to the user's friends array
        }
    }
    // return the updated user object
    return user;
};
console.table(userData);
console.table(thoughtData);
export { userData, thoughtData, };
