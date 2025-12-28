"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PROJECTS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500",
                // UKURAN CARD:
                "h-[450px] w-full md:w-[400px] flex-shrink-0", // w-full di mobile agar responsif di container snap
                "bg-white dark:bg-neutral-900",
                "border border-neutral-200 dark:border-neutral-800",
                "hover:border-neutral-400 dark:hover:border-neutral-600",
                "hover:shadow-xl dark:hover:shadow-none"
            )}
        >
            {/* Image / Preview Area */}
            <Link href={`/projects/${project.slug}`} className="block h-[60%] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 dark:text-neutral-700 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div className="text-center">
                        <span className="text-6xl font-black opacity-20 select-none">
                            {project.title.substring(0, 1)}
                        </span>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
            </Link>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-6 justify-between">
                <div>
                    {/* Meta Info */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((t: string, i: number) => (
                                <span key={i} className="text-[10px] px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium border border-transparent group-hover:border-neutral-200 dark:group-hover:border-neutral-700 transition-colors">
                                    {t}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className="text-[10px] px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded-full">
                            {project.year}
                        </span>
                    </div>

                    {/* Title dengan Modern Floating Underline */}
                    <h3 className="relative w-fit text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 leading-tight">
                        {project.title}
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neutral-900 dark:bg-neutral-100 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors uppercase tracking-wider">
                        View Case Study
                    </span>
                </div>
            </div>
        </div>
    );
};

export function ProjectsSection() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section id="projects" className="bg-neutral-50 dark:bg-neutral-950 transition-colors pt-16 pb-24">

            {/* --- DESKTOP VIEW (Sticky Scroll) --- */}
            <div ref={targetRef} className="relative h-[300vh] hidden lg:block">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <Container>

                        <div className="flex flex-col mb-12 max-w-2xl">
                            <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                                Selected Works
                            </h2>
                            <div className="h-1 w-20 bg-neutral-900 dark:bg-neutral-100 rounded-full mb-6" />
                            <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                                Engineering projects focused on scalability, performance, and clean architecture.
                            </p>
                        </div>

                        {/* WINDOW CAROUSEL DESKTOP */}
                        <div className="relative w-full overflow-hidden rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/20 border border-neutral-200 dark:border-neutral-800 p-8">
                            <motion.div style={{ x }} className="flex gap-8 w-max">
                                {PROJECTS_DATA.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex justify-between items-center mt-8 text-xs font-mono text-neutral-400">
                            <span>SCROLL DOWN TO NAVIGATE</span>
                            <span>{PROJECTS_DATA.length} PROJECTS</span>
                        </div>

                    </Container>
                </div>
            </div>

            {/* --- MOBILE VIEW (Horizontal Snap Scroll) --- */}
            <div className="lg:hidden">
                <Container>
                    <FadeIn className="flex flex-col items-center text-center mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Selected Works
                        </h2>
                        <div className="mt-4 h-1 w-16 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
                        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 animate-pulse">
                            ← Swipe to explore →
                        </p>
                    </FadeIn>
                </Container>

                {/* HORIZONTAL SCROLL CONTAINER */}
                {/* no-scrollbar: Menyembunyikan scrollbar agar bersih */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 no-scrollbar w-full">
                    {PROJECTS_DATA.map((project, index) => (
                        <div key={index} className="snap-center shrink-0 w-[85vw] sm:w-[400px]">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}