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
      <h1>Top Instructors</h1>
      <p></p>
    </div>
  );
};

