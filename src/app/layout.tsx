import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Issue Blog",
  description: "A blog can browse Github issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className={cn(inter.className, "min-h-screen")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
