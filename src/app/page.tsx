import Header from "@/components/Header";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";
import WizardTower from "@/svgs/WizardTower";
import Figure from "@/components/Figure";

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
      <Figure className="home__wizard-tower">
        <WizardTower />
      </Figure>
      <div className="home__heading-content">
        <Header type={1} className="home__name">
          Jose D. Rios
        </Header>
        <p className="home__alias">Human from Earth</p>
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
