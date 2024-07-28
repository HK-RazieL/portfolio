"use client";

import Image from "next/image";
import Link from "next/link";

const usedTechnologies = [
    "javascript",
    "typescript",
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
        <div className="note:grid note:grid-cols-3 note:grid-rows-3 justify-center max-note:space-y-4 note:gap-2 p-6 note:max-w-[850px]">
            <div className="note:col-span-2 note:row-span-1 border border-secondary rounded-xl p-4 animate-appearFromLeft2 space-y-2">
                <h2 className="text-primary text-h2">Who am I?</h2>
                <p className="text-secondary">
                    Hello, my name is Stanislav Angelkov (Stanley), I am a Full
                    Stack Developer with affinity for different technologies. I
                    am passionate about creating software solutions and I am
                    always looking for new challenges. If you have a project
                    that you would like to work on, feel free to contact me.
                </p>
            </div>
            <div className="note:col-span-1 note:row-span-2 border border-secondary rounded-xl p-4 animate-appearFromLeft2 note:animate-appearFromTop2 transition delay-[1000ms]">
                <h2 className="text-h2 text-primary">Previous Employers</h2>
                <div className="space-y-4">
                    <Link
                        href="https://www.codelevate.com/"
                        target="_blank"
                        className="flex gap-2 items-center text-primary"
                    >
                        <Image
                            src="/codelevate-logo.jpg"
                            alt="Codelevate logo"
                            height="50"
                            width="50"
                        />
                        Codelevate
                    </Link>
                    <Link
                        href="https://www.softserveinc.com/en-us"
                        target="_blank"
                        className="flex gap-2 items-center text-primary"
                    >
                        <Image
                            src="/softserve-logo.jpg"
                            alt="SoftServe logo"
                            height="50"
                            width="50"
                        />
                        SoftServe
                    </Link>
                    <Link
                        href="https://www.akkodis.com/"
                        target="_blank"
                        className="flex gap-2 items-center text-primary"
                    >
                        <Image
                            src="/modis-logo.jpg"
                            alt="Modis logo"
                            height="50"
                            width="50"
                        />
                        Modis (Adecco group)
                    </Link>
                    <Link
                        href="https://www.isimarkets.com/"
                        target="_blank"
                        className="flex gap-2 items-center text-primary"
                    >
                        <Image
                            src="/isi-emerging-markets-group-logo.jpg"
                            alt="ISI Emerging Markets Group logo"
                            height="50"
                            width="50"
                        />
                        ISI Emerging Markets Group (CEIC)
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center items-center text-center flex-col col-start-2 border border-secondary rounded-xl animate-appearFromLeft3 note:animate-appearFromCenter hover:bg-gray-900 hover:scale-[1.02] transform ease-in-out duration-500 p-0">
                <Link
                    href="https://github.com/HK-RazieL"
                    target="_blank"
                    className="w-full h-full p-4 flex flex-col items-center justify-center"
                >
                    <Image
                        src="/images/Raziel.jpg"
                        alt="avatar"
                        width="100"
                        height="100"
                        className="rounded-full h-[100px] object-cover"
                    />
                    <h1 className="text-h1 text-primary">Stanislav Angelkov</h1>
                </Link>
            </div>
            <div className="row-start-2 col-span-1 row-span-2 border border-secondary rounded-xl p-4 animate-appearFromLeft4 note:animate-appearFromBottom2 space-y-4">
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
                            title={technology}
                        />
                    ))}
                </div>
            </div>
            <div className="col-start-2 col-span-2 row-span-1 border border-secondary rounded-xl p-4 animate-appearFromLeft5 note:animate-appearFromRight2">
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
