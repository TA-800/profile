import { motion, AnimatePresence, useMotionValue, useSpring, usePresence, useTransform, LayoutGroup } from "framer-motion";
import { forwardRef, useEffect, useRef, useState, useContext } from "react";
import { SectionRefs } from "./context";

export default function MenuDropDown() {
    const [focusedMenuItem, _setFocusedMenuItem] = useState<string>("");
    // useRef to read a future state value in listeners that cannot access updated state in future renders.
    const focusedMenuRef = useRef(focusedMenuItem);
    const [isOpen, setIsOpen] = useState(false);
    const [openedWithKB, setOpenedWithKB] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [menuSection, _setMenuSection] = useState<"main" | "experience" | "contact">("main");

    const sectionRefs = useContext(SectionRefs);
    const scrollTo = (ref: React.RefObject<HTMLElement>) => {
        window.scrollTo({
            top: ref.current!.offsetTop - (window.innerWidth > 1024 ? 96 : 80),
            behavior: "smooth",
        });
    };

    // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
    const setFocusedMenuItem = (menuItem: string) => {
        _setFocusedMenuItem(menuItem);
        focusedMenuRef.current = menuItem; // Update ref to future state value
    };
    // Everytime menu section is changed, reset focused menu item to empty string
    const setMenuSection = (section: "main" | "experience" | "contact") => {
        _setMenuSection(section);
        setFocusedMenuItem("");
    };

    const closeOnOutsideClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };
    const closeOrTrapFocus = (e: KeyboardEvent) => {
        // Close on escape
        if (e.key === "Escape") setIsOpen(false);

        // Trap focus to menu when open on arrow down or up
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            // Listeners are trapped to the initial render, no access to updated state. https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
            if (isOpen) {
                // Prevent scrolling
                e.preventDefault();
                // // Only do the work when focusedMenuItem is empty, other work being handled by handleKeyDown in MenuItem component
                if (focusedMenuRef.current === "") {
                    // Just focus on first menu item
                    const transformStyle = window
                        .getComputedStyle(dropdownRef.current?.firstElementChild as HTMLElement)
                        .getPropertyValue("transform");
                    const isAnimating = transformStyle !== "none";
                    // Don't focus if menu is being animated
                    if (!isAnimating) (dropdownRef.current?.firstElementChild?.firstElementChild as HTMLElement)?.focus();
                }
            }
        }
    };

    // Open on arrow down, enter, or space for menu trigger button
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            if (!isOpen) {
                setIsOpen(true);
                setOpenedWithKB(true);
            }
        }
    };

    // Add listeners for closing on outside click, escape key, and trapping focus
    useEffect(() => {
        document.addEventListener("click", closeOnOutsideClick);
        document.addEventListener("keydown", closeOrTrapFocus);

        // Reset focused menu item when menu is closed
        if (!isOpen) setFocusedMenuItem("");

        // Cleanup listeners
        return () => {
            document.removeEventListener("click", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOrTrapFocus);
        };
    }, [isOpen]);

    // Focus first menu item when opened with keyboard
    useEffect(() => {
        if (openedWithKB) (dropdownRef.current?.firstElementChild?.firstElementChild as HTMLElement)?.focus();
        if (!isOpen) setOpenedWithKB(false);
    }, [openedWithKB, isOpen]);

    const giveFocus = (menuItem: string) => {
        setFocusedMenuItem(menuItem);
    };

    return (
        <div className="relative">
            {/* Menu trigger button */}
            <button
                className={`bg-gray-800 border-2 border-gray-700/25 rounded-sm p-2 
                            hover:bg-gray-700 hover:text-gray-300 active:-translate-x-[2px] active:translate-y-[2px] transition-all duration-200`}
                onKeyDown={handleKeyDown}
                onClick={() => {
                    setIsOpen(!isOpen);
                    // Reset menu section to main
                    setMenuSection("main");
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            {/* Menu dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <MenuWrapper mainMenu={menuSection === "main"} ref={dropdownRef} key="menu-wrapper">
                        <AnimatePresence>
                            {menuSection === "main" && (
                                <InnerWrapper fadeTo="left" key="inner-wrapper-main" id="inner-wrapper-main">
                                    <MenuItem
                                        isFirst
                                        isActive={focusedMenuItem === "About Me"}
                                        giveFocus={() => giveFocus("About Me")}
                                        onClick={() => scrollTo(sectionRefs.aboutMe)}>
                                        About Me
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "Experience"}
                                        giveFocus={() => giveFocus("Experience")}
                                        onClick={() => setMenuSection("experience")}>
                                        Experience
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "Contact"}
                                        giveFocus={() => giveFocus("Contact")}
                                        onClick={() => setMenuSection("contact")}>
                                        Contact
                                    </MenuItem>
                                    <MenuItem
                                        isLast
                                        isActive={focusedMenuItem === "Credits"}
                                        giveFocus={() => giveFocus("Credits")}
                                        onClick={() => scrollTo(sectionRefs.credits)}>
                                        Credits
                                    </MenuItem>
                                </InnerWrapper>
                            )}
                            {menuSection === "experience" && (
                                <InnerWrapper key="inner-wrapper-experience" id="inner-wrapper-experience">
                                    <MenuItem
                                        isFirst
                                        isActive={focusedMenuItem === "Skills"}
                                        giveFocus={() => giveFocus("Skills")}
                                        onClick={() => scrollTo(sectionRefs.skills)}>
                                        Skills
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "Projects"}
                                        giveFocus={() => giveFocus("Projects")}
                                        onClick={() => scrollTo(sectionRefs.projects)}>
                                        Projects
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "back"}
                                        giveFocus={() => giveFocus("back")}
                                        onClick={() => setMenuSection("main")}
                                        back
                                        isLast
                                    />
                                </InnerWrapper>
                            )}
                            {menuSection === "contact" && (
                                <InnerWrapper key="inner-wrapper-contact" id="inner-wrapper-contact">
                                    <MenuItem
                                        isFirst
                                        isActive={focusedMenuItem === "Socials"}
                                        giveFocus={() => giveFocus("Socials")}
                                        onClick={() => scrollTo(sectionRefs.socials)}>
                                        Socials
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "Form"}
                                        giveFocus={() => giveFocus("Form")}
                                        onClick={() => scrollTo(sectionRefs.form)}>
                                        Form
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "back"}
                                        giveFocus={() => giveFocus("back")}
                                        onClick={() => setMenuSection("main")}
                                        back
                                        isLast
                                    />
                                </InnerWrapper>
                            )}
                        </AnimatePresence>
                    </MenuWrapper>
                )}
            </AnimatePresence>
        </div>
    );
}

const MenuWrapper = forwardRef<HTMLDivElement, { mainMenu?: boolean; children: React.ReactNode }>(function MenuWrapper(
    { mainMenu, children },
    ref
) {
    return (
        <motion.div
            id="complete-menu-wrapper"
            ref={ref}
            initial={{
                scale: 0,
                // 200px / 150px is height of all items + 20px padding
                height: mainMenu === true ? "220px" : "170px",
            }}
            animate={{
                scale: 1,
                height: mainMenu === true ? "220px" : "170px",
            }}
            exit={{
                scale: 0,
                height: mainMenu === true ? "220px" : "170px",
                transition: {
                    duration: 0.3,
                },
            }}
            transition={{
                duration: 0.6,
                type: "spring",
                height: {
                    type: "spring",
                    mass: 0.1,
                },
            }}
            style={{
                transformOrigin: "top right",
            }}
            // Overflow clip works better than overflow hidden
            className={`absolute z-50 top-full mt-2 right-0 shadow-2xl
                        bg-gray-800 w-36 overflow-clip rounded-md border-[1px] border-gray-700`}>
            {children}
        </motion.div>
    );
});

function InnerWrapper({ id, fadeTo, children }: { id: string; fadeTo?: "left" | "right"; children: React.ReactNode }) {
    // https://www.framer.com/motion/animate-presence/#usepresence
    const [isPresent, safeToRemove] = usePresence();

    fadeTo = fadeTo ?? "right";
    // Changed from initial / animate to style to allow graceful exit even mid animation
    const xDisplacement = fadeTo === "left" ? -200 : 200;
    const xCurrentInstant = useMotionValue(xDisplacement);
    const xCurrentSmooth = useSpring(xCurrentInstant, {
        mass: 0.25,
        stiffness: 75,
    });

    useEffect(() => {
        // Set displacement to 0 as soon as menu is loaded into DOM for slide-in animation
        if (isPresent) {
            xCurrentInstant.set(0);
        }
        // As soon as menu *should* be removed from DOM, animate it out with xDisplacement and then remove it with safeToRemove
        else {
            xCurrentInstant.set(xDisplacement);
            setTimeout(() => {
                safeToRemove();
            }, 250);
        }
    }, [isPresent]);

    return (
        <LayoutGroup id={"layout-" + id}>
            <motion.div
                id={id}
                style={{
                    x: xCurrentSmooth,
                }}
                className="absolute p-2">
                {children}
            </motion.div>
        </LayoutGroup>
    );
}

type MenuItemProps = {
    onClick?: () => void;
    giveFocus?: () => void;
    isActive: boolean;
    isFirst?: boolean;
    isLast?: boolean;
} & ({ back?: never; children: React.ReactNode } | { back: true; children?: never });

function MenuItem({ isActive, onClick, giveFocus, isFirst, isLast, children, back }: MenuItemProps) {
    const [isBeingPressed, setIsBeingPressed] = useState(false);

    // Handle arrow up and down to navigate menu
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        // Arrow up or down to navigate menu, simulate pressing tab to achieve the same effect
        if (isActive) {
            // If enter or space, simulate active state of button
            if (e.key === "Enter" || e.key === " ") {
                setIsBeingPressed(true);
                setTimeout(() => {
                    setIsBeingPressed(false);
                }, 150);
            }

            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                // Prevent scrolling
                // e.preventDefault(); Already done in parent component
                // Don't do anything if being animated (parent's transform is none when not being animated)
                if (e.currentTarget.parentElement!.style.transform !== "none") return;

                // Set focus to next or previous sibling
                if (e.key === "ArrowDown") {
                    if (isLast) (e.currentTarget.parentElement?.firstElementChild as HTMLElement)?.focus();
                    else (e.currentTarget.nextElementSibling as HTMLElement)?.focus();
                } else {
                    if (isFirst) (e.currentTarget.parentElement?.lastElementChild as HTMLElement)?.focus();
                    else (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
                }
            }
            // Else if tab, only implement cycling through menu items
            else if (e.key === "Tab") {
                // If shift is pressed
                if (e.shiftKey) {
                    if (isFirst) {
                        // preventDefault to prevent tabbing anywhere else
                        e.preventDefault();
                        (e.currentTarget.parentElement?.lastElementChild as HTMLElement)?.focus();
                    }
                } else {
                    if (isLast) {
                        e.preventDefault();
                        (e.currentTarget.parentElement?.firstElementChild as HTMLElement)?.focus();
                    }
                }
            }
        }
    };

    return (
        // Changed button -> motion.button and added layout prop to motion.button
        // to prevent glitchy initial active/hover animation transition: https://www.framer.com/motion/component/###layoutid
        <motion.button
            layout
            onClick={() => {
                if (onClick) {
                    // Add artificial delay to allow animation to finish for better visual feedback
                    setTimeout(() => {
                        onClick();
                    }, 150);
                }
            }}
            // giveFocus sets the focusedMenuItem state in the parent component
            onFocus={giveFocus}
            onMouseEnter={giveFocus}
            onMouseDown={() => setIsBeingPressed(true)}
            onMouseUp={() => setIsBeingPressed(false)}
            onMouseLeave={() => setIsBeingPressed(false)}
            onKeyDown={handleKeyDown}
            className={`relative w-full rounded-sm focus:outline-none border-gray-600 h-[50px]
                        ${isBeingPressed ? "text-gray-200" : ""}`}>
            {back && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            )}
            {!back && <span>{children}</span>}
            {isActive && (
                <motion.span
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        mass: 0.1,
                    }}
                    className="absolute top-0 left-0 h-full w-full bg-gray-700 rounded-sm -z-10"
                    layoutId="active-menu-item"
                />
            )}
        </motion.button>
    );
}
