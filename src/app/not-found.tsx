import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 text-center px-4 transition-colors">

            {/* Icon Besar dengan Animasi Pulse Halus */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-white dark:bg-neutral-900 p-6 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <FileQuestion className="w-12 h-12 text-blue-600 dark:text-blue-500" />
                </div>
            </div>

            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Page Not Found
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
                Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau URL-nya salah ketik.
            </p>

            {/* Action Button */}
            <Link href="/">
                <Button size="lg" className="gap-2 shadow-lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Button>
            </Link>

            {/* Footer Kecil */}
            <div className="mt-12 text-xs text-neutral-400 dark:text-neutral-600 font-mono">
                404_ERROR_RESOURCE_MISSING
            </div>
        </div>
    );
}