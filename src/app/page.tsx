import Header from "@/components/Header";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";
import { Navigation } from "lucide-react";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <FadeIn main>
      <Heading />
      <Blog />
    </FadeIn>
  );
}

export function Heading() {
  return (
    <div className="home__heading">
      <div className="home__heading-content">
        <div className="home__top-row">
          <Icon icon={<Navigation />} height={45}></Icon>
          <div className="home__identity">
            <Header type={1} className="home__name">
              Jose D. Rios
            </Header>
            <p className="home__alias">HUMAN FROM EARTH</p>
          </div>
        </div>
        <p className="home__heading-paragraph">
          I am a rather simple <b>organism</b>. I program because it&apos;s fun
          and it stimulates the mind. I also like gaming and soccer. My time is
          best spent with my loving friends and family.
        </p>
        <p className="home__heading-paragraph">
          If you feel like learning more about me feel free to gaze upon my{" "}
          <a
            href="https://github.com/josedrios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/josederios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . You can also email me directly at{" "}
          <a href={"mailto:josederios@outlook.com"}>josederios@outlook.com</a>.
        </p>
      </div>
    </div>
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
