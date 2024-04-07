import { currentToken } from "@/lib/auth";
import { getPosts } from "@/app/(posts)/services";
import { Posts } from "@/app/(posts)/_components/Posts";

export default async function Home() {
  const token = await currentToken();
  if (!token) {
    return null;
  }
  const posts = await getPosts(token);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
