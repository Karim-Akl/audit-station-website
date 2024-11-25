import AddReference from "@/forms/addReference";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface BlogProps {
  params: {
    id: number;
  };
}

export default async function AddNewCoursePage() {
  return (
    <div>
      <h2 className="text-4xl text-[#333333] font-semibold mb-6">Add Reference</h2>

      <AddReference />
    </div>
  );
}
