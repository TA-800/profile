"use client";

import { Open_Sans } from "next/font/google";
import { motion, MotionConfig, useMotionTemplate, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import eruditionPic from "../../public/erudition.png";
import mousemagnetPic from "../../public/mousemagnet.png";
import rtcappPic from "../../public/rtcapp.png";
import wordlePic from "../../public/wordle.png";
import vbreceivePic from "../../public/vb_receive.png";
import joystickPic from "../../public/joystick.png";
import { forwardRef, useRef, useState } from "react";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
    const headerWords = ["FULL-STACK", "WEB DEVELOPER"];
    const aboutMeRef = useRef<HTMLDivElement>(null);

    return (
        <main>
            <div className="flex flex-col gap-20 justify-center items-center h-screen -mt-28 lg:-mt-24 mb-[35vh]">
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
                            className="absolute -bottom-16 -right-32 opacity-5 lg:block hidden scale-50 -rotate-12"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                                zIndex: -1,
                            }}
                        />
                    </div>
                </div>
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
                    a variety of projects. I&apos;m constantly on the lookout for new and creative ways to use these tools to
                    create beautiful and functional web applications. Dive into some of my favorite tools that I&apos;ve become
                    proficient in, and the exciting projects I&apos;ve built with them.
                </p>
                <br />
                <SubHeader title="Tools of the Trade" />
                <br />
                <p>
                    All skills, languages, frameworks I know go here. Eius ad mollitia assumenda amet doloribus vitae fuga
                    molestias quis enim sequi! Ipsum magnam repudiandae ex consectetur earum?
                </p>
                <br />
                <SubHeader title="Project Carousel" />
                <br />

                <div className="flex justify-center items-center">
                    <CardCarousel />
                </div>
                <br />
                {/* Check on GitHub buttons */}
                <div className="flex flex-col gap-4 whitespace-nowrap">
                    <span className="ml-auto">View all my projects.</span>
                    <button className="btn btn-primary ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Profile
                    </button>
                    <button className="btn btn-secondary ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        This on GitHub
                    </button>
                </div>
                <br />
                <SubHeader title="Next in line" />
                <br />
                <p>
                    One never stops learning. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum cupiditate
                    consequatur ullam quas illo deserunt iusto deleniti molestiae minus ipsum alias eligendi, quos reiciendis
                    itaque facere in maxime, praesentium non. Some of the other things I&apos;m interested in learning are:
                    Docker, CI/CD, and more.
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

type SectionProps = {
    className?: string;
    children: React.ReactNode;
};
const Section = forwardRef<HTMLDivElement, SectionProps>(function Section({ className, children }, ref) {
    return (
        <section ref={ref} className={"mb-[18vh] " + (className ?? "")}>
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
        <div className="relative flex lg:flex-row flex-col justify-center items-center gap-3 px-4 py-16 lg:py-10 lg:w-full w-fit">
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
            {/* Heropattern background */}
            <div
                className={`absolute top-0 left-0 w-full h-full -z-10 rounded-sm bg-black/25
                             border-b-2 border-b-white/25
                             border-t-4 border-t-black/25`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
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
                        relative rounded-sm border-transparent border-2 shadow-2xl select-none
                        transition-all ease-out duration-500`}
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
