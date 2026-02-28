"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Animated Gradient Blobs - Hidden on mobile for performance */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 hidden md:block">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15, scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-300 dark:bg-teal-600 blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1, scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-sky-300 dark:bg-sky-700 blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-slate-900 dark:text-white"
                        >
                            {t("headline")}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
                        >
                            {t("subheadline")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg shadow-lg hover:shadow-teal-600/30 transition-all transform hover:-translate-y-1">
                                {t("demoClass")}
                            </button>
                            <button className="px-8 py-4 rounded-full bg-transparent border-2 border-slate-200 dark:border-slate-700 hover:border-teal-600 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-1">
                                {t("viewCourses")}
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 dark:from-teal-900/30 to-sky-100 dark:to-sky-900/20 rounded-[2rem] blur-2xl transform scale-105" />

                        <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative">
                                <Image
                                    src="/hero.png"
                                    alt="Student studying"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Floating card over image - Hidden loop on mobile */}
                                <motion.div
                                    animate={{
                                        y: typeof window !== 'undefined' && window.innerWidth > 768 ? [-10, 10, -10] : 0
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-4 left-4 right-4 h-24 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-100 dark:border-slate-700 flex items-center justify-between px-6 p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                                            <span className="text-teal-600 text-2xl">🌍</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-900 dark:text-white font-bold">10k+ Students</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">Learning actively</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating shapes - Simplified on mobile */}
                        <div className="hidden md:block">
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-100 dark:from-teal-900/40 to-sky-100 dark:to-sky-900/30 border border-white dark:border-slate-700 shadow-sm -z-10"
                            />
                            <motion.div
                                animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-sky-100 dark:from-sky-900/30 to-teal-50 dark:to-teal-900/20 border border-white dark:border-slate-700 shadow-sm -z-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
