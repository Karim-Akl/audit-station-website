import { SearchInput } from "@/components/header/searchInput";
import HeroBackground from "@/components/helper/HeroBackground";
import React from "react";
import { BlogsTabs } from "@/components/helper/BlogTabs";
import { PopularPosts } from "@/components/helper/PopularPosts";

export const metadata = {
  title: "Top Instructors",
  description: "Top Instructors Page",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mb-20 relitive">
      <HeroBackground title="TopInstructors" />
      <section className="container my-4  gap-4  ">{children}</section>
    </main>
  );
}
