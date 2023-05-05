"use client";

import { Open_Sans } from "next/font/google";
import { motion, MotionConfig } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import eruditionPic from "../../public/erudition.png";
import mousemagnetPic from "../../public/mousemagnet.png";
import rtcappPic from "../../public/rtcapp.png";
import wordlePic from "../../public/wordle.png";
import { useState } from "react";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
    const headerWords = ["FULL-STACK", "WEB DEVELOPER"];

    return (
        <main>
            <div className="flex flex-col gap-20 justify-center items-center h-screen -mt-28 lg:-mt-24">
                <hgroup className="flex flex-col gap-2">
                    {headerWords.map((word, index) => (
                        <AnimatedHeader text={word} delay={index * 0.25} />
                    ))}
                    <p className="text-center">Want to bring a website idea to life? I could help you with that.</p>
                </hgroup>
                <button className="btn btn-primary">Lets Talk!</button>
            </div>
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
                    Hello! My name is
                    <Highlight bgColor="magenta" txtColor="cyan" space="left">
                        Taher Ali
                    </Highlight>
                    , and I am an aspiring full-stack web developer currently studying in my second year at
                    <Highlight bgColor="peru" txtColor="yellow" space="left">
                        Wilfrid Laurier University
                    </Highlight>
                    .
                </p>
                <br />
                <p>
                    I started my journey into web development almost a year ago, and I have been exploring the exciting world of
                    React for the past 5-6 months. Although I have experience with both frontend and backend development, my
                    passion lies in creating beautiful and intuitive user interfaces.
                </p>
                <br />
                <p>
                    My interest in programming began when I took
                    <Highlight bgColor="firebrick" txtColor="darkseagreen" space="both">
                        CS50 Introduction to Computer Science
                    </Highlight>
                    and then continued with
                    <Highlight bgColor="firebrick" txtColor="darkseagreen" space="left">
                        CS50 Web Programming
                    </Highlight>
                    . I have also dabbled in game development using Unity, and I enjoy using my skills to create fun and silly
                    projects in my spare time.
                </p>
                <br />
                <p>
                    When I'm not coding, I enjoy listening to music, watching anime, making 2D animations with Flash / Animate,
                    and playing video games and volleyball 🏐. These activities help me to stay inspired and motivated in my work.
                </p>
                <br />
                <p>
                    Thank you for taking the time to get to know me a little better. I look forward to sharing my passion for web
                    development with you!
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
                    As a web developer, I love to explore the possibilities that different software and frameworks offer to build
                    a variety of projects. I'm constantly on the lookout for new and creative ways to use these tools to create
                    beautiful and functional web applications. Dive into some of my favorite tools that I've become proficient in,
                    and the exciting projects I've built with them.
                </p>
                <br />
                <p>
                    1. Put skills - tools/frameworks + other - first, then make carousel responsive - interchange width and height
                    on mobile
                </p>
                <br />
                <CardCarousel />
                <br />
                {/* Check on GitHub buttons */}
                <div className="flex flex-col gap-4 whitespace-nowrap">
                    <button className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Profile
                    </button>
                    <button className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        This on GitHub
                    </button>
                </div>
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
                    magna anim pariatur consequat aliqua in ea nulla. If you just wanna say hi, feel free to hit me up on{" "}
                    <Highlight space="left" bgColor="blue" txtColor="lightblue">
                        Discord
                    </Highlight>
                    .
                </p>
                <br />
                <p>
                    Cillum cillum sint qui elit cillum aliqua. Pariatur aliqua proident aliqua exercitation ullamco tempor cillum.
                    Nostrud elit aliqua nisi deserunt. Velit commodo amet qui nulla duis ex culpa.
                </p>
                <br />
                <p>My Socials and you can find me on Gmail, GitHub, LinkedIn, Discord.</p>
            </Section>
        </main>
    );
}

