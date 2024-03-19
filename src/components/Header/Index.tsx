import { NavigationDropdown } from "./NavigationDropdown";

export const Header = () => {
  const username = "Chasel";
  return (
    <header className="flex h-14 items-center justify-between px-5">
      <h1>{`${username}'s Blog`}</h1>
      <NavigationDropdown />
    </header>
  );
};
