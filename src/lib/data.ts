import { Profile, Project, Experience } from "./types";
// ... imports
import { SkillCategory } from "@/lib/types";

export const SKILLS_CATEGORIES: SkillCategory[] = [
    {
        title: "Mobile Development",
        icon: "mobile",
        groups: [
            {
                name: "Languages",
                items: ["Dart", "Kotlin (Android Native)", "C++ (Integration)"]
            },
            {
                name: "Frameworks",
                items: ["Flutter", "Android SDK"]
            },
            {
                name: "Libraries & Dependencies",
                items: ["Riverpod (State Mgt)", "Dio (Networking)", "Flutter Blue Plus (BLE)", "Hive (Local DB)", "Clean Architecture"]
            }
        ]
    },
    {
        title: "Web Development",
        icon: "web",
        groups: [
            {
                name: "Languages",
                items: ["TypeScript", "JavaScript (ES6+)", "SQL"]
            },
            {
                name: "Frameworks",
                items: ["Next.js (App Router)", "React", "Node.js"]
            },
            {
                name: "Libraries & Dependencies",
                items: ["Tailwind CSS", "Framer Motion", "Shadcn UI", "Prisma ORM", "Recharts"]
            }
        ]
    },
    {
        title: "Methodologies & Tools",
        icon: "scrum",
        groups: [
            {
                name: "Methodologies", // Setara dengan 'Framework' di teknis
                items: ["Scrum Framework", "Agile Development", "Sprint Planning", "TDD"]
            },
            {
                name: "Tools", // Setara dengan 'Libraries/Tools'
                items: ["Jira Software", "Git & GitHub", "Figma (Dev Mode)", "Postman", "VS Code"]
            }
        ]
    }
];

export const PROFILE_DATA: Profile = {
    name: "Marshall Syawal", // Ganti dengan nama asli jika beda
    avatar: "/profile.png",
    role: "Software Engineer",
    headline: "Engineering robust IoT and scalable mobile / web based platforms.",
    location: "Indonesia",
    about: "Bridging the gap between hardware and software. I engineer robust mobile solutions and IoT ecosystems, transforming complex requirements into production-ready platforms. Focused on maintainable code, Clean Architecture, and delivering value through Agile methodologies.",
    skills: [
        "Flutter", "Dart", "IoT Integration", "Next.js",
        "TypeScript", "Clean Architecture", "BLE", "Scrum"
    ],
    socials: [
        {
            platform: "github",
            url: "https://github.com/marshalldsywl",
            label: "GitHub"
        },
        {
            platform: "linkedin",
            url: "https://www.linkedin.com/in/marshallda-syawal",
            label: "LinkedIn"
        },
        {
            platform: "mail",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=marshalldsywl@gmail.com",
            label: "Email"
        },
    ],
};

export const EXPERIENCE_DATA = [
    {
        company: "Artium Multikarya Indonesia",
        role: "Software Engineer",
        period: "2025 - Present",
        description: "Engineering IoT-based environmental solutions. Bridging hardware and software through robust mobile applications and efficient data communication protocols.",
    },
    {
        company: "Byo Service",
        role: "Head Mobile Software Technician",
        period: "2019 - 2022",
        description: "Served as the primary lead for advanced mobile repair solutions, handling critical hardware & software cases. Managed technical resources and workflows to resolve complex device failures that required high-precision intervention.",

    },
    {
        company: "Mcko Service",
        role: "Mobile Software Technician",
        period: "2015 - 2019",
        description: "Specialized in diagnosing and resolving complex mobile software issues. Developed a systematic approach to troubleshooting operating system failures, bootloader errors, and firmware corruptions, laying a strong foundation in system-level debugging.",

    }
];

// src/lib/data.ts

export const PROJECTS_DATA = [
    {
        title: "HVAS Mobile Controller",
        slug: "hvas-controller",
        year: "2024",
        description: "An industrial-grade mobile interface for High Volume Air Samplers. Engineered a resilience-focused background service architecture to guarantee uninterrupted 24-hour sampling sessions via Bluetooth Low Energy (BLE), ensuring critical data integrity.",
        techStack: ["Flutter", "Flutter Blue Plus", "Background Service", "SQLite", "Real-time Chart"],
        repoUrl: "#",
        features: [
            "Resilient Background Service for 24-hour sampling",
            "Real-time BLE Data Streaming & Reconnection Logic",
            "Local Data Persistence with SQLite (Offline-First)",
            "Live Chart Visualization for Air Flow & Pressure"
        ]
    },
    {
        title: "Artium Connect",
        slug: "artium-connect",
        year: "2024",
        description: "A specialized diagnostic tool designed to validate connectivity and data transmission between Air Quality Monitoring Systems (AQMS) and the Ministry of Environment (KLHK) servers. Ensures compliance with ISPU standards.",
        techStack: ["Flutter", "REST API", "MQTT", "Data Visualization", "Provider"],
        repoUrl: "#",
        features: [
            "KLHK Server Connectivity Validation",
            "Hybrid MQTT & REST API Communication Protocol",
            "ISPU Data Standard Compliance Checker",
            "Real-time Data Transmission Logs"
        ]
    },
    {
        title: "Procurement Platform",
        slug: "procurement-web",
        year: "2023",
        description: "A centralized web platform streamlining the corporate procurement lifecycle. Designed with a modular architecture to facilitate the future transition into a full-fledged Enterprise Resource Planning (ERP) system.",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "MVC Architecture"],
        repoUrl: "#",
        features: [
            "End-to-end Procurement Lifecycle Management",
            "Role-Based Access Control (RBAC)",
            "Budget Approval Workflow System",
            "Scalable MVC Architecture for ERP Integration"
        ]
    },
    {
        title: "Personal Portfolio",
        slug: "portfolio-v1",
        year: "2025",
        description: "A high-performance personal branding platform built with modern web technologies. Features physics-based scroll animations, component-driven architecture, and a clean, industrial aesthetic.",
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
        repoUrl: "https://github.com/username/repo",
        features: [
            "Physics-based Horizontal Scroll Animations",
            "Component-Driven UI Architecture",
            "Dark Mode & Responsive Design",
            "Optimized for SEO & Performance"
        ]
    },
    {
        title: "Internal Task Manager",
        slug: "task-manager-app",
        year: "2023",
        description: "A collaborative mobile tool designed to enhance internal R&D team productivity. Features agile board visualization, sprint tracking, and role-based task assignments.",
        techStack: ["Flutter", "Firebase", "State Management", "Local Notifications"],
        repoUrl: "#",
        features: [
            "Agile Kanban Board Visualization",
            "Real-time Task Updates with Firebase",
            "Sprint Tracking & Deadline Notifications",
            "Team Collaboration Tools"
        ]
    },
    {
        title: "Money Record",
        slug: "money-record",
        year: "2022",
        description: "A user-centric financial management application focused on privacy and speed. Implements a local-first storage architecture (Offline) with interactive expense analytics and reporting.",
        techStack: ["Flutter", "Hive DB", "FL Chart", "Clean Code"],
        repoUrl: "#",
        features: [
            "Local-First Architecture (Privacy Focused)",
            "Interactive Expense Analytics Charts",
            "Fast Transaction Entry System",
            "Offline Data Export to CSV"
        ]
    }
];