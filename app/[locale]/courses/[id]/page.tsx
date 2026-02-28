"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
    PlayCircle,
    BookOpen,
    FileText,
    HelpCircle,
    CheckCircle2,
    UploadCloud,
    Clock,
    User,
    Award
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { useCoursesData } from "@/app/lib/useCoursesData";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function CourseDetailsPage() {
    const t = useTranslations("CourseDetailsPage");
    const { id } = useParams();
    const locale = useLocale();
    const [activeTab, setActiveTab] = useState("overview");
    const allCourses = useCoursesData();

    // Find the specific course
    const course = allCourses.find(c => c.id.toString() === id);

    if (!course) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                    <Link href={`/${locale}/courses`}>
                        <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all">
                            Back to Courses
                        </button>
                    </Link>
                </div>
            </main>
        );
    }

    // Merge static mock data with dynamic course data
    const courseMock = {
        title: course.title,
        instructor: "Anwar Hossain",
        thumbnail: "/course_illustration.png",
        level: course.displayLevel,
        duration: "12 hours",
        lessons: 24,
        description: course.description,
        whatYouWillLearn: [
            "Mastering complex reading strategies to skim and scan efficiently.",
            "Structuring high-scoring essays for Task 1 and Task 2.",
            "Developing fluency and coherence for the Speaking module.",
            "Identifying traps and distractors in the Listening test."
        ],
        playlist: [
            { id: 1, title: "Introduction to IELTS Format", duration: "15:00", completed: true },
            { id: 2, title: "Listening: Section 1 Strategies", duration: "25:30", completed: true },
            { id: 3, title: "Listening: Map Labelling", duration: "18:45", completed: false },
            { id: 4, title: "Reading: True/False/Not Given", duration: "32:10", completed: false },
            { id: 5, title: "Reading: Matching Headings", duration: "28:00", completed: false },
            { id: 6, title: "Writing Task 1: Bar Charts", duration: "40:15", completed: false },
            { id: 7, title: "Writing Task 1: Line Graphs", duration: "35:20", completed: false },
            { id: 8, title: "Writing Task 2: Opinion Essays", duration: "45:00", completed: false },
        ]
    };

    const tabs = [
        { id: "overview", label: t("overviewTab"), icon: <BookOpen className="w-4 h-4" /> },
        { id: "assignments", label: t("assignmentsTab"), icon: <FileText className="w-4 h-4" /> },
        { id: "quizzes", label: t("quizzesTab"), icon: <HelpCircle className="w-4 h-4" /> },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-teal-500/30 selection:text-white transition-colors duration-300 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{courseMock.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-teal-500" /> {courseMock.instructor}</span>
                            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-sky-500" /> {courseMock.duration}</span>
                            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-800"><Award className="w-4 h-4" /> {courseMock.level}</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column: Video & Tabs */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Video Player Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 relative shadow-2xl border border-slate-200 dark:border-slate-800 group"
                            >
                                <Image
                                    src={courseMock.thumbnail}
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 rounded-full bg-teal-500/90 text-white flex items-center justify-center backdrop-blur-sm hover:scale-110 hover:bg-teal-500 transition-all duration-300 shadow-[0_0_30px_rgba(45,212,191,0.5)]">
                                        <PlayCircle className="w-10 h-10 ml-1" />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-teal-500 w-1/3 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Tabs Navigation */}
                            <div className="border-b border-slate-200 dark:border-slate-800">
                                <nav className="flex gap-6 overflow-x-auto no-scrollbar" aria-label="Tabs">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={cn(
                                                "whitespace-nowrap py-4 px-2 border-b-2 font-bold text-sm sm:text-base transition-all flex items-center gap-2",
                                                activeTab === tab.id
                                                    ? "border-teal-500 text-teal-600 dark:text-teal-400"
                                                    : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                                            )}
                                        >
                                            {tab.icon}
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Tab Content Area */}
                            <div className="min-h-[300px] relative">
                                <AnimatePresence mode="wait">

                                    {/* OVERVIEW TAB */}
                                    {activeTab === "overview" && (
                                        <motion.div
                                            key="overview"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-xl font-bold mb-3">{t("courseDescriptionTitle")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {courseMock.description}
                                                </p>
                                            </div>

                                            <div className="bg-slate-100/50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                                                <h3 className="text-xl font-bold mb-4">{t("whatYouWillLearn")}</h3>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {courseMock.whatYouWillLearn.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                                            <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ASSIGNMENTS TAB */}
                                    {activeTab === "assignments" && (
                                        <motion.div
                                            key="assignments"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                                    <FileText className="text-sky-500" /> {t("submitAssignmentTitle")}
                                                </h3>

                                                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group mb-6">
                                                    <UploadCloud className="w-12 h-12 text-slate-400 group-hover:text-teal-500 mx-auto mb-4 transition-colors" />
                                                    <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{t("assignmentUploadLabel")}</p>
                                                    <p className="text-xs text-slate-500">(PDF, DOCX, ZIP up to 50MB)</p>
                                                </div>

                                                <div className="space-y-2 mb-6">
                                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("assignmentNotesLabel")}</label>
                                                    <textarea
                                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 mb-4 resize-none"
                                                        rows={4}
                                                        placeholder="Add any specific comments for the evaluator..."
                                                    />
                                                </div>

                                                <button className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-teal-600/25 active:scale-[0.98]">
                                                    {t("assignmentSubmitBtn")}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* QUIZZES TAB */}
                                    {activeTab === "quizzes" && (
                                        <motion.div
                                            key="quizzes"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                                                <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-teal-200 dark:border-teal-800">
                                                    <HelpCircle className="w-10 h-10" />
                                                </div>

                                                <h3 className="text-2xl font-bold mb-3">{t("quizReadyTitle")}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                                                    Test your knowledge on the concepts covered in the first module. The quiz consists of 15 multiple-choice questions.
                                                </p>

                                                <button className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full transition-transform hover:scale-105 shadow-xl">
                                                    {t("quizStartBtn")}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>

                        </div>

                        {/* Right Column: Interactive Playlist Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden sticky top-24"
                            >
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-between items-center">
                                    <h3 className="font-bold text-lg flex items-center gap-2">
                                        <PlayCircle className="text-teal-500" /> {t("playlistTab")}
                                    </h3>
                                    <span className="text-xs font-bold px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-md">
                                        2 / {courseMock.lessons}
                                    </span>
                                </div>

                                <div className="max-h-[500px] overflow-y-auto no-scrollbar">
                                    <div className="p-2">
                                        {courseMock.playlist.map((lesson, idx) => (
                                            <button
                                                key={lesson.id}
                                                className={cn(
                                                    "w-full text-left p-4 rounded-xl flex items-start gap-4 transition-all mb-1 group",
                                                    idx === 2
                                                        ? "bg-teal-50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-800/50 shadow-sm"
                                                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent"
                                                )}
                                            >
                                                <div className="mt-1 shrink-0">
                                                    {lesson.completed ? (
                                                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                                                    ) : idx === 2 ? (
                                                        <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center">
                                                            <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                                        </div>
                                                    ) : (
                                                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-slate-400 transition-colors" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className={cn(
                                                        "font-medium text-sm leading-tight mb-1 transition-colors",
                                                        idx === 2
                                                            ? "text-teal-700 dark:text-teal-300 font-bold"
                                                            : lesson.completed
                                                                ? "text-slate-600 dark:text-slate-400"
                                                                : "text-slate-800 dark:text-slate-200"
                                                    )}>
                                                        {idx + 1}. {lesson.title}
                                                    </p>
                                                    <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                                        <PlayCircle className="w-3 h-3" /> {lesson.duration}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                                    <button className="w-full py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                                        {t("enrollNow")}
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
