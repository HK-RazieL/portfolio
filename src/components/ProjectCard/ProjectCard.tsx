import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";

export type ProjectType = {
    image: string;
    title: string;
    link: string;
    description: string;
    stack: string[];
    index?: number;
};

export default function ProjectCard({
    image,
    title,
    link,
    description,
    stack,
    index,
}: ProjectType) {
    return (
        <div className="flex flex-col tablet:flex-row items-center justify-center gap-2">
            <Image
                src={image}
                height="200"
                width="300"
                alt={title}
                className="animate-appearFromCenter"
            />
            <div className="tablet:w-1/2 flex flex-col gap-4 max-tablet:px-6">
                <div
                    className={`flex flex-col gap-4 bg-gray-950 rounded-xl p-4 animate-appearFromRight2`}
                >
                    <h2 className="text-white text-h2 capitalize">{title}</h2>
                    <p className="text-secondary text-sm">{description}</p>
                    <div className="text-xs flex-wrap flex gap-2">
                        {stack.map((tech) => (
                            <Tag tag={tech} key={title + tech} />
                        ))}
                    </div>
                </div>
                <Link
                    href={link}
                    target="_blank"
                    className="bg-gray-950 rounded-xl hover:bg-gray-800 flex items-center justify-center p-4"
                >
                    <Image
                        src="/icons/link-icon.png"
                        height="30"
                        width="30"
                        alt={`Link to ${title}`}
                    />
                </Link>
            </div>
        </div>
    );
}
