"use client";

import { ComponentProps, forwardRef, useRef, useState } from "react";
import { motion, MotionConfig, useMotionTemplate, useMotionValue } from "framer-motion";

import Image, { StaticImageData } from "next/image";
// All vector images (freepik)
import eruditionPic from "../../public/erudition.png";
import mousemagnetPic from "../../public/mousemagnet.png";
import rtcappPic from "../../public/rtcapp.png";
import wordlePic from "../../public/wordle.png";
import vbreceivePic from "../../public/vb_receive.png";
import joystickPic from "../../public/joystick.png";
import codeTypingPic from "../../public/codeTyping.png";

// Title Font
import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const headerWords = ["FULL-STACK", "WEB DEVELOPER"];
    const aboutMeRef = useRef<HTMLDivElement>(null);

    return (
        <main>
            <div className="flex flex-col gap-20 justify-center items-center h-screen -mt-28 lg:-mt-24 sm:mb-[35vh] mb-[28vh]">
                <hgroup className="flex flex-col gap-2">
                    {headerWords.map((word, index) => (
                        <AnimatedHeader key={word} text={word} delay={index * 0.25} />
                    ))}
                    <p className="text-center">Want to bring a website to life? I could help you with that.</p>
                </hgroup>
                <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                    Lets Talk!
                </button>
            </div>
            {/* About Me */}
            <Section ref={aboutMeRef} className="relative">
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
                    When I&apos;m not coding, I enjoy listening to music, watching anime, making 2D animations with Flash /
                    Animate, and playing video games and volleyball 🏐. These activities help me to stay inspired and motivated in
                    my work.
                </p>
                <br />
                <p>
                    Thank you for taking the time to get to know me a little better. I look forward to sharing my passion for web
                    development with you!
                </p>
                {/* Positioner of container */}
                <div className="flex justify-center">
                    {/* Images container */}
                    <div className="relative sm:h-96 sm:w-full h-64 w-96 flex-shrink-0 border-">
                        <Image
                            src={vbreceivePic}
                            alt="VB Receive"
                            className="absolute bottom-0 left-0 opacity-10 transition-all"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                                zIndex: -1,
                            }}
                        />
                        <Image
                            src={joystickPic}
                            alt="Joystick"
                            className="absolute -bottom-16 -right-24 opacity-5 lg:block hidden scale-50 -rotate-12"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                                zIndex: -1,
                            }}
                        />
                    </div>
                </div>
            </Section>
            {/* Experience */}
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
                    a variety of projects. I&apos;m constantly on the lookout for new and creative ways to use these tools to
                    create beautiful and functional web applications. Dive into some of my favorite tools that I&apos;ve become
                    proficient in, and the exciting projects I&apos;ve built with them.
                </p>
                <br />
                <SubHeader title="Tools of the Trade" />
                <br />
                <p>Here are some of the skills and languages I&apos;ve learned through web development and project building:</p>
                <br />
                {/* Positioner of Skill-Grid */}
                <div className="flex justify-center">
                    <SkillGrid expanded={skillsExpanded} />
                </div>
                <br />
                {/* Expand skills button */}
                <button className="btn btn-primary" onClick={() => setSkillsExpanded(!skillsExpanded)}>
                    {skillsExpanded ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            Show Less
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            Show More
                        </>
                    )}
                </button>
                <br />
                <SubHeader title="Projects" />

                <br />
                <div className="flex justify-center items-center">
                    <CardCarousel />
                </div>
                {/* Check on GitHub buttons */}
                <br />

                <div className="flex lg:justify-start justify-center items-center">
                    <div className={`flex flex-col gap-4 whitespace-nowrap`}>
                        <span className="">View all my projects.</span>
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
                </div>
                <br />
                <SubHeader title="Next in line" />
                <br />
                <p>
                    I'm always on the lookout for new web technologies to learn and master. Currently, I&apos;m diving into
                    <Highlight bgColor="darkorange" txtColor="antiquewhite" space="left">
                        Docker
                    </Highlight>
                    ,
                    <Highlight bgColor="slategrey" txtColor="white" space="left">
                        Prisma
                    </Highlight>
                    , and CI/CD best practices to streamline my development workflow and create more robust web applications.
                </p>
                {/* Positioner of images-container */}
                <div className="flex justify-center">
                    {/* Images container */}
                    <div className="relative sm:h-96 sm:w-full h-64 w-96 flex-shrink-0">
                        <Image
                            src={codeTypingPic}
                            alt="Code Typing"
                            className="absolute bottom-8 opacity-5 md:left-1/3 transition-all scale-125"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                                zIndex: -1,
                            }}
                        />
                    </div>
                </div>
            </Section>
            {/* Contact */}
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
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <p>
                    Cillum cillum sint qui elit cillum aliqua. Pariatur aliqua proident aliqua exercitation ullamco tempor cillum.
                    Nostrud elit aliqua nisi deserunt. Velit commodo amet qui nulla duis ex culpa.
                </p>
                <br />
                <SubHeader title="My Socials" />
                <br />
                <p>
                    Culpa labore dolor amet ullamco velit magna proident cillum irure ut aliquip quis ut sint. Exercitation
                    incididunt veniam qui tempor dolor tempor. Esse voluptate dolore voluptate enim. Amet esse consectetur ipsum
                    magna anim pariatur consequat aliqua in ea nulla. If you just wanna say hi, feel free to hit me up on
                    <Highlight space="left" bgColor="blue" txtColor="lightblue">
                        Discord
                    </Highlight>
                    .
                </p>
                <br />
                <p>My Socials and you can find me on Gmail, GitHub, LinkedIn, Discord.</p>
                <br />
                <SubHeader title="Contact Form" />
                <br />
                <p>
                    Here is a form you can fill up and submit quickly to contact me and I will get back to you as soon as
                    possible!
                </p>
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

