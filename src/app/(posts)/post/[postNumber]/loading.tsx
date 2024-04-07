import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-4 h-screen md:mx-6">
      <Skeleton className="h-2/3" />
    </div>
  );
}
