import { getPostBySlug } from "@/lib/writings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import Note from "@/components/Note";
import Image from "@/components/Image";
import Link from "next/link";
import Code from "@/components/Code";
import Quote from "@/components/Quote";
import FadeIn from "@/components/FadeIn";
import { convertDate } from "@/util/date";
import { ArrowLeft, ChevronLeft, MoveLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.data.title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const components = {
    Code,
    Note,
    Quote,
    Image,
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ),
  };

  return (
    <FadeIn main>
      <article>
        <Link href={"/"} className="writing__back-home">
          <MoveLeft />
        </Link>
        <div className="writing__header">
          <h1 className="writing__header-title">{post.data.title}</h1>
          <p className="writing__header-date">
            {convertDate(post.data.created)}
          </p>
        </div>
        <MDXRemote source={post.content} components={components} />
      </article>
    </FadeIn>
  );
}
