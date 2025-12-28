import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/lib/data';

// GANTI dengan domain asli Anda nanti saat deploy
const BASE_URL = 'https://marshall-portofolio.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {

    // 1. Halaman Statis (Home)
    const routes = [
        '',
        // '/about', // Jika nanti ada halaman about terpisah
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));

    // 2. Halaman Dinamis (Projects)
    // Ambil semua slug dari PROJECTS_DATA dan buat URL-nya
    const projects = PROJECTS_DATA.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date(), // Idealnya ambil dari database, tapi Date() cukup untuk statis
        changeFrequency: 'monthly' as const,
        priority: 0.8, // Priority sedikit lebih rendah dari Home
    }));

    return [...routes, ...projects];
}