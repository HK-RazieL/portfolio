import ProjectCard, { ProjectType } from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
    return (
        <main>
            {projects.map((project: ProjectType) => (
                <ProjectCard {...project} />
            ))}
        </main>
    );
}
