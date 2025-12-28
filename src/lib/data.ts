import { Profile, Project, Experience, SkillCategory } from "./types";

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
                name: "Methodologies",
                items: ["Scrum Framework", "Agile Development", "Sprint Planning", "TDD"]
            },
            {
                name: "Tools",
                items: ["Jira Software", "Git & GitHub", "Figma (Dev Mode)", "Postman", "VS Code"]
            }
        ]
    }
];

export const PROFILE_DATA: Profile = {
    name: "Marshall Syawal",
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

export const EXPERIENCE_DATA: Experience[] = [
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

// DATA PROJECT YANG SUDAH DIPERBAIKI (LENGKAP)
export const PROJECTS_DATA: Project[] = [
    {
        title: "HVAS Mobile Controller",
        slug: "hvas-controller",
        year: "2024",
        description: "An industrial-grade mobile interface for High Volume Air Samplers.",
        // DATA BARU DITAMBAHKAN:
        fullDescription: "An industrial-grade mobile interface for High Volume Air Samplers. Engineered a resilience-focused background service architecture to guarantee uninterrupted 24-hour sampling sessions via Bluetooth Low Energy (BLE), ensuring critical data integrity.",
        challenge: "Maintaining a stable BLE connection for 24 hours continuously in an industrial environment with high interference potential, while ensuring data is never lost even if the UI is closed.",
        solution: "Implemented a Foreground Service with Wake Locks to prevent OS process killing. Designed a local buffering system (Queue) using SQLite to store data temporarily when BLE disconnects, and auto-sync when reconnected.",
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
        description: "Diagnostic tool for AQMS connectivity validation.",
        fullDescription: "A specialized diagnostic tool designed to validate connectivity and data transmission between Air Quality Monitoring Systems (AQMS) and the Ministry of Environment (KLHK) servers. Ensures compliance with ISPU standards.",
        challenge: "Debugging complex communication protocols between proprietary hardware and government servers with strict data formatting requirements (ISPU Standards).",
        solution: "Built a hybrid communication engine that supports both MQTT for real-time telemetry and REST API for validation logs, complete with a visual packet inspector.",
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
        description: "Centralized corporate procurement platform.",
        fullDescription: "A centralized web platform streamlining the corporate procurement lifecycle. Designed with a modular architecture to facilitate the future transition into a full-fledged Enterprise Resource Planning (ERP) system.",
        challenge: "Migrating manual, paper-based procurement workflows into a digital system without disrupting existing operational procedures and approval hierarchies.",
        solution: "Designed a flexible Role-Based Access Control (RBAC) system and a dynamic state-machine workflow engine to handle multi-level approvals.",
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
        description: "High-performance personal branding platform.",
        fullDescription: "A high-performance personal branding platform built with modern web technologies. Features physics-based scroll animations, component-driven architecture, and a clean, industrial aesthetic.",
        challenge: "Creating a unique, motion-rich experience that remains performant on mobile devices and achieves a perfect 100 Lighthouse score.",
        solution: "Utilized Next.js App Router for server-side rendering, Framer Motion for GPU-accelerated animations, and Tailwind CSS for minimal bundle size.",
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
        repoUrl: "https://github.com/marshalldsywl/portfolio",
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
        description: "Collaborative R&D team productivity tool.",
        fullDescription: "A collaborative mobile tool designed to enhance internal R&D team productivity. Features agile board visualization, sprint tracking, and role-based task assignments.",
        challenge: "Synchronizing task states in real-time across multiple team members' devices with minimal latency.",
        solution: "Leveraged Firebase Realtime Database with offline support and optimistic UI updates to ensure instant feedback for users.",
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
        description: "Privacy-focused financial management app.",
        fullDescription: "A user-centric financial management application focused on privacy and speed. Implements a local-first storage architecture (Offline) with interactive expense analytics and reporting.",
        challenge: "Providing complex financial analytics on-device without compromising app startup time or scrolling performance.",
        solution: "Implemented Hive (NoSQL) for ultra-fast read/write operations and calculated heavy analytics in background isolates.",
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