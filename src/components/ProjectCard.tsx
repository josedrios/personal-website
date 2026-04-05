import Header from "@/components/Header";
import Link from "next/link";
import type { ProjectType } from "@/lib/data/projects";
import Image from "./Image";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card__header">
        <Header type={2}>{project.title}</Header>
        <span className="project-card__header-suffix">-&gt;</span>
      </div>
      <Image
        src={project.image}
        alt={"This is a screenshot of " + project.title}
        className="project-card__image"
      />
      <Skills skills={project.skills} />
      <p className="project-card__description">
        {project.description}{" "}
        <span className="project-card__fake-link">[Github Link]</span>
      </p>
    </Link>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="project-card__skills">
      {skills.map((skill, i) => (
        <SkillChip key={i} skill={skill} />
      ))}
    </div>
  );
}

function SkillChip({ skill }: { skill: string }) {
  return <div className="project-card__skill-chip">{skill}</div>;
}
