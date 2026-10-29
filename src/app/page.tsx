import Header from "@/components/Header";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";
import WizardTower from "@/svgs/WizardTower";

export default function Home() {
  return (
    <FadeIn main>
      <div className="figure">
        <WizardTower />
      </div>
      <Blog />
    </FadeIn>
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
