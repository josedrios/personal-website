import Header from "@/components/Header";
import Note from "@/components/Note";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "The things I have created",
};

export default function Projects() {
  return (
    <FadeIn main>
      <Header type={1}>Projects</Header>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <Note>
        The rest of my projects can be found on my{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/josedrios"}
        >
          Github
        </Link>
      </Note>
    </FadeIn>
  );
}
