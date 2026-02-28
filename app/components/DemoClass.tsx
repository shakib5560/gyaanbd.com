"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, MonitorPlay, Video } from "lucide-react";

export default function DemoClass() {
    const t = useTranslations("DemoClass");

    const benefits = [
        {
            icon: <MonitorPlay className="w-6 h-6 text-teal-600" />,
            title: t("benefit1Title"),
            description: t("benefit1Desc")
        },
        {
            icon: <Video className="w-6 h-6 text-sky-600" />,
            title: t("benefit2Title"),
            description: t("benefit2Desc")
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="flex-1">
                        <div className="inline-block bg-teal-100/50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                            {t("tag")}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {t("title")}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
                            {t("description")}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-600"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-teal-600/25 transition-all group">
                            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            {t("cta")}
                        </button>
                    </div>

                    <div className="w-full lg:w-[45%] relative">
                        <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-2xl bg-teal-50 dark:bg-teal-950/30">
                            {/* Decorative background abstract circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/40 dark:bg-teal-800/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200/40 dark:bg-sky-800/30 rounded-full blur-3xl" />

                            <img
                                src="/bangla.png"
                                alt="Demo Class"
                                className="object-cover w-full h-full p-4 rounded-[3rem]"
                            />

                            {/* Play Button Overlay */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                            >
                                <div className="w-20 h-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <MonitorPlay className="w-8 h-8 ml-1" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
