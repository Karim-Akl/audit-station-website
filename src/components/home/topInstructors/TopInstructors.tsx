import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Unconventional Tabs - Cruip Tutorials",
  description: "Page description",
};

export function TopInstructors() {
  const tabs = [
    {
      title: "All",
      Value: "all",
    },
    {
      title: "Development",
      Value: "development",
    },
    {
      title: "Management",
      Value: "management",
    },
    {
      title: "IT",
      Value: "it",
    },
    {
      title: "Business",
      Value: "business",
    },
    {
      title: "Accounting",
      Value: "accounting",
    },
  ];

  return (
    <div className="w-full h-full py-20">
      <div className="flex items-center space-x-2 pl-4 py-6">
        <span className="block w-12 h-[2px] bg-blue-200"></span>
        <span className="text-blue-400 text-sm">Top Instructors</span>
      </div>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Top Class & Expert Instructors in One Place
      </h2>
      <Tabs defaultValue={tabs[0].Value} className=" mt-4 max-w-lg">
        <TabsList className="grid w-full grid-cols-6 space-x-8 border-b  py-14">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.Value} value={tab.Value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">All</TabsContent>
        <TabsContent value="development">Development</TabsContent>
        <TabsContent value="management">Management</TabsContent>
        <TabsContent value="it">IT</TabsContent>
        <TabsContent value="business">Business</TabsContent>
        <TabsContent value="accounting">Accounting</TabsContent>
      </Tabs>
    </div>
  );
}
