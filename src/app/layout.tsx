import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PROFILE_DATA } from "@/lib/data"; // Import data profil

const inter = Inter({ subsets: ["latin"] });

// --- UPDATE METADATA DI SINI ---
export const metadata: Metadata = {
  // Title Template: Bagian "%s" akan diganti dengan judul spesifik tiap halaman
  title: {
    default: `${PROFILE_DATA.name} | ${PROFILE_DATA.role}`,
    template: `%s | ${PROFILE_DATA.name}`,
  },
  description: PROFILE_DATA.headline,
  keywords: [
    "Software Engineer", "Flutter Developer", "IoT Engineer",
    "R&D", "Next.js", "React", "Portfolio", "Indonesia"
  ],
  authors: [{ name: PROFILE_DATA.name }],
  creator: PROFILE_DATA.name,

  // Konfigurasi Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://marshall.dev", // Ganti dengan domain asli nanti
    title: `${PROFILE_DATA.name} | ${PROFILE_DATA.role}`,
    description: PROFILE_DATA.about,
    siteName: `${PROFILE_DATA.name} Portfolio`,
    // images: ... (Kita akan buat ini otomatis di langkah selanjutnya)
  },

  // Konfigurasi Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE_DATA.name} | ${PROFILE_DATA.role}`,
    description: PROFILE_DATA.headline,
    creator: "@username_twitter_anda", // Opsional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}