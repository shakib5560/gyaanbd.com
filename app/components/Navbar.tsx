"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: t("home"), href: `/${locale}` },
        { name: t("whyLexicon"), href: `/${locale}/why-gyaan` },
        { name: t("courses"), href: `/${locale}/courses` },
        { name: t("testimonials"), href: `/${locale}/testimonials` },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-4",
                !scrolled && "md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:shadow-none md:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link href={`/${locale}`} className="flex items-center gap-2">
                            <div className="relative w-32 h-10">
                                <Image
                                    src={theme === "dark" ? "/logo_for_dark.png" : "/logo_for_light.png"}
                                    alt="Gyaan Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                            className="flex space-x-8"
                        >
                            {navLinks.map((link, index) => (
                                <Link key={link.name} href={link.href} passHref legacyBehavior>
                                    <motion.a
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-semibold text-sm"
                                    >
                                        {link.name}
                                    </motion.a>
                                </Link>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3"
                        >
                            <LanguageSwitcher />

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700"
                                aria-label="Toggle theme"
                                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                            </button>

                            <Link href={`/${locale}/contact`}>
                                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                                    {t("contact")}
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-3">
                        <LanguageSwitcher />

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-3">
                                <Link href={`/${locale}/contact`}>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
                                    >
                                        {t("contact")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
