"use client";

import { Container } from "@/components/ui/container";
import { EXPERIENCE_DATA } from "@/lib/data";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
    return (
        <section id="experience" className="pt-24 pb-0 bg-neutral-50 dark:bg-neutral-950 transition-colors overflow-hidden">
            <Container>
                {/* Header */}
                <FadeIn className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                        8 Years Work Experience
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-blue-600 dark:bg-blue-500 rounded-full" />
                </FadeIn>

                <div className="relative max-w-4xl mx-auto">

                    {/* Main Timeline Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-20"> {/* Jarak antar item sedikit diperlebar agar elegan */}
                        {EXPERIENCE_DATA.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={cn(
                                    "relative flex flex-col md:flex-row items-center",
                                    // Layout Zig-Zag
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                )}>

                                    {/* --- SPACER --- */}
                                    <div className="hidden md:block md:w-1/2" />

                                    {/* --- CENTER DOT --- */}
                                    <div className="absolute left-[12px] md:left-1/2 top-0 w-4 h-4 rounded-full border-[3px] border-white dark:border-neutral-950 bg-blue-600 dark:bg-blue-500 shadow-md transform md:-translate-x-1/2 z-10" />

                                    {/* --- CONTENT AREA --- */}
                                    <div className={cn(
                                        "w-full md:w-1/2 pl-12 md:pl-0",
                                        // Padding Desktop untuk memberi jarak dari garis tengah
                                        isEven ? "md:pl-16" : "md:pr-16"
                                    )}>
                                        <FadeIn
                                            delay={index * 0.1}
                                            direction={isEven ? "left" : "right"}
                                            className={cn(
                                                "flex flex-col gap-3", // Gap antar elemen teks
                                                // Text Alignment Logic
                                                isEven ? "md:text-left" : "md:text-right"
                                            )}
                                        >
                                            {/* Role & Meta Info */}
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                                    {exp.role}
                                                </h3>

                                                <div className={cn(
                                                    "flex flex-wrap gap-3 mt-2 text-sm items-center font-medium",
                                                    isEven ? "md:justify-start" : "md:justify-end"
                                                )}>
                                                    <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                                                        <Briefcase className="w-3.5 h-3.5" />
                                                        {exp.company}
                                                    </span>
                                                    <span className="text-neutral-300 dark:text-neutral-700 hidden md:inline">•</span>
                                                    <span className="text-neutral-500 dark:text-neutral-400 font-mono flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description (Hanya ini yang ditampilkan) */}
                                            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* List Achievements DIHAPUS untuk tampilan minimalis */}

                                        </FadeIn>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}