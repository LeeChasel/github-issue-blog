import { repoIssuesPath } from "@/constants";
import { fetchGithub } from "@/lib/fetch";
import { Comment } from "./types";

export const getComments = async (token: string | undefined, issueNumber: string): Promise<Comment[]> => {
  const url = `${repoIssuesPath}/${issueNumber}/comments`;
  const response = await fetchGithub(token, url);
  return response.json();
};
