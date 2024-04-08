import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center">
      <h2>找不到頁面404</h2>
      <Link href="/">
        <Button variant="link">回首頁</Button>
      </Link>
    </div>
  );
}
