import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPost = () => {
  return (
    <div className="rounded-lg border border-gray-200 p-4 transition-all">
      <div className="space-y-2">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-6 w-52" />
      </div>
    </div>
  );
};

export const SkeletonPosts = ({ amount = 1 }) => {
  const content = Array.from({ length: amount }).map((_, index) => <SkeletonPost key={index} />);
  return <div className="space-y-3">{content}</div>;
};
