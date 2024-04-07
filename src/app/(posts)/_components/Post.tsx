import Link from "next/link";
import { type Post as PostType } from "../types";
import { formatDateString } from "@/lib/utils";

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  const { title, created_at, updated_at, number } = post;
  const href = `/post/${number}`;
  const postDate = formatDateString(new Date(created_at));
  const updatedDate = formatDateString(new Date(updated_at));
  const isShowUpdated = postDate !== updatedDate;
  const dateElementStyle = "text-gray-500 dark:text-gray-400";
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 transition-all hover:bg-gray-100 hover:shadow"
    >
      <article className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{title}</h2>
        <p className={dateElementStyle}>Posted on {postDate}</p>
        {isShowUpdated && <p className={dateElementStyle}>Updated on {updatedDate}</p>}
      </article>
    </Link>
  );
}
