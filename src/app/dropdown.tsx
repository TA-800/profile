import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, usePresence } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

export default function MenuDropDown() {
    const [focusedMenuItem, setFocusedMenuItem] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [menuSection, setMenuSection] = useState<"main" | "experience" | "contact">("main");

    const closeOnOutsideClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };
    const closeOnEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };
    const onSpaceOrEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        // If space or enter key is pressed, open menu and trap focus on first menu item
        if (e.key === " " || e.key === "Enter") {
            // Need to wrap in setTimeout to make it the last thing to run in the event loop
            setTimeout(() => {
                const firstChild = dropdownRef.current?.firstElementChild?.firstElementChild as HTMLButtonElement;
                firstChild?.focus();
            }, 100);
        }
    };
    useEffect(() => {
        document.addEventListener("click", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.removeEventListener("click", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen]);

    const giveFocus = (menuItem: string) => {
        setFocusedMenuItem(menuItem);
        console.log("giveFocus called by " + menuItem);
    };

    return (
        <div className="relative">
            {/* Menu trigger button */}
            <button
                className="bg-gray-800 border-2 border-gray-700/25 rounded-sm p-2"
                onKeyUp={onSpaceOrEnter}
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
                                <InnerWrapper fadeTo="left" key="inner-wrapper-main">
                                    <MenuItem isActive={focusedMenuItem === "About Me"} giveFocus={() => giveFocus("About Me")}>
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
                                    <MenuItem isActive={focusedMenuItem === "Credits"} giveFocus={() => giveFocus("Credits")}>
                                        Credits
                                    </MenuItem>
                                </InnerWrapper>
                            )}
                            {menuSection === "experience" && (
                                <InnerWrapper key="inner-wrapper-experience">
                                    <MenuItem isActive={focusedMenuItem === "Skills"} giveFocus={() => giveFocus("Skills")}>
                                        Skills
                                    </MenuItem>
                                    <MenuItem isActive={focusedMenuItem === "Projects"} giveFocus={() => giveFocus("Projects")}>
                                        Projects
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "back"}
                                        giveFocus={() => giveFocus("back")}
                                        onClick={() => setMenuSection("main")}
                                        back
                                    />
                                </InnerWrapper>
                            )}
                            {menuSection === "contact" && (
                                <InnerWrapper key="inner-wrapper-contact">
                                    <MenuItem isActive={focusedMenuItem === "Socials"} giveFocus={() => giveFocus("Socials")}>
                                        Socials
                                    </MenuItem>
                                    <MenuItem isActive={focusedMenuItem === "Form"} giveFocus={() => giveFocus("Form")}>
                                        Form
                                    </MenuItem>
                                    <MenuItem
                                        isActive={focusedMenuItem === "back"}
                                        giveFocus={() => giveFocus("back")}
                                        onClick={() => setMenuSection("main")}
                                        back
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
                    duration: 0.2,
                },
            }}
            transition={{
                duration: 0.4,
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
            className={`absolute z-50 top-full mt-2 right-0
                        bg-gray-800 w-36 overflow-clip rounded-md border-2 border-gray-700`}>
            {children}
        </motion.div>
    );
});

function InnerWrapper({ fadeTo, children }: { fadeTo?: "left" | "right"; children: React.ReactNode }) {
    // https://www.framer.com/motion/animate-presence/#usepresence
    const [isPresent, safeToRemove] = usePresence();

    fadeTo = fadeTo ?? "right";
    // Changed from initial / animate to style to allow graceful exit even mid animation
    const xDisplacement = fadeTo === "left" ? -200 : 200;
    const xCurrentInstant = useMotionValue(xDisplacement);
    const xCurrent = useSpring(xCurrentInstant, {
        damping: 15,
        mass: 0.1,
        stiffness: 200,
    });
    const pointerEvents = useTransform(xCurrent, (x) => (x === 0 ? "auto" : "none"));

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
            }, 300);
        }
    }, [isPresent]);

    return (
        <motion.div
            style={{
                x: xCurrent,
                pointerEvents,
            }}
            className="absolute p-2">
            {children}
        </motion.div>
    );
}

type MenuItemProps =
    | {
          back?: never;
          children: React.ReactNode;
          onClick?: () => void;
          giveFocus?: () => void;
          isActive: boolean;
      }
    | {
          back: true;
          children?: never;
          onClick?: () => void;
          giveFocus?: () => void;
          isActive: boolean;
      };

function MenuItem({ isActive, onClick, giveFocus, children, back }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            onFocus={giveFocus}
            onMouseEnter={giveFocus}
            className={`w-full rounded-sm focus:outline-none border-gray-600 ${back ? "h-[50px]" : "h-[50px]"} 
                ${isActive ? "bg-gray-700 border-2" : "border-0"}`}>
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
            {!back && children}
        </button>
    );
}
