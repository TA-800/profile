import { createContext } from "react";

type sectionRefsType = {
    aboutMe: React.MutableRefObject<HTMLDivElement | null>;
    skills: React.MutableRefObject<HTMLDivElement | null>;
    projects: React.MutableRefObject<HTMLDivElement | null>;
    socials: React.MutableRefObject<HTMLDivElement | null>;
    form: React.MutableRefObject<HTMLDivElement | null>;
};

export const SectionRefs = createContext<sectionRefsType>({
    aboutMe: { current: null },
    skills: { current: null },
    projects: { current: null },
    socials: { current: null },
    form: { current: null },
});

/**
 *
 * Context is needed only to share the refs between page.tsx and dropdown.tsx.
 * No provider is needed probably because the context does not make use of any state.
 * Change in refs (made by page.tsx) will be communicated to the dropdown.tsx file.
 *
 */
