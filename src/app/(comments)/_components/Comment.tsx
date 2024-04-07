import { Comment as CommentType } from "@/app/(comments)/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { markdownToComponent } from "@/lib/markdownToComponent";
import { formatDateString } from "@/lib/utils";

type CommentProps = {
  comment: CommentType;
};
export const Comment = ({ comment }: CommentProps) => {
  const { updated_at, created_at, body } = comment;
  const content = markdownToComponent(body);
  const username = comment.user.login;
  const postedDate = formatDateString(new Date(created_at));
  const updatedDate = formatDateString(new Date(updated_at));
  const isUpdated = updated_at !== created_at;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{username}</CardTitle>
        <CardDescription>Posted on {postedDate}</CardDescription>
        {isUpdated && <CardDescription>Updated on {updatedDate}</CardDescription>}
      </CardHeader>
      <CardContent>
        <pre className="rounded-lg border-2 bg-gray-100 p-2 opacity-70">{content}</pre>
      </CardContent>
    </Card>
  );
};
