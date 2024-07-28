"use client";

import Image from "next/image";
import Link from "next/link";

const usedTechnologies = [
    "js",
    "ts",
    "tailwind",
    "nextjs",
    "react",
    "jquery",
    "git",
    "nodejs",
    "firebase",
    "docker",
    "mongodb",
    "mysql",
];

export default function HeroSection() {
    return (
        <div className="grid grid-cols-3 grid-rows-3 justify-center gap-2 p-6 max-w-[850px]">
            <div className="col-span-2 row-span-1 border border-secondary rounded-xl p-4 animate-appearFromLeft space-y-2">
                <h2 className="text-primary text-h2">Who am I?</h2>
                <p className="text-secondary">
                    Hello, my name is Stanislav Angelkov (Stanley), I am a Full
                    Stack Developer with affinity for different technologies. I
                    am passionate about creating software solutions and I am
                    always looking for new challenges. If you have a project
                    that you would like to work on, feel free to contact me.
                </p>
            </div>
            <div className="col-span-1 row-span-2 border border-secondary rounded-xl p-4 animate-appearFromTop">
                Full-Stack Developer
            </div>
            <Link href="https://github.com/HK-RazieL" target="_blank">
                <div className="relative flex justify-center items-center text-center flex-col col-start-2 border border-secondary rounded-xl p-4 animate-appearFromCenter hover:bg-gray-900 hover:scale-[1.02] transform ease-in-out duration-500">
                    <Image
                        src="/images/Raziel.jpg"
                        alt="avatar"
                        width="100"
                        height="100"
                        className="rounded-full h-[100px] object-cover"
                    />
                    <h1 className="text-h1 text-primary">Stanislav Angelkov</h1>
                </div>
            </Link>
            <div className="row-start-2 col-span-1 row-span-2 border border-secondary rounded-xl p-4 animate-appearFromBottom space-y-4">
                <h2 className="text-primary text-h2 text-center">
                    Technologies I have worked with
                </h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    {usedTechnologies.map((technology) => (
                        <Image
                            src={`/icons/${technology}-icon.png`}
                            alt={`${technology}-icon`}
                            objectFit="fill"
                            width="40"
                            height="40"
                            key={technology}
                        />
                    ))}
                </div>
            </div>
            <div className="col-start-2 col-span-2 row-span-1 border border-secondary rounded-xl p-4 animate-appearFromRight">
                <h2 className="text-h2 text-primary">Education</h2>
                <ul className="space-y-2">
                    <li>
                        <h5 className="text-h5 text-primary">Academy</h5>
                        <p className="text-secondary">
                            Software Academy SoftUni
                        </p>
                    </li>
                    <li>
                        <h5 className="text-h5 text-primary">High School</h5>
                        <p className="text-secondary">
                            Specialized High School for IT and Informatics
                            Academician Petko Staynov
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
