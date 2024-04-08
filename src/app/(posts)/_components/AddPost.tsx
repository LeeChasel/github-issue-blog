"use client";

import { z } from "zod";
import { useCurrentToken } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { PostModal } from "./PostModal";
import { postSchema } from "../schema";
import { createPostAction } from "../actions";

export const AddPost = () => {
  const token = useCurrentToken();
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (value: z.infer<typeof postSchema>) => {
    const res = await createPostAction(token, value);
    toast({ description: "新增文章成功" });
    router.push(`/post/${res.number}`);
  };

  return <PostModal triggerBtnLabel="新增文章" title="新增文章" actionBtnLabel="確定新增" onSubmit={onSubmit} />;
};