// Reference: Do your React functions compose?
const Section = forwardRef<HTMLDivElement, ComponentProps<"section">>(function Section({ className, children, ...rest }, ref) {
    return (
        <section ref={ref} className={"mb-[18vh] " + (className ?? "")} {...rest}>
            {children}
        </section>
    );
});

Section.displayName = "Section";

function SubHeader({ title }: { title: string }) {
    return <p className={inter.className + ` text-3xl font-extrabold tracking-wide`}>{title}</p>;
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
        <div
            className={`relative flex lg:flex-row flex-col justify-center items-center gap-3 px-4 py-16 lg:py-10 w-full
            border-y-4 border-y-white/5`}>
            <Card
                imgSrc={eruditionPic}
                link="https://erudition.up.railway.app/"
                title="Erudition"
                isactive={activeCard === 1}
                onClick={() => setActiveCard(1)}>
                Web app for students to manage study materials and assignments
            </Card>
            <Card
                imgSrc={rtcappPic}
                link="https://rtcomms.vercel.app/"
                title="RTC Chatapp"
                isactive={activeCard === 2}
                onClick={() => setActiveCard(2)}>
                Real-time chat web app built with React and Supabase
            </Card>
            <Card
                imgSrc={mousemagnetPic}
                link="https://magnetic-mouse.vercel.app/"
                title="Mouse Magnet"
                isactive={activeCard === 3}
                onClick={() => setActiveCard(3)}>
                Magnetic mouse and buttons that follow the cursor pleasantly
            </Card>
            <Card imgSrc={wordlePic} title="Wordle Help" isactive={activeCard === 4} onClick={() => setActiveCard(4)}>
                An assistant to help you solve Wordle puzzles
            </Card>
            <Card imgSrc={mousemagnetPic} title="Discord Bot" isactive={activeCard === 5} onClick={() => setActiveCard(5)}>
                A Discord bot with many random features
            </Card>
        </div>
    );
}

