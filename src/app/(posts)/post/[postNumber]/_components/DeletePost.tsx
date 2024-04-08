"use client";

import { deletePostAction } from "@/app/(posts)/actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCurrentToken } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type DeletePostProps = {
  postNumber: string;
};

export const DeletePost = ({ postNumber }: DeletePostProps) => {
  const token = useCurrentToken();
  const { toast } = useToast();
  const router = useRouter();
  const handleClick = async () => {
    const post = await deletePostAction(token, postNumber);
    toast({ description: `成功刪除文章 - ${post.title}` });
    router.push("/");
  };
  return (
    <Button variant="destructive" onClick={handleClick}>
      刪除文章
    </Button>
  );
};
