import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Post } from "./types";
import { getPostsAction } from "./actions";

export const useInfiniteScroll = (token: string | undefined, initialPosts: Post[], defaultPageSize = 10) => {
  // Start from page 2 because already have the first page data
  const [page, setPage] = useState(2);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [ref, inView] = useInView();
  const [hasMore, setHasMore] = useState(initialPosts.length >= defaultPageSize);

  const loadMorePosts = useCallback(async () => {
    if (!hasMore) {
      return;
    }

    const nextPage = page + 1;
    const newPosts = await getPostsAction(token, page, defaultPageSize);
    if (newPosts.length) {
      setPage(nextPage);
      setPosts((prevPosts) => [...(prevPosts.length ? prevPosts : []), ...newPosts]);
    }

    if (newPosts.length < defaultPageSize) {
      setHasMore(false);
    }
  }, [defaultPageSize, hasMore, page, token]);

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView, loadMorePosts]);

  return {
    posts,
    ref,
    hasMore,
  };
};
