import { getSortedPostsData } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";

export default function Blog() {
  const blogs = getSortedPostsData();
  return (
    <main>
      <Header type={1}>My Blog</Header>
      {/* <p>Blog Count: {blogs.length}</p> */}
      <div className="blog-card__container">
        {blogs.map((blog) => (
          <BlogCard
            href={`/blog/${blog.slug}`}
            title={blog.title}
            info={blog.info}
            date={blog.date}
            key={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
