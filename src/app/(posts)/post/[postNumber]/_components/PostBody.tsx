import { Post } from "@/app/(posts)/types";
import { CardContent } from "@/components/ui/card";
import { markdownToComponent } from "@/lib/markdownToComponent";

type PostBodyProps = {
  post: Post;
};

export const PostBody = ({ post }: PostBodyProps) => {
  const content = markdownToComponent(post.body);
  return <CardContent>{content}</CardContent>;
};
