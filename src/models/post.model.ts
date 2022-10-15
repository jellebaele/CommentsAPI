import mongoose from 'mongoose';

export interface IPost {
  text: string;
  votes?: number;
}

export interface IPostDocument extends IPost, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    votes: { type: Number },
  },
  { timestamps: true }
);

const PostModel = mongoose.model<IPostDocument>('Post', postSchema);

export default PostModel;
