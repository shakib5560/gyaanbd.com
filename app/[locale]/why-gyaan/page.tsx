"use client";

import Navbar from "@/app/components/Navbar";
import Features from "@/app/components/Features";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { CheckCircle2, Target, Eye, GraduationCap } from "lucide-react";

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

            {/* About the Teacher Section */}
            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                {/* Background decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Right Column: Teacher Portrait (Visual order left, DOM order can vary. Here we put it first for the creative split) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center lg:justify-start"
                        >
                            <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 z-10">
                                {/* Soft glowing ring behind the image */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-sky-400 opacity-20 blur-2xl animate-pulse" />

                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-teal-500 to-sky-500 shadow-[0_0_40px_rgba(20,184,166,0.2)]"
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900">
                                        <Image
                                            src="/bangla.png"
                                            alt="Teacher Profile"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                                {/* Subtle inner glow effect */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-400">
                                            {t("teacherSectionTitle")}
                                        </span>
                                    </h2>

                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                        {t("teacherIntro")}
                                    </p>

                                    {/* Education Badges Timeline */}
                                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500/50 before:via-sky-400/50 before:to-transparent">

                                        {/* Degree 1 */}
                                        <div className="relative flex items-center gap-6 group/badge cursor-default">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 dark:bg-slate-800 border-2 border-teal-500 flex items-center justify-center shadow-lg relative z-10 group-hover/badge:scale-110 group-hover/badge:bg-teal-500 transition-all duration-300">
                                                <GraduationCap className="w-6 h-6 text-teal-500 group-hover/badge:text-white transition-colors" />
                                            </div>
                                            <div className="bg-white dark:bg-slate-800/80 px-5 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm grow group-hover/badge:shadow-md group-hover/badge:-translate-y-0.5 transition-all duration-300">
                                                <p className="font-semibold text-slate-800 dark:text-slate-200">{t("teacherDegree2")}</p>
                                            </div>
                                        </div>

                                        {/* Degree 2 */}
                                        <div className="relative flex items-center gap-6 group/badge cursor-default">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 dark:bg-slate-800 border-2 border-sky-400 flex items-center justify-center shadow-lg relative z-10 group-hover/badge:scale-110 group-hover/badge:bg-sky-400 transition-all duration-300">
                                                <GraduationCap className="w-6 h-6 text-sky-400 group-hover/badge:text-white transition-colors" />
                                            </div>
                                            <div className="bg-white dark:bg-slate-800/80 px-5 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm grow group-hover/badge:shadow-md group-hover/badge:-translate-y-0.5 transition-all duration-300">
                                                <p className="font-semibold text-slate-800 dark:text-slate-200">{t("teacherDegree1")}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section ref={containerRef} className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header to transition nicely into the cards */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                        >
                            Our Core Principles
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto mt-6 rounded-full"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1"
                        >
                            <div className="h-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-12 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] hover:border-teal-500/30 transition-all duration-300 group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-8 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Target className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                                        {t("missionTitle")}
                                    </h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {t("missionDesc")}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex-1"
                        >
                            <div className="h-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-12 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] hover:border-sky-500/30 transition-all duration-300 group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Eye className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                                        {t("visionTitle")}
                                    </h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {t("visionDesc")}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
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

