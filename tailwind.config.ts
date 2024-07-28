import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                desktop: "1025px",
                laptop: "1024px",
                tablet: "768px",
                xsm: "480px",
            },
            colors: {
                primary: "#0891b2",
                secondary: "#6b7280",
            },
            fontSize: {
                h1: ["28px", { lineHeight: "140%", fontWeight: "500" }],
                h2: ["24px", { lineHeight: "140%", fontWeight: "500" }],
                h3: ["20px", { lineHeight: "140%", fontWeight: "500" }],
                h4: ["18px", { lineHeight: "140%", fontWeight: "500" }],
                h5: ["16px", { lineHeight: "140%", fontWeight: "600" }],
            },
            animation: {
                appearFromLeft: "appearFromLeft .75s ease-in-out",
                appearFromTop: "appearFromTop .75s ease-in-out",
                appearFromRight: "appearFromRight .75s ease-in-out",
                appearFromBottom: "appearFromBottom .75s ease-in-out",
                appearFromCenter: "appearFromCenter 1s ease-in-out",
            },
            keyframes: {
                appearFromLeft: {
                    "0%": { transform: "translateX(-200px)", opacity: "0" },
                    "100%": { transform: "translateX(0px)", opacity: "1" },
                },
                appearFromTop: {
                    "0%": { transform: "translateY(-200px)", opacity: "0" },
                    "100%": { transform: "translateY(0px)", opacity: "1" },
                },
                appearFromRight: {
                    "0%": { transform: "translateX(200px)", opacity: "0" },
                    "100%": { transform: "translateX(0px)", opacity: "1" },
                },
                appearFromBottom: {
                    "0%": { transform: "translateY(200px)", opacity: "0" },
                    "100%": { transform: "translateY(0px)", opacity: "1" },
                },
                appearFromCenter: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
