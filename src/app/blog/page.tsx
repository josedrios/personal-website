import { getSortedPostsData } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import { Metadata } from "next";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "Blog",
  description: "Me slapping random buttons on my keyboard",
};

export default function Blog() {
  const blogs = getSortedPostsData();
  return (
    <main>
      <Header type={1}>My Blog</Header>
      <Note title="disclaimer">
        This is a very unserious, all over the place, typo infested blog page. I
        just want to be able to write better and share my thoughts.
      </Note>
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
