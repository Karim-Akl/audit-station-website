import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import React, { Suspense } from "react";
import { getSession } from "@/lib/authSession";

interface LayoutProps {
  children: React.ReactNode;
}

const SessionLoader = async () => {
  const session = await getSession();
  return session;
};

const WebsiteLayout = ({ children }: LayoutProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionComponent>{children}</SessionComponent>
    </Suspense>
  );
};

const SessionComponent = async ({ children }: LayoutProps) => {
  const session = await SessionLoader();

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
