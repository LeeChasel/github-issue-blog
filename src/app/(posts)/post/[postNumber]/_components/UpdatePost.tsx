"use client";

import { z } from "zod";
import { useCurrentToken } from "@/hooks/useAuth";
import { PostModal } from "@/app/(posts)/_components/PostModal";
import { updatePostAction } from "@/app/(posts)/actions";
import { postSchema } from "@/app/(posts)/schema";
import { useToast } from "@/components/ui/use-toast";
import { Post } from "@/app/(posts)/types";

type UpdatePostProps = {
  post: Post;
  postNumber: string;
};

export const UpdatePost = ({ post, postNumber }: UpdatePostProps) => {
  const token = useCurrentToken();
  const { toast } = useToast();
  const onSubmit = async (value: z.infer<typeof postSchema>) => {
    const post = await updatePostAction(token, postNumber, value);
    toast({ description: `成功編輯文章 - ${post.title}` });

    // Wait for 1 second before reloading the page to ensure the toast is shown
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.reload();
  };

  return (
    <PostModal
      triggerBtnLabel="編輯文章"
      title="編輯文章"
      actionBtnLabel="確定儲存更新"
      onSubmit={onSubmit}
      defaultValues={{
        title: post.title,
        body: post.body,
      }}
    />
  );
};
