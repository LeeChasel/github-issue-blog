"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-3">
      <h2>錯誤發生！！！</h2>
      <button onClick={() => reset()}>重新載入以嘗試解決錯誤</button>
    </div>
  );
}
