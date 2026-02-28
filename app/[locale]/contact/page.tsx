"use client";

import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Phone,
    Facebook,
    Youtube,
    Linkedin,
    Twitter,
    Mail,
    MessageCircle,
    Send
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

export default function ContactPage() {
    const t = useTranslations("ContactPage");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    const contactMethods = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: t("phoneLabel"),
            value: "01990668674",
            href: "tel:01990668674",
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-500/10"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: t("whatsappLabel"),
            value: "01990668674",
            href: "https://wa.me/8801990668674",
            color: "text-green-500",
            bg: "bg-emerald-50 dark:bg-emerald-500/10"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: t("emailLabel"),
            value: "support@gyaanbd.com",
            href: "mailto:support@gyaanbd.com",
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-500/10"
        }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook", hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
        { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube", hover: "hover:bg-red-600 hover:text-white hover:border-red-600" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "X (Twitter)", hover: "hover:bg-sky-500 hover:text-white hover:border-sky-500" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", hover: "hover:bg-blue-700 hover:text-white hover:border-blue-700" },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-teal-500/30 selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                            <span className="block text-slate-900 dark:text-white mb-2">{t("heroTitlePrefix")}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-400">{t("heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t("heroSubtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t("contactInfoTitle")}</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {t("contactInfoDesc")}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactMethods.map((method, idx) => (
                                    <a
                                        key={idx}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-md border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all group"
                                    >
                                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110", method.bg, method.color)}>
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">{method.title}</p>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white">{method.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                                <h3 className="text-xl font-bold mb-6">{t("socialTitle")}</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            aria-label={social.label}
                                            className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all duration-300 shadow-sm",
                                                social.hover
                                            )}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                {/* Decorative elements inside form */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

                                <h2 className="text-3xl font-bold mb-8 relative z-10">{t("formTitle")}</h2>

                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("nameLabel")} *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                placeholder={t("namePlaceholder")}
                                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("emailFormLabel")} *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder={t("emailPlaceholder")}
                                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("subjectLabel")} *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            required
                                            placeholder={t("subjectPlaceholder")}
                                            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("messageLabel")} *</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            placeholder={t("messagePlaceholder")}
                                            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300",
                                            isSubmitting
                                                ? "bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
                                                : "bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-teal-600/25 hover:-translate-y-0.5"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            t("submittingButton")
                                        ) : (
                                            <>
                                                {t("submitButton")}
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
