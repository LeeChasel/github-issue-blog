import { Comment as CommentType } from "@/app/(comments)/types";
import { Comment } from "@/app/(comments)/_components/Comment";
import { Separator } from "@/components/ui/separator";

type PostCommentsProps = {
  comments: CommentType[];
};

export const PostComments = ({ comments }: PostCommentsProps) => {
  return (
    <div className="space-y-4">
      <Separator className="bg-gray-300" />
      <h2 className="mx-4 text-3xl font-bold tracking-tighter">Comment</h2>
      {comments.map((commentItem) => (
        <div key={commentItem.id} className="space-y-4">
          <Comment comment={commentItem} />
        </div>
      ))}
    </div>
  );
};
