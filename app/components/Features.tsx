"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Award, Users, Rocket, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Features() {
    const t = useTranslations("Features");

    const features = [
        {
            title: t("feature1Title"),
            description: t("feature1Desc"),
            icon: Users,
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            title: t("feature2Title"),
            description: t("feature2Desc"),
            icon: BookOpen,
            bgColor: "bg-teal-50",
            iconColor: "text-teal-600",
        },
        {
            title: t("feature3Title"),
            description: t("feature3Desc"),
            icon: Clock,
            bgColor: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
        {
            title: t("feature4Title"),
            description: t("feature4Desc"),
            icon: Award,
            bgColor: "bg-cyan-50",
            iconColor: "text-cyan-600",
        },
        {
            title: t("feature5Title"),
            description: t("feature5Desc"),
            icon: Rocket,
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Background glowing particles */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-200/30 dark:bg-sky-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t("titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isLastOdd = index === 4 && features.length % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                variants={typeof window !== 'undefined' && window.innerWidth > 768 ? itemVariants : { hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -5, scale: 1.01 } : {}}
                                className={`group relative rounded-2xl bg-white dark:bg-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 ${isLastOdd ? 'lg:col-start-2' : ''}`}
                            >
                                <div className="p-8 h-full flex flex-col">
                                    <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${feature.bgColor} dark:bg-slate-700 transition-colors group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30`}>
                                        <Icon className={`w-7 h-7 ${feature.iconColor} dark:text-teal-400 group-hover:text-teal-600 transform group-hover:scale-110 transition-transform duration-300`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
