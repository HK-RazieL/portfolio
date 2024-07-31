import NavBar from "@/components/NavBar/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Stanislav Angelkov",
    description: "Stanislav Angelkov Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            style={{
                display: "inline-block",
                background:
                    "linear-gradient(153deg, rgba(0,0,0,1) 0%, rgba(0,0,54,1) 99%, rgba(2,2,83,1) 100%)",
                height: "100%",
            }}
        >
            <body
                className={
                    inter.className +
                    " flex flex-col justify-center items-center pt-4 text-white"
                }
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
