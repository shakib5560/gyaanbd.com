"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
    const { theme } = useTheme();
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <div className="relative w-32 h-10">
                                <Image
                                    src={theme === "dark" ? "/logo_for_dark.png" : "/logo_for_light.png"}
                                    alt="Gyaan Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </a>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            {t("description")}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white hover:-translate-y-1 transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">{t("quickLinks")}</h4>
                        <ul className="space-y-4">
                            {[
                                { key: 'home', label: t('home') },
                                { key: 'whyGyaan', label: t('whyLexicon') },
                                { key: 'courses', label: t('courses') },
                                { key: 'testimonials', label: t('testimonials') },
                                { key: 'contact', label: t('contact') }
                            ].map((link) => (
                                <li key={link.key}>
                                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-teal-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Courses */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">{t("popularCourses")}</h4>
                        <ul className="space-y-4">
                            {[
                                { key: 'course1', label: t('course1') },
                                { key: 'course2', label: t('course2') },
                                { key: 'course3', label: t('course3') },
                                { key: 'course4', label: t('course4') }
                            ].map((course) => (
                                <li key={course.key}>
                                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-teal-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {course.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">{t("support")}</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="text-teal-600 dark:text-teal-400">{t("email")}:</span> hello@gyaanbd.com
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-teal-600 dark:text-teal-400">{t("phone")}:</span> +880 1XXX-XXXXXX
                            </li>
                            <li className="pt-2">
                                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{t("privacy")}</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{t("terms")}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <p className="text-slate-900 dark:text-white font-bold text-sm tracking-wide uppercase">{t("paymentMethods")}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                            {/* bKash */}
                            <div className="h-8 w-20 relative bg-white rounded-md p-1 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src="https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg" alt="bKash" className="w-full h-full object-contain" />
                            </div>
                            {/* Nagad */}
                            <div className="h-8 w-20 relative bg-white rounded-md p-1 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="Nagad" className="w-full h-full object-contain" />
                            </div>
                            {/* Rocket */}
                            <div className="h-8 w-20 relative bg-white rounded-md p-1 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Rocket_mobile_banking_logo.svg/1200px-Rocket_mobile_banking_logo.svg.png" alt="Rocket" className="w-full h-full object-contain" />
                            </div>
                            {/* Cards */}
                            <div className="h-8 w-12 relative bg-white rounded-md p-1 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="Visa" className="w-full h-full object-contain" />
                            </div>
                            <div className="h-8 w-12 relative bg-white rounded-md p-1 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="Mastercard" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-right">
                            &copy; {currentYear} Gyaan. {t("rights")}
                        </p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <motion.p whileHover={{ color: "#2dd4bf" }} className="cursor-pointer">{t("madeWith")}</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
