import { env } from "@/env";
import { NavigationDropdown } from "./NavigationDropdown";

export const Header = () => {
  const repoOwner = env.REPO_OWNER;
  return (
    <header className="flex h-14 items-center justify-between px-5">
      <h1>{`${repoOwner}'s Blog`}</h1>
      <NavigationDropdown />
    </header>
  );
};
