"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: t("q1"), a: t("a1") },
        { q: t("q2"), a: t("a2") },
        { q: t("q3"), a: t("a3") },
        { q: t("q4"), a: t("a4") },
        { q: t("q5"), a: t("a5") },
        { q: t("q6"), a: t("a6") },
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t("title")}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={false}
                            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "border-teal-200 dark:border-teal-500/50 shadow-md shadow-teal-50 dark:shadow-teal-900/20"
                                : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className={`font-semibold text-lg pr-4 transition-colors ${openIndex === index
                                    ? "text-teal-700 dark:text-teal-400"
                                    : "text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-white"
                                    }`}>
                                    {faq.q}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                        ? "bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                        }`}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden bg-white dark:bg-slate-900"
                                    >
                                        <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
