import mongoose from 'mongoose';

export interface IPost {
  text: string;
  votes?: number;
  dateCreated: Date;
  dateUpdated: Date;
}

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    votes: { type: Number },
  },
  { timestamps: true }
);

const PostModel = mongoose.model<IPost>('Post', postSchema);

export default PostModel;
