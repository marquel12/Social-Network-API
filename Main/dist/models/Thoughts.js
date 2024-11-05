import { Schema, model, Types } from "mongoose";
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtual: true,
        getters: true,
    },
    toObject: {
        virtual: true,
        getters: true,
    },
});
thoughtSchema.virtual("reactionCount").get(function () {
    // return reaction count of the thought or 0 if no reactions
    return this.reactions?.length || 0;
});
const Thought = model("Thought", thoughtSchema);
export default Thought;
