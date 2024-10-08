import Image from "next/image";
import Link from "next/link";

export default function ContactCard() {
    return (
        <div className="max-tablet:flex max-tablet:flex-col tablet:grid grid-cols-3 gap-2 text-white">
            <Link
                href="mailto:stan.angelkov@gmail.com"
                className="bg-gray-900 h-[180px] p-6 rounded-xl col-span-2 flex justify-center items-center hover:bg-gray-800 animate-appearFromLeft2 tablet:animate-appearFromRight2"
            >
                <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-xl">
                    <Image
                        alt="github"
                        src="/icons/envelop-icon.png"
                        width="30"
                        height="30"
                    />
                    stan.angelkov@gmail.com
                </div>
            </Link>
            <Link
                href="https://github.com/HK-RazieL"
                target="_blank"
                className="bg-gray-900 p-6 h-[180px] rounded-xl col-span-2 justify-center flex flex-col items-center hover:bg-gray-800 animate-appearFromRight2 tablet:animate-appearFromTop2"
            >
                <Image
                    alt="github"
                    src="/icons/github-icon.png"
                    width="50"
                    height="50"
                />
                <h2 className="text-h2">Github Profile</h2>
                <h2 className="text-secondary">Find more of my repositories</h2>
            </Link>
            <Link
                href="https://www.linkedin.com/in/stanislav-angelkov-191a1484/"
                target="_blank"
                className="bg-gray-900 max-tablet:h-[200px] tablet:w-[200px] p-6 rounded-xl row-span-2 row-start-1 col-start-3 flex items-center justify-center hover:bg-gray-800 animate-appearFromBottom2 tablet:animate-appearFromLeft2"
            >
                <Image
                    alt="github"
                    src="/icons/linkedin-icon.png"
                    width="50"
                    height="50"
                />
            </Link>
        </div>
    );
}
