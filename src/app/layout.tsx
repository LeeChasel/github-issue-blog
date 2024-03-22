import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Issue Blog",
  description: "A blog can browse Github issues.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="zh-tw">
      <SessionProvider session={session}>
        <body className={cn(inter.className, "min-h-screen")}>
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
