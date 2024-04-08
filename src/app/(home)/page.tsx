import { currentToken, isOwner } from "@/lib/auth";
import { getPosts } from "@/app/(posts)/services";
import { InfiniteScrollPosts } from "@/app/(posts)/_components/InfiniteScrollPosts";
import { AddPost } from "../(posts)/_components/AddPost";

export default async function Home() {
  const token = await currentToken();
  if (!token) {
    return null;
  }
  const isowner = await isOwner();
  const posts = await getPosts(token);
  return (
    <div className="mx-4 flex flex-col space-y-3 md:mx-6">
      {isowner && (
        <div className="self-end">
          <AddPost />
        </div>
      )}
      <InfiniteScrollPosts token={token} initialPosts={posts} />
    </div>
  );
}
