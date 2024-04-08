import { repoIssuesPath } from "@/constants";
import { fetchGithub } from "@/lib/fetch";
import { formatURLSearchParams } from "@/lib/utils";
import { Post } from "./types";
import { z } from "zod";
import { postSchema } from "./schema";

export const getPosts = async (token: string | undefined, page = 1, pageSize = 10): Promise<Post[]> => {
  const state = "open";
  const queryString = formatURLSearchParams({
    state,
    per_page: pageSize.toString(),
    page: page.toString(),
  });
  const url = `${repoIssuesPath}${queryString}`;
  const response = await fetchGithub(token, url);
  return response.json();
};

export const getPost = async (token: string | undefined, postNumber: string): Promise<Post> => {
  const url = `${repoIssuesPath}/${postNumber}`;
  const response = await fetchGithub(token, url);
  return response.json();
};

export const createPost = async (token: string | undefined, postData: z.infer<typeof postSchema>): Promise<Post> => {
  const url = repoIssuesPath;
  const response = await fetchGithub(token, url, {
    method: "POST",
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const updatePost = async (
  token: string | undefined,
  postNumber: string,
  postData: z.infer<typeof postSchema>,
): Promise<Post> => {
  const url = `${repoIssuesPath}/${postNumber}`;
  const response = await fetchGithub(token, url, {
    method: "PATCH",
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const deletePost = async (token: string | undefined, postNumber: string): Promise<Post> => {
  const url = `${repoIssuesPath}/${postNumber}`;
  const state = "closed";
  const response = await fetchGithub(token, url, {
    method: "PATCH",
    body: JSON.stringify({ state }),
  });
  return response.json();
};
