export interface SocialLink {
    platform: string;
    url: string;
    label: string;
}

// UPDATE: Menambahkan field detail untuk Case Study
export interface Project {
    slug: string;
    title: string;
    description: string; // Deskripsi singkat untuk kartu depan

    // --- Data Baru untuk Detail Page ---
    fullDescription: string; // Deskripsi lengkap (Latar belakang)
    challenge: string;       // Masalah teknis
    solution: string;        // Solusi engineering
    features: string[];      // Fitur utama (bullet points)

    techStack: string[];
    demoUrl?: string;
    repoUrl?: string;
    year: string;

    // Opsional: Jika nanti ada screenshot
    // images?: string[]; 
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements?: string[];
}

export interface Profile {
    name: string;
    role: string;
    headline: string;
    location: string;
    about: string;
    socials: SocialLink[];
    skills: string[];
    avatar: string;
}

// Tambahkan di bagian paling bawah atau sesuaikan tempatnya
export interface SkillGroup {
    name: string; // Contoh: "Languages", "State Management", "Dependencies"
    items: string[]; // Contoh: ["Dart", "Kotlin"]
}

export interface SkillCategory {
    title: string; // Contoh: "Mobile Development"
    icon: "mobile" | "web" | "scrum"; // Untuk logic icon di UI
    groups: SkillGroup[];
}