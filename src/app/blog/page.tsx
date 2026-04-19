import { getSortedPostsData } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Me slapping random buttons on my keyboard",
};

export default function Blog() {
  const blogs = getSortedPostsData();
  return (
    <main>
      <Header type={1}>My Blog</Header>
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
    </main>
  );
}
