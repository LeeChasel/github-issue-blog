"use server";

import { getPosts } from "./services";

export const getPostsAction = async (token: string | undefined, page = 1, pageSize = 10) => {
  return getPosts(token, page, pageSize);
};
