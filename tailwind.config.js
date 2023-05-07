/** @type {import('tailwindcss').Config} */

// For dynamic utility
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        screens: {
            xs: "348px",
            // => @media (min-width: 320px)
            sm: "640px",
            // => @media (min-width: 640px)
            md: "768px",
            // => @media (min-width: 768px)
            lg: "1024px",
            // => @media (min-width: 1024px)
            xl: "1280px",
            // => @media (min-width: 1280px)
            "2xl": "1536px",
            // => @media (min-width: 1536px)
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    debug: (value) => ({
                        // Should produce outline outline-blue-500 with width being the value
                        outline: `${value} solid ${theme("colors.blue.500")}`,
                    }),
                },
                {
                    // Values accepted by debug - should be same as outline-width
                    values: {
                        1: "1px",
                        2: "2px",
                        3: "3px",
                        4: "4px",
                        8: "8px",
                    },
                }
            );
        }),
    ],
};
