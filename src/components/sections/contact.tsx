"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PROFILE_DATA } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

export function ContactSection() {
    // Helper untuk mapping icon
    const getIcon = (platform: string) => {
        const p = platform.toLowerCase().trim(); // Normalisasi string agar akurat
        if (p === "github") return <Github className="w-5 h-5" />;
        if (p === "linkedin") return <Linkedin className="w-5 h-5" />;
        return null; // Selain Github & Linkedin, return null (termasuk Mail)
    };

    // Ambil URL Gmail dari data.ts
    const emailLink = PROFILE_DATA.socials.find(s => s.platform === "mail")?.url || "#";

    // Styles Manual (Tailwind) - Stabil & Tanpa Error
    const baseButtonStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300";

    const primaryButtonStyles = cn(
        baseButtonStyles,
        "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        "h-12 px-8 rounded-full text-base gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
    );

    const outlineIconStyles = cn(
        baseButtonStyles,
        "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        "h-12 w-12 rounded-full"
    );

    return (
        <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
            <Container>
                <FadeIn className="flex flex-col items-center text-center max-w-2xl mx-auto">

                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20 mb-6">
                        Get In Touch
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
                        Ready to start a project?
                    </h2>

                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
                        Open to discussions regarding potential collaborations, career opportunities, or exchanging ideas about IoT & Software Dev technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">

                        {/* 1. Primary Action: Say Hello (Gmail Web) */}
                        <Link
                            href={emailLink}
                            target="_blank"
                            className={primaryButtonStyles}
                        >
                            <Mail className="w-4 h-4" />
                            Say Hello
                        </Link>

                        {/* 2. Secondary Actions: Social Circles */}
                        <div className="flex gap-4 justify-center sm:justify-start">
                            {PROFILE_DATA.socials.map((social) => {
                                // LOGIKA PEMBERSIH HANTU:
                                const icon = getIcon(social.platform);

                                // Jika tidak ada icon (misal: 'mail' return null), 
                                // maka JANGAN RENDER LINK SAMA SEKALI.
                                if (!icon) return null;

                                return (
                                    <Link
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        aria-label={social.label}
                                        className={outlineIconStyles}
                                    >
                                        {icon}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </FadeIn>
            </Container>
        </section>
    );
}