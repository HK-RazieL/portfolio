import { ProjectType } from "@/components/ProjectCard/ProjectCard";

export const projects: ProjectType[] = [
    {
        title: "Tuttifruty Shopen",
        link: "https://github.com/HK-RazieL/tuttifrutti-shopen",
        image: "/images/projects/tuttifruty-shopen.png",
        description:
            "A simple online store made for a job assignment that involved front-end and back-end with mongodb database and some basic authetnication.",
        stack: ["React", "MongoDB", "Redux", "NodeJS", "Express"],
    },
    {
        title: "Docker Infrastructure",
        link: "https://github.com/HK-RazieL/docker-infrastructure",
        image: "/images/projects/docker-infrastructure.png",
        description:
            "I made a template for starting projects with this stack. The purpose is to run 3 docker containers for front-end, back-end and database respectively with a simple script.",
        stack: ["React", "NodeJS", "Docker", "MySQL"],
    },
    {
        title: "Office Templating Tool",
        link: "https://github.com/HK-RazieL/Office-templating-tool",
        image: "/images/projects/office-templating-tool.png",
        description:
            "This is the first thing I made while still studying at the academy. An office tool to help with my job at the time. Due to constraints it was entirely made with basic windows 8 notepad",
        stack: ["JavaScript", "JQuery", "CSS"],
    },
];
