"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useCoursesData } from "@/app/lib/useCoursesData";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Courses() {
    const t = useTranslations("Courses");
    const locale = useLocale();
    const allCourses = useCoursesData();
    const courses = allCourses.slice(0, 4);

    return (
        <section id="courses" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            {t("titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">{t("titleHighlight")}</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            {t("description")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Link href={`/${locale}/courses`}>
                            <button className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors group border border-teal-200 dark:border-teal-900/50 hover:border-teal-400 dark:hover:border-teal-700 px-5 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30">
                                {t("viewAll")}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-teal-900/20"
                        >
                            <Link href={`/${locale}/courses/${course.id}`} className="flex flex-col h-full group/link">
                                {/* Image Container */}
                                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                    <Image
                                        src="/course_illustration.png"
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover/link:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/50 dark:border-slate-800/50 ${course.accent}`}>
                                        {course.displayLevel || course.level}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-1 mb-3">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">{course.rating}</span>
                                        <span className="text-slate-400 dark:text-slate-500 text-sm">({course.reviews} reviews)</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover/link:text-teal-700 dark:group-hover/link:text-teal-400 transition-colors">
                                        {course.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                                        {course.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
                                        <button className="w-full py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 group-hover/link:bg-teal-600 dark:group-hover/link:bg-teal-600 text-slate-700 dark:text-slate-300 group-hover/link:text-white dark:group-hover/link:text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-slate-100 dark:border-slate-700 hover:border-teal-600 dark:hover:border-teal-600">
                                            {t("viewDetails")}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
