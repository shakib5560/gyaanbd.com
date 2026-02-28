"use client";

import Navbar from "@/app/components/Navbar";
import Features from "@/app/components/Features";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyGyaanPage() {
    const t = useTranslations("WhyGyaan");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-teal-500/30 selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
                {/* Background Decorations */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-200/40 dark:bg-teal-900/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-200/40 dark:bg-sky-900/20 rounded-full blur-[120px]" />

                    {/* Subtle Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-20 opacity-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                            <span className="block text-slate-900 dark:text-white mb-2">{t("heroTitlePrefix")}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-400">
                                {t("heroTitleHighlight")}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {t("heroSubtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section ref={containerRef} className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Image Column */}
                        <motion.div
                            style={{ y, opacity }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                                <Image
                                    src="/course_illustration.png"
                                    alt="Learning Illustration"
                                    fill
                                    className="object-contain p-8 hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-4 right-4 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="w-full lg:w-1/2 space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{t("missionTitle")}</h2>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-teal-500 pl-6">
                                    {t("missionDesc")}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-sky-600 dark:text-sky-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold">{t("visionTitle")}</h2>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-sky-500 pl-6">
                                    {t("visionDesc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Existing Sections */}
            <Features />
            <CTA />
            <Footer />
        </main>
    );
}

