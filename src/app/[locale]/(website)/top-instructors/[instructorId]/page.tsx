import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface BlogProps {
  params: {
    id: number;
  };
}


export default async function instructorsDetailsPage({ params: {id} }: BlogProps) {


  return (
    <div>
      <h1>Top Instructors</h1>
      <p>{id}</p>
    </div>
  );
};

