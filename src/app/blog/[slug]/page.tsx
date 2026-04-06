import { getPostBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/components/Note";
import Header from "@/components/Header";
import React from "react";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const components = {
    Note,
    h1: ({ children }: { children: string }) => (
      <Header type={1}>{children}</Header>
    ),
    h2: ({ children }: { children: string }) => (
      <Header type={2}>{children}</Header>
    ),
    h3: ({ children }: { children: string }) => (
      <Header type={3}>{children}</Header>
    ),
  };

  return (
    <main>
      <article>
        <Header type={1}>{post.data.title}</Header>
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  );
}

// Note: could have done const slug = above, same thing, but if i had more dynamic segments beyond slug i would do {} i believe
