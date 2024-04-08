import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, { message: "必需填寫" }),
  body: z.string().min(30, { message: "至少填寫30字" }),
});
