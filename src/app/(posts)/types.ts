import { User } from "@/types";

/**
 * Github issue type, only the necessary fields are defined.
 */
export type Post = {
  url: string;
  repository_url: string;
  comments_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: User;
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  body: string;
};
