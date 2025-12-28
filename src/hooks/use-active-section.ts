"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("");
    const pathname = usePathname(); // 2. Dapatkan URL path saat ini

    useEffect(() => {
        // Observer Options
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // Garis tengah layar
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // 3. Logic Re-Observe
        // Kita berikan sedikit delay (100ms) agar elemen halaman baru sempat dirender dulu oleh React
        const timeoutId = setTimeout(() => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.observe(element);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
            observer.disconnect(); // Pastikan observer dimatikan total
        };

        // 4. CRITICAL FIX: Tambahkan 'pathname' ke dependency array
        // Ini memaksa useEffect jalan ulang setiap kali user ganti halaman
    }, [sectionIds, pathname]);

    return activeSection;
}