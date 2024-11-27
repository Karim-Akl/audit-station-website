import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import React from "react";
import { getSession } from "@/lib/authSession";
import { fetchData } from "@/lib/api/fetchData";

interface LayoutProps {
  children: React.ReactNode;
}

const WebsiteLayout = async ({ children }: LayoutProps) => {
  const session = await getSession();
  const data = await fetchData({ endPoint: `/auth/profile` });

  return (
    <>
      <Navbar
        isAuthenticated={!!session}
        username={session?.user?.data?.username}
        image={data?.avatar || ''}
      />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