function Card({
    imgSrc,
    title,
    isactive,
    link,
    onClick,
    children,
}: {
    imgSrc: string | StaticImageData;
    title: string;
    isactive: boolean;
    link?: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    // Motion Values for mouse position (lighting effect on hover)
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { left, top } = currentTarget!.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        // Reference for flex basis and carousel / cards: https://youtu.be/JD4ws4cY1ro?t=96
        <div
            className={`group h-96
                        w-64 xs:w-72 sm:w-96
                        data-[isactive=true]:basis-64 xs:data-[isactive=true]:basis-72 sm:data-[isactive=true]:basis-96
                        data-[isactive=false]:basis-9
                        relative rounded-sm border-transparent border-2 select-none
                        transition-all ease-out duration-500`}
            style={{
                boxShadow: "-6px 8px 6px 0px rgba(0,0,0,0.25)",
            }}
            data-isactive={isactive}
            onMouseMove={handleMouseMove}
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
            {/* White hover mouse element. Reference: https://www.youtube.com/watch?v=uWfZ2bZuvpo */}
            <motion.div
                className={`absolute -inset-[2px] rounded-sm
                            hover:opacity-60 group-data-[isactive=true]:hover:opacity-100 opacity-0
                            transition duration-300`}
                style={{
                    background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`,
                }}
            />
            {/* Card image overlay */}
            <div className="absolute w-full h-full group-data-[isactive=true]:bg-black/75 group-data-[isactive=false]:bg-black/90 -z-[1] transition-all rounded-sm" />
            {/* Card text */}
            <figcaption className="flex flex-col w-full h-full justify-center items-center p-2">
                <h3
                    className={
                        inter.className +
                        ` text-center text-2xl text-gray-300 group-hover:opacity-100 ${
                            isactive ? "opacity-100 font-bold" : "opacity-75 font-semibold"
                        } transition-all duration-300`
                    }>
                    {title}
                </h3>
                {/* Reveal subtext on click. Reference: https://www.youtube.com/watch?v=B_n4YONte5A */}
                <div
                    style={{
                        display: "grid",
                        opacity: isactive ? 1 : 0,
                        gridTemplateRows: isactive ? "1fr" : "0fr",
                        // Add transition with small delay if card is being activated, else instantly remove it
                        transition: `opacity ${isactive ? "0.75s" : "0s"} ease ${isactive ? "0.5s" : "0s"},
                                     grid-template-rows ${isactive ? "0.5s" : "0s"} ease ${isactive ? "0.5s" : "0s"}`,
                    }}>
                    <div className="overflow-hidden text-center">{children}</div>
                </div>
                {/* Reveal GitHub button on click. */}
                <div
                    className="absolute lg:bottom-3 bottom-2 w-full"
                    style={{
                        display: "grid",
                        opacity: isactive ? 1 : 0,
                        gridTemplateRows: isactive ? "1fr" : "0fr",
                        // Add transition with small delay if card is being activated, else instantly remove it
                        transition: `opacity ${isactive ? "0.75s" : "0s"} ease ${isactive ? "0.75s" : "0s"},
                                     grid-template-rows ${isactive ? "0.5s" : "0s"} ease ${isactive ? "0.5s" : "0s"}`,
                    }}>
                    <div className="overflow-hidden p-2 flex flex-row gap-2">
                        {link && (
                            <button className="btn btn-primary !rounded-full lg:!p-2 !p-1">
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
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                </svg>
                            </button>
                        )}
                        <button className="btn btn-secondary !rounded-full lg:!p-2 !p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </figcaption>
        </div>
    );
}

function SkillGrid({ expanded }: { expanded: boolean }) {
    return (
        <div className="flex flex-col w-full items-center border-y-4 border-y-white/5">
            <div
                // Three cards per row max (card width = 160px, gap = 24px, max width = 576px)
                className={`flex flex-row flex-wrap justify-center gap-6 ${expanded ? "pt-6" : "p-6"} max-w-xl`}>
                <SkillCard name="HTML">
                    <svg viewBox="0 0 128 128">
                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
                        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
                        <path
                            fill="#EBEBEB"
                            d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
                        <path
                            fill="#fff"
                            d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                    </svg>
                </SkillCard>
                <SkillCard name="CSS">
                    <svg viewBox="0 0 128 128">
                        <path
                            fill="#1572B6"
                            d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
                        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
                        <path
                            fill="#fff"
                            d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path>
                        <path
                            fill="#EBEBEB"
                            d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
                        <path
                            fill="#fff"
                            d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path>
                        <path
                            fill="#EBEBEB"
                            d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                    </svg>
                </SkillCard>
                <SkillCard name="JavaScript">
                    <svg viewBox="0 0 128 128">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                        <path
                            fill="#323330"
                            d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                    </svg>
                </SkillCard>
                <SkillCard name="React">
                    <svg viewBox="0 0 128 128">
                        <g fill="#61DAFB">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                        </g>
                    </svg>
                </SkillCard>
                {expanded && (
                    <>
                        <SkillCard name="Next">
                            <svg viewBox="0 0 128 128">
                                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                            </svg>
                        </SkillCard>
                        <SkillCard name="TypeScript">
                            <svg viewBox="0 0 128 128">
                                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                                <path
                                    data-name="original"
                                    fill="#007acc"
                                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                            </svg>
                        </SkillCard>
                        <SkillCard name="Django">
                            <svg viewBox="0 0 128 128">
                                <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path>
                                <path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
                            </svg>
                        </SkillCard>
                        <SkillCard name="Python">
                            <svg viewBox="0 0 128 128">
                                <linearGradient
                                    id="python-original-a"
                                    gradientUnits="userSpaceOnUse"
                                    x1="70.252"
                                    y1="1237.476"
                                    x2="170.659"
                                    y2="1151.089"
                                    gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                                    <stop offset="0" stopColor="#5A9FD4"></stop>
                                    <stop offset="1" stopColor="#306998"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="python-original-b"
                                    gradientUnits="userSpaceOnUse"
                                    x1="209.474"
                                    y1="1098.811"
                                    x2="173.62"
                                    y2="1149.537"
                                    gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                                    <stop offset="0" stopColor="#FFD43B"></stop>
                                    <stop offset="1" stopColor="#FFE873"></stop>
                                </linearGradient>
                                <path
                                    fill="url(#python-original-a)"
                                    d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                                    transform="translate(0 10.26)"></path>
                                <path
                                    fill="url(#python-original-b)"
                                    d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                                    transform="translate(0 10.26)"></path>
                                <radialGradient
                                    id="python-original-c"
                                    cx="1825.678"
                                    cy="444.45"
                                    r="26.743"
                                    gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop>
                                    <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop>
                                </radialGradient>
                                <path
                                    opacity=".444"
                                    fill="url(#python-original-c)"
                                    d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                            </svg>
                        </SkillCard>
                        <SkillCard name="Supabase">
                            <svg xmlns="http://www.w3.org/2000/svg" className="scale-y-95" viewBox="0 0 109 113" fill="none">
                                <path
                                    d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                    fill="url(#paint0_linear)"
                                />
                                <path
                                    d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                    fill="url(#paint1_linear)"
                                    fill-opacity="0.2"
                                />
                                <path
                                    d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                                    fill="#3ECF8E"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="53.9738"
                                        y1="54.974"
                                        x2="94.1635"
                                        y2="71.8295"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#249361" />
                                        <stop offset="1" stop-color="#3ECF8E" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear"
                                        x1="36.1558"
                                        y1="30.578"
                                        x2="54.4844"
                                        y2="65.0806"
                                        gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="1" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SkillCard>
                    </>
                )}
            </div>
            {expanded && (
                <div className="flex flex-row flex-wrap justify-center gap-3 py-6 max-w-xl">
                    {/* Give p element full width so that flex-wrap gives it its own entire column */}
                    <p className="w-full text-sm opacity-50 mb-2">More skills.</p>
                    <SkillCard name="Unity" size="small">
                        <svg viewBox="0 0 128 128">
                            <path
                                d="M82.48 63.578l22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238l22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93L71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0"
                                fill="#110B09"></path>
                        </svg>
                    </SkillCard>
                    <SkillCard name="C" size="small">
                        <svg viewBox="0 0 128 128">
                            <path
                                fill="#659AD3"
                                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                            <path
                                fill="#03599C"
                                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                            <path
                                fill="#fff"
                                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                        </svg>
                    </SkillCard>
                    <SkillCard name="Java" size="small">
                        <svg viewBox="0 0 128 128">
                            <path
                                fill="#0074BD"
                                d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path>
                            <path
                                fill="#EA2D2E"
                                d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path>
                            <path
                                fill="#0074BD"
                                d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path>
                            <path
                                fill="#EA2D2E"
                                d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path>
                            <path
                                fill="#0074BD"
                                d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                        </svg>
                    </SkillCard>
                    <SkillCard name="After Effects" size="small">
                        <svg viewBox="0 0 128 128">
                            <path fill="#1F0740" d="M6.5 6.5h115v115H6.5z"></path>
                            <path fill="#D490C5" d="M0 0v128h128V0H0zm121.5 121.5H6.5V6.5h115v115z"></path>
                            <path
                                fill="#D490C5"
                                d="M103.5 59.2s-.6-14.6-16.5-14.6c-16 0-17.3 22-17.3 22v4.7S72.5 89.6 86 89.6s14.8-2.6 14.8-2.6v-8.1s-19.3 9.2-21.2-10h24v-9.7zm-9 2.4h-15s0-8.3 7.5-9.2c8.2 0 7.5 9.2 7.5 9.2zM50.5 29.9H38.4v3.8l-16 54.9h9.4l4.4-16.1H53l4.5 16.1h10.3L50.5 29.9zM38.2 63.1l6.4-24.5L51 63.1H38.2z"></path>
                        </svg>
                    </SkillCard>
                </div>
            )}
        </div>
    );
}

function SkillCard({ name, size, children: icon }: { name: string; size?: "large" | "small"; children: React.ReactNode }) {
    // Default the size to large
    size = size ?? "large";

    // Container for icon and name
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4
                         ${size === "large" ? " h-40 w-40 " : " h-28 w-28 "} bg-gray-700 border-2 border-gray-600
                         hover:scale-105 hover:bg-gray-600 hover:border-gray-500
                         group transition-all duration-300`}
            style={{
                boxShadow: "-4px 5px 0px 2px rgba(0,0,0,0.25)",
            }}>
            <div className={`${size === "large" ? "w-24 h-24" : "w-12 h-12"}`}>{icon}</div>
            <p
                className={`group-hover:font-bold ${size === "large" ? " group-hover:tracking-wide " : ""}
                            ${size === "large" ? "" : " text-sm "}
                            transition-all duration-200`}>
                {name}
            </p>
        </div>
    );
}
