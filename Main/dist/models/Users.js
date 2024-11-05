import { Schema, model } from 'mongoose';
const userSchema = new Schema({
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
    thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
}, {
    toJSON: {
        virtual: true,
        getters: true //getters allow us to transform the data before it gets to the controller
    },
    id: false // 
});
// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length || 0;
});
const User = model('User', userSchema);
export default User;
