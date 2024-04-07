import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

export const PostContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="py-4">
      <article className="prose prose-gray dark:prose-invert mx-auto max-w-6xl">
        <div className="not-prose space-y-2">{children}</div>
      </article>
    </Card>
  );
};
