"use client";

import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Star, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { useCoursesData } from "@/app/lib/useCoursesData";

export default function CoursesPage() {
    const locale = useLocale();
    const t = useTranslations("CoursesPage");
    const tCourses = useTranslations("Courses");
    const [activeFilter, setActiveFilter] = useState("All");
    const coursesData = useCoursesData();

    const filters = [
        { id: "All", label: t("filterAll") },
        { id: "Beginner", label: t("filterBeginner") },
        { id: "Intermediate", label: t("filterIntermediate") },
        { id: "Advanced", label: t("filterAdvanced") },
    ];

    const filteredCourses = coursesData.filter(course =>
        activeFilter === "All" || course.level === activeFilter || course.level === "All"
    );

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-teal-500/30 selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-[100px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            {t("heroTitlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-400">{t("heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            {t("heroSubtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filter Bar */}
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-fit mx-auto">
                            <div className="hidden sm:flex items-center justify-center px-4 text-slate-400 border-r border-slate-200 dark:border-slate-700">
                                <Filter className="w-5 h-5" />
                            </div>
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                                        activeFilter === filter.id
                                            ? "text-white shadow-md shadow-teal-500/20"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {activeFilter === filter.id && (
                                        <motion.div
                                            layoutId="active-filter"
                                            className="absolute inset-0 bg-teal-600 rounded-xl -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Courses Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredCourses.map((course) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={course.id}
                                    className={cn(
                                        "group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col h-full",
                                        course.featured
                                            ? "border-teal-200 dark:border-teal-800 shadow-xl shadow-teal-900/5 hover:shadow-teal-900/10 lg:col-span-1 lg:row-span-1"
                                            : "border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl"
                                    )}
                                >
                                    <Link href={`/${locale}/courses/${course.id}`} className="flex flex-col h-full group/link">
                                        {/* Image Container */}
                                        <div className={cn(
                                            "relative w-full bg-slate-100 dark:bg-slate-800 overflow-hidden",
                                            course.featured ? "h-64" : "h-48"
                                        )}>
                                            <Image
                                                src="/course_illustration.png"
                                                alt={course.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <div className={cn(
                                                    "backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm",
                                                    course.accent
                                                )}>
                                                    {course.displayLevel}
                                                </div>
                                                {course.featured && (
                                                    <div className="bg-amber-400 text-amber-950 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                                                        <Star className="w-3 h-3 fill-amber-950" />
                                                        {t("featuredBadge")}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                <span className="text-slate-800 dark:text-slate-200 font-bold text-sm">{course.rating}</span>
                                                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">({course.reviews} reviews)</span>
                                            </div>

                                            <h3 className={cn(
                                                "font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover/link:text-teal-600 dark:group-hover/link:text-teal-400 transition-colors",
                                                course.featured ? "text-2xl" : "text-xl"
                                            )}>
                                                {course.title}
                                            </h3>

                                            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                                                {course.description}
                                            </p>

                                            <button className={cn(
                                                "w-full py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2",
                                                course.featured
                                                    ? "bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover/link:bg-teal-50 dark:group-hover/link:bg-teal-900/30 group-hover/link:text-teal-700 dark:group-hover/link:text-teal-400"
                                            )}>
                                                {tCourses("viewDetails")}
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                            </button>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}

