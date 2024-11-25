import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import React, { Suspense } from "react";
import { getSession } from "@/lib/authSession";

interface LayoutProps {
  children: React.ReactNode;
}

const WebsiteLayout = async ({ children }: LayoutProps) => {
  const session = await getSession();

  return (
    <>
      <Navbar
        isAuthenticated={!!session}
        username={session?.user?.data?.username}
        image={session?.user?.data?.avatar}
      />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
