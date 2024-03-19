import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/Icons";

export const AvatarLabel = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="user avatar" />
      <AvatarFallback>
        <Icons.Avatar className="h-full w-full" />
      </AvatarFallback>
    </Avatar>
  );
};
