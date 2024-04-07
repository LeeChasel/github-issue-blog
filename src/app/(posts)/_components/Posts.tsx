import { Post as PostType } from "../types";
import { Post } from "./Post";

type PostsProps = {
  posts: PostType[];
};

export const Posts = async ({ posts }: PostsProps) => {
  return (
    <div className="mx-4 space-y-3 md:mx-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
