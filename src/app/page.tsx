"use client";

import { Inter } from "next/font/google";
import { motion, MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <div className="flex flex-col gap-20 justify-center items-center h-screen -mt-28">
                <hgroup className="flex flex-col gap-2">
                    <p
                        className={
                            inter.className +
                            ` lg:text-6xl md:text-5xl text-3xl font-extrabold text-center text-gray-300 tracking-tight`
                        }>
                        Full-Stack Web Developer
                    </p>
                    <p className="text-center">Want to bring an idea to life? I could help you with that.</p>
                </hgroup>
                <button className="bg-blue-700 py-2 px-4 w-fit rounded-sm text-gray-100">Lets Talk!</button>
            </div>
            <br />
            <Section>
                <MarqueeHeader title="About Me" headerDelay={0}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 scale-[2]">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <p>
                    Culpa labore dolor amet ullamco velit magna proident cillum irure ut aliquip quis ut sint. Exercitation
                    incididunt veniam qui tempor dolor tempor. Esse voluptate dolore voluptate enim. Amet esse consectetur ipsum
                    magna anim pariatur consequat aliqua in ea nulla.
                </p>
                <br />
                <p>
                    Cillum cillum sint qui elit cillum aliqua. Pariatur aliqua proident aliqua exercitation ullamco tempor cillum.
                    Nostrud elit aliqua nisi deserunt. Velit commodo amet qui nulla duis ex culpa.
                </p>
            </Section>
            <Section>
                <MarqueeHeader title="Experience" headerDelay={Math.random() * 1.5}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 scale-[2]">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <p>
                    Culpa labore dolor amet ullamco velit magna proident cillum irure ut aliquip quis ut sint. Exercitation
                    incididunt veniam qui tempor dolor tempor. Esse voluptate dolore voluptate enim. Amet esse consectetur ipsum
                    magna anim pariatur consequat aliqua in ea nulla.
                </p>
                <br />
                <p>
                    Cillum cillum sint qui elit cillum aliqua. Pariatur aliqua proident aliqua exercitation ullamco tempor cillum.
                    Nostrud elit aliqua nisi deserunt. Velit commodo amet qui nulla duis ex culpa.
                </p>
            </Section>
            <Section>
                <MarqueeHeader title="Contact Me" headerDelay={Math.random() * 1.5}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 scale-[2]">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <p>
                    Culpa labore dolor amet ullamco velit magna proident cillum irure ut aliquip quis ut sint. Exercitation
                    incididunt veniam qui tempor dolor tempor. Esse voluptate dolore voluptate enim. Amet esse consectetur ipsum
                    magna anim pariatur consequat aliqua in ea nulla.
                </p>
                <br />
                <p>
                    Cillum cillum sint qui elit cillum aliqua. Pariatur aliqua proident aliqua exercitation ullamco tempor cillum.
                    Nostrud elit aliqua nisi deserunt. Velit commodo amet qui nulla duis ex culpa.
                </p>
            </Section>
        </main>
    );
}

// Reference: https://ryanmulligan.dev/blog/css-marquee/
function MarqueeHeader({ title, headerDelay, children }: { title: string; headerDelay: number; children?: React.ReactNode }) {
    return (
        <MotionConfig
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: headerDelay,
            }}>
            <div
                className={`border-2 border-red-500
                         flex gap-[--gap] overflow-hidden`}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <motion.ul
                        key={index}
                        initial={{ x: "0%" }}
                        animate={{ x: "calc(-100% - var(--gap))" }}
                        className={`border-2 border-blue-500
                            flex shrink-0 justify-around min-w-full gap-[--gap]`}>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <li
                                key={index}
                                className="flex flex-row items-center gap-4 shrink-0 text-5xl font-black text-gray-300">
                                {title}
                                {children}
                            </li>
                        ))}
                    </motion.ul>
                ))}
            </div>
        </MotionConfig>
    );
}

function Section({ children }: { children: React.ReactNode }) {
    return <section className="min-h-screen">{children}</section>;
}
