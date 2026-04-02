import Header from "@/components/Header";
import { ProjectCard } from "@/components/Project-Card";

export default function Projects() {
  return (
    <main>
      <Header type={1}>Projects</Header>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </main>
  );
}
