"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const switchLocale = () => {
        const nextLocale = currentLocale === "bn" ? "en" : "bn";

        let newPath = pathname;
        if (pathname === `/${currentLocale}` || pathname.startsWith(`/${currentLocale}/`)) {
            newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
        } else {
            newPath = `/${nextLocale}${pathname}`;
        }

        startTransition(() => {
            router.replace(newPath);
        });
    };

    return (
        <button
            onClick={switchLocale}
            disabled={isPending}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-2 rounded-full font-medium text-sm"
        >
            <Languages size={18} />
            <span>{currentLocale === "bn" ? "English" : "বাংলা"}</span>
        </button>
    );
}
