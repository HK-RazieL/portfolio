import { ProjectType } from "@/components/ProjectCard/ProjectCard";

export const projects: ProjectType[] = [
    {
        title: "Design Builder",
        link: "https://designbuilder.app",
        image: "/images/projects/design-builder.png",
        description:
            "A design builder that helps visualize creation of templates for products in a business that provides digital prints to customers. The designs are stored in a database and then based on the specific design created in a different manner of ways.",
        stack: [
            "NextJS",
            "TailwindCSS",
            "Firebase",
            "Supabase",
            "Cloudinary",
            "Playwright",
            "Fedora",
        ],
    },
    {
        title: "Parentally",
        link: "https://parentally.nl",
        image: "/images/projects/parentally.png",
        description:
            "A platform for healthcare professionals to provide services, book hours and connect with customers.",
        stack: ["NextJS", "TailwindCSS", "Firebase", "NodeJS"],
    },
    {
        title: "Office Templating Tool",
        link: "https://hk-raziel.github.io/Office-templating-tool/",
        github: "https://github.com/HK-RazieL/Office-templating-tool",
        image: "/images/projects/office-templating-tool.png",
        description:
            "This is the first project I created while still studying at the academy. It's an office tool to help with my job at the time. Due to constraints, it was entirely made with basic Windows 8 Notepad",
        stack: ["JavaScript", "JQuery", "CSS"],
    },

    {
        title: "Tuttifruty Shopen",
        github: "https://github.com/HK-RazieL/tuttifrutti-shopen",
        image: "/images/projects/tuttifruty-shopen.png",
        description:
            "A simple online store made for a job assignment that involved front-end and back-end with mongodb database and some basic authetnication.",
        stack: ["React", "MongoDB", "Redux", "NodeJS", "Express"],
    },
    {
        title: "Docker Infrastructure",
        github: "https://github.com/HK-RazieL/docker-infrastructure",
        image: "/images/projects/docker-infrastructure.png",
        description:
            "I made a template for starting projects with this stack. The idea is to run 3 docker containers for front-end, back-end and database respectively, all connected in a network, with a simple script.",
        stack: ["React", "NodeJS", "Docker", "MySQL"],
    },
];
