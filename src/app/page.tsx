"use client";

import { ComponentProps, useContext, forwardRef, useRef, useState } from "react";
import { SectionRefs } from "./context";
import {
    AnimatePresence,
    HTMLMotionProps,
    motion,
    MotionConfig,
    useInView,
    useMotionTemplate,
    useMotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import { useMeasure } from "react-use";

import Image, { StaticImageData } from "next/image";
// All vector images (freepik)
import eruditionPic from "../../public/erudition.png";
import mousemagnetPic from "../../public/mousemagnet.png";
import rtcappPic from "../../public/rtcapp.png";
import rttt from "../../public/rttt.png";
import wordlePic from "../../public/wordle.png";
import discordBotPic from "../../public/discord_bot.png";
import vbreceivePic from "../../public/vb_receive.png";
import joystickPic from "../../public/joystick.png";
import codeTypingPic from "../../public/codeTyping.png";
import discordIconPic from "../../public/discord-mark-blue.png";

// Title Font
import { Open_Sans } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
    const sectionRefs = useContext(SectionRefs);
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const headerWords = ["FULL-STACK", "WEB DEVELOPER"];
    const aboutMeRef = sectionRefs.aboutMe;
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    let parallax = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    return (
        <main>
            <div className="flex flex-col gap-20 justify-center items-center h-screen -mt-28 lg:-mt-24 sm:mb-[18vh] mb-[12vh]">
                {/* Video */}
                <motion.video
                    style={{ y: parallax }}
                    poster="bg_vid_poster.webp"
                    muted
                    autoPlay
                    playsInline
                    loop
                    className="absolute -z-20 top-20 lg:top-24 w-screen min-h-screen object-cover opacity-[0.15]">
                    <source src={"background_vid.webm"} type="video/webm" />
                    <source src={"background_vid.mp4"} type="video/mp4" />
                </motion.video>

                {/* Header */}
                <div className="flex flex-col gap-2">
                    {headerWords.map((word, index) => (
                        <AnimatedHeader key={word} text={word} index={index} />
                    ))}
                    <AP className="text-center" delay={0.35}>
                        Want to bring a website to life? I can help you with that.
                    </AP>
                </div>
                {/* "Let's Talk!" button */}
                <Button
                    name="Scroll to Contact"
                    onClick={() => {
                        window.scrollTo({
                            top: contactRef.current!.offsetTop - (window.innerWidth > 1024 ? 96 : 80),
                            behavior: "smooth",
                        });
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                    Let&apos;s Talk!
                </Button>
            </div>
            {/* About Me */}
            <Section ref={aboutMeRef} className="relative">
                <MarqueeHeader numbering={1} title="About Me">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 scale-[2]">
                        <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <Button
                    name="Skip About Me"
                    secondary
                    className={`z-10 group
                                sticky lg:top-28 top-24 !px-2 !py-1`}
                    onClick={() => {
                        // Skip to experience section, top nav is not in the way (h is 96px (on lg) and 80px (rest))
                        window.scrollTo({
                            top: experienceRef.current!.offsetTop - (window.innerWidth > 1024 ? 96 : 80),
                            behavior: "smooth",
                        });
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-6 h-6
                                    translate-x-1 group-hover:translate-x-0
                                    transition-all duration-300`}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                    <span className="w-0 group-hover:w-[46px] overflow-hidden transition-all duration-300">Skip</span>
                </Button>
                <br />
                <AP>
                    Hello! My name is
                    <Highlight space="left">Taher Ali</Highlight>, and I am an aspiring full-stack web developer currently
                    studying in my second year at
                    <Highlight space="left">Wilfrid Laurier University</Highlight>.
                </AP>
                <br />
                <AP>
                    It's been almost a year since I started my journey into web development, and I have been exploring the world
                    of React for the past 5-6 months. Although I have experience with both frontend and backend development, I
                    found that my passion lies in creating minimalistic, intuitive and responsive frontend designs.
                </AP>
                <br />
                <AP>
                    My interest in programming began when I took
                    <Highlight space="both">CS50 Introduction to Computer Science</Highlight>
                    and then continued with
                    <Highlight space="left">CS50 Web Programming</Highlight>. I have also dabbled in game development using Unity
                    and C#, and I enjoy using my skills to create fun and silly projects in my spare time.
                </AP>
                <br />
                <AP>
                    The other things I enjoy doing during my free time is listening to music 🎵, watching anime 📺, making 2D
                    animations with Flash / Animate ✏️, and playing video games 🎮 and volleyball 🏐.
                </AP>
                <br />
                <AP>Thank you for taking the time to read about me. I hope you enjoy the rest of my portfolio!</AP>

                {/* Positioner of images container */}
                <div className="flex justify-center">
                    {/* Images container */}
                    <div className="relative sm:h-96 sm:w-full h-64 w-96 flex-shrink-0 border-">
                        <Image
                            src={vbreceivePic}
                            alt="VB Receive"
                            className="absolute bottom-0 left-0 opacity-5 transition-all invert"
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
            <Section ref={experienceRef}>
                <MarqueeHeader numbering={2} title="Experience">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 scale-[2]">
                        <path
                            fillRule="evenodd"
                            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <AP>
                    I love the variety of frameworks and tools out there that can be used to make web applications that one can
                    envision. I&apos;m constantly on the lookout for new and creative ways to use these tools to create beautiful
                    and functional websites. Here below is a section of tools that I&apos;ve become proficient in, and some
                    exciting projects I&apos;ve built with them.
                </AP>
                <br />
                <SubHeader ref={sectionRefs.skills} title="Tools of the Trade" />
                <br />
                {/* Positioner of Skill-Grid */}
                <div>
                    <SkillGrid expanded={skillsExpanded} />
                </div>
                <br />
                {/* Expand skills button */}
                <Button name="Expand Skills" onClick={() => setSkillsExpanded(!skillsExpanded)}>
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
                </Button>
                <br />
                <SubHeader ref={sectionRefs.projects} title="Built by me" />
                <br />
                <div className="flex justify-center items-center">
                    <CardCarousel />
                </div>
                {/* Check on GitHub buttons */}
                <br />
                <div className="flex lg:justify-start justify-center items-center">
                    <div className={`flex flex-col gap-4 whitespace-nowrap`}>
                        <AP className="">View all my projects.</AP>
                        <Button
                            name="GitHub Profile"
                            onClick={() => {
                                window.open("https://github.com/TA-800", "TA-800 Link");
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub Profile
                        </Button>
                        <Button
                            name="Porfolio on GitHub"
                            onClick={() => {
                                window.open("https://github.com/TA-800/profile", "TA-800 Profile Link");
                            }}
                            secondary>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            This on GitHub
                        </Button>
                    </div>
                </div>
                <br />
                <AP>
                    There will always be new web technologies for me to learn and master. Currently, I&apos;m diving into
                    <Highlight space="left">Docker</Highlight>,<Highlight space="left">Prisma</Highlight>, and CI/CD best
                    practices to streamline my development workflow and create more robust web applications.
                </AP>
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
            <Section ref={contactRef}>
                <MarqueeHeader numbering={3} title="Contact Me">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 scale-[2]">
                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                </MarqueeHeader>
                <br />
                <AP>
                    Do you have a project you want to collaborate with me on? Or maybe you just want to chat? Either way, please
                    feel free to reach out to me via any of my socials or through the contact form below.
                </AP>
                <br />
                <SubHeader ref={sectionRefs.socials} title="My Socials" />
                <br />
                <AP>
                    Don&apos;t hesitate to contact me through any of my socials below for work inquiries or project ideas. If you
                    just wanna say hi, you are welcome to message me on
                    <Highlight space="left">Discord</Highlight>! You can{" "}
                    <span className="font-black uppercase underline">click</span> on the icons below to visit my social media
                    profiles.
                </AP>
                <br />
                <SocialGrid />
                <br />
                <SubHeader ref={sectionRefs.form} title="Contact Form" />
                <br />
                <AP>
                    Here is a form you can fill up and submit quickly to contact me and I will get back to you as soon as I can.
                </AP>
                <br />
                <ContactForm />
            </Section>
            <Section ref={sectionRefs.credits}>
                <MarqueeHeader numbering={4} title="Attribution">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 scale-[2]">
                        <path
                            fillRule="evenodd"
                            d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </MarqueeHeader>
                <br />
                <AP>
                    All vector images and logos were taken from
                    <Highlight space="left">Freepik</Highlight>, <Highlight space="left">Devicon</Highlight>, and
                    <Highlight space="left">Heroicons</Highlight>.
                </AP>
                <br />
                <AP className="grid grid-cols-3 sm:w-96 w-full gap-2">
                    <Credited
                        title="Volleyball"
                        artist="Freepik"
                        link="https://www.freepik.com/free-vector/hand-drawn-volleyball-silhouette_26412322.htm#query=volleyball%20player&position=37&from_view=search&track=ais"
                    />
                    <Credited
                        title="Ninja"
                        artist="Freepik"
                        link="https://www.freepik.com/free-vector/linear-flat-ninja-logo-template_15478197.htm#page=3&query=ninja&position=21&from_view=search&track=sph"
                    />
                    <Credited
                        title="Shuriken"
                        artist="Freepik"
                        link="https://www.freepik.com/free-vector/traditional-ninja-star-collection-with-flat-design_2755362.htm#query=shuriken&position=40&from_view=search&track=sph"
                    />
                    <Credited
                        title="Joystick"
                        artist="catalyststuff"
                        onFreePik
                        link="https://www.freepik.com/free-vector/joystick-game-sport-technology_10549680.htm#query=game&position=4&from_view=search&track=sph"
                    />
                    <Credited
                        title="Laptop"
                        artist="storyset"
                        onFreePik
                        link="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=typing&position=0&from_view=search&track=sph"
                    />
                    <Credited title="Logos" artist="Devicons" leadingText="Logos by " link="https://devicon.dev/" />
                </AP>
            </Section>
        </main>
    );
}

function Credited({
    title,
    artist,
    onFreePik,
    leadingText,
    link,
}: {
    title: string;
    artist: string;
    onFreePik?: true;
    leadingText?: string;
    link: string;
}) {
    return (
        <>
            <span className="col-span-1 text-gray-300">{title}</span>
            <span className="col-span-2">
                <span className="opacity-50 text-sm">{leadingText ?? <>Image by </>}</span>
                <a href={link}>{artist}</a>
                {onFreePik && <span className="opacity-50 text-sm"> on Freepik</span>}
            </span>
        </>
    );
}

function ContactForm({ marginBottom }: { marginBottom?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: `0px 0px ${marginBottom ?? -75}px 0px`,
    });
    const [submitted, setSubmitted] = useState<"blank" | "submitting" | "success" | "error">("blank");

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted("submitting");

        // https://docs.web3forms.com/how-to-guides/html-and-javascript#javascript
        const form = e.currentTarget;
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let res_json = await response.json();
                console.log(res_json);
                if (res_json.success) setSubmitted("success");
                else setSubmitted("error");
            })
            .catch((error) => {
                console.log(error);
                setSubmitted("error");
            })
            .finally(() => {
                // Reset the form
                form.reset();
            });
    }

    return (
        <div
            ref={ref}
            className={`flex lg:flex-row flex-col lg:gap-2 gap-10 p-10 rounded-xl shadow-2xl border-4 border-gray-700/50 bg-gray-800 ${
                isInView ? "bg-opacity-100" : "bg-opacity-0"
            } transition-all duration-1000`}>
            {/* Left side */}
            <div className={openSans.className + ` grid place-content-center lg:w-1/2 w-full`}>
                <div className="flex flex-col">
                    <AP className="lg:text-2xl text-md font-bold">I&apos;m all ears.</AP>
                    <AP
                        style={{
                            WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
                        }}
                        className={`lg:text-5xl xs:text-3xl text-2xl font-black text-white/0 lg:pb-[7px]
                        bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-500 to-indigo-200`}>
                        What do you need?
                    </AP>
                </div>
            </div>
            {/* Right side */}
            <form
                id="contact-form"
                onSubmit={handleFormSubmit}
                className="grid grid-cols-1 grid-flow-row place-content-center gap-2 lg:w-1/2 w-full">
                <input type="hidden" name="access_key" value={process.env.WEBF_PAK} />

                {/* Name */}
                <input autoComplete="on" className="inpt" type="text" name="name" id="name" required placeholder="John Doe" />

                {/* Email */}
                <input
                    autoComplete="on"
                    className="inpt"
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="johndoe2@gmail.com"
                />

                <textarea
                    className="inpt"
                    rows={5}
                    name="message"
                    id="message"
                    placeholder="I want to discuss a work opportunity!"
                    required
                />

                <div className="flex justify-end">
                    <Button
                        name="Submit Contact Form"
                        disabled={submitted !== "blank"}
                        type="submit"
                        className={submitted === "success" ? "!text-green-400" : submitted === "error" ? "!text-red-400" : ""}>
                        {/* Leading icons */}
                        {submitted === "blank" && (
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
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        )}
                        {submitted === "submitting" && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 animate-spin">
                                <path
                                    fillRule="evenodd"
                                    d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        {submitted === "success" && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        {submitted === "error" && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        {/* Text */}
                        {submitted === "blank" && <span>Submit</span>}
                        {submitted === "submitting" && <span>Submitting...</span>}
                        {submitted === "success" && <span>Email submitted!</span>}
                        {submitted === "error" && <span>Error! Retry later.</span>}
                    </Button>
                </div>
            </form>
        </div>
    );
}

function AnimatedHeader({ text, index }: { text: string; index: number }) {
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
        <div className="flex flex-row overflow-hidden px-2 justify-center">
            <motion.div
                className={
                    openSans.className +
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
                    type: "spring",
                    bounce: 0.4 / (index * 0.3 + 1),
                    delay: 0.5 + index * 0.5,
                    color: {
                        type: "tween",
                        duration: 2.25,
                    },
                }}>
                {text}
            </motion.div>
        </div>
    );
}

type AnimatedParagraphProps = {
    marginBottom?: number;
    yDuration?: number;
    sDuration?: number;
    delay?: number;
    style?: React.CSSProperties;
};

// Animated Paragraph (transitions into view from transparency)
const AP = forwardRef<HTMLParagraphElement, HTMLMotionProps<"p"> & AnimatedParagraphProps>(
    ({ yDuration, sDuration, marginBottom, delay, style = {}, className, children, ...rest }, fref) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
            once: true,
            margin: `0px 0px ${marginBottom ?? -100}px 0px`,
        });

        const paragraphVariants = {
            hidden: {
                opacity: 0,
                scale: 1.05,
                y: 60,
            },
            visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    delay: delay ?? 0,
                    y: { duration: yDuration ?? 0.9, ease: "easeOut" },
                    opacity: { duration: 1.25, ease: "easeOut" },
                    scale: { duration: sDuration ?? 0.35, ease: "easeOut" },
                },
            },
        };

        return (
            <div ref={ref} className={`overflow-hidden block`}>
                <motion.p
                    ref={fref}
                    {...rest}
                    className={className}
                    style={style}
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
                    {children}
                </motion.p>
            </div>
        );
    }
);
AP.displayName = "AP";

// Reference: https://ryanmulligan.dev/blog/css-marquee/
function MarqueeHeader({
    title,
    numbering,

    children,
}: {
    title: string;
    numbering: number;
    children?: React.ReactNode;
}) {
    return (
        <MotionConfig
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
            }}>
            <div
                className={
                    robotoMono.className +
                    ` pb-4 border-b-2 border-b-white/5
                         flex gap-[--gap] overflow-hidden tracking-tighter transition-opacity duration-300`
                }>
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
                                className="flex flex-row items-baseline gap-8 shrink-0 font-black text-gray-300 select-none debug-">
                                <h1>
                                    <span className="text-2xl text-blue-300 tracking-[-0.25rem]">{numbering}. </span>
                                    <span className="text-5xl">{title}</span>
                                </h1>
                                <span className="-translate-y-1">{children}</span>
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
        <section ref={ref} {...rest} className={"mb-[9vh] " + (className ?? "")} {...rest}>
            {children}
        </section>
    );
});
Section.displayName = "Section";

const SubHeader = forwardRef<HTMLParagraphElement, ComponentProps<"p"> & { title: string; marginBottom?: number }>(
    function SubHeader({ title, marginBottom, ...rest }, ref) {
        const isInView = useInView(ref as React.RefObject<HTMLParagraphElement>, {
            once: true,
            margin: `0px 0px ${marginBottom ?? -75}px 0px`,
        });

        return (
            <p
                ref={ref}
                {...rest}
                className={
                    robotoMono.className +
                    ` tracking-tighter text-3xl font-extrabold ${
                        isInView ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300`
                }>
                {title}
            </p>
        );
    }
);
SubHeader.displayName = "SubHeader";

function Highlight({ space, children }: { space: "none" | "left" | "right" | "both"; children: React.ReactNode }) {
    return (
        <>
            {space === "left" || space === "both" ? " " : ""}
            <span
                className={`bg-gray-950 text-blue-300
                            border-2 border-blue-300/20
                            px-2 py-[1px] rounded-md`}>
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
            className={`relative flex lg:flex-row flex-col justify-center items-center gap-3 py-16 lg:py-10
            w-full
            border-y-4 border-y-white/5`}>
            <Card
                gitLink="https://github.com/TA-800/Erudition"
                imgSrc={eruditionPic}
                link="https://erudition.up.railway.app/"
                title="Erudition"
                isactive={activeCard === 1}
                onClick={() => setActiveCard(1)}>
                Web app for students to manage study materials and assignments, with React and Django.
            </Card>
            <Card
                gitLink="https://github.com/TA-800/rtc-app"
                imgSrc={rtcappPic}
                link="https://rtcomms.vercel.app/"
                title="RTC Chatapp"
                isactive={activeCard === 2}
                onClick={() => setActiveCard(2)}>
                Real-time chat web app built with React and Supabase.
            </Card>
            <Card
                gitLink="https://github.com/TA-800/Mouse-Magnet-Style-Chasing-Jutsu"
                imgSrc={mousemagnetPic}
                link="https://magnetic-mouse.vercel.app/"
                title="Mouse Magnet"
                isactive={activeCard === 3}
                onClick={() => setActiveCard(3)}>
                Custom &quot;magnetic&quot; mouse element & buttons that follow the cursor pleasantly.
            </Card>
            <Card
                gitLink="https://github.com/TA-800/realtime-tac-toe"
                imgSrc={rttt}
                link="https://realtime-tac-toe.onrender.com/"
                title="RealTime-Tac-Toe"
                isactive={activeCard === 6}
                onClick={() => setActiveCard(6)}>
                Real-time multiplayer tic-tac-toe game built with Express + Socket IO (websockets), and Vite (React).
            </Card>
            <Card
                gitLink="https://github.com/TA-800/Wordle-Assistant"
                imgSrc={wordlePic}
                title="Wordle Help"
                isactive={activeCard === 4}
                onClick={() => setActiveCard(4)}>
                A Python bot to help you solve Wordle puzzles.
            </Card>
            <Card
                gitLink="https://github.com/TA-800/Techio-DiscordBot-"
                imgSrc={discordBotPic}
                title="Discord Bot"
                isactive={activeCard === 5}
                onClick={() => setActiveCard(5)}>
                An old Discord Python bot with many random features - word game, fetch YT vids, Reddit memes, etc.
            </Card>
        </div>
    );
}

function Card({
    imgSrc,
    title,
    isactive,
    link,
    gitLink,
    onClick,
    children,
}: {
    imgSrc: string | StaticImageData;
    title: string;
    isactive: boolean;
    link?: string;
    gitLink?: string;
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
            className={`group shrink-0
                        lg:w-32 lg:h-96
                        lg:data-[isactive=true]:w-96
                        sm:w-96 xs:w-80 w-72 h-16
                        data-[isactive=true]:h-96
                        relative rounded-sm border-transparent border-2 select-none cursor-pointer
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
            <div className="flex flex-col w-full h-full justify-center items-center p-2">
                <h3
                    className={
                        openSans.className +
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
                            <Button
                                name="Go to project live link"
                                onClick={() => {
                                    // Go to link
                                    if (link) window.open(link, `${title} live link`);
                                }}
                                className="!rounded-full lg:!p-2 !p-1">
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
                            </Button>
                        )}
                        {/* Github button */}
                        <Button
                            name="Go to project GitHub link"
                            onClick={() => {
                                // Go to github link
                                if (gitLink) window.open(gitLink, `${title} GitHub link`);
                            }}
                            secondary
                            className="!rounded-full lg:!p-2 !p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillGrid({ expanded }: { expanded: boolean }) {
    const [resizeRef, { height }] = useMeasure<HTMLDivElement>();

    return (
        <MotionConfig
            transition={{
                // Layout shifting animation
                layout: {
                    type: "tween",
                    duration: 0.45,
                    ease: "easeInOut",
                },
                // Logo expanding animation (delay if expanding to increase container height first)
                delay: expanded ? 0.3 : 0,
                type: "tween",
                duration: 0.38,
                ease: "easeInOut",
            }}>
            <motion.div
                // Container height expanding / shrinking animation
                transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                initial={false}
                animate={{ height }}
                className="border-y-4 border-y-white/5">
                {/* Positioner of container */}
                <div ref={resizeRef} className="flex flex-col w-full items-center">
                    <motion.div className={`flex flex-row flex-wrap justify-center pt-6 pb-9 gap-6 max-w-xl`}>
                        <AnimatePresence>
                            <SkillCard key={`skill-HTML`} name="HTML">
                                <svg viewBox="0 0 128 128">
                                    <path
                                        fill="#E44D26"
                                        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
                                    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
                                    <path
                                        fill="#EBEBEB"
                                        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
                                    <path
                                        fill="#fff"
                                        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                                </svg>
                            </SkillCard>
                            <SkillCard key={`skill-CSS`} name="CSS">
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
                            <SkillCard key={`skill-JavaScript`} name="JavaScript">
                                <svg viewBox="0 0 128 128">
                                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                                    <path
                                        fill="#323330"
                                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                                </svg>
                            </SkillCard>
                            <SkillCard key={`skill-React`} name="React">
                                <svg viewBox="0 0 128 128">
                                    <g fill="#61DAFB">
                                        <circle cx="64" cy="64" r="11.4"></circle>
                                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                    </g>
                                </svg>
                            </SkillCard>
                            {expanded && (
                                <SkillCard key={`skill-Next`} name="Next">
                                    <svg viewBox="0 0 128 128">
                                        <circle cx="64" cy="64" r="63" fill="#fff" />
                                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                                    </svg>
                                </SkillCard>
                            )}
                            {expanded && (
                                <SkillCard key={`skill-TypeScript`} name="TypeScript">
                                    <svg viewBox="0 0 128 128">
                                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                                        <path
                                            data-name="original"
                                            fill="#007acc"
                                            d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                                    </svg>
                                </SkillCard>
                            )}
                            {expanded && (
                                <SkillCard key={`skill-Express`} name="Express">
                                    <svg viewBox="0 0 128 128">
                                        <path
                                            fill="white"
                                            d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                                    </svg>
                                </SkillCard>
                            )}
                            {expanded && (
                                <SkillCard key={`skill-Django`} name="Django">
                                    <svg className="-translate-x-1 translate-y-1" viewBox="0 0 128 128">
                                        <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path>
                                        <path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
                                    </svg>
                                </SkillCard>
                            )}
                            {expanded && (
                                <SkillCard key={`skill-Python`} name="Python">
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
                            )}
                            {expanded && (
                                <SkillCard key={`skill-Supabase`} name="Supabase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="scale-y-95"
                                        viewBox="0 0 109 113"
                                        fill="none">
                                        <path
                                            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <path
                                            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                            fill="url(#paint1_linear)"
                                            fillOpacity="0.2"
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
                                                <stop stopColor="#249361" />
                                                <stop offset="1" stopColor="#3ECF8E" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear"
                                                x1="36.1558"
                                                y1="30.578"
                                                x2="54.4844"
                                                y2="65.0806"
                                                gradientUnits="userSpaceOnUse">
                                                <stop />
                                                <stop offset="1" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </SkillCard>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* More skills */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div className="flex flex-row flex-wrap justify-center gap-3 pb-9 -mt-4 max-w-xl">
                                {/* Give p element full width so that flex-wrap gives it its own entire column */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full text-sm mb-2">
                                    More skills
                                </motion.p>
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </MotionConfig>
    );
}

function SkillCard({ name, size, children: icon }: { name: string; size?: "large" | "small"; children: React.ReactNode }) {
    // Default the size to large
    size = size ?? "large";

    // Container for icon and name
    return (
        <motion.div
            layout="position"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={`flex flex-col justify-center items-center gap-4
                         ${size === "large" ? " h-40 w-40 " : " h-28 w-28 "} bg-gray-800 border-2 border-gray-700
                         hover:text-gray-300 hover:border-gray-600
                         group`}
            style={{
                boxShadow: "-2px 4px 0px 1px rgba(0,0,0,0.25)",
            }}>
            <div className={`${size === "large" ? "w-24 h-24" : "w-12 h-12"}`}>{icon}</div>
            <p
                className={`group-hover:font-bold tracking-tighter transition-all duration-300
                            ${size === "large" ? "" : " text-sm"}`}>
                {name}
            </p>
        </motion.div>
    );
}

function SocialGrid() {
    // Positioner of container
    return (
        <div className="flex flex-col w-full items-center border-y-4 border-y-white/5">
            <div className="flex flex-row flex-wrap justify-center items-center lg:gap-6 gap-6 p-6 w-fit">
                <SocialCard name="TA-800" link="https://github.com/TA-800">
                    <svg viewBox="0 0 128 128" width="96px" height="96px">
                        <g fill="#181616">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                        </g>
                    </svg>
                </SocialCard>
                <SocialCard name="Taher Ali" link="https://linkedin.com/in/ta800">
                    <svg viewBox="0 0 128 128" width="96px" height="96px">
                        <path
                            fill="#0076b2"
                            d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
                        <path
                            fill="#fff"
                            d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                    </svg>
                </SocialCard>
                <SocialCard lastCharsSmall={10} name="taherali0905@gmail.com" link="mailto:taherali0905@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                        <path
                            fill="#c62828"
                            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                        />
                        <path
                            fill="#fbc02d"
                            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                        />
                    </svg>
                </SocialCard>
                <SocialCard lastCharsSmall={5} name="TheWeakNinja#3695" link="https://discord.com/">
                    <Image src={discordIconPic} alt="Discord Icon" />
                </SocialCard>
            </div>
        </div>
    );
}

function SocialCard({
    name,
    link,
    lastCharsSmall,
    children: icon,
}: {
    name: string;
    link: string;
    lastCharsSmall?: number;
    children: React.ReactNode;
}) {
    // Get lastCharsSmall number of characters from the end of the name and split it into two parts (start and end)
    const main = lastCharsSmall ? name.slice(0, -lastCharsSmall) : name;
    const end = lastCharsSmall ? name.slice(-lastCharsSmall) : "";

    return (
        <button
            name={`${name} Link}`}
            onClick={() => {
                window.open(link, `${name} Link}`);
            }}
            className={`flex flex-col justify-center items-center gap-4
                         h-40 w-48 bg-gray-800 border-2 border-gray-700
                         hover:text-gray-300 hover:border-gray-600 hover:scale-105
                         group transition-all duration-300`}
            style={{
                boxShadow: "-4px 5px 0px 2px rgba(0,0,0,0.25)",
            }}>
            {/* change div -> span because button cannot contain block elements */}
            <span className="w-24 h-24 flex justify-center items-center">{icon}</span>
            <span className="tracking-tighter group-hover:font-bold transition-all duration-200">
                {main}
                <span className="font-normal text-xs opacity-50">{end}</span>
            </span>
        </button>
    );
}

// Button with classname btn btn-primary / secondary + artificial delay
type ButtonProps = {
    secondary?: boolean;
};
const Button = forwardRef<HTMLButtonElement, ComponentProps<"button"> & ButtonProps>(function Button(
    { secondary, children, className, onClick, ...rest },
    ref
) {
    return (
        <button
            ref={ref}
            {...rest}
            onClick={(e) => {
                setTimeout(() => {
                    onClick?.(e);
                }, 125);
            }}
            className={robotoMono.className + ` btn ${secondary ? "btn-secondary" : "btn-primary"} ${className ?? ""}`}>
            {children}
        </button>
    );
});
