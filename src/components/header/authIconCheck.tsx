import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { getLocale } from "next-intl/server";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
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
    <div className="rounded-full border border-[#767676] p-2 hover:bg-gray-400 hover:cursor-pointer ">
      <Link href={`/${locale}/login`} className="">

        <Image src="/assets/home/mian.png" alt="x" width={22} height={22}  className=""/>

      </Link>
    </div>
  ) : (
    <Link href={`/${locale}/user/dashboard`}>
      {" "}
      <Avatar className="rounded-full border border-[#767676]  hover:bg-gray-400 hover:cursor-pointer">
        <AvatarImage src={image ? image : ""} alt="user avatar" />
        <AvatarFallback>{username ? username?.at(0) : "U"}</AvatarFallback>
      </Avatar>
    </Link>
  );
}
