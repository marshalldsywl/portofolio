import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = 'https://marshall.dev'; // GANTI dengan domain asli nanti

    return {
        rules: {
            userAgent: '*', // Berlaku untuk semua bot (Googlebot, Bingbot, dll)
            allow: '/',     // Boleh akses semua halaman
            disallow: '/private/', // Contoh: Folder private dilarang (jika ada)
        },
        sitemap: `${BASE_URL}/sitemap.xml`, // Penunjuk lokasi sitemap
    };
}