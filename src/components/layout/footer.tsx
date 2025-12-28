"use client";

import { Container } from "@/components/ui/container";
import { PROFILE_DATA } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    // Helper untuk icon (sama seperti Contact Section, reusable logic)
    const getIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case "github": return <Github className="w-4 h-4" />;
            case "linkedin": return <Linkedin className="w-4 h-4" />;
            default: return <Mail className="w-4 h-4" />;
        }
    };

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">

                    {/* Left: Copyright & Name */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                            {PROFILE_DATA.name}
                        </span>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            &copy; {currentYear} Built with Next.js, Tailwind & Framer Motion.
                        </p>
                    </div>

                    {/* Right: Social Links (Icon Only) */}
                    <div className="flex items-center gap-4">
                        {PROFILE_DATA.socials.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                aria-label={social.label}
                            >

                            </a>
                        ))}
                    </div>

                </div>
            </Container>
        </footer>
    );
}