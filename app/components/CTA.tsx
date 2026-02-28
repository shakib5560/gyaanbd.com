"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTA() {
    const t = useTranslations("CTA");

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Subtle floating background shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-teal-200/40 dark:bg-teal-700/10 blur-[80px]"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full bg-sky-200/30 dark:bg-sky-700/10 blur-[100px]"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.07)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-700 py-16 px-8 md:px-16 flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl">
                        {t("description")}
                    </p>

                    <form className="w-full max-w-md relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder={t("placeholder")}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full py-4 pl-6 pr-36 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-medium"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 bottom-2 bg-teal-600 hover:bg-teal-700 text-white px-6 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <span className="hidden sm:inline">{t("cta")}</span>
                            <Send className="w-4 h-4 sm:hidden" />
                        </button>
                    </form>

                    <p className="text-slate-400 text-sm mt-6">
                        {t("subtext")}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
