"use client";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { forwardRef, useEffect, useRef, useState } from "react";
import ninjaPic from "../../public/ninja.png";
import Image from "next/image";

// Headless UI Menu
import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

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
                        <MenuDropdown />
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

function MenuDropdown() {
    // Menu states = "experience", "contact"
    const [menuState, setMenuState] = useState<"experience" | "contact" | "none">("none");

    function resetMenuToMain() {
        setMenuState("none");
    }

    return (
        <Menu as="div" className="relative">
            {({ open }: { open: boolean }) => (
                <>
                    <Menu.Button>
                        <div className="bg-gray-800 rounded-sm p-3">
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
                        </div>
                    </Menu.Button>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    height: menuState === "none" ? "150px" : "132px",
                                }}
                                exit={{
                                    opacity: 0.25,
                                    y: -10,
                                    height: 0,
                                }}
                                className="absolute top-full right-1/2 w-[136px] z-50 bg-gray-900 overflow-hidden">
                                {menuState === "none" && (
                                    <Menu.Items as={motion.div} static>
                                        <StylizedMenuItem>About Me</StylizedMenuItem>
                                        <StylizedMenuItem
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setMenuState("experience");
                                            }}>
                                            Experience
                                        </StylizedMenuItem>
                                        <StylizedMenuItem
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setMenuState("contact");
                                            }}>
                                            Contact Me
                                        </StylizedMenuItem>
                                    </Menu.Items>
                                )}
                                {menuState === "experience" && (
                                    <Menu.Items as={motion.div} static>
                                        <StylizedMenuItem onClick={resetMenuToMain}>Skills</StylizedMenuItem>
                                        <StylizedMenuItem onClick={resetMenuToMain}>Projects</StylizedMenuItem>
                                        <StylizedMenuItem back resetMenuToMain={resetMenuToMain} />
                                    </Menu.Items>
                                )}
                                {menuState === "contact" && (
                                    <Menu.Items as={motion.div} static>
                                        <StylizedMenuItem onClick={resetMenuToMain}>My Socials</StylizedMenuItem>
                                        <StylizedMenuItem onClick={resetMenuToMain}>Email Form</StylizedMenuItem>
                                        <StylizedMenuItem back resetMenuToMain={resetMenuToMain} />
                                    </Menu.Items>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Menu>
    );
}

// StylizedMenuItems props = it can either accept children, onClick or only back (boolean) prop, but not both (className can be used both ways)
type StylizedMenuItemProps =
    | {
          children: React.ReactNode;
          className?: string;
          onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
          back?: never;
          resetMenuToMain?: never;
      }
    | {
          back: true;
          resetMenuToMain: () => void;
          children?: string;
          className?: never;
          onClick?: never;
      };

function StylizedMenuItem(props: StylizedMenuItemProps) {
    // Function to allow enter and space key to simulate a click on the button (for the menu items that bring up submenus)
    function simulateClickOnKeydown(event: React.KeyboardEvent<HTMLButtonElement>) {
        console.log("Hi");
        console.log(event.key);
    }

    if (props.back) {
        return (
            <Menu.Item>
                {({ active }) => (
                    <button
                        onKeyDownCapture={() => console.log("Hi")}
                        onClick={(e) => {
                            e.preventDefault();
                            props.resetMenuToMain();
                        }}
                        className={
                            `w-full flex justify-end px-2 py-1 ${active ? "bg-gray-700" : "bg-gray-900"} ` + props.className
                        }>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </button>
                )}
            </Menu.Item>
        );
    }

    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onKeyDown={simulateClickOnKeydown}
                    onClick={props.onClick}
                    className={`w-full text-center py-3 px-5 ${active ? "bg-gray-700" : "bg-gray-900"} ` + props.className}>
                    {props.children}
                </button>
            )}
        </Menu.Item>
    );
}

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-2">
            <span className="text-xs opacity-50 whitespace-nowrap">© 2023 Taher Ali. Portfolio Version 1.</span>
        </footer>
    );
}
