"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE_DATA } from "@/lib/data";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- LOGIKA ANIMASI ---
    const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "25%"]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const detailOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const detailX = useTransform(scrollYProgress, [0.3, 0.6], [-50, 0]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative h-[250vh] bg-neutral-50 dark:bg-neutral-950 transition-colors mb-24 md:mb-40"
        >
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                <div className="w-full max-w-7xl px-6 relative h-full flex items-center">

                    {/* INTRO TEXT (Nama Besar) */}
                    <motion.div
                        style={{ opacity: introOpacity, y: introY }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100 mb-4 mix-blend-overlay dark:mix-blend-normal">
                            {PROFILE_DATA.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light tracking-widest">
                            SCROLL TO EXPLORE
                        </p>
                    </motion.div>

                    {/* DETAIL TEXT (Headline & About) */}
                    <motion.div
                        style={{ opacity: detailOpacity, x: detailX }}
                        // FIX UTAMA DI SINI:
                        // 1. 'right-6': Memaksa container berhenti di sisi kanan layar mobile (agar tidak bablas).
                        // 2. 'md:right-auto': Di desktop, biarkan lebarnya bebas (karena layar luas).
                        // 3. 'md:max-w-2xl': Membatasi lebar maksimal di desktop agar enak dibaca.
                        className="absolute left-6 right-6 md:right-auto md:left-20 top-1/2 -translate-y-1/2 md:max-w-2xl z-30 pointer-events-auto"
                    >
                        <FadeIn delay={0.1}>
                            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20 mb-6">
                                {PROFILE_DATA.role}
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
                                {PROFILE_DATA.headline}
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            {/* FIX TEXT WRAPPING: break-words memaksa kata panjang untuk turun baris */}
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed break-words">
                                {PROFILE_DATA.about}
                            </p>
                        </FadeIn>

                        {/* <FadeIn delay={0.4} className="flex flex-wrap gap-4">
                            <Button variant="outline" className="dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
                                Download CV <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </FadeIn> */}
                    </motion.div>

                    {/* LAYER FOTO HERO */}
                    <motion.div
                        style={{ x: xPosition }}
                        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
                    >
                        {/* Glow Effect */}
                        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200 dark:bg-blue-900/40 rounded-full blur-[80px] md:blur-[120px] opacity-40 -z-10" />

                        <div className="relative w-[85vw] h-[50vh] md:w-[600px] md:h-[800px] flex items-end justify-center">

                            <Image
                                src={PROFILE_DATA.avatar}
                                alt="Profile"
                                fill
                                className="object-contain"
                                priority
                            />

                            <motion.div
                                style={{ opacity: overlayOpacity }}
                                className="absolute inset-0 w-full h-full backdrop-blur-[8px] transition-all"
                            />

                            <div
                                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 via-neutral-50/60 dark:from-neutral-950 dark:via-neutral-950/60 to-transparent z-20 pointer-events-none"
                            />

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}