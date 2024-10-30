"use client";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { useLocale } from "next-intl";
export default function AuthIconCheck() {
  const token = localStorage?.getItem("token");
  const locale = useLocale();
  return (
    <>
      {!token ? (
        <Link href={`/${locale}/login`}>
          {" "}
          <CiLogin size={22} />
        </Link>
      ) : (
        <Link href={`/${locale}/profile/dashboard`}>
          {" "}
          <GoPerson size={22} />
        </Link>
      )}
    </>
  );
}
