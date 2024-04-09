import { env } from "@/env";
import { NavigationDropdown } from "./NavigationDropdown";

export const Header = () => {
  const repoOwner = env.REPO_OWNER;
  return (
    <header className="flex items-center justify-between justify-items-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{`${repoOwner}'s Blog`}</h1>
      <NavigationDropdown />
    </header>
  );
};