function AnimatedHeader({ text, delay }: { text: string; delay?: number }) {
    const wordItem = {
        hidden: {
            y: "100%",
            color: "rgba(255, 255, 255, 1)",
        },
        visible: {
            y: 0,
            color: "rgba(255, 255, 255, 0)",
        },
    };

    return (
        <div className={`flex flex-row overflow-hidden px-2 justify-center`}>
            <motion.div
                className={
                    inter.className +
                    ` xl:text-9xl lg:text-8xl md:text-7xl xs:text-4xl text-3xl font-extrabold tracking-tight
                    bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-600 to-indigo-200 
                    flex shrink-0 pr-2`
                }
                style={{
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
                }}
                variants={wordItem}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 1 + (delay ? delay * 1.5 : 0),
                    delay: delay ?? 0,
                    type: "spring",
                    bounce: 0.3,
                    color: {
                        duration: 1.5 + (delay ? delay * 1.5 : 0),
                        delay: delay ?? 0,
                    },
                }}>
                {text}
            </motion.div>
        </div>
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
                className={`border- border-red-500
                         flex gap-[--gap] overflow-hidden`}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <motion.ul
                        key={index}
                        aria-hidden={index > 1 ? "false" : "true"}
                        initial={{ x: "0%" }}
                        animate={{ x: "calc(-100% - var(--gap))" }}
                        className={`border- border-blue-500
                            flex shrink-0 justify-around min-w-full gap-[--gap]`}>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <li
                                key={index}
                                className="flex flex-row items-center gap-6 shrink-0 text-5xl font-black text-gray-300 select-none">
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
    return <section className="min-h-screen mb-12">{children}</section>;
}

function Highlight({
    bgColor,
    txtColor,
    space,
    children,
}: {
    bgColor: string;
    txtColor: string;
    space: "none" | "left" | "right" | "both";
    children: React.ReactNode;
}) {
    return (
        <>
            {space === "left" || space === "both" ? " " : ""}
            <span
                style={{
                    color: `${txtColor}`,
                    backgroundColor: bgColor,
                    borderBottom: `2px solid ${txtColor}`,
                    borderRadius: "4px",
                    padding: "1px 4px",
                }}>
                {children}
            </span>
            {space === "right" || space === "both" ? " " : ""}
        </>
    );
}

function CardCarousel() {
    // This parent component will hold information about which card is active
    // and will pass that information to the children
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
            <Card imgSrc={eruditionPic} title="Erudition" isActive={activeCard === 1} onClick={() => setActiveCard(1)}>
                Web app for students to manage study materials and assignments
            </Card>
            <Card imgSrc={rtcappPic} title="RTC Chatapp" isActive={activeCard === 2} onClick={() => setActiveCard(2)}>
                Real-time chat web app built with React and Supabase
            </Card>
            <Card imgSrc={mousemagnetPic} title="Mouse Magnet" isActive={activeCard === 3} onClick={() => setActiveCard(3)}>
                Magnetic mouse and buttons that follow the cursor pleasantly
            </Card>
            <Card imgSrc={wordlePic} title="Wordle Help" isActive={activeCard === 4} onClick={() => setActiveCard(4)}>
                An assistant to help you solve Wordle puzzles
            </Card>
            <Card imgSrc={mousemagnetPic} title="Discord Bot" isActive={activeCard === 5} onClick={() => setActiveCard(5)}>
                A Discord bot with many random features
            </Card>
        </div>
    );
}

function Card({
    imgSrc,
    title,
    isActive,
    onClick,
    children,
}: {
    imgSrc: string | StaticImageData;
    title: string;
    isActive: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        // Reference for flex basis and carousel / cards: https://youtu.be/JD4ws4cY1ro?t=96
        <div
            className={`group h-96
                        w-64 xs:w-72 sm:w-96
                        data-[isActive=true]:basis-64 xs:data-[isActive=true]:basis-72 sm:data-[isActive=true]:basis-96
                        data-[isActive=false]:basis-9
                        relative rounded-lg border-2 border-white/25 transition-all ease-out duration-500`}
            data-isActive={isActive}
            onClick={onClick}>
            <Image
                src={imgSrc}
                alt={title}
                style={{
                    position: "absolute",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: -2,
                    borderRadius: "inherit",
                }}
            />
            {/* Card image overlay */}
            <div className="absolute w-full h-full group-data-[isActive=true]:bg-black/70 group-data-[isActive=false]:bg-black/90 -z-[1] transition-all rounded-lg" />
            {/* Card text */}
            <figcaption className="flex flex-col w-full h-full justify-center items-center p-2">
                <h3 className={inter.className + ` text-center text-2xl font-extrabold tracking-wider text-gray-300`}>{title}</h3>
                {/* Reveal subtext on click. Reference: https://www.youtube.com/watch?v=B_n4YONte5A */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        // Add transition with small delay if card is being activated, else instantly remove it
                        transition: `grid-template-rows ${isActive ? "0.5s" : "0s"} ease ${isActive ? "0.5s" : "0s"}`,
                    }}>
                    <div className="overflow-hidden text-center">{children}</div>
                </div>
            </figcaption>
        </div>
    );
}
