import { Schema, Document, model, Types, ObjectId } from "mongoose";

interface IReaction extends Document {
  reactionId: ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}
const reactionSchema = new Schema<IReaction>({
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

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: IReaction[];
  reactionCount: number;
}

const thoughtSchema = new Schema<IThought>(
  {
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
  },
  {
    toJSON: {
      virtual: true,
      getters: true,
    },
    toObject: {
      virtual: true,
      getters: true,
    },
  }
);
thoughtSchema.virtual("reactionCount").get(function (this: IThought) {
  // return reaction count of the thought or 0 if no reactions
  return this.reactions?.length || 0;
});
const Thought = model<IThought>("Thought", thoughtSchema);

export default Thought;
