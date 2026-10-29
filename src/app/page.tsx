import Header from "@/components/Header";
import Link from "next/link";
import Image from "@/components/Image";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <FadeIn main>
      <Header type={1}>It Is I.</Header>
      <Who />
      <Blog />
    </FadeIn>
  );
}

function Who() {
  return (
    <>
      {/* <Header type={2}>Who?</Header> */}
      {/* <Image */}
      {/*   src={"/images/pages/me.webp"} */}
      {/*   alt={"A picture of the me with an uncomfortable smile"} */}
      {/*   note="The only professional image of myself that I could find." */}
      {/* /> */}
      <p>
        I am a human who enjoys spending time with my
        awesome-possum loved ones, creating buffonery through code, physical
        training, and consuming media that knock my socks off.
      </p>
    </>
  );
}

function Blog() {
  // Showing last 3 latest blogs to direct some pair of human eyes to my blog posts
  const blogs = getSortedPostsData().slice(0, 3);

  return (
    <>
      <Header type={2}>Latest Blogs</Header>
      <div className="blog-card__container">
        {blogs.map((blog) => (
          <BlogCard
            href={`/blog/${blog.slug}`}
            title={blog.title}
            created={blog.created}
            key={blog.slug}
          />
        ))}
      </div>
      <p>
        Read more of my blogs <Link href={"/blog"}>here</Link>.
      </p>
    </>
  );
}
