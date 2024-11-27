import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import SecondHeroBackground from "@/components/helper/SecondHeroBackground";

// Dynamic import for lazy loading
const LazyAcountantTabs = dynamic(() =>
  import("@/components/helper/Tabs").then((module) => module.AcountantTabs)
);
export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Accountant</title>
        <meta name="description" content="Accountant Page" />
      </Head>
      <main className="mb-20 relative">
        <SecondHeroBackground
          title="Jane Cooper"
          email="alma.lawson@example.com"
        />
        <section className="container my-4 grid grid-cols-4 gap-4">
          <div className="md:col-span-1 col-span-4 space-y-4 rounded-lg">
            <div className=" shadow-box-shadow  rounded-lg p-5">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAcountantTabs Name="John Doe" />
              </Suspense>
            </div>
          </div>
          <div className="md:col-span-3 col-span-4 space-y-4 rounded-lg">
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
