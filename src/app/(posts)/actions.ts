"use server";

import { z } from "zod";
import { postSchema } from "./schema";
import { createPost, deletePost, getPosts, updatePost } from "./services";

export const getPostsAction = async (token: string | undefined, page = 1, pageSize = 10) => {
  return getPosts(token, page, pageSize);
};

export const createPostAction = async (token: string | undefined, postData: z.infer<typeof postSchema>) => {
  return createPost(token, postData);
};

export const updatePostAction = async (
  token: string | undefined,
  postNumber: string,
  postData: z.infer<typeof postSchema>,
) => {
  return updatePost(token, postNumber, postData);
};

export const deletePostAction = async (token: string | undefined, postNumber: string) => {
  return deletePost(token, postNumber);
};
