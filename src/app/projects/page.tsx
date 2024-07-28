import ProjectCard, { ProjectType } from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
    return (
        <main className="space-y-6">
            {projects.map((project: ProjectType, index: number) => (
                <ProjectCard {...project} index={index} key={project.title} />
            ))}
        </main>
    );
}
