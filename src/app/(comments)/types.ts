import { User } from "@/types";

export type Comment = {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  user: User;
  created_at: string;
  updated_at: string;
  author_association: string;
  body: string;
};
