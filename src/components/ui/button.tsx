import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

// UPDATE: Kita tambahkan properti 'size' ke dalam interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon"; // <--- Size support ditambahkan
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // 1. Base Styles (Wajib ada)
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",

                    // 2. Variant Styles
                    variant === "primary" &&
                    "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",

                    variant === "outline" &&
                    "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800",

                    variant === "ghost" &&
                    "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50",

                    // 3. Size Styles (UPDATE PENTING)
                    size === "default" && "h-10 px-6 py-2 text-sm", // Ukuran standar
                    size === "sm" && "h-8 rounded-md px-3 text-xs", // Ukuran kecil (untuk kartu project)
                    size === "lg" && "h-12 rounded-md px-8 text-base", // Ukuran besar (untuk hero CTA)
                    size === "icon" && "h-10 w-10", // Untuk tombol icon bulat/kotak

                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";