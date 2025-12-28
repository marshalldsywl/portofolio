"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PROFILE_DATA } from "@/lib/data";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // UPDATED: Link menggunakan 'Absolute Path' (/#...) 
    // agar tombol ini tetap berfungsi saat Anda berada di halaman detail project.
    const navLinks = [
        { name: "About", href: "/#about", id: "about" },
        { name: "Skills", href: "/#skills", id: "skills" },
        { name: "Experience", href: "/#experience", id: "experience" },
        { name: "Projects", href: "/#projects", id: "projects" },
        { name: "Contact", href: "/#contact", id: "contact" },
    ];

    // Hook untuk mendeteksi section mana yang sedang dilihat user
    const activeSection = useActiveSection(navLinks.map(link => link.id));

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors">
            <Container>
                <div className="flex h-16 items-center justify-between">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
                        onClick={handleLinkClick}
                    >
                        {PROFILE_DATA.name.split(" ")[0]}
                        <span className="text-blue-600 dark:text-blue-500">.dev</span>
                    </Link>

                    {/* --- DESKTOP NAV (MODERN PILL STYLE) --- */}
                    <nav className="hidden md:flex gap-1 bg-neutral-100/50 dark:bg-neutral-900/50 p-1 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                                        // Teks Aktif: Hitam/Putih Solid. Tidak Aktif: Abu-abu.
                                        isActive
                                            ? "text-neutral-900 dark:text-neutral-100"
                                            : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                    )}
                                >
                                    {/* Background Pill yang Bergerak */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm z-[-1]"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* THEME TOGGLE */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5 text-neutral-100" />
                                ) : (
                                    <Moon className="h-5 w-5 text-neutral-600" />
                                )}
                            </button>
                        )}

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* --- MOBILE MENU DRAWER --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-xl"
                    >
                        <Container className="py-4 flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                        "block px-4 py-3 text-base font-medium rounded-lg transition-all",
                                        activeSection === link.id
                                            // Mobile Active Style
                                            ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-semibold pl-6"
                                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}