"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap, BookOpen, Star } from "lucide-react";

export default function AboutMe() {
    const t = useTranslations("AboutMe");

    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Background elements - Hidden on mobile */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl -translate-y-1/2 -z-10 hidden md:block" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 lg:w-5/12 relative"
                    >
                        <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700">
                            {/* Note: Update src with the actual instructor profile image */}
                            <img
                                src="/testimonial_portrait.png"
                                alt="Instructor Profile"
                                className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20">
                                <h3 className="text-white font-bold text-2xl">{t("name")}</h3>
                                <p className="text-teal-400 font-medium">{t("role")}</p>
                            </div>
                        </div>

                        {/* Floating Experience Badge - Disabled loop on mobile */}
                        <motion.div
                            animate={{
                                y: typeof window !== 'undefined' && window.innerWidth > 768 ? [-5, 5, -5] : 0
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-10 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">{t("experienceYears")}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{t("experienceLabel")}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 lg:w-7/12"
                    >
                        <div className="inline-block bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                            {t("tag")}
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {t("title")}
                        </h2>

                        <div className="space-y-4 mb-8">
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                {t("bio1")}
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                {t("bio2")}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <h4 className="font-bold text-slate-900 dark:text-white">{t("stat1Value")}</h4>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("stat1Label")}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="w-5 h-5 text-amber-500" />
                                    <h4 className="font-bold text-slate-900 dark:text-white">{t("stat2Value")}</h4>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("stat2Label")}</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
