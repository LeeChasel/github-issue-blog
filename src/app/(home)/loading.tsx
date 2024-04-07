import { SkeletonPosts } from "@/app/(posts)/_components/SkeletonPost";

export default function Loading() {
  return <SkeletonPosts amount={5} />;
}
