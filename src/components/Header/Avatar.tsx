import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/Icons";
import { useCurrentUser } from "@/hooks/useAuth";

export const AvatarLabel = () => {
  const user = useCurrentUser();
  return (
    <Avatar>
      <AvatarImage src={user?.image || ""} alt={`${user?.name}'s avatar`} />
      <AvatarFallback>
        <Icons.Avatar className="h-full w-full" />
      </AvatarFallback>
    </Avatar>
  );
};
