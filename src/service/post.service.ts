import { FilterQuery, ObjectId, QueryOptions } from 'mongoose';
import PostModel, { IPost, IPostDocument } from '../models/post.model';

export async function createPost(
  input: IPost
): Promise<IPostDocument & { _id: ObjectId }> {
  const newProduct = new PostModel({ ...input });
  return newProduct.save();
}

export async function getPosts(): Promise<
  (IPostDocument & { _id: ObjectId })[]
> {
  return PostModel.find().limit(100);
}

export async function getPostById(id: string) {
  return PostModel.findById(id);
}

export async function deletePostById(id: string) {
  return PostModel.deleteOne({ _id: id });
}

export async function updatePostById(
  id: string,
  query: FilterQuery<IPostDocument>,
  options: QueryOptions
) {
  return PostModel.findByIdAndUpdate({ _id: id }, query, options);
}
