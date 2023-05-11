"use client";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import React, { forwardRef, useEffect, useRef, useState } from "react";
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
    // Create a ref that can be used to check if menu is open
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <Menu as="div" className="relative">
            {({ open }: { open: boolean }) => {
                return (
                    <>
                        <Menu.Button>
                            <div className="bg-gray-800 rounded-sm p-3 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300">
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
                                // Entire Menu container
                                <motion.div
                                    key="menu-container"
                                    ref={menuRef}
                                    initial={{
                                        outlineWidth: "0px",
                                        opacity: 0,
                                        y: -20,
                                        height: 0,
                                    }}
                                    animate={{
                                        outlineWidth: "3px",
                                        opacity: 1,
                                        y: 0,
                                        height: menuState === "none" ? "200px" : "132px",
                                    }}
                                    exit={{
                                        outlineWidth: "0px",
                                        opacity: 0.5,
                                        y: -5,
                                        height: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.25,
                                        mass: 0.5,
                                        damping: 13,
                                    }}
                                    className={`absolute top-full right-0 w-[136px] z-50 bg-gray-900 overflow-clip rounded-sm outline outline-gray-600/50`}>
                                    {/* <AnimatePresence> */}
                                    {menuState === "none" && (
                                        <AnimatedMenu menuRef={menuRef} key="none">
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
                                                Contact
                                            </StylizedMenuItem>
                                            <StylizedMenuItem>Credits</StylizedMenuItem>
                                        </AnimatedMenu>
                                    )}
                                    {menuState === "experience" && (
                                        <AnimatedMenu menuRef={menuRef} key="experience" isSub>
                                            <StylizedMenuItem onClick={(e) => setMenuState("none")}>Skills</StylizedMenuItem>
                                            <StylizedMenuItem onClick={(e) => setMenuState("none")}>Projects</StylizedMenuItem>
                                            <StylizedMenuItem
                                                back
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setMenuState("none");
                                                }}
                                            />
                                        </AnimatedMenu>
                                    )}
                                    {menuState === "contact" && (
                                        <AnimatedMenu menuRef={menuRef} key="contact" isSub>
                                            <StylizedMenuItem onClick={(e) => setMenuState("none")}>Socials</StylizedMenuItem>
                                            <StylizedMenuItem onClick={(e) => setMenuState("none")}>Form</StylizedMenuItem>
                                            <StylizedMenuItem
                                                back
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setMenuState("none");
                                                }}
                                            />
                                        </AnimatedMenu>
                                    )}
                                    {/* </AnimatePresence> */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                );
            }}
        </Menu>
    );
}

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
          children?: string;
          className?: never;
          onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
      };

function StylizedMenuItem(props: StylizedMenuItemProps) {
    if (props.back) {
        return (
            <Menu.Item>
                {({ active }) => (
                    <button
                        onClick={props.onClick}
                        className={`w-full px-2 py-1 ${active ? "bg-gray-700" : "bg-gray-900"} ` + (props.className ?? "")}>
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
                    onClick={props.onClick}
                    className={`w-full text-center py-3 px-5 ${active ? "bg-gray-700" : "bg-gray-900"} ` + props.className}>
                    {props.children}
                </button>
            )}
        </Menu.Item>
    );
}

function AnimatedMenu({
    // menuOpen,
    isSub,
    menuRef,
    children,
}: {
    // menuOpen: boolean;
    isSub?: boolean;
    menuRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
}) {
    const subVariant = {
        initial: {
            // Animate from the right only if menu is still open, else no animation
            x: menuRef.current ? "100%" : "0%",
        },
        animate: {
            x: "0%",
        },
        // exit: {
        //     // Animate to the right only if menu is still open, else no animation
        //     x: menuOpen ? "100%" : "0%",
        // },
    };

    const mainVariant = {
        initial: {
            // Animate from the left only if menu is still open, else no animation
            x: menuRef.current ? "-100%" : "0%",
        },
        animate: {
            x: "0%",
        },
        // exit: {
        //     // Animate to the left only if menu is still open, else no animation
        //     x: menuOpen ? "-100%" : "0%",
        // },
    };

    useEffect(() => {
        return () => {
            console.log("Unmounting");
        };
    }, []);

    return (
        <Menu.Items
            as={motion.div}
            variants={isSub ? subVariant : mainVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.5,
                type: "spring",
                mass: 0.4,
            }}
            // Need absolute positioning to prevent glitchy animation due to layout shift (when new component is added to DOM, it shifts the layout)
            // className={`absolute ${isSub ? "bg-gray-300" : "bg-black"}`}
            static>
            {children}
        </Menu.Items>
    );
}

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-2">
            <span className="text-xs opacity-50 whitespace-nowrap">© 2023 Taher Ali. Portfolio Version 1.</span>
        </footer>
    );
}
