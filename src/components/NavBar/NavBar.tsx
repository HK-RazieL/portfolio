"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useRef, useState } from "react";

type ButtonType = {
    location: string;
    value: string;
};

type PositionType = {
    left: number;
    width: number;
    opacity: number;
};

const buttons: ButtonType[] = [
    {
        location: "/",
        value: "home",
    },
    {
        location: "/projects",
        value: "projects",
    },
    {
        location: "/contact",
        value: "contact",
    },
];

export default function NavBar() {
    const [position, setPosition] = useState<PositionType>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <div className="text-white p-6 relative">
            <div className="bg-gray-800 p-1 rounded-xl gap-4 flex">
                {buttons.map((button) => (
                    <Button
                        setPosition={setPosition}
                        {...button}
                        key={button.value}
                    />
                ))}
                <Pointer position={position} />
            </div>
        </div>
    );
}

const Button = ({
    location,
    value,
    setPosition,
}: ButtonType & {
    setPosition: React.Dispatch<SetStateAction<PositionType>>;
}) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (ref.current?.pathname === pathname) {
            setTimeout(() => {
                setCurrentPosition(ref, setPosition);
            }, 100);
        }
    }, [ref, pathname]);

    return (
        <Link
            ref={ref}
            href={location}
            className={`p-3 rounded-xl z-10 capitalize `}
            onClick={() => {
                if (!ref) return;
                setCurrentPosition(ref, setPosition);
            }}
        >
            {value}
        </Link>
    );
};

const Pointer = ({ position }: { position: PositionType }) => {
    return (
        <motion.a
            className="bg-gray-600 absolute z-0 h-[50px] rounded-xl"
            animate={position}
        />
    );
};

const setCurrentPosition = (
    ref: React.RefObject<HTMLAnchorElement>,
    setPosition: React.Dispatch<SetStateAction<PositionType>>
) => {
    const { width } = ref?.current?.getBoundingClientRect()!;

    setPosition({
        left: ref.current?.offsetLeft ?? 0,
        width,
        opacity: 1,
    });
};
