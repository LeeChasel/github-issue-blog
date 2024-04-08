"use client";

import { Post as PostType } from "../types";
import { useInfiniteScroll } from "../useInfiniteScroll";
import { Post } from "./Post";
import { SkeletonPosts } from "./SkeletonPost";

type InfiniteScrollProps = {
  token: string;
  initialPosts: PostType[];
};

export const InfiniteScrollPosts = ({ token, initialPosts }: InfiniteScrollProps) => {
  const { posts, hasMore, ref } = useInfiniteScroll(token, initialPosts);

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* Display Skeleton when loading more posts */}
      {hasMore && (
        <div ref={ref}>
          <SkeletonPosts amount={3} />
        </div>
      )}
    </div>
  );
};
