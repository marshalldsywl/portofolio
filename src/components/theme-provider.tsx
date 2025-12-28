"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// REVISI: Kita gunakan React.ComponentProps untuk mengambil tipe secara otomatis.
// Ini lebih aman daripada import manual dari 'dist/types' yang sering berubah lokasi.
export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}