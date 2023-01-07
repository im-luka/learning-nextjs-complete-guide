import Head from "next/head";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../helpers/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Lux&apos;s Blog</title>
        <meta name="description" content="I post about web development." />
      </Head>

      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = (context) => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
