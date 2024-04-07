import { currentToken } from "@/lib/auth";
import { getPosts } from "@/app/(posts)/services";
import { InfiniteScrollPosts } from "@/app/(posts)/_components/InfiniteScrollPosts";

export default async function Home() {
  const token = await currentToken();
  if (!token) {
    return null;
  }
  const posts = await getPosts(token);
  return (
    <>
      <InfiniteScrollPosts token={token} initialPosts={posts} />;
    </>
  );
}
