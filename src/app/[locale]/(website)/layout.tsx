import { Footer } from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import React from 'react';
import { getSession } from '@/lib/authSession';

interface LayoutProps {
  children: React.ReactNode;
}
export default async function WebsiteLayout({ children }: LayoutProps) {
  const session = await getSession();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
