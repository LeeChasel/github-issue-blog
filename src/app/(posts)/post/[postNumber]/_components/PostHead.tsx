import { Post } from "@/app/(posts)/types";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateString } from "@/lib/utils";

type PostHeadProps = {
  post: Post;
};

export const PostHead = ({ post }: PostHeadProps) => {
  const { title, created_at, updated_at } = post;
  const postDate = formatDateString(new Date(created_at));
  const updatedDate = formatDateString(new Date(updated_at));
  const isUpdated = postDate !== updatedDate;
  return (
    <CardHeader className="space-y-2">
      <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">{title}</CardTitle>
      <CardDescription>Posted on {postDate}</CardDescription>
      {isUpdated && <CardDescription>Updated on {updatedDate}</CardDescription>}
    </CardHeader>
  );
};
