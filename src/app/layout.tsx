"use client";

import "./globals.css";
// import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { forwardRef, useEffect, useRef } from "react";

// const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            // If user has scrolled down by 50px or more, convert navRef data shrink attribute to true
            navRef.current?.setAttribute("data-shrink", `${window.scrollY >= 50}`);
        });
    }, []);

    return (
        <html lang="en">
            <body
                className={
                    jetBrainsMono.className +
                    ` bg-gray-800 text-gray-400 px-6 md:px-8 lg:px-16
                     mt-28 lg:mt-32 tracking-tight
                     overflow-x-hidden`
                }>
                <NavBar ref={navRef}>
                    {/* Name */}
                    <NavItem>
                        {/* T. A. */}
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold">T. A.</h1>
                            {/* TA-800 */}
                            <span
                                className={`w-fit h-[14px] flex items-center group-data-[shrink=true]:h-0 overflow-hidden transition-all duration-700`}>
                                <span className="text-sm opacity-75">TA-800</span>
                            </span>
                            {/* TheWeakNinja */}
                            <span
                                className={`w-fit h-[14px] lg:flex items-center group-data-[shrink=true]:h-0 overflow-hidden transition-all duration-300
                                            hidden`}>
                                <span className="text-xs opacity-50">TheWeakNinja</span>
                            </span>
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
