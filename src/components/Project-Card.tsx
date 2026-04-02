import Header from "@/components/Header";

export type Project = {
  image: File;
  title: string;
  date: string;
  description: string;
  skills: string[];
};

const test = {
  title: "The Test Project",
  date: "September 2025",
  description:
    "This is a description for the test project, the one and only. I don't think you've realized by now so let me tell you. This is one of the most projects of all time. It won an award for being a project, because it has project features.",
  skills: ["Next.js", "CSS", "Git", "Blood", "Sweat", "Tears"],
};

export function ProjectCard() {
  return (
    <div className="project-card">
      <Header type={2}>{test.title}</Header>
      <div className="project-card__image" />
      <Skills skills={test.skills} />
      <p className="project-card__description">{test.description}</p>
    </div>
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
