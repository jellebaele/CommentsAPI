import { number, object, string, TypeOf } from 'zod';

const postPayload = {
  body: object({
    text: string({ required_error: 'Text is required' }).max(
      512,
      'The text field can only have a maximum length of 512 characters'
    ),
  }),
};

const updatePostPayload = {
  body: object({
    text: string().max(
      512,
      'The text field can only have a maximum length of 512 characters'
    ),
    votes: number(),
  })
    .partial()
    .refine(
      (data) => !!data.text || !!data.votes,
      'One or more parameters are required to update a post.'
    ),
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
export const updatePostSchema = object({
  ...updatePostPayload,
  ...postParameters,
});
export const deletePostSchema = object({ ...postParameters });

export type CreatePostInput = TypeOf<typeof createPostSchema>;
export type GetPostInput = TypeOf<typeof getPostSchema>;
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>;
