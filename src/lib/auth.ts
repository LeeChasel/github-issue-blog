import { auth } from "@/auth";
import { env } from "@/env";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const currentToken = async () => {
  const session = await auth();
  return session?.token;
};

export const isOwner = async () => {
  const session = await auth();
  return session?.user?.username === env.REPO_OWNER;
};
