import { ProjectType } from "@/components/ProjectCard/ProjectCard";

export const projects: ProjectType[] = [
    {
        title: "Tuttifruty Shopen",
        link: "https://github.com/HK-RazieL/tuttifrutti-shopen",
        image: "/images/projects/tuttifruty-shopen.png",
        description:
            "A simple online store made for a job assignment that involved front-end and back-end with a mongodb database, some basic authetnication .",
        stack: ["React", "MongoDB", "Redux", "NodeJS", "Express"],
    },
    {
        title: "Docker Infrastructure",
        link: "https://github.com/HK-RazieL/docker-infrastructure",
        image: "/images/projects/docker-infrastructure.png",
        description:
            "I tried to make a template for starting projects with this stack. The point is that you run 3 docker containers for Front-end, Back-end and Database respectively with a simple script.",
        stack: ["React", "NodeJS", "Docker", "MySQL"],
    },
    {
        title: "Office Templating Tool",
        link: "https://github.com/HK-RazieL/Office-templating-tool",
        image: "/images/projects/office-templating-tool.png",
        description:
            "This is my first 'project' where I tried to make an office tool to help with my job at the time I was still studying in the academy.",
        stack: ["JavaScript", "JQuery", "CSS"],
    },
];
