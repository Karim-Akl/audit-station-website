import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface BlogProps {
  title: string;
  content: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Blog = ({ title, content }: BlogProps) => {
  const router = useRouter();
  const { locale } = router.query;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Locale: {locale}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch or define your slugs here
  const slugs = ["example-slug-1", "example-slug-2"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogProps, Params> = async (
  context
) => {
  const { slug } = context.params!;

  // Fetch your blog data here based on the slug
  const blogData = {
    title: `Title for ${slug}`,
    content: `Content for ${slug}`,
  };

  return {
    props: blogData,
  };
};

export default Blog;
