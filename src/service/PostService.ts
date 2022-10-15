import { FilterQuery, ObjectId, QueryOptions } from 'mongoose';
import PostModel, { IPost, IPostDocument } from '../models/post.model';

class PostService {
  async createPost(input: IPost): Promise<IPostDocument & { _id: ObjectId }> {
    const newProduct = new PostModel({ ...input });
    return newProduct.save();
  }

  async getPosts(): Promise<(IPostDocument & { _id: ObjectId })[]> {
    return PostModel.find().limit(100);
  }

  async getPostById(id: string) {
    return PostModel.findById(id);
  }

  async updatePostById(
    id: string,
    query: FilterQuery<IPostDocument>,
    options: QueryOptions
  ) {
    return PostModel.findByIdAndUpdate({ _id: id }, query, options);
  }

  async deletePostById(id: string) {
    return PostModel.deleteOne({ _id: id });
  }
}

export default PostService;
