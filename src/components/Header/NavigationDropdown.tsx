"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AvatarLabel } from "./Avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { login } from "@/actions/login";

export const NavigationDropdown = () => {
  const user = useCurrentUser();
  const onLogin = async () => {
    await login();
  };
  const onLogout = async () => {
    await logout();
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <AvatarLabel />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4">
              {user ? (
                <>
                  <li>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>首頁</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Button onClick={onLogout} variant="ghost">
                        登出
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavigationMenuLink>
                    <Button onClick={onLogin} variant="ghost">
                      登入
                    </Button>
                  </NavigationMenuLink>
                </li>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
