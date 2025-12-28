"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // 1. Hook untuk mendeteksi progress scroll (0 sampai 1)
    const { scrollYProgress } = useScroll();

    // 2. Spring Physics: Agar animasi pengisian lingkaran terasa smooth/elastis
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            // Muncul setelah scroll 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <button
                        onClick={scrollToTop}
                        className={cn(
                            "group relative flex h-12 w-12 items-center justify-center rounded-full",
                            "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md", // Glassmorphism
                            "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",
                            "border border-neutral-200 dark:border-neutral-800"
                        )}
                        aria-label="Scroll to top"
                    >
                        {/* 3. SVG PROGRESS RING */}
                        {/* Kita putar -90deg agar mulainya dari jam 12 (atas) */}
                        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                            {/* Track Ring (Abu-abu tipis) */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                className="text-neutral-100 dark:text-neutral-800"
                                strokeWidth="4"
                            />

                            {/* Active Indicator Ring (Biru) */}
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                className="text-blue-600 dark:text-blue-500"
                                strokeWidth="4"
                                style={{ pathLength }} // <-- Magic-nya di sini: Panjang garis dikontrol oleh scroll
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* 4. Icon Panah */}
                        <ArrowUp className="h-5 w-5 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}