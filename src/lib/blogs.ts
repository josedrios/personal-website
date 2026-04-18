// Copied code from Next.js documentation page, tweaked a bit to work with my website, i have a alright understanding of this I would say

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "/src/content/blog");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => /\.(md|mdx)$/.test(fileName))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);
      const { title, created, updated } = matterResult.data;

      return {
        slug,
        title,
        created,
        updated,
      };
    });

  return allPostsData.sort((a, b) => (a.created < b.created ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const mdxFilePath = path.join(postsDirectory, `${slug}.mdx`);
  const mdFilePath = path.join(postsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdxFilePath) ? mdxFilePath : mdFilePath;

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return {
      data,
      content,
    };
  } catch (error) {
    console.log(error);
    notFound();
  }
}
