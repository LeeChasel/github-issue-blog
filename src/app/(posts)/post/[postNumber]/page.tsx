import { Metadata } from "next";
import { env } from "@/env";
import { currentToken, isOwner } from "@/lib/auth";
import { getPost } from "@/app/(posts)/services";
import { getComments } from "@/app/(comments)/services";
import { PostHead } from "./_components/PostHead";
import { PostContainer } from "./_components/PostContainer";
import { PostBody } from "./_components/PostBody";
import { PostComments } from "./_components/PostComments";
import { DeletePost } from "./_components/DeletePost";

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
  const isowner = await isOwner();
  return (
    <div className="mx-4 flex flex-col space-y-3 md:mx-6">
      {isowner && (
        <div className="self-start">
          <DeletePost postNumber={number} />
        </div>
      )}
      <PostContainer>
        <PostHead post={post} />
        <PostBody post={post} />
        {hasComments && <PostComments comments={comments} />}
      </PostContainer>
    </div>
  );
}
