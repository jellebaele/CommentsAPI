import { object, string, TypeOf } from 'zod';

const postPayload = {
  body: object({
    text: string({ required_error: 'Text is required' }),
  }),
};

const postParameters = {
  params: object({
    postId: string({
      required_error: 'PostId is required',
    }),
  }),
};

export const createPostSchema = object({ ...postPayload });
export const getPostSchema = object({ ...postParameters });
export const updatePostSchema = object({ ...postPayload, ...postParameters });
export const deletePostSchema = object({ ...postParameters });

export type CreatePostInput = TypeOf<typeof createPostSchema>;
export type GetPostInput = TypeOf<typeof getPostSchema>;
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>;
