"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    fullWidth = false
}: FadeInProps) {

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 };
            case "down": return { y: -40, x: 0 };
            case "left": return { y: 0, x: 40 };
            case "right": return { y: 0, x: -40 };
            default: return { y: 0, x: 0 };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getDirectionOffset() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut"
            }}
            className={cn(fullWidth ? "w-full" : "", className)}
        >
            {children}
        </motion.div>
    );
}