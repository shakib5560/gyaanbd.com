"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function LoginModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenTriggered, setHasBeenTriggered] = useState(false);
    const [isFullyVisible, setIsFullyVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    // For scroll logic
    const initialScrollY = useRef(0);
    // For focus trap
    const modalRef = useRef<HTMLDivElement>(null);
    const prevFocusRef = useRef<HTMLElement | null>(null);

    function handleManualClose() {
        setIsOpen(false);
        setIsFullyVisible(false);
        localStorage.setItem("gyaan_login_closed", "true");
    }

    function handleOpen() {
        setIsOpen(true);
        setIsFullyVisible(false);
    }

    const t = useTranslations("Login");
    const { theme } = useTheme();
    const pathname = usePathname();

    // Determine if we're on the home page
    const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/bn";

    // 1. Check localStorage & handle scroll trigger (70% depth)
    useEffect(() => {
        if (!isHomePage) return;

        const closedMemory = localStorage.getItem("gyaan_login_closed");
        if (closedMemory === "true") {
            // eslint-disable-next-line
            setHasBeenTriggered(true); // Allow floating button to show
        } else {
            const handleScrollTrigger = () => {
                if (hasBeenTriggered) return;

                const scrollPosition = window.scrollY;
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

                // Avoid division by zero on very short pages, or trigger if scrolled > 70%
                if (totalHeight > 0 && (scrollPosition / totalHeight) >= 0.7) {
                    setIsOpen(true);
                    setHasBeenTriggered(true);
                }
            };

            window.addEventListener("scroll", handleScrollTrigger, { passive: true });
            // Check immediately in case they load the page already scrolled down
            handleScrollTrigger();

            return () => window.removeEventListener("scroll", handleScrollTrigger);
        }
    }, [hasBeenTriggered, isHomePage]);

    // 2. Smart Scroll-Based Close Logic
    useEffect(() => {
        if (!isOpen || !isFullyVisible) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Only trigger close on downward scroll > 60px from the initial visible position
            if (currentScrollY > initialScrollY.current + 60) {
                setIsOpen(false);
                setIsFullyVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen, isFullyVisible]);

    // 3. Prevent background scrolling & Manage Focus & ESC key
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            prevFocusRef.current = document.activeElement as HTMLElement;

            // Wait for entrance animation to set initial focus
            const focusTimer = setTimeout(() => {
                if (modalRef.current) {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusableElements.length) {
                        (focusableElements[0] as HTMLElement).focus();
                    }
                }
            }, 100);

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    handleManualClose();
                }

                // Focus trap logic
                if (e.key === "Tab" && modalRef.current) {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusableElements.length === 0) return;

                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
                clearTimeout(focusTimer);
            };
        } else {
            document.body.style.overflow = "unset";
            if (prevFocusRef.current) {
                prevFocusRef.current.focus();
            }
        }
    }, [isOpen]);

    // 4. Subtle Haptic Feedback on Open (Mobile)
    useEffect(() => {
        if (isOpen && typeof navigator !== "undefined" && navigator.vibrate) {
            // Basic rumble pattern to simulate nice pop
            navigator.vibrate(20);
        }
    }, [isOpen]);

    const modalTransition = {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const // cubic-bezier
    };

    if (!isHomePage) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={modalTransition}
                        className="fixed inset-0 z-[100] bg-slate-900/60"
                        onClick={handleManualClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.96, opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ scale: 0.96, opacity: 0, filter: "blur(4px)" }}
                            transition={modalTransition}
                            onAnimationComplete={() => {
                                setIsFullyVisible(true);
                                initialScrollY.current = window.scrollY;
                            }}
                            className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl w-full max-w-[400px] rounded-2xl shadow-2xl overflow-hidden relative pointer-events-auto border border-slate-200/50 dark:border-slate-800/50"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleManualClose}
                                className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
                                aria-label={t("close")}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                {/* Header */}
                                <div className="flex flex-col items-center mb-8">
                                    <div className="relative w-32 h-10 mb-4">
                                        <Image
                                            src={theme === "dark" ? "/logo_for_dark.png" : "/logo_for_light.png"}
                                            alt="Gyaan Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <h2 id="modal-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                        {t("title")}
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        {t("subtitle")}
                                    </p>
                                </div>

                                {/* Social Login Buttons */}
                                <div className="space-y-3 mb-6">
                                    <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-medium py-3 px-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
                                        <Image src="/google-logo.svg" alt="Google" width={24} height={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{t("google")}</span>
                                    </button>

                                    <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
                                        <Image src="/facebook-logo.svg" alt="Facebook" width={24} height={24} className="group-hover:scale-110 transition-transform brightness-0 invert" />
                                        <span>{t("facebook")}</span>
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative flex items-center py-4 mb-2">
                                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                                    <span className="flex-shrink-0 mx-4 text-slate-400 dark:text-slate-500 text-sm font-medium">
                                        {t("or")}
                                    </span>
                                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                                </div>

                                {/* Phone Login */}
                                <div className="space-y-4 mb-2">
                                    <div className="relative flex items-center group">
                                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center pl-4 pr-3 text-slate-700 dark:text-slate-300 font-medium border-r border-slate-200 dark:border-slate-700 z-10 bg-slate-50/50 dark:bg-slate-800/50 rounded-l-xl">
                                            <span className="mr-1 text-lg">🇧🇩</span>
                                            <span>+880</span>
                                        </div>
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                            placeholder={t("phonePlaceholder")}
                                            className="w-full pl-[90px] pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-base"
                                        />
                                    </div>
                                    <button
                                        disabled={!phoneNumber}
                                        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none"
                                    >
                                        {t("phone")}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}

            {/* Floating Reopen Profile Button & Hover Pill */}
            {!isOpen && hasBeenTriggered && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 z-[90]"
                >
                    <div
                        className="relative flex items-center justify-end h-[60px]"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {/* "Join" Hover Pill */}
                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 10, scale: 0.95, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute right-[35px] whitespace-nowrap z-0"
                                >
                                    <button
                                        onClick={handleOpen}
                                        className="bg-white dark:bg-slate-800 backdrop-blur-md pr-[35px] pl-5 py-2.5 rounded-l-full shadow-lg border-y border-l border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-semibold hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
                                    >
                                        Join
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Round Profile Button */}
                        <motion.button
                            onClick={handleOpen}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 group z-10"
                            aria-label="Open Login"
                        >
                            {/* Inner subtle glow */}
                            <div className="absolute inset-0 rounded-full bg-teal-500/0 opacity-0 group-hover:opacity-100 group-hover:bg-teal-500/5 transition-all duration-300"></div>
                            {/* Outer soft shadow glow */}
                            <div className="absolute -inset-1 rounded-full bg-teal-500/20 blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none"></div>

                            {/* Eye-catching subtle pulse ring when not hovered */}
                            {!hovered && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-teal-500/30 dark:border-teal-400/30"
                                    animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", repeatDelay: 1.5 }}
                                />
                            )}

                            <motion.div
                                animate={
                                    hovered
                                        ? { rotate: 5, scale: 1.1 }
                                        : { rotate: [0, -5, 5, -3, 3, 0], y: [0, -2, 2, 0] }
                                }
                                transition={
                                    hovered
                                        ? { duration: 0.2 }
                                        : { repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }
                                }
                            >
                                <User strokeWidth={1.5} className="w-7 h-7 text-slate-700 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors relative z-10" />
                            </motion.div>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
