import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    REPO_OWNER: z.string().min(1, "REPO_OWNER is required"),
    REPO_NAME: z.string().min(1, "REPO_NAME is required"),
    AUTH_GITHUB_ID: z.string().min(1, "AUTH_GITHUB_ID is required"),
    AUTH_GITHUB_SECRET: z.string().min(1, "AUTH_GITHUB_SECRET is required"),
    AUTH_SECRET: z.string().min(1, "AUTH_SECRET is required"),
  },
  // Only need to destructure client variables
  experimental__runtimeEnv: {},
});
