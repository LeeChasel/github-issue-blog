import { Metadata } from "next";
import { env } from "@/env";
import { currentToken } from "@/lib/auth";
import { getPost } from "@/app/(posts)/services";
import { getComments } from "@/app/(comments)/services";
import { PostHead } from "./_components/PostHead";
import { PostContainer } from "./_components/PostContainer";
import { PostBody } from "./_components/PostBody";
import { PostComments } from "./_components/PostComments";

type Params = {
  params: { postNumber: string };
};

export function generateMetadata({ params }: Params): Metadata {
  const owner = env.REPO_OWNER;
  const number = params.postNumber;
  return {
    title: `${owner}'s Blog - ${number}`,
  };
}

export default async function PostPage({ params }: Params) {
  const number = params.postNumber;
  const token = await currentToken();
  const postPromise = getPost(token, number);
  const commentsPromise = getComments(token, number);
  const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const hasComments = comments.length > 0;
  return (
    <div className="mx-4 md:mx-6">
      <PostContainer>
        <PostHead post={post} />
        <PostBody post={post} />
        {hasComments && <PostComments comments={comments} />}
      </PostContainer>
    </div>
  );
}
