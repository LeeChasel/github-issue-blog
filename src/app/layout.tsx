import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { UnAuthorized } from "@/components/UnAuthorized";
import { env } from "@/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${env.REPO_OWNER}'s Blog`,
  description: "A blog powered by GitHub Issues.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // If the user is not logged in, show the unauthorized page.
  const content = session?.token ? children : <UnAuthorized />;
  return (
    <html lang="zh-tw">
      <SessionProvider session={session} refetchOnWindowFocus={false}>
        <body className={cn(inter.className, "mx-4 min-h-screen space-y-6 py-3 md:mx-6 md:py-6")}>
          <Header />
          {content}
        </body>
      </SessionProvider>
    </html>
  );
}
