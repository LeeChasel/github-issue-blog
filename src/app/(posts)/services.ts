import { repoIssuesPath } from "@/constants";
import { fetchGithub } from "@/lib/fetch";
import { formatURLSearchParams } from "@/lib/utils";
import { Post } from "./types";

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
