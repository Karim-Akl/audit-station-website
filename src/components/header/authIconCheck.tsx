"use client";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
export default function AuthIconCheck() {
  const [token, setToken] = useState<string | null>(null);
  const locale = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage?.getItem("token"));
    }
  }, []);
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
