"use client";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { forwardRef, useEffect, useRef } from "react";
import ninjaPic from "../../public/ninja.png";
import Image from "next/image";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // For navbar shrink effect
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            // If user has scrolled down by 50px or more, convert navRef data shrink attribute to true
            navRef.current!.setAttribute("data-shrink", `${window.scrollY >= 50}`);
        });
    }, []);

    return (
        <html lang="en">
            <head>
                {/* Title: TA-800 Profile */}
                <title>TA-800 Profile</title>
                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Taher Ali's portfolio." />
            </head>
            <body
                className={
                    robotoMono.className +
                    ` bg-gray-800 text-gray-400
                        px-6 md:px-8 lg:px-16 mt-28 lg:mt-32 tracking-tight leading-relaxed overflow-x-hidden`
                }>
                <NavBar ref={navRef}>
                    {/* Name and Ninja Icon */}
                    <NavItem>
                        {/* Container for name + ninja */}
                        <div className="flex flex-row items-center gap-2 group-data-[shrink=true]:gap-0 transition-all duration-300">
                            {/* Name */}
                            <div className="flex flex-col">
                                {/* T. A. */}
                                <h1 className="text-xl font-bold">T. A.</h1>
                                {/* TA-800 */}
                                <span
                                    className={`w-fit grid grid-rows-[1fr] group-data-[shrink=true]:grid-rows-[0fr] transition-all duration-300 group-data-[shrink=false]:duration-700`}>
                                    <span className="overflow-hidden text-sm opacity-75">TA-800</span>
                                </span>
                                {/* TheWeakNinja */}
                                <span
                                    className={`w-fit lg:grid grid-rows-[1fr] group-data-[shrink=true]:grid-rows-[0fr] transition-all duration-700 group-data-[shrink=false]:duration-300
                                                hidden`}>
                                    <span className="overflow-hidden text-xs opacity-50">TheWeakNinja</span>
                                </span>
                            </div>
                            {/* Ninja Icon */}
                            <Image
                                src={ninjaPic}
                                alt="Ninja Icon"
                                className="w-12 group-data-[shrink=true]:scale-75 group-data-[shrink=true]:opacity-60 transition duration-300"
                            />
                        </div>
                    </NavItem>
                    {/* Menu icon SVG */}
                    <NavItem className="ml-auto">
                        <button className={`bg-gray-800 rounded-sm py-2 px-3 hover:bg-gray-700 transition`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </NavItem>
                </NavBar>
                {children}
                <Footer />
            </body>
        </html>
    );
}

const NavBar = forwardRef<HTMLUListElement, { children: React.ReactNode }>(function NavBar({ children }, navRef) {
    return (
        <nav>
            <ul
                ref={navRef}
                data-shrink="false"
                className={`fixed z-50 top-0 left-0 bg-black/50 backdrop-blur-xl backdrop-filter border-b-2 border-white/20
                            w-full px-6 md:px-8 lg:px-16
                            flex flex-row items-center
                            h-24 lg:h-28 data-[shrink=true]:h-20 lg:data-[shrink=true]:h-24
                            transition-[height] duration-700
                            group`}>
                {children}
            </ul>
        </nav>
    );
});

function NavItem({ className, children }: { className?: string; children: React.ReactNode }) {
    return <li className={className}>{children}</li>;
}

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-2">
            <span className="text-xs opacity-50 whitespace-nowrap">© 2023 Taher Ali. Portfolio Version 1.</span>
        </footer>
    );
}
