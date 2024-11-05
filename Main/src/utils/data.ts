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

   




   


    console.table(userData);
    console.table(thoughtData);
  

 

  
 
  








export { userData, thoughtData,  };