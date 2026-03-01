"use client";

import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Quote, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

export default function TestimonialsPage() {
    const t = useTranslations("TestimonialsPage");
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        { id: "All", label: t("filterAll") },
        { id: "Professionals", label: t("filterProfessionals") },
        { id: "Students", label: t("filterStudents") },
    ];

    const testimonialsData = [
        {
            id: 1,
            name: t("t1Name"),
            role: t("t1Role"),
            text: t("t1Text"),
            category: "Professionals",
            image: "/testimonial_portrait.png",
            gradient: "from-blue-500/20 to-teal-400/20",
            border: "group-hover:border-teal-400/50"
        },
        {
            id: 2,
            name: t("t2Name"),
            role: t("t2Role"),
            text: t("t2Text"),
            category: "Students",
            image: "/testimonial_portrait.png",
            gradient: "from-purple-500/20 to-pink-400/20",
            border: "group-hover:border-pink-400/50"
        },
        {
            id: 3,
            name: t("t3Name"),
            role: t("t3Role"),
            text: t("t3Text"),
            category: "Professionals",
            image: "/testimonial_portrait.png",
            gradient: "from-amber-500/20 to-orange-400/20",
            border: "group-hover:border-orange-400/50"
        },
        {
            id: 4,
            name: t("t4Name"),
            role: t("t4Role"),
            text: t("t4Text"),
            category: "Students",
            image: "/testimonial_portrait.png",
            gradient: "from-emerald-500/20 to-green-400/20",
            border: "group-hover:border-green-400/50"
        }
    ];

    const filteredTestimonials = testimonialsData.filter(testimonial =>
        activeFilter === "All" || testimonial.category === activeFilter
    );

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-teal-500/30 selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white dark:bg-slate-900">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-teal-500/5 to-transparent blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-blue-600/5 to-transparent blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center justify-center p-4 mb-8 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 shadow-sm border border-teal-100 dark:border-teal-800/50">
                            <Quote className="w-8 h-8 rotate-180" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            <span className="block text-slate-900 dark:text-white mb-2">{t("heroTitlePrefix")}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-400">{t("heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            {t("heroSubtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filter Bar */}
                    <div className="mb-16">
                        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-fit mx-auto relative overflow-hidden">
                            <div className="hidden sm:flex items-center justify-center px-4 text-slate-400 border-r border-slate-200 dark:border-slate-700">
                                <Filter className="w-5 h-5" />
                            </div>
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={cn(
                                        "relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10",
                                        activeFilter === filter.id
                                            ? "text-white"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                    )}
                                >
                                    {activeFilter === filter.id && (
                                        <motion.div
                                            layoutId="testimonial-filter"
                                            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-sky-500 rounded-xl shadow-lg shadow-teal-500/25 -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        />
                                    )}
                                    <span className="relative">{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Grid Canvas */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredTestimonials.map((testimonial, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    key={testimonial.id}
                                    className={cn(
                                        "group relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible",
                                        testimonial.border
                                    )}
                                >
                                    {/* Abstract background gradient glow */}
                                    <div className={cn(
                                        "absolute inset-0 rounded-[2.5rem] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl",
                                        testimonial.gradient
                                    )} />

                                    <div className="flex flex-col h-full relative z-10">
                                        {/* Floating Avatar */}
                                        <div className="absolute -top-16 right-8 w-24 h-24 rounded-full p-1.5 bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 group-hover:-translate-y-2 transition-transform duration-500">
                                            <div className="w-full h-full relative rounded-full overflow-hidden">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Small accent dot */}
                                            <div className="absolute bottom-1, right-1 w-4 h-4 bg-teal-500 border-2 border-white dark:border-slate-900 rounded-full" />
                                        </div>

                                        <Quote className="w-10 h-10 text-slate-200 dark:text-slate-800 mb-6 group-hover:text-teal-500/20 transition-colors rotate-180" />

                                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-8 flex-grow italic">
                                            &quot;{testimonial.text}&quot;
                                        </p>

                                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium">
                                                    {testimonial.role}
                                                </p>
                                            </div>

                                            {/* Category Tag */}
                                            <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                                {testimonial.category}
                                            </div>
                                        </div>
                                    </div>
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
