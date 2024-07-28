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
                note: "560px",
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
                appearFromLeft1: "appearFromLeft .25s ease-in-out",
                appearFromLeft2: "appearFromLeft .5s ease-in-out",
                appearFromLeft3: "appearFromLeft .75s ease-in-out",
                appearFromLeft4: "appearFromLeft 1s ease-in-out",
                appearFromLeft5: "appearFromLeft 1.25s ease-in-out",
                appearFromTop1: "appearFromTop .25s ease-in-out",
                appearFromTop2: "appearFromTop .5s ease-in-out",
                appearFromTop3: "appearFromTop .75s ease-in-out",
                appearFromTop4: "appearFromTop 1s ease-in-out",
                appearFromTop5: "appearFromTop 1.25s ease-in-out",
                appearFromRight1: "appearFromRight .25s ease-in-out",
                appearFromRight2: "appearFromRight .5s ease-in-out",
                appearFromRight3: "appearFromRight .75s ease-in-out",
                appearFromRight4: "appearFromRight 1s ease-in-out",
                appearFromRight5: "appearFromRight 1.25s ease-in-out",
                appearFromBottom1: "appearFromBottom .25s ease-in-out",
                appearFromBottom2: "appearFromBottom .5s ease-in-out",
                appearFromBottom3: "appearFromBottom .75s ease-in-out",
                appearFromBottom4: "appearFromBottom 1s ease-in-out",
                appearFromBottom5: "appearFromBottom 1.25s ease-in-out",
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
