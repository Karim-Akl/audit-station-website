export const metadata = {
  title: "Unconventional Tabs - Cruip Tutorials",
  description: "Page description",
};

import TabImage01 from "@/public/tabs-image-01.jpg";
import Tab0Image2 from "@/public/tabs-image-02.jpg";
import Tab0Image3 from "@/public/tabs-image-03.jpg";
import UnconventionalTabs from "@/components/unconventional-tabs";

export default function TopInstructors() {
  const tabs = [
    {
      title: "All",
      img: TabImage01,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Development",
      img: Tab0Image2,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Management",
      img: Tab0Image3,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "IT",
      img: Tab0Image3,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Business",
      img: Tab0Image3,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Accounting",
      img: Tab0Image3,
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      <div className="flex items-center space-x-2 pl-4 py-6">
        <span className="block w-12 h-[2px] bg-blue-200"></span>
        <span className="text-blue-400 text-sm">Top Instructors</span>
      </div>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Lastest News and Resources
      </h2>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <UnconventionalTabs tabs={tabs} />
      </div>
    </main>
  );
}
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
          <div className="flex justify-between mb-1">
            <header>
              <div className="font-caveat text-xl font-medium text-sky-500">
                {tab.tag}
              </div>
              <h1 className="text-xl font-bold text-slate-900">{tab.title}</h1>
            </header>
            <button
              className="shrink-0 h-[30px] w-[30px] border border-slate-200 hover:border-slate-300 rounded-full shadow inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out"
              aria-label="Like"
            >
              <svg
                className="fill-red-500"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
              >
                <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
              </svg>
            </button>
          </div>
          <div className="text-slate-500 text-sm line-clamp-3 mb-2">
            {tab.excerpt}
          </div>
          <div className="text-right">
            <a
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-out"
              href={tab.link}
            >
              Read more -&gt;
            </a>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
