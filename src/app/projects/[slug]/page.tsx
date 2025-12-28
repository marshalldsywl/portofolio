import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from "lucide-react";

// Tipe Params di Next.js 15 adalah Promise
interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate Metadata juga harus handle params sebagai Promise
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params; // <--- AWAIT DI SINI
    const project = PROJECTS_DATA.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Case Study`,
        description: project.description,
    };
}

// Component Halaman Utama
export default async function ProjectDetailPage({ params }: PageProps) {
    // 1. Await params terlebih dahulu
    const { slug } = await params; // <--- AWAIT DI SINI

    // 2. Cari data project berdasarkan slug
    const project = PROJECTS_DATA.find((p) => p.slug === slug);

    // 3. Jika tidak ketemu, lempar ke halaman 404
    if (!project) {
        notFound();
    }

    return (
        <article className="bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors">

            {/* --- HEADER SECTION --- */}
            <section className="pt-32 pb-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                <Container>
                    {/* Back Button */}
                    <Link href="/#projects">
                        <Button variant="ghost" size="sm" className="mb-8 -ml-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>

                    {/* Title & Meta */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            {project.fullDescription}
                        </p>

                        {/* Tech Stack & Year */}
                        <div className="flex flex-wrap gap-4 items-center mb-8">
                            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full">
                                <Calendar className="w-4 h-4" />
                                {project.year}
                            </div>
                            {project.techStack.map((tech) => (
                                <span key={tech} className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            {project.demoUrl && project.demoUrl !== "#" && (
                                <Link href={project.demoUrl} target="_blank">
                                    <Button className="gap-2">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </Button>
                                </Link>
                            )}
                            {project.repoUrl && project.repoUrl !== "#" && (
                                <Link href={project.repoUrl} target="_blank">
                                    <Button variant="outline" className="gap-2 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800">
                                        <Github className="w-4 h-4" /> View Code
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* --- CONTENT BODY --- */}
            <section className="py-16">
                <Container>
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* MAIN CONTENT (Left - 2/3) */}
                        <div className="md:col-span-2 space-y-12">

                            {/* The Challenge */}
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-red-500 rounded-full inline-block" />
                                    The Challenge
                                </h2>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* The Solution */}
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-green-500 rounded-full inline-block" />
                                    The Solution
                                </h2>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                                    {project.solution}
                                </p>
                            </div>

                        </div>

                        {/* SIDEBAR (Right - 1/3) */}
                        <div className="md:col-span-1">
                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-blue-600" />
                                    Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 text-sm">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

        </article>
    );
}