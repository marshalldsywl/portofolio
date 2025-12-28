"use client";

import { Container } from "@/components/ui/container";
import { SKILLS_CATEGORIES } from "@/lib/data";
import { FadeIn } from "@/components/ui/fade-in";
import {
    Smartphone, Globe, Trello,
    Code2, AppWindow, Package, Settings,
    Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import motion untuk animasi chip

export function SkillsSection() {

    const getCategoryIcon = (type: string) => {
        switch (type) {
            case "mobile": return <Smartphone className="w-5 h-5" />;
            case "web": return <Globe className="w-5 h-5" />;
            case "scrum": return <Trello className="w-5 h-5" />;
            default: return <Layers className="w-5 h-5" />;
        }
    };

    const getGroupIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes("language")) return <Code2 className="w-4 h-4" />;
        if (n.includes("framework") || n.includes("methodologies")) return <AppWindow className="w-4 h-4" />;
        if (n.includes("libraries") || n.includes("dependencies") || n.includes("tools")) return <Package className="w-4 h-4" />;
        return <Settings className="w-4 h-4" />;
    };

    return (
        <section id="skills" className="py-24 bg-white dark:bg-neutral-900 transition-colors">
            <Container>
                <FadeIn className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                        Expertise
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        Main focus on Mobile Development, supported by Web Development & Agile Methodology.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {SKILLS_CATEGORIES.map((category, catIndex) => {
                        const isMain = category.icon === "mobile";

                        return (
                            <FadeIn
                                key={category.title}
                                delay={catIndex * 0.1} // Delay level 1: Kartu muncul berurutan
                                className={cn(
                                    "flex flex-col h-full",
                                    isMain ? "lg:-mt-2" : ""
                                )}
                            >
                                <div className={cn(
                                    "h-full rounded-xl p-6 flex flex-col transition-all duration-300",
                                    isMain
                                        ? "bg-white dark:bg-neutral-900 border-2 border-blue-600/20 dark:border-blue-500/30 shadow-xl shadow-blue-900/5"
                                        : "bg-neutral-50 dark:bg-neutral-950/30 border border-neutral-200 dark:border-neutral-800"
                                )}>

                                    {/* Header Kategori */}
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                                        <div className={cn(
                                            "p-2 rounded-md flex items-center justify-center transition-colors",
                                            isMain
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500"
                                        )}>
                                            {getCategoryIcon(category.icon)}
                                        </div>

                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <h3 className={cn(
                                                    "text-base font-bold",
                                                    isMain ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-700 dark:text-neutral-300"
                                                )}>
                                                    {category.title}
                                                </h3>
                                                {isMain && (
                                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                                                        Primary
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Groups List */}
                                    <div className="space-y-6 flex-1">
                                        {category.groups.map((group, groupIndex) => (
                                            // ANIMASI CASCADING (Level 2): 
                                            // Group muncul sedikit setelah kartu (delay tambahan)
                                            <FadeIn
                                                key={group.name}
                                                delay={(catIndex * 0.1) + ((groupIndex + 1) * 0.1)}
                                                direction="up"
                                                className="block"
                                            >
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-neutral-400">
                                                        {getGroupIcon(group.name)}
                                                    </span>
                                                    <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                                        {group.name}
                                                    </h4>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {group.items.map((item) => (
                                                        // ANIMASI MICRO-INTERACTION (Level 3):
                                                        // Menggunakan motion.span untuk hover effect yang smooth (Spring physics)
                                                        <motion.span
                                                            key={item}
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                            className={cn(
                                                                "cursor-default px-2.5 py-1 text-xs font-medium rounded border transition-colors",
                                                                isMain
                                                                    ? "bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700"
                                                                    : "bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"
                                                            )}
                                                        >
                                                            {item}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </FadeIn>
                                        ))}
                                    </div>

                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

            </Container>
        </section>
    );
}