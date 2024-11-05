import { Schema, model, type Document } from 'mongoose';

interface IUser extends Document {
   username: string;
    email: string;
    thoughts: string[];
    friends:string[];
}

const userSchema = new Schema<IUser>(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts:[{
        type:Schema.Types.ObjectId,
        ref: 'Thought'
        },
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON:{
        virtual:true,
        getters:true //getters allow us to transform the data before it gets to the controller
    },
    
        id: false // 
    
}

);
// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function() {
    return this.friends.length || 0;
});

const User = model<IUser>('User', userSchema);


export default User;