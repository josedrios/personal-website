import Header from "@/components/Header";
import Note from "@/components/Note";
import Link from "next/link";
import Image from "@/components/Image";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/lib/blogs";

export default function Home() {
  return (
    <main>
      <Header type={1}>It Is I.</Header>
      {/* testing so vercel can detect new repo */}
      <Note>
        This website is still under construction but I believe it is suffice
        enough to deploy. A lot left to work on but its completely functional
        and working.
      </Note>
      <Who />
      <Why />
      <How />
      <Recommendation />
      <Apology />
      <Blog />
    </main>
  );
}

function Who() {
  return (
    <>
      <Header type={2}>Who?</Header>
      <Image
        src={"/images/other/me.webp"}
        alt={"A picture of the me with an uncomfortable smile"}
        note="The only professional image of myself that I could find."
      />
      <p>
        I am Jose De Jesus Rios. I am a human who enjoys spending time with my
        awesome-possum loved ones, creating buffonery through code, physical
        training, and consuming media that knock my socks off.
      </p>
    </>
  );
}

function Why() {
  return (
    <>
      <Header type={2}>Why?</Header>
      <p>
        Because it makes sense. It makes sense to love, create and consume the
        things I have chosen in my life. It doesn&apos;t feel so great all the
        time but even when it doesn&apos;t feel great, it feels right.
      </p>
    </>
  );
}

function How() {
  return (
    <>
      <Header type={2}>How?</Header>
      <p>
        Because my parents decided they wanted another kid. As for how my
        personality and interests came about, they just happened to stick. After
        years of navigating my way through this planet and the society that it
        contains, there were certain ideas, feelings and experiences that made
        me realize that life should be spent on these areas, guilt free.
      </p>
    </>
  );
}

function Recommendation() {
  return (
    <>
      <Header type={2}>Recommendation</Header>
      <p>
        If you feel like stalking through the rest of my website I would
        recommend doing so with{" "}
        <Link
          href={"https://youtu.be/31esNeJhfnY?si=QXnAZU5wyenZBSex"}
          target="_blank"
          rel="noopener noreferrer"
        >
          this track
        </Link>{" "}
        pouring into your ears.
      </p>
    </>
  );
}

function Apology() {
  return (
    <>
      <Header type={2}>Apology</Header>
      <p>
        I would like to apologize for the big heaping pile of garbage you just
        read above. These are just the words that made the most sense when it
        came time to write this portion of the website. I would like to
        apologize for the blabberfest I had, and will continue to have because I
        know for a fact that my <Link href={"/blog"}>blogs</Link> are 100%
        exactly the same.
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
        Find the rest of my blogs <Link href={"/blog"}>here</Link>.
      </p>
    </>
  );
}
