"use server";

import { z } from "zod";
import { postSchema } from "./schema";
import { createPost, getPosts } from "./services";

export const getPostsAction = async (token: string | undefined, page = 1, pageSize = 10) => {
  return getPosts(token, page, pageSize);
};

export const createPostAction = async (token: string | undefined, postData: z.infer<typeof postSchema>) => {
  return createPost(token, postData);
};
