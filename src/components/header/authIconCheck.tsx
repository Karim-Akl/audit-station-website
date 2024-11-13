import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { getLocale } from "next-intl/server";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarDropDownProps {
  username: string;
  image: string | undefined;
  isAuthenticated: boolean;
}

export default async function AuthIconCheck({
  username,
  image,
  isAuthenticated,
}: UserAvatarDropDownProps) {
  const locale = await getLocale();
  return !isAuthenticated ? (
    <Link href={`/${locale}/login`}>
      {" "}
      <CiLogin size={22} />
    </Link>
  ) : (
    <Link href={`/${locale}/user/dashboard`}>
      {" "}
      <Avatar className="w-5 h-5 bg-[#F9FAFB]">
        <AvatarImage src={image ? image : ""} alt="user avatar" />
        <AvatarFallback>{username ? username?.at(0) : "U"}</AvatarFallback>
      </Avatar>
    </Link>
  );
}
