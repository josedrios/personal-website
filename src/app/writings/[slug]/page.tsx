import { getPostBySlug } from "@/lib/writings";
import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/components/Note";
import Image from "@/components/Image";
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import Code from "@/components/Code";
import Quote from "@/components/Quote";
import FadeIn from "@/components/FadeIn";

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
    h1: ({ children }: { children: string }) => (
      <Header type={1}>{children}</Header>
    ),
    h2: ({ children }: { children: string }) => (
      <Header type={2}>{children}</Header>
    ),
  };

  return (
    <FadeIn main>
      <article>
        <Header type={1}>{post.data.title}</Header>
        <p>By Jose D. Rios on {post.data.created}</p>
        <MDXRemote source={post.content} components={components} />
      </article>
    </FadeIn>
  );
}
