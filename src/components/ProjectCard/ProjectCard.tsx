import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";

export type ProjectType = {
    image: string;
    title: string;
    link: string;
    description: string;
    stack: string[];
};

export default function ProjectCard({
    image,
    title,
    link,
    description,
    stack,
}: ProjectType) {
    return (
        <div>
            <Image src={image} height="200" width="300" alt={title} />
            <div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-h2 capitalize">{title}</h2>
                    <p className="text-secondary text-sm">{description}</p>
                    <div className="space-x-2 text-xs">
                        {stack.map((tech) => (
                            <Tag tag={tech} key={title + tech} />
                        ))}
                    </div>
                </div>
                <Link href={link} target="_blank">
                    <Image
                        src="/icons/link-icon.png"
                        height="100"
                        width="100"
                        alt={`Link to ${title}`}
                    />
                </Link>
            </div>
        </div>
    );
}
